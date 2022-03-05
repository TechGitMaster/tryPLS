import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  title!: Observable<any>;
  subs!: Subscription;

  
  constructor(public http: HttpClient){}

  ngOnInit(): void {
    this.subs = this.http.get('/api/trys').subscribe((data) => {
      console.log(data);
      setTimeout(() => {
        this.title = new Observable((obs) => {
          obs.next(data);
          this.subs.unsubscribe();
        });
      }, 2000);
    });
  }

}
