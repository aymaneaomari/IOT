import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  disp:boolean=true;
  Logo="../../assets/images/IrrigationLogo.png"
  onClick(){
    this.disp=!this.disp
  }
}
