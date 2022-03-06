import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Compo1Component } from './components/compo1/compo1.component';
import { GuardGuard } from './canG/guard.guard';
import { ServiceService } from './serV/service.service';
import { IntersInterceptor } from './interC/inters.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GuardGuard, ServiceService,
              { provide: HTTP_INTERCEPTORS, useClass: IntersInterceptor, multi:true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
