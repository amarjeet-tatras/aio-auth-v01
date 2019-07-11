import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../lib/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../lib/_helpers/error.interceptor';
import { AioAuthV01Component } from './aio-auth-v01.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FbloginComponent } from './fblogin/fblogin.component';
import { GmailloginComponent } from './gmaillogin/gmaillogin.component';
import { AioAuthV01Service } from './aio-auth-v01.service'; 
import { AuthConfig, AuthConfigService } from './auth-config';
import { LogOutComponent } from './log-out/log-out.component';
import { InstaLoginComponent } from './insta-login/insta-login.component';
import { IonLoginComponent } from './ion-login/ion-login.component';
import { IonicModule } from '@ionic/angular';
import { IonRegComponent } from './ion-reg/ion-reg.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { IonResetPasswordComponent } from './ion-reset-password/ion-reset-password.component';
 

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  declarations: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent, ResetPasswordComponent, IonResetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
  ],
  exports: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent, ResetPasswordComponent, IonResetPasswordComponent, RouterModule]
})


export class AioAuthV01Module {
  static forRoot(config: AuthConfig): ModuleWithProviders {
   
    return {
      ngModule: AioAuthV01Module,
      providers: [
        AioAuthV01Service,
        {
          provide: AuthConfigService,
          useValue: config
        }
      ]
    };
  }
  
 }
