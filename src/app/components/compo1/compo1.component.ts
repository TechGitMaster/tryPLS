import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  title!: Observable<any>;
  subs!: Subscription;

  
  constructor(public http: HttpClient, public activated: ActivatedRoute){}

  ngOnInit(): void {
    this.subs = this.http.get('/trys').subscribe((data) => {
      console.log(this.activated.snapshot.paramMap.get('id'));
      this.subs.unsubscribe();
      this.subs = this.activated.data.subscribe((datas) => {
        this.subs.unsubscribe();
        console.log(datas);
        setTimeout(() => {
          this.title = new Observable((obs) => {
            obs.next(data);
          });
        }, 2000);
      });
    });
  }

}
