# AioAuthV01

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.
It contains the `all in one` authentication like with normal email/password, Gmail, Facebook & Instagram. It also have inbuilt User registration.

 
## Installation

Run `npm i aio-auth-v01` to install this package.

## Configuration

After installation, you must have to do some configuration in App Module file.
This configuration includes :
1) Login, Registration Title & Heading
2) Gmail Provider id( Client Id)
3) Gmail Api Key
4) Facebook client Id
5) Instagram API Key
6) URL after login
7) Web API URL where you want to send your login/registration data

Examples:


`const authConfigs: AuthConfig = {
  gmailProvider: '*****************************',
  gmailAPIKey: '********************',
  FBProvider:'******************',
  AfterLoginURL : 'dashboard',
  loginURL: 'login',
  registerURL: 'register',
  forgetPwdURL: 'forget-password',
  ApiURL: 'http://localhost:4000',
  IGClientid: '*****************',
  IGRedirectURL: 'http://localhost:4200/login' //default we have redirect to login page

};`



## Usage

include the module & configuration  in app.module.ts .
import { AioAuthV01Module, AuthConfig } from 'aio-auth-v01';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
   
    AioAuthV01Module,
    AioAuthV01Module.forRoot(authConfigs)
    
  ],
  providers: [AioAuthV01Service]
})

## Login/Register Form Setup
 For normal login:
`<lib-fblogin></lib-fblogin> `

For Gmail Login/Registration:
`<lib-gmaillogin></lib-gmaillogin>`
 
For Facebook Login/Registration:
` <lib-fblogin></lib-fblogin> `

For Instagram Login/Registration:
`<td-insta-login></td-insta-login>`

For Registration:

`<td-register></td-register>`

For LogOut component:
`<td-log-out></td-log-out>`

