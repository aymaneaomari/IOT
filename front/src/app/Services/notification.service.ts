import { Injectable } from '@angular/core';
import { HumidityService } from './humidity.service';
import { TemperatureService } from './temperature.service';

import { forkJoin } from 'rxjs';
import { SoilHumidiyService } from './soil-humidiy.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  lastHumidityValue:number;
  lastTemperatureValue:number;
  lastSoilHumidityValue:number;
  constructor(private humidity: HumidityService, private temperature: TemperatureService,private soil:SoilHumidiyService) {
   this.humidity.getdata().subscribe(data=>{
      let lastIndex=data[0].series.length
      this.lastHumidityValue=data[0].series[lastIndex-1].value
   })
   this.temperature.getdata().subscribe(data=>{
    let lastIndex=data[0].series.length
    this.lastTemperatureValue=data[0].series[lastIndex-1].value
 })
    this.soil.getdata().subscribe(data=>{
      let lastIndex=data[0].series.length
      this.lastSoilHumidityValue=data[0].series[lastIndex-1].value
    })
    // forkJoin([
    //   this.humidity.getdata(),
    //   this.temperature.getdata()
    // ]).subscribe(([humidityData, temperatureData]) => {
    //   const lastHumidityIndex = humidityData[0].series.length - 1;
    //   const lastTemperatureIndex = temperatureData[0].series.length - 1;

    //   if (temperatureData[0].series[lastTemperatureIndex].value> 20 &&
    //       humidityData[0].series[lastHumidityIndex].value < 30) {
    //     this.notification.setDangerLevel(danger.high)
    //     this.notification.setMessage("The plant needs a lot of water")
    //   } else if (temperatureData[0].series[lastTemperatureIndex].value> 20 &&
    //              temperatureData[0].series[lastTemperatureIndex].value < 30 &&
    //              humidityData[0].series[lastHumidityIndex].value  < 30 &&
    //              humidityData[0].series[lastHumidityIndex].value  > 20) {

    //     this.notification.setMessage( "The plant needs some water")
    //     this.notification.setDangerLevel(danger.mid)
    //   } else {
    //     this.notification.setMessage("The plant is good")
    //     this.notification.setDangerLevel(danger.low)
    //   }
    // })
    // this part is just for testing
    // let lastHumidityValue;
    // let lastTemperatureValue;
    // let date;
    // this.humidity.getdata().subscribe(d=>{
    //   console.log(d)
    //   let lastIndex=d[0].series.length
    //   lastHumidityValue=d[0].series[lastIndex].value
    // })
    // this.temperature.getdata().subscribe(d=>{
    //   let lastIndex=d[0].series.length
    //   lastTemperatureValue=d[0].series[lastIndex].value
    // })
  }
getLastHumidityValue(){
  return this.lastHumidityValue
}
getLastTemperatureValue(){
  return this.lastTemperatureValue
}
getLastSoilHumidityValue(){
  return this.lastSoilHumidityValue
}


}
