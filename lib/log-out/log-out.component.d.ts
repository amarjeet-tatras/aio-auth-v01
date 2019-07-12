import { OnInit } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';
import { Router } from '@angular/router';
import { AuthConfig } from '../auth-config';
export declare class LogOutComponent implements OnInit {
    private authenticationService;
    private router;
    private authconfig;
    constructor(authenticationService: AuthenticationService, router: Router, authconfig: AuthConfig);
    ngOnInit(): void;
    /**
     * @method: SignOut
     * @input: none
     * @output: boolean
     */
    signOut(): void;
}
