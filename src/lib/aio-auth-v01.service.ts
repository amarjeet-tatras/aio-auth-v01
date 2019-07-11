import { Injectable, Inject } from '@angular/core';
import { AuthConfig, AuthConfigService } from './auth-config';
import { AuthenticationService } from './_services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AioAuthV01Service {
  
  static fbProvider = '';
  static GmProvider = 'default';
  
  constructor(@Inject(AuthConfigService) private authConfig: AuthConfig,  private authSer: AuthenticationService) {}
   

  /**
   * Method to get the login status
   * 
   */
  public get isLogin(){
    return this.authSer.currentUserValue;
  }

  // path to redirect after login
  getLoginRedirect(){
    return this.authConfig.AfterLoginURL;
  } 
}
