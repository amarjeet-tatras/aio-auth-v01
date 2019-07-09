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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, authconfig) {
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
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: 
        // convenience getter for easy access to form fields
        /**
         * @return {?}
         */
        function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoginComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (data) {
            _this.router.navigate([_this.returnUrl]);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log(error);
            _this.error = error;
            _this.loading = false;
        }));
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-login',
                    template: "<div id=\"logreg-forms\" *ngIf=\"showLogin\">\n    <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n        <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-success btn-block\">{{loginBtnText}}</button>       \n        </div> \n        <div class=\"form-group\">\n                <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n        </div>\n        </form>\n \n        \n       \n</div>\n\n\n<div class=\"well\"  *ngIf=\"!showLogin\">\n        You are loggedIN with following details:<br/>\n\n        Username : {{currentUser.username}}\n        <p> First Name : {{currentUser.firstName}} </p>\n        <p> <td-log-out></td-log-out></p>\n    </div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Router },
        { type: AuthenticationService },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    LoginComponent.propDecorators = {
        loginBtnText: [{ type: Input }],
        RegBtnText: [{ type: Input }],
        heading: [{ type: Input }]
    };
    return LoginComponent;
}());
export { LoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWlvLWF1dGgtdjAxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0Q7SUF3Qkksd0JBQ1csV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLHFCQUE0QyxFQUNqQixVQUFzQjtRQUpqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBckJyRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsV0FBTSxHQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLFVBQVUsQ0FBQztRQUl2RixpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQixlQUFVLEdBQVcsVUFBVSxDQUFDO1FBQ2hDLFlBQU8sR0FBVyxTQUFTLENBQUM7SUFTakMsQ0FBQzs7OztJQUVMLGlDQUFROzs7SUFBUjtRQUVJLElBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixFQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO1NBQ2xFO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFFSCxxQkFBcUI7UUFDdEIsdUNBQXVDO1FBRXRDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNuRyxDQUFDO0lBR0Qsc0JBQUksNkJBQUM7UUFETCxvREFBb0Q7Ozs7OztRQUNwRCxjQUFVLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTs7OztJQUUzQyxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsK0JBQStCO1FBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3pFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNiLFNBQVM7Ozs7UUFDTixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7Ozs7UUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBMUVKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsNHlEQUFxQzs7aUJBRXRDOzs7O2dCQVRRLFdBQVc7Z0JBREgsY0FBYztnQkFBdEIsTUFBTTtnQkFHTixxQkFBcUI7Z0RBZ0NyQixNQUFNLFNBQUMsaUJBQWlCOzs7K0JBVjVCLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQXNEVixxQkFBQztDQUFBLEFBM0VELElBMkVDO1NBckVZLGNBQWM7OztJQUN2QixtQ0FBNEI7O0lBQzVCLGlDQUF1Qjs7SUFDdkIsbUNBQXlCOztJQUN6QixtQ0FBeUI7O0lBQ3pCLCtCQUFrQjs7SUFDbEIsbUNBQWlDOztJQUNqQyxxQ0FBd0I7O0lBRXhCLGdDQUFnRzs7SUFJaEcsc0NBQXdDOztJQUN4QyxvQ0FBeUM7O0lBQ3pDLGlDQUFxQzs7SUFJakMscUNBQStCOztJQUMvQiwrQkFBNEI7O0lBQzVCLGdDQUFxQjs7SUFDckIsK0NBQW1EOztJQUNuRCxvQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyByZXR1cm5Vcmw6IHN0cmluZztcbiAgICBwdWJsaWMgZXJyb3IgPSAnJztcbiAgICBwdWJsaWMgc2hvd0xvZ2luOiBCb29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IGFueTtcbiAgICBcbiAgICBwdWJsaWMgcmVnVVJMOiBzdHJpbmcgPSAodGhpcy5hdXRoY29uZmlnLnJlZ2lzdGVyVVJMKSA/IHRoaXMuYXV0aGNvbmZpZy5yZWdpc3RlclVSTCA6J3JlZ2lzdGVyJztcbiAgICBcbiAgICBcblxuICAgIEBJbnB1dCgpIGxvZ2luQnRuVGV4dDogU3RyaW5nID0gJ0xvZ2luJztcbiAgICBASW5wdXQoKSBSZWdCdG5UZXh0OiBTdHJpbmcgPSAnUmVnaXN0ZXInO1xuICAgIEBJbnB1dCgpIGhlYWRpbmc6IFN0cmluZyA9ICdTaWduIEluJztcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwdWJsaWMgYXV0aGNvbmZpZzogQXV0aENvbmZpZ1xuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBpZih0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlc2V0IGxvZ2luIHN0YXR1c1xuICAgICAgIC8vIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpO1xuXG4gICAgICAgIC8vIGdldCByZXR1cm4gdXJsIGZyb20gcm91dGUgcGFyYW1ldGVycyBvciBkZWZhdWx0IHRvICcvJ1xuICAgICAgICB0aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8IHRoaXMuYXV0aGNvbmZpZy5BZnRlckxvZ2luVVJMO1xuICAgIH1cblxuICAgIC8vIGNvbnZlbmllbmNlIGdldHRlciBmb3IgZWFzeSBhY2Nlc3MgdG8gZm9ybSBmaWVsZHNcbiAgICBnZXQgZigpIHsgcmV0dXJuIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzOyB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWRcbiAgICAgICAgaWYgKHRoaXMubG9naW5Gb3JtLmludmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHRoaXMuZi51c2VybmFtZS52YWx1ZSwgdGhpcy5mLnBhc3N3b3JkLnZhbHVlKVxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnJldHVyblVybF0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59Il19