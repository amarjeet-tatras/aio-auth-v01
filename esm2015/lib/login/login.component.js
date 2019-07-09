/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
export class LoginComponent {
    /**
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(formBuilder, route, router, authenticationService, authconfig) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authconfig = authconfig;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.showLogin = true;
        this.regURL = (this.authconfig.registerURL) ? this.authconfig.registerURL : 'register';
        this.loginBtnText = 'Login';
        this.RegBtnText = 'Register';
        this.heading = 'Sign In';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.showLogin = false;
            this.currentUser = this.authenticationService.currentUserValue;
        }
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
    }
    // convenience getter for easy access to form fields
    /**
     * @return {?}
     */
    get f() { return this.loginForm.controls; }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.router.navigate([this.returnUrl]);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error);
            this.error = error;
            this.loading = false;
        }));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-login',
                template: "<div id=\"logreg-forms\" *ngIf=\"showLogin\">\n    <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n        <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-success btn-block\">{{loginBtnText}}</button>       \n        </div> \n        <div class=\"form-group\">\n                <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n        </div>\n        </form>\n \n        \n       \n</div>\n\n\n<div class=\"well\"  *ngIf=\"!showLogin\">\n        You are loggedIN with following details:<br/>\n\n        Username : {{currentUser.username}}\n        <p> First Name : {{currentUser.firstName}} </p>\n        <p> <td-log-out></td-log-out></p>\n    </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
LoginComponent.propDecorators = {
    loginBtnText: [{ type: Input }],
    RegBtnText: [{ type: Input }],
    heading: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.loading;
    /** @type {?} */
    LoginComponent.prototype.submitted;
    /** @type {?} */
    LoginComponent.prototype.returnUrl;
    /** @type {?} */
    LoginComponent.prototype.error;
    /** @type {?} */
    LoginComponent.prototype.showLogin;
    /** @type {?} */
    LoginComponent.prototype.currentUser;
    /** @type {?} */
    LoginComponent.prototype.regURL;
    /** @type {?} */
    LoginComponent.prototype.loginBtnText;
    /** @type {?} */
    LoginComponent.prototype.RegBtnText;
    /** @type {?} */
    LoginComponent.prototype.heading;
    /** @type {?} */
    LoginComponent.prototype.formBuilder;
    /** @type {?} */
    LoginComponent.prototype.route;
    /** @type {?} */
    LoginComponent.prototype.router;
    /** @type {?} */
    LoginComponent.prototype.authenticationService;
    /** @type {?} */
    LoginComponent.prototype.authconfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWlvLWF1dGgtdjAxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRL0QsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7O0lBa0J2QixZQUNXLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxxQkFBNEMsRUFDakIsVUFBc0I7UUFKakQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXJCckQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFdBQU0sR0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxVQUFVLENBQUM7UUFJdkYsaUJBQVksR0FBVyxPQUFPLENBQUM7UUFDL0IsZUFBVSxHQUFXLFVBQVUsQ0FBQztRQUNoQyxZQUFPLEdBQVcsU0FBUyxDQUFDO0lBU2pDLENBQUM7Ozs7SUFFTCxRQUFRO1FBRUosSUFBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7U0FDbEU7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUVILHFCQUFxQjtRQUN0Qix1Q0FBdUM7UUFFdEMseURBQXlEO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ25HLENBQUM7Ozs7O0lBR0QsSUFBSSxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7SUFFM0MsUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUN6RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDYixTQUFTOzs7O1FBQ04sSUFBSSxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7Ozs7UUFDRCxLQUFLLENBQUMsRUFBRTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDZixDQUFDOzs7WUExRUosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw0eURBQXFDOzthQUV0Qzs7OztZQVRRLFdBQVc7WUFESCxjQUFjO1lBQXRCLE1BQU07WUFHTixxQkFBcUI7NENBZ0NyQixNQUFNLFNBQUMsaUJBQWlCOzs7MkJBVjVCLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBZE4sbUNBQTRCOztJQUM1QixpQ0FBdUI7O0lBQ3ZCLG1DQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6QiwrQkFBa0I7O0lBQ2xCLG1DQUFpQzs7SUFDakMscUNBQXdCOztJQUV4QixnQ0FBZ0c7O0lBSWhHLHNDQUF3Qzs7SUFDeEMsb0NBQXlDOztJQUN6QyxpQ0FBcUM7O0lBSWpDLHFDQUErQjs7SUFDL0IsK0JBQTRCOztJQUM1QixnQ0FBcUI7O0lBQ3JCLCtDQUFtRDs7SUFDbkQsb0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9hdXRoLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgcmV0dXJuVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yID0gJyc7XG4gICAgcHVibGljIHNob3dMb2dpbjogQm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGN1cnJlbnRVc2VyOiBhbnk7XG4gICAgXG4gICAgcHVibGljIHJlZ1VSTDogc3RyaW5nID0gKHRoaXMuYXV0aGNvbmZpZy5yZWdpc3RlclVSTCkgPyB0aGlzLmF1dGhjb25maWcucmVnaXN0ZXJVUkwgOidyZWdpc3Rlcic7XG4gICAgXG4gICAgXG5cbiAgICBASW5wdXQoKSBsb2dpbkJ0blRleHQ6IFN0cmluZyA9ICdMb2dpbic7XG4gICAgQElucHV0KCkgUmVnQnRuVGV4dDogU3RyaW5nID0gJ1JlZ2lzdGVyJztcbiAgICBASW5wdXQoKSBoZWFkaW5nOiBTdHJpbmcgPSAnU2lnbiBJbic7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHVibGljIGF1dGhjb25maWc6IEF1dGhDb25maWdcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgaWYodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZSl7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXNldCBsb2dpbiBzdGF0dXNcbiAgICAgICAvLyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcblxuICAgICAgICAvLyBnZXQgcmV0dXJuIHVybCBmcm9tIHJvdXRlIHBhcmFtZXRlcnMgb3IgZGVmYXVsdCB0byAnLydcbiAgICAgICAgdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCB0aGlzLmF1dGhjb25maWcuQWZ0ZXJMb2dpblVSTDtcbiAgICB9XG5cbiAgICAvLyBjb252ZW5pZW5jZSBnZXR0ZXIgZm9yIGVhc3kgYWNjZXNzIHRvIGZvcm0gZmllbGRzXG4gICAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLmxvZ2luRm9ybS5jb250cm9sczsgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkXG4gICAgICAgIGlmICh0aGlzLmxvZ2luRm9ybS5pbnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbih0aGlzLmYudXNlcm5hbWUudmFsdWUsIHRoaXMuZi5wYXNzd29yZC52YWx1ZSlcbiAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5yZXR1cm5VcmxdKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==