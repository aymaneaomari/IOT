import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../Services/notification.service';
import { ControlService } from '../Services/control.service';
import { WhatsappService } from '../Services/whatsapp.service';

enum danger{
  low="low",mid="mid",high="high"
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent implements OnInit {
  //Propreties
notificationMessage:string;
dangerLevel:danger;
//constructor
constructor(private notif:NotificationService,private control:ControlService){}
status="OFF";

ngOnInit(){

  console.log(`last humidity ${this.notif.getLastHumidityValue()} and 
  last temperature ${this.notif.getLastTemperatureValue()} and
  last soil humidity ${this.notif.getLastSoilHumidityValue()}
  `)
      if (this.notif.getLastTemperatureValue()> 30 &&
          this.notif.getLastHumidityValue()>80 && this.notif.getLastSoilHumidityValue()>700 ) {
           this.notificationMessage="the plant is good"
           this.dangerLevel=danger.low;
      } else if (this.notif.getLastTemperatureValue()< 10 ||
                 this.notif.getLastHumidityValue()<30 ||
                 this.notif.getLastSoilHumidityValue()<200) {
            this.notificationMessage="the plant needs some water"
            this.dangerLevel=danger.mid
            

      }
      else if( this.notif.getLastTemperatureValue()>30 || this.notif.getLastHumidityValue()>80 || this.notif.getLastSoilHumidityValue()>700){
            this.notificationMessage="the plant needs a lot water"
            this.dangerLevel=danger.high
            
      }
      else {
           this.notificationMessage="the plant is good hello"
           this.dangerLevel=danger.low
           
      }
}
updateStatus(){
this.control.updateData()
this.status="ON"
setTimeout(()=>{
  this.status="OFF"
},5000)
}

}
