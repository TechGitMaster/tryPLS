import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title!: Observable<any>;
  subs!: Subscription;

  constructor(public http: HttpClient){}

  ngOnInit(): void {
    this.subs = this.http.get('/trys').subscribe((data) => {
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
