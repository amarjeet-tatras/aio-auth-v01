import { AuthConfig } from './auth-config';
import { AuthenticationService } from './_services/authentication.service';
export declare class AioAuthV01Service {
    private authConfig;
    private authSer;
    static fbProvider: string;
    static GmProvider: string;
    constructor(authConfig: AuthConfig, authSer: AuthenticationService);
    /**
     * Method to get the login status
     *
     */
    readonly isLogin: import("./_models/user").User;
    getLoginRedirect(): string;
}
