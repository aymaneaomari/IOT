#include<ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include "DHT.h"
#define DHTTYPE DHT11
#define LEDonBoard 2

WiFiClient client;
HTTPClient http; 
int httpCode,end_string,begin_string;
void ConnecTOWifi(void);
String ReceiveGETRequestFromChannel1(int fieldno);
String response,result,url;
float resultData;
String status;

int sensorReading = 0;
String apiKey = "3NER1B35AU8848V4";
const char* server = "api.thingspeak.com";
const int DHTPin = 2;
DHT dht(DHTPin, DHTTYPE);

const int pompe=5;

void setup() 
{
  pinMode(pompe,OUTPUT);
  Serial.begin(115200);
  ConnecTOWifi();
}

void loop()
{
        //read the status of the plant
        status=ReceiveGETRequestFromChannel1(4);
        Serial.println(status);
        if(status=="1"){
          digitalWrite(pompe,HIGH);
          }
         else{
          digitalWrite(pompe,LOW);
          }
        
        //send the data of status of the plant
        float h = dht.readHumidity();
        float t = dht.readTemperature();
        float sensorReading = analogRead(A0);
       
        if (isnan(h) || isnan(t)|| isnan(sensorReading)) {
          Serial.println("Failed to read from DHT sensor!");
          return;
        }
        if (client.connect(server, 80)) {
          String postStr = apiKey;
          postStr +="&field1=";
          postStr += String(t);
          postStr +="&field2=";
          postStr += String(h);
          postStr +="&field3=";
          postStr += String(sensorReading);
          postStr += "\r\n\r\n";
          client.print("POST /update HTTP/1.1\n");
          client.print("Host: api.thingspeak.com\n");
          client.print("Connection: close\n");
          client.print("X-THINGSPEAKAPIKEY: "+apiKey+"\n");
          client.print("Content-Type: application/x-www-form-urlencoded\n");
          client.print("Content-Length: ");
          client.print(postStr.length());
          client.print("\n\n");
          client.print(postStr);
          Serial.print("Temperature: ");
          Serial.print(t);
          Serial.print(" degrees Celcius, Humidity: ");
          Serial.print(h);
      
          Serial.print("humidite de sol:");
          Serial.print(sensorReading);
          Serial.println("%. Send to Thingspeak.");
        }
       
        Serial.println("Waiting...");
       
        digitalWrite(LEDonBoard, LOW);
        delay(250);
        digitalWrite(LEDonBoard, HIGH);
        delay(750);
        
}
String ReceiveGETRequestFromChannel1(int fieldno)
{
          url = "http://api.thingspeak.com/channels/2464936/fields/";
          url = url + fieldno;
          url = url + ".json?";
        http.begin(client,url); 
        
        Serial.print("Waiting for response\n");
        httpCode = http.GET();
        if(httpCode > 0) 
        { 
          Serial.println("Sensor data Read sucessfully");   
          response = http.getString();
          int lastIndex = response.lastIndexOf("field4");
          String substring = response.substring(lastIndex);
          int colonIndex = substring.indexOf(':');
          int commaIndex = substring.indexOf(',');
          String fieldValue = substring.substring(colonIndex + 1, commaIndex);
          fieldValue=fieldValue.substring(fieldValue.indexOf('"'), fieldValue.lastIndexOf('"')+1);
          return fieldValue;
          }
        else{    Serial.println("Failed to connect to server");         }            
        http.end();   
}

void ConnecTOWifi()
{
  WiFi.mode(WIFI_STA); // nodemcu as station
  WiFi.begin("TP-LINK_4220A8","Nissfam2001&&");
  Serial.print("connecting to wifi");
  while(WiFi.status() != WL_CONNECTED)
  {
    Serial.print('.');
    delay(200);
  }
  Serial.print("IP Address:");
  Serial.println(WiFi.localIP());
  Serial.print("MacAddress:");
  Serial.println(WiFi.macAddress());
}
