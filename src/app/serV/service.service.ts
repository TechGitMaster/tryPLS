import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  socket!: any;

  constructor() { 
    this.socket = io('/');
  }

  listen(): Observable<any>{
    return new Observable((obs) => {
      this.socket.on('test', (data: any) => {
        obs.next(data);
      });
    });
  }

  emit(name: any, data: any){
    this.socket.emit(name, data);
  }

}
