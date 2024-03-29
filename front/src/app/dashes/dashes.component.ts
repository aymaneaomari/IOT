import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HumidityService } from '../Services/humidity.service';
import { TemperatureService } from '../Services/temperature.service';
import { SoilHumidiyService } from '../Services/soil-humidiy.service';

@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrl: './dashes.component.css'
})
export class DashesComponent implements OnInit{
header:string="";
//this is for the height and width of  the temperature lineChart
tempLineChart:boolean=false;
humidityLineChart:boolean=false;
soilHumidityLineChart:boolean=false;

constructor(private Route:ActivatedRoute,
  private rout:Router,
  private humidity:HumidityService,
  private temperature:TemperatureService,
  private soilHumidity:SoilHumidiyService){}

ngOnInit(){
  


   this.rout.navigate(['/Dashes',"Temperature"])
   
}

}
