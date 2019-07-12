import { OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig } from '../auth-config';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SocialUser } from '../_services/user';
export declare class FbloginComponent implements OnInit {
    private authconfig;
    private router;
    private route;
    private authenticationService;
    currentUser: Observable<SocialUser>;
    loading: boolean;
    submitted: boolean;
    returnUrl: string;
    error: string;
    btnText: String;
    constructor(authconfig: AuthConfig, router: Router, route: ActivatedRoute, authenticationService: AuthenticationService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    /**
     * fbLogin method to check or do  facebook login
     * @input: none
     * @ouput: object
     *
     */
    fbLogin(): void;
    /**
     * @method: Facebook Login
     * @input: Facebook App Id
     * @outpt: Object User data
     */
    getFbUserData(): Promise<{}>;
}
