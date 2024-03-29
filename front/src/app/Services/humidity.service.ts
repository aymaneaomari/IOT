import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HumidityService {
dataH=[]
  constructor(private http:HttpClient) { 
    this.http.get("http://localhost:5000/humidityValues").pipe(
     map(data=>{
       let newdata = []
       let Humidity={
         "name": "Air Humidity",
         "series": [
         ]
       }
       for(let key of data['data']){
        let date=key['date']
        let value=key['value'] 
       Humidity.series.push(
          {"name" :date,"value":value
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
