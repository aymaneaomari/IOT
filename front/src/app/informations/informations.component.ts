import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

enum displayStatus{
  notHided='Hide',Hided='Show informations'
}

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.css'
})

export class InformationsComponent {
@Input()  unity:string="";
@Input() value:number=0;
@Input() date:string="";
@Output() hideEvent=new EventEmitter<boolean>()

hide:boolean=false;
hideStatus=displayStatus.notHided;

Onclick(){
this.hide=!this.hide
if(this.hideStatus==displayStatus.notHided){
  this.hideStatus=displayStatus.Hided
}
else{
  this.hideStatus=displayStatus.notHided
}
  this.hideEvent.emit(this.hide)
}
  
  
}
