import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoilHumidiyService {
  dataH=[]
  constructor(private http:HttpClient) { 
    this.http.get("http://localhost:5000/soilHumidityValues").pipe(
     map(data=>{
       let newdata = []
       let Humidity={
         "name": "soil humidity",
         "series": [
         ]
       }
       for(let key of data['data']){
        let date=key['date']
        let value=key['value']
       Humidity.series.push(
          {"name" :date,"value":Number(value)
         }
         )}
       newdata.push(Humidity);
       return newdata; 
       
     })
    ).subscribe(
     (data)=>{
       this.dataH=data
     },error=>{
      console.log(error)
     },()=>{
      console.log(
        'the process is completed'
      )
     }
    )
 }
 private obs=new Observable<any[]>(observer=>{
    observer.next(this.dataH)
})
 getdata(){
    return this.obs;
 }

}
