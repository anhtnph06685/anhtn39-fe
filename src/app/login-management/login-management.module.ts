import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginManagementRoutingModule } from './login-management-routing.module';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from '../home/home-page/home-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LoginManagementRoutingModule
  ]
})
export class LoginManagementModule { }
