import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  
  constructor(private http:HttpClient) { }
  updateData(){
  
  // Construct the ThingSpeak update URL
  const urlON = `https://api.thingspeak.com/update?api_key=OLESTKVEWN1V5VYJ&field1=1`;
  this.http.get(urlON).subscribe(data=>{
    console.log(data)
    console.log('on')
  })
  const urlOff = `https://api.thingspeak.com/update?api_key=OLESTKVEWN1V5VYJ&field1=0`;
  setTimeout(() => {
    this.http.get(urlOff).subscribe((data)=>{console.log(data)})
    console.log('off')
  }, 16000);
  }
 turnoff(){
    const urlOff = `https://api.thingspeak.com/update?api_key=OLESTKVEWN1V5VYJ&field1=0`;
    setTimeout(() => {
      this.http.get(urlOff).subscribe(()=>{})
      console.log('off')})
    
}}
