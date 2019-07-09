import { InjectionToken } from '@angular/core';
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
    regSuccessMsg: string;
}
export declare const AuthConfigService: InjectionToken<AuthConfig>;
