import { OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig } from '../auth-config';
export declare class IonLoginComponent extends LoginComponent implements OnInit {
    formBuilder: FormBuilder;
    route: ActivatedRoute;
    router: Router;
    authenticationService: AuthenticationService;
    authconfig: AuthConfig;
    constructor(formBuilder: FormBuilder, route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, authconfig: AuthConfig);
    ngOnInit(): void;
}
