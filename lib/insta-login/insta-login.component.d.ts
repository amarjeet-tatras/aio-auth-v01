import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig } from '../auth-config';
export declare class InstaLoginComponent implements OnInit {
    private router;
    private authenticationService;
    private authconfig;
    accessToken: any;
    private IGClientid;
    private IGRedirectURL;
    btnText: String;
    constructor(router: Router, authenticationService: AuthenticationService, authconfig: AuthConfig);
    ngOnInit(): void;
    /**
     * @Method: open the pop up to authorized the user
     * @input: client Id
     * @output: access token
     *
     */
    instaSignIn(): boolean;
    /**
     * @method to open the popup and authenticate the Instagram User
     * @param instagramClientId
     * @param instagramRedirectUri
     * @output user data in object
     */
    authenticateInstagram(instagramClientId: any, instagramRedirectUri: any): void;
    /**
     * @method Instagram Auth call back
     * @param none
     * @output json object
     */
    login_callback(): void;
}
