import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashesComponent } from './dashes/dashes.component';
import { ControlsComponent } from './controls/controls.component';

import { LineChartComponent, LineChartModule } from '@swimlane/ngx-charts';
import path from 'path';
import { HumidityLineChartComponent } from './humidity-line-chart/humidity-line-chart.component';
import { SoilHumidityComponent } from './soil-humidity/soil-humidity.component';
import { TemperatureLineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  {path:'',redirectTo:'Dashes/',pathMatch:'full'},
  {path:'Dashes',component:DashesComponent,children:[
    {path:'Temperature',component:TemperatureLineChartComponent},
    {path:'AirHumidity',component:HumidityLineChartComponent},
    {path:'SoilHumidity',component:SoilHumidityComponent}
]},
  {path:"Controls",component:ControlsComponent},
  {path:"**",redirectTo:'Dashes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
