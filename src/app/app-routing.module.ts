import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./intercom/dashboard/dashboard.component";
import {AuthGuard} from "./service/guards/auth.guard";
import {SecuritySystemComponent} from "./intercom/security-system/security-system.component";
import {PairingComponent} from "./intercom/pairing/pairing.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'LOGIN.LOGIN'},
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {title: 'LOGIN.LOGIN'},
    canActivate: [AuthGuard]
  },
  {
    path: 'security-system/:id',
    component: SecuritySystemComponent,
    data: {title: 'INTERCOM.SECURITY_SYSTEM.TITLE'},
    canActivate: [AuthGuard]
  },
  {
    path: 'pairing',
    component: PairingComponent,
    data: {title: 'INTERCOM.PAIRING.TITLE'},
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
