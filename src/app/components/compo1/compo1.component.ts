import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { ServiceService } from 'src/app/serV/service.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {


  
  constructor(public http: HttpClient, public serv: ServiceService){}

  ngOnInit(): void {
    this.serv.listen().subscribe((data) => {
      console.log(data);
    });
  }

}
