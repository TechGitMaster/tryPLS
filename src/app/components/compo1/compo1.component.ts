import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { ServiceService } from 'src/app/serV/service.service';
import { io } from 'socket.io-client';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {
  
  constructor(public http: HttpClient, public serv: ServiceService){}

  socket!: any;

  ngOnInit(): void {
    this.socket = io('https://angularsts.herokuapp.com', { transports: ["websocket"] });

    var interval = setInterval(() => {
      if(localStorage.getItem('id')?.toString() != null){
        this.objectBeingListen().subscribe((data) => console.log(data));
        clearInterval(interval);
      }else{
        console.log('asd');
      }
    }, 1000);
  }

  objectBeingListen(): Observable<any>{
    return new Observable((obs) => {
      this.socket.on(localStorage.getItem('id')?.toString(), (data: any) => {
        obs.next(data);
      });
    });
  }

  sendData(): void{
    var docL = document.querySelector('.input2');
    var conL = <HTMLInputElement>docL;

    var docM = document.querySelector('.input3');
    var conM = <HTMLInputElement>docM;

    var objects = {
      listen: conL.value.toString(),
      message: conM.value.toString()
    };

    this.socket.emit('send', objects);
  }

  changeSession(): void{
    var doc = document.querySelector('.input1');
    var con = <HTMLInputElement>doc;

    var httpParams = new HttpParams();
    httpParams.set('data', con.value.toString());
    this.http.get('/sessionId', { params: httpParams });

    localStorage.setItem('id', con.value);
  }
}
