
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { HumidityService } from '../Services/humidity.service';

@Component({
  selector: 'app-humidity-line-chart',
  templateUrl: './humidity-line-chart.component.html',
  styleUrl: './humidity-line-chart.component.css'
})
export class HumidityLineChartComponent {



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
 xAxisLabel: string = 'Air Humidity';
 yAxisLabel: string = 'Time';
 timeline: boolean = true;

 colorScheme = {
   domain: ['#03fcfc']
 };

 hide:boolean;
 constructor(private hum:HumidityService) {
  this.hum.getdata().subscribe((data)=>{
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
