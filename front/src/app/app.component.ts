import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NotificationService } from './Services/notification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  theUrl:String;
  constructor(private route:ActivatedRoute,private rout:Router){}
  ngOnInit(){

  }
}
