import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig } from '../auth-config';
export declare class LoginComponent implements OnInit {
    formBuilder: FormBuilder;
    route: ActivatedRoute;
    router: Router;
    authenticationService: AuthenticationService;
    authconfig: AuthConfig;
    loginForm: FormGroup;
    loading: boolean;
    submitted: boolean;
    returnUrl: string;
    error: string;
    showLogin: Boolean;
    currentUser: any;
    regURL: string;
    resetPwdURL: string;
    loginBtnText: String;
    RegBtnText: String;
    heading: String;
    registerLink: number;
    passwordHints: String;
    constructor(formBuilder: FormBuilder, route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, authconfig: AuthConfig);
    ngOnInit(): void;
    readonly f: {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    onSubmit(): void;
}
