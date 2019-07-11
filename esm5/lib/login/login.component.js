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
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        this.authenticationService.login(this.f)
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
                    template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\" *ngIf=\"showLogin\">\n        <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n\n                <div *ngIf=\"passwordHints\" class=\"password-hints\">\n                    {{passwordHints}}\n                </div>\n\n                \n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-success btn-block\">{{loginBtnText}}</button>       \n            </div>         \n            </form>\n            <div class=\"form-group\">\n\n                <div [hidden]=\"!registerLink\" class=\"col-sm-6 text-center\">\n                        <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n                </div>\n                <div class=\"col-sm-6 text-center\">\n                    <a routerLink=\"/{{resetPwdURL}}\" id=\"resetPwd\">Forgot Password ?</a>               \n                </div>               \n        \n            </div>\n    </div>\n</div>\n\n<div class=\"clear\"></div>\n<div class=\"well\"  *ngIf=\"!showLogin\">\n    You are loggedIN with following details:<br/>\n    Username : {{currentUser.username}}\n    <p> First Name : {{currentUser.firstName}} </p>\n    <p> <td-log-out></td-log-out></p>\n</div>\n<div class=\"clear\"></div>\n<hr/>",
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
        heading: [{ type: Input }],
        registerLink: [{ type: Input }],
        passwordHints: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0Q7SUE0Qkksd0JBQ1csV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLHFCQUE0QyxFQUNqQixVQUFzQjtRQUpqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekJyRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsV0FBTSxHQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLFVBQVUsQ0FBQztRQUV6RixnQkFBVyxHQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLGdCQUFnQixDQUFDO1FBR2xHLGlCQUFZLEdBQVcsT0FBTyxDQUFDO1FBQy9CLGVBQVUsR0FBVyxVQUFVLENBQUM7UUFDaEMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQVVoQyxDQUFDOzs7O0lBRUwsaUNBQVE7OztJQUFSO1FBRUksSUFBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7U0FDbEU7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNGLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLHFCQUFxQjtRQUN0Qix1Q0FBdUM7UUFFdEMseURBQXlEO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBRW5HLENBQUM7SUFHRCxzQkFBSSw2QkFBQztRQURMLG9EQUFvRDs7Ozs7O1FBQ3BELGNBQVUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7O0lBRTNDLGlDQUFROzs7SUFBUjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QiwrQkFBK0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUN4QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUzs7OztRQUNOLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7OztRQUNELFVBQUEsS0FBSztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7SUFDZixDQUFDOztnQkEvRUosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix1N0VBQXFDOztpQkFFdEM7Ozs7Z0JBVFEsV0FBVztnQkFESCxjQUFjO2dCQUF0QixNQUFNO2dCQUdOLHFCQUFxQjtnREFvQ3JCLE1BQU0sU0FBQyxpQkFBaUI7OzsrQkFiNUIsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLOztJQXdEVixxQkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBMUVZLGNBQWM7OztJQUN2QixtQ0FBNEI7O0lBQzVCLGlDQUF1Qjs7SUFDdkIsbUNBQXlCOztJQUN6QixtQ0FBeUI7O0lBQ3pCLCtCQUFrQjs7SUFDbEIsbUNBQWlDOztJQUNqQyxxQ0FBd0I7O0lBRXhCLGdDQUFnRzs7SUFFaEcscUNBQTJHOztJQUczRyxzQ0FBd0M7O0lBQ3hDLG9DQUF5Qzs7SUFDekMsaUNBQThCOztJQUM5QixzQ0FBa0M7O0lBQ2xDLHVDQUFvQzs7SUFLaEMscUNBQStCOztJQUMvQiwrQkFBNEI7O0lBQzVCLGdDQUFxQjs7SUFDckIsK0NBQW1EOztJQUNuRCxvQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyByZXR1cm5Vcmw6IHN0cmluZztcbiAgICBwdWJsaWMgZXJyb3IgPSAnJztcbiAgICBwdWJsaWMgc2hvd0xvZ2luOiBCb29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IGFueTtcbiAgICBcbiAgICBwdWJsaWMgcmVnVVJMOiBzdHJpbmcgPSAodGhpcy5hdXRoY29uZmlnLnJlZ2lzdGVyVVJMKSA/IHRoaXMuYXV0aGNvbmZpZy5yZWdpc3RlclVSTCA6J3JlZ2lzdGVyJztcbiAgICBcbiAgICBwdWJsaWMgcmVzZXRQd2RVUkw6IHN0cmluZyA9ICh0aGlzLmF1dGhjb25maWcucmVzZXRQd2RVUkwpID8gdGhpcy5hdXRoY29uZmlnLnJlc2V0UHdkVVJMIDoncmVzZXQtcGFzc3dvcmQnO1xuICAgIFxuXG4gICAgQElucHV0KCkgbG9naW5CdG5UZXh0OiBTdHJpbmcgPSAnTG9naW4nO1xuICAgIEBJbnB1dCgpIFJlZ0J0blRleHQ6IFN0cmluZyA9ICdSZWdpc3Rlcic7XG4gICAgQElucHV0KCkgaGVhZGluZzogU3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcmVnaXN0ZXJMaW5rOiBudW1iZXIgPSAxO1xuICAgIEBJbnB1dCgpIHBhc3N3b3JkSGludHM6IFN0cmluZyA9IFwiXCI7XG4gICAgXG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHVibGljIGF1dGhjb25maWc6IEF1dGhDb25maWdcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgaWYodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZSl7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyVmFsdWU7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWdpc3RlckxpbmsgPSAodGhpcy5yZWdpc3RlckxpbmsgPT0gMSApID8gMCA6IDEgO1xuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhc3N3b3JkSGludHMpO1xuICAgICAgICAvLyByZXNldCBsb2dpbiBzdGF0dXNcbiAgICAgICAvLyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcblxuICAgICAgICAvLyBnZXQgcmV0dXJuIHVybCBmcm9tIHJvdXRlIHBhcmFtZXRlcnMgb3IgZGVmYXVsdCB0byAnLydcbiAgICAgICAgdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCB0aGlzLmF1dGhjb25maWcuQWZ0ZXJMb2dpblVSTDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gY29udmVuaWVuY2UgZ2V0dGVyIGZvciBlYXN5IGFjY2VzcyB0byBmb3JtIGZpZWxkc1xuICAgIGdldCBmKCkgeyByZXR1cm4gdGhpcy5sb2dpbkZvcm0uY29udHJvbHM7IH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZFxuICAgICAgICBpZiAodGhpcy5sb2dpbkZvcm0uaW52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy5mKVxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnJldHVyblVybF0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59Il19