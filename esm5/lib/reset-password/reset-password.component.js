/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, route, router, authenticationService, authconfig) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authconfig = authconfig;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.showLogin = true;
        this.loginURL = (this.authconfig.loginURL) ? this.authconfig.loginURL : 'login';
        this.resetPwdURL = (this.authconfig.resetPwdURL) ? this.authconfig.resetPwdURL : 'reset-password';
        this.successMsg = '';
        this.loginBtnText = 'Login';
        this.heading = 'Reset Password';
    }
    /**
     * @return {?}
     */
    ResetPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.resetPwdForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]]
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: 
        // convenience getter for easy access to form fields
        /**
         * @return {?}
         */
        function () { return this.resetPwdForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ResetPasswordComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetPwdForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.resetPassword(this.f.username.value).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res.message == "ok") {
                _this.successMsg = "Password reset link has been sent to your registered email. To reset password check email.";
            }
            else {
                _this.error = "Something wrong with server. Please try again";
            }
        }));
    };
    ResetPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reset-password',
                    template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\" *ngIf=\"showLogin\">\n        <form class=\"form-signin\" [formGroup]=\"resetPwdForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div *ngIf=\"successMsg\" class=\"text-success\">{{successMsg}}</div>\n            \n            <div class=\"form-group\">\n                <label for=\"username\">Email Address</label>\n                <input type=\"email\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>             \n            <div class=\"form-group\">\n                <button class=\"btn btn-success btn-block\">Reset Password</button>       \n            </div>         \n            </form>\n            <div class=\"form-group\">\n                <div class=\"col-sm-6 text-center\">\n                        <a routerLink=\"/{{loginURL}}\" id=\"newAccount\">{{loginBtnText}}</a>\n                </div>    \n        \n            </div>\n    </div>\n</div> \n<hr/>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Router },
        { type: AuthenticationService },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    ResetPasswordComponent.propDecorators = {
        loginBtnText: [{ type: Input }],
        heading: [{ type: Input }]
    };
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
if (false) {
    /** @type {?} */
    ResetPasswordComponent.prototype.resetPwdForm;
    /** @type {?} */
    ResetPasswordComponent.prototype.loading;
    /** @type {?} */
    ResetPasswordComponent.prototype.submitted;
    /** @type {?} */
    ResetPasswordComponent.prototype.returnUrl;
    /** @type {?} */
    ResetPasswordComponent.prototype.error;
    /** @type {?} */
    ResetPasswordComponent.prototype.showLogin;
    /** @type {?} */
    ResetPasswordComponent.prototype.currentUser;
    /** @type {?} */
    ResetPasswordComponent.prototype.loginURL;
    /** @type {?} */
    ResetPasswordComponent.prototype.resetPwdURL;
    /** @type {?} */
    ResetPasswordComponent.prototype.successMsg;
    /** @type {?} */
    ResetPasswordComponent.prototype.loginBtnText;
    /** @type {?} */
    ResetPasswordComponent.prototype.heading;
    /** @type {?} */
    ResetPasswordComponent.prototype.formBuilder;
    /** @type {?} */
    ResetPasswordComponent.prototype.route;
    /** @type {?} */
    ResetPasswordComponent.prototype.router;
    /** @type {?} */
    ResetPasswordComponent.prototype.authenticationService;
    /** @type {?} */
    ResetPasswordComponent.prototype.authconfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRDtJQXlCRSxnQ0FDVyxXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjLEVBQ2QscUJBQTRDLEVBQ2pCLFVBQXNCO1FBSmpELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF0QnJELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFZLElBQUksQ0FBQztRQUcxQixhQUFRLEdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUEsT0FBTyxDQUFDO1FBRWxGLGdCQUFXLEdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUEsZ0JBQWdCLENBQUM7UUFDcEcsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUUvQixZQUFPLEdBQVcsZ0JBQWdCLENBQUM7SUFTeEMsQ0FBQzs7OztJQUVMLHlDQUFROzs7SUFBUjtRQUlJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUQsQ0FBQyxDQUFDO1FBRUgscUJBQXFCO1FBQ3RCLHVDQUF1QztRQUV0Qyx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDbkcsQ0FBQztJQUdELHNCQUFJLHFDQUFDO1FBREwsb0RBQW9EOzs7Ozs7UUFDcEQsY0FBVSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7SUFFOUMseUNBQVE7OztJQUFSO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQzNCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUMzRSxJQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFDO2dCQUNyQixLQUFJLENBQUMsVUFBVSxHQUFJLDRGQUE0RixDQUFDO2FBQ2pIO2lCQUFJO2dCQUNILEtBQUksQ0FBQyxLQUFLLEdBQUksK0NBQStDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUVQLENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsKzRDQUE4Qzs7aUJBRS9DOzs7O2dCQVRRLFdBQVc7Z0JBREgsY0FBYztnQkFBdEIsTUFBTTtnQkFHTixxQkFBcUI7Z0RBaUN2QixNQUFNLFNBQUMsaUJBQWlCOzs7K0JBVjVCLEtBQUs7MEJBRUwsS0FBSzs7SUFnRFIsNkJBQUM7Q0FBQSxBQXRFRCxJQXNFQztTQWpFWSxzQkFBc0I7OztJQUVqQyw4Q0FBK0I7O0lBQy9CLHlDQUF1Qjs7SUFDdkIsMkNBQXlCOztJQUN6QiwyQ0FBeUI7O0lBQ3pCLHVDQUFrQjs7SUFDbEIsMkNBQWlDOztJQUNqQyw2Q0FBd0I7O0lBRXhCLDBDQUF5Rjs7SUFFekYsNkNBQTJHOztJQUMzRyw0Q0FBOEI7O0lBRTlCLDhDQUF3Qzs7SUFFeEMseUNBQTRDOztJQUl4Qyw2Q0FBK0I7O0lBQy9CLHVDQUE0Qjs7SUFDNUIsd0NBQXFCOztJQUNyQix1REFBbUQ7O0lBQ25ELDRDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXNldC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgcmVzZXRQd2RGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgcHVibGljIHJldHVyblVybDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3IgPSAnJztcbiAgcHVibGljIHNob3dMb2dpbjogQm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBjdXJyZW50VXNlcjogYW55O1xuICBcbiAgcHVibGljIGxvZ2luVVJMOiBzdHJpbmcgPSAodGhpcy5hdXRoY29uZmlnLmxvZ2luVVJMKSA/IHRoaXMuYXV0aGNvbmZpZy5sb2dpblVSTCA6J2xvZ2luJztcbiAgXG4gIHB1YmxpYyByZXNldFB3ZFVSTDogc3RyaW5nID0gKHRoaXMuYXV0aGNvbmZpZy5yZXNldFB3ZFVSTCkgPyB0aGlzLmF1dGhjb25maWcucmVzZXRQd2RVUkwgOidyZXNldC1wYXNzd29yZCc7XG4gIHB1YmxpYyBzdWNjZXNzTXNnOiBzdHJpbmcgPScnO1xuXG4gIEBJbnB1dCgpIGxvZ2luQnRuVGV4dDogU3RyaW5nID0gJ0xvZ2luJztcblxuICBASW5wdXQoKSBoZWFkaW5nOiBTdHJpbmcgPSAnUmVzZXQgUGFzc3dvcmQnO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHB1YmxpYyBhdXRoY29uZmlnOiBBdXRoQ29uZmlnXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAgIFxuXG4gICAgICB0aGlzLnJlc2V0UHdkRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgIHVzZXJuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV1cbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXNldCBsb2dpbiBzdGF0dXNcbiAgICAgLy8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCk7XG5cbiAgICAgIC8vIGdldCByZXR1cm4gdXJsIGZyb20gcm91dGUgcGFyYW1ldGVycyBvciBkZWZhdWx0IHRvICcvJ1xuICAgICAgdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCB0aGlzLmF1dGhjb25maWcuQWZ0ZXJMb2dpblVSTDtcbiAgfVxuXG4gIC8vIGNvbnZlbmllbmNlIGdldHRlciBmb3IgZWFzeSBhY2Nlc3MgdG8gZm9ybSBmaWVsZHNcbiAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLnJlc2V0UHdkRm9ybS5jb250cm9sczsgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBzdG9wIGhlcmUgaWYgZm9ybSBpcyBpbnZhbGlkXG4gICAgICBpZiAodGhpcy5yZXNldFB3ZEZvcm0uaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlc2V0UGFzc3dvcmQodGhpcy5mLnVzZXJuYW1lLnZhbHVlKS5zdWJzY3JpYmUocmVzID0+e1xuICAgICAgICBpZihyZXMubWVzc2FnZSAgPT1cIm9rXCIpe1xuICAgICAgICAgIHRoaXMuc3VjY2Vzc01zZyA9ICBcIlBhc3N3b3JkIHJlc2V0IGxpbmsgaGFzIGJlZW4gc2VudCB0byB5b3VyIHJlZ2lzdGVyZWQgZW1haWwuIFRvIHJlc2V0IHBhc3N3b3JkIGNoZWNrIGVtYWlsLlwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLmVycm9yID0gIFwiU29tZXRoaW5nIHdyb25nIHdpdGggc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluXCI7XG4gICAgICAgIH0gIFxuICAgICAgfSk7XG4gICAgICBcbiAgfVxuXG59XG4iXX0=