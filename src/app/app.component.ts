import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data!: string;
  constructor(public router: Router){}

  ngOnInit(): void {
    this.data = 'hello';
    this.router.navigate([`/compo1/${this.data}`]);
  }
}
