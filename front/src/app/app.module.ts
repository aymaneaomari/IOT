import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureLineChartComponent } from './line-chart/line-chart.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NavbarComponent } from './navbar/navbar.component';
import { DashesComponent } from './dashes/dashes.component';
import { ControlsComponent } from './controls/controls.component';
import { HumidityLineChartComponent } from './humidity-line-chart/humidity-line-chart.component';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { HumidityService } from './Services/humidity.service';
import { TemperatureService } from './Services/temperature.service';
import { NotificationService } from './Services/notification.service';
import { InformationsComponent } from './informations/informations.component';
import { SoilHumidityComponent } from './soil-humidity/soil-humidity.component';
import { SoilHumidiyService } from './Services/soil-humidiy.service';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureLineChartComponent,
    NavbarComponent,
    DashesComponent,
    ControlsComponent,
    HumidityLineChartComponent,
    InformationsComponent,
    SoilHumidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  providers: [
    provideClientHydration(),provideHttpClient(withFetch())
    ,HumidityService,TemperatureService,NotificationService,SoilHumidiyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
