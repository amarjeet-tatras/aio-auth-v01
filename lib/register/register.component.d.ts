import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig } from '../auth-config';
export declare class RegisterComponent implements OnInit {
    fb: FormBuilder;
    route: ActivatedRoute;
    router: Router;
    authenticationService: AuthenticationService;
    authconfig: AuthConfig;
    loading: boolean;
    submitted: boolean;
    returnUrl: string;
    error: string;
    registerForm: FormGroup;
    custClass: string;
    frmShow: boolean;
    loginURL: string;
    regSuccessMsg: string;
    loginBtnText: String;
    RegBtnText: String;
    heading: String;
    constructor(fb: FormBuilder, route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, authconfig: AuthConfig);
    readonly f: {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    /**
     * @ Method to do register
     * @ input: the required fields like username, email, password etc
     * @ output: objservable
     */
    onSubmit(): void;
    ngOnInit(): void;
    userExist: boolean;
    curEmail: string;
    isEmailUnique(email: string): Promise<boolean>;
}
