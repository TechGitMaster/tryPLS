import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './canG/guard.guard';
import { Compo1Component } from './components/compo1/compo1.component';
import { RestRResolver } from './resolve/RestR.resover';


const routes: Routes = [
  { path: 'compo1/:id', component: Compo1Component, canActivate: [GuardGuard], resolve: { data: RestRResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
