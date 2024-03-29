import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TemperatureService  {
  private dataT=[]
  constructor(private http:HttpClient) { 
     this.http.get("http://localhost:5000/temperatureValues").pipe(
      map(data=>{
        let newdata = []
        let celicius={
          "name": "Celicius",
          "series": [
          ]
        }
        
        let farad={
          "name": "Farad",
          "series": [
          ]
        }
        
        for(let key of data['data']){
           let date=key['date']
           let value=key['value']
           let id=key['id']
        celicius.series.push(
           {"name" : date,"value":value
          }
          )}

        for(let key of data['data']){
          let value=(key['value']*1.8)+32
          let date=key['date']
          let id=key['id']
             farad.series.push(
              {"name" : date,"value":value
            }
             )
        }
        newdata.push(celicius);
        newdata.push(farad);
        return newdata; 
        
        
      })
     ).subscribe(
      data=>{
        this.dataT=data
      }
     )
  }
  private obs=new Observable<any[]>(observer=>{
      observer.next(this.dataT)
  })
  getdata(){
    return this.obs;
  }
}
