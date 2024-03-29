import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { SoilHumidiyService } from '../Services/soil-humidiy.service';

@Component({
  selector: 'app-soil-humidity',
  templateUrl: './soil-humidity.component.html',
  styleUrl: './soil-humidity.component.css'
})
export class SoilHumidityComponent {
  unity:string="";
  value:number=0;
  date:string="";
//the multi is for the data that gonna be showed in the lineChart
 multi: any[];
//the view is for the size of the LineChart
width=500;
height=400;
 view :[number,number] = [this.width,this.height];

 // options
 legendPosition=LegendPosition.Below
 legend: boolean = false;
 showLabels: boolean = true;
 animations: boolean = true;
 xAxis: boolean = true;
 yAxis: boolean = true;
 showYAxisLabel: boolean = true;
 showXAxisLabel: boolean = true;
 xAxisLabel: string = 'Soil Humidity';
 yAxisLabel: string = 'Time';
 timeline: boolean = true;

 colorScheme = {
   domain: ['#03fcfc']
 };

 hide:boolean;
 constructor(private soilService:SoilHumidiyService) {
  Object.assign(this, {  });
  soilService.getdata().subscribe((data)=>{
    this.multi=data
  })
   
 }

//the logic used inside the ngOnInit is for fiting the data from the humodity service 



 onSelect(data): void {
  let clickedData= JSON.parse(JSON.stringify(data));
  this.unity=clickedData.series;
  this.value=clickedData.value;
  this.date=clickedData.name;
}

//  onActivate(data): void {
//    console.log('Activate', JSON.parse(JSON.stringify(data)));
//  }

//  onDeactivate(data): void {
//    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
//  }
onHide(event){
  this.hide=event
  if(event==true){
    this.view=[800,400]
  }
  else{
   this.view=[500,400]
  }
}
}
