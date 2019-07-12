import { ActivatedRoute, Router } from '@angular/router';
import { AuthConfig } from '../auth-config';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { RegisterComponent } from '../register/register.component';
export declare class IonRegComponent extends RegisterComponent {
    fb: FormBuilder;
    route: ActivatedRoute;
    router: Router;
    authenticationService: AuthenticationService;
    authconfig: AuthConfig;
    constructor(fb: FormBuilder, route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, authconfig: AuthConfig);
    ngOnInit(): void;
}
