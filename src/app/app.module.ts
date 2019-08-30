import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvmazeModule } from 'tvmaze';
import { AioAuthV01Module, AuthConfig } from 'aio-auth-v01';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AioAuthV01Service } from 'aio-auth-v01';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogOutComponent } from './log-out/log-out.component';

import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component
import { adminLteConf } from './admin-lte.conf';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const authConfigs: AuthConfig = {
  gmailProvider: '512831901750-q1fg4ph1mqupju95j4n3a02konn55gat.apps.googleusercontent.com',
  gmailAPIKey: 'AIzaSyD96mXLzIK38lg0sarsJhOUAkXbHYRJUhU',
  FBProvider:'1679511748958898',
  AfterLoginURL : 'dashboard',
  loginURL: 'login',
  registerURL: 'register',
  forgetPwdURL: 'forget-password',
  ApiURL: 'https://dev.api.whatz2eat.com',
  IGClientid: 'c15329dd95894bc085c1c4d95d08a11e',
  IGRedirectURL: 'http://localhost:4200/login'  
};

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LogOutComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvmazeModule,
    AioAuthV01Module,
    AioAuthV01Module.forRoot(authConfigs),
    HttpClientModule,
    LayoutModule.forRoot(adminLteConf),
    BoxModule
    
  ],
  providers: [AioAuthV01Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
