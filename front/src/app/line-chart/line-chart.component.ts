import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { TemperatureService } from '../Services/temperature.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class TemperatureLineChartComponent {
  unity:string="";
  value:number=0;
  date:string="";
  
  
  multi: any[];
  view :[number,number] = [500,400];

  // options
  legendPosition=LegendPosition.Right
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Tempeature';
  yAxisLabel: string = 'Time';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#ed871a', '#E44D25']
  };

  hide:boolean=false;

  constructor(private temp:TemperatureService) {
    temp.getdata().subscribe((data)=>{
        this.multi=data
      
    })
  }

  onSelect(data): void {
    let clickedData= JSON.parse(JSON.stringify(data));
    this.unity=clickedData.series;
    this.value=clickedData.value;
    this.date=clickedData.name;

  }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }
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
