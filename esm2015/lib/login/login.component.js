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
        this.resetPwdURL = (this.authconfig.resetPwdURL) ? this.authconfig.resetPwdURL : 'reset-password';
        this.loginBtnText = 'Login';
        this.RegBtnText = 'Register';
        this.heading = '';
        this.registerLink = 1;
        this.passwordHints = "";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.showLogin = false;
            this.currentUser = this.authenticationService.currentUserValue;
        }
        this.registerLink = (this.registerLink == 1) ? 0 : 1;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
        });
        console.log(this.passwordHints);
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
        this.authenticationService.login(this.f)
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
                template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\" *ngIf=\"showLogin\">\n        <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n\n                <div *ngIf=\"passwordHints\" class=\"password-hints\">\n                    {{passwordHints}}\n                </div>\n\n                \n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-success btn-block\">{{loginBtnText}}</button>       \n            </div>         \n            </form>\n            <div class=\"form-group\">\n\n                <div [hidden]=\"!registerLink\" class=\"col-sm-6 text-center\">\n                        <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n                </div>\n                <div class=\"col-sm-6 text-center\">\n                    <a routerLink=\"/{{resetPwdURL}}\" id=\"resetPwd\">Forgot Password ?</a>               \n                </div>               \n        \n            </div>\n    </div>\n</div>\n\n<div class=\"clear\"></div>\n<div class=\"well\"  *ngIf=\"!showLogin\">\n    You are loggedIN with following details:<br/>\n    Username : {{currentUser.username}}\n    <p> First Name : {{currentUser.firstName}} </p>\n    <p> <td-log-out></td-log-out></p>\n</div>\n<div class=\"clear\"></div>\n<hr/>",
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
    heading: [{ type: Input }],
    registerLink: [{ type: Input }],
    passwordHints: [{ type: Input }]
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
    LoginComponent.prototype.resetPwdURL;
    /** @type {?} */
    LoginComponent.prototype.loginBtnText;
    /** @type {?} */
    LoginComponent.prototype.RegBtnText;
    /** @type {?} */
    LoginComponent.prototype.heading;
    /** @type {?} */
    LoginComponent.prototype.registerLink;
    /** @type {?} */
    LoginComponent.prototype.passwordHints;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRL0QsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7O0lBc0J2QixZQUNXLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxxQkFBNEMsRUFDakIsVUFBc0I7UUFKakQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXpCckQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFdBQU0sR0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxVQUFVLENBQUM7UUFFekYs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QUN2QixtQ0FBeUI7O0lBQ3pCLG1DQUF5Qjs7SUFDekIsK0JBQWtCOztJQUNsQixtQ0FBaUM7O0lBQ2pDLHFDQUF3Qjs7SUFFeEIsZ0NBQWdHOztJQUVoRyxxQ0FBMkc7O0lBRzNHLHNDQUF3Qzs7SUFDeEMsb0NBQXlDOztJQUN6QyxpQ0FBOEI7O0lBQzlCLHNDQUFrQzs7SUFDbEMsdUNBQW9DOztJQUtoQyxxQ0FBK0I7O0lBQy9CLCtCQUE0Qjs7SUFDNUIsZ0NBQXFCOztJQUNyQiwrQ0FBbUQ7O0lBQ25ELG9DQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gICAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgc3VibWl0dGVkID0gZmFsc2U7XG4gICAgcHVibGljIHJldHVyblVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBlcnJvciA9ICcnO1xuICAgIHB1YmxpYyBzaG93TG9naW46IEJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjdXJyZW50VXNlcjogYW55O1xuICAgIFxuICAgIHB1YmxpYyByZWdVUkw6IHN0cmluZyA9ICh0aGlzLmF1dGhjb25maWcucmVnaXN0ZXJVUkwpID8gdGhpcy5hdXRoY29uZmlnLnJlZ2lzdGVyVVJMIDoncmVnaXN0ZXInO1xuICAgIFxuICAgIHB1YmxpYyByZXNldFB3ZFVSTDogc3RyaW5nID0gKHRoaXMuYXV0aGNvbmZpZy5yZXNldFB3ZFVSTCkgPyB0aGlzLmF1dGhjb25maWcucmVzZXRQd2RVUkwgOidyZXNldC1wYXNzd29yZCc7XG4gICAgXG5cbiAgICBASW5wdXQoKSBsb2dpbkJ0blRleHQ6IFN0cmluZyA9ICdMb2dpbic7XG4gICAgQElucHV0KCkgUmVnQnRuVGV4dDogU3RyaW5nID0gJ1JlZ2lzdGVyJztcbiAgICBASW5wdXQoKSBoZWFkaW5nOiBTdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSByZWdpc3Rlckxpbms6IG51bWJlciA9IDE7XG4gICAgQElucHV0KCkgcGFzc3dvcmRIaW50czogU3RyaW5nID0gXCJcIjtcbiAgICBcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwdWJsaWMgYXV0aGNvbmZpZzogQXV0aENvbmZpZ1xuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBpZih0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyTGluayA9ICh0aGlzLnJlZ2lzdGVyTGluayA9PSAxICkgPyAwIDogMSA7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXV1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFzc3dvcmRIaW50cyk7XG4gICAgICAgIC8vIHJlc2V0IGxvZ2luIHN0YXR1c1xuICAgICAgIC8vIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xuXG4gICAgICAgIC8vIGdldCByZXR1cm4gdXJsIGZyb20gcm91dGUgcGFyYW1ldGVycyBvciBkZWZhdWx0IHRvICcvJ1xuICAgICAgICB0aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8IHRoaXMuYXV0aGNvbmZpZy5BZnRlckxvZ2luVVJMO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBjb252ZW5pZW5jZSBnZXR0ZXIgZm9yIGVhc3kgYWNjZXNzIHRvIGZvcm0gZmllbGRzXG4gICAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLmxvZ2luRm9ybS5jb250cm9sczsgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkXG4gICAgICAgIGlmICh0aGlzLmxvZ2luRm9ybS5pbnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbih0aGlzLmYpXG4gICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuVXJsXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=