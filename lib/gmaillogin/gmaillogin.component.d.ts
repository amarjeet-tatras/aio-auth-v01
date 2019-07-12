import { OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig } from '../auth-config';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialUser } from '../_services/user';
export declare class GmailloginComponent implements OnInit {
    private authenticationService;
    private authconfig;
    private router;
    private route;
    btnText: String;
    constructor(authenticationService: AuthenticationService, authconfig: AuthConfig, router: Router, route: ActivatedRoute);
    loading: boolean;
    submitted: boolean;
    returnUrl: string;
    error: string;
    ngOnInit(): void;
    initialize: () => Promise<{}>;
    loadScript(id: any, src: any, onload: any, async: any, inner_text_content: any): void;
    signInWithGoogle(): void;
    /**
     * get Google user profile
     * @input: token
     * @output: object
     */
    getGoogleProfile(): SocialUser;
}
