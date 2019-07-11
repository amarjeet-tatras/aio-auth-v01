import { InjectionToken } from '@angular/core';

// first define an interface for our configuration
export interface AuthConfig {
  gmailProvider: string; 
  gmailAPIKey: string;
  FBProvider: string;
  AfterLoginURL: string;
  loginURL: string;
  registerURL: string;
  forgetPwdURL: string;
  ApiURL: string;
  IGClientid: string;
  IGRedirectURL: string;
  regSuccessMsg :string;
  resetPwdURL:string;  
}

// then define injectionToken
export const AuthConfigService = new InjectionToken<AuthConfig>(
  'AuthConfig'
);
