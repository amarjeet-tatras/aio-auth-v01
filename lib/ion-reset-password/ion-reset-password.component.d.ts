import { OnInit } from '@angular/core';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig } from '../auth-config';
export declare class IonResetPasswordComponent extends ResetPasswordComponent implements OnInit {
    formBuilder: FormBuilder;
    route: ActivatedRoute;
    router: Router;
    authenticationService: AuthenticationService;
    authconfig: AuthConfig;
    constructor(formBuilder: FormBuilder, route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, authconfig: AuthConfig);
    ngOnInit(): void;
}
