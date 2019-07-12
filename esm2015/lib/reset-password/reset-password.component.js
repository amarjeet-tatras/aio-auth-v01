/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
export class ResetPasswordComponent {
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
        this.loginURL = (this.authconfig.loginURL) ? this.authconfig.loginURL : 'login';
        this.resetPwdURL = (this.authconfig.resetPwdURL) ? this.authconfig.resetPwdURL : 'reset-password';
        this.successMsg = '';
        this.loginBtnText = 'Login';
        this.heading = 'Reset Password';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.resetPwdForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]]
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
    get f() { return this.resetPwdForm.controls; }
    /**
     * @return {?}
     */
    onSubmit() {
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
        res => {
            if (res.message == "ok") {
                this.successMsg = "Password reset link has been sent to your registered email. To reset password check email.";
            }
            else {
                this.error = "Something wrong with server. Please try again";
            }
        }));
    }
}
ResetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'reset-password',
                template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\" *ngIf=\"showLogin\">\n        <form class=\"form-signin\" [formGroup]=\"resetPwdForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div *ngIf=\"successMsg\" class=\"text-success\">{{successMsg}}</div>\n            \n            <div class=\"form-group\">\n                <label for=\"username\">Email Address</label>\n                <input type=\"email\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>             \n            <div class=\"form-group\">\n                <button class=\"btn btn-success btn-block\">Reset Password</button>       \n            </div>         \n            </form>\n            <div class=\"form-group\">\n                <div class=\"col-sm-6 text-center\">\n                        <a routerLink=\"/{{loginURL}}\" id=\"newAccount\">{{loginBtnText}}</a>\n                </div>    \n        \n            </div>\n    </div>\n</div> \n<hr/>",
                styles: [""]
            }] }
];
/** @nocollapse */
ResetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
ResetPasswordComponent.propDecorators = {
    loginBtnText: [{ type: Input }],
    heading: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8vRCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7OztJQW9CakMsWUFDVyxXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjLEVBQ2QscUJBQTRDLEVBQ2pCLFVBQXNCO1FBSmpELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF0QnJELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFZLElBQUksQ0FBQztRQUcxQixhQUFRLEdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUEsT0FBTyxDQUFDO1FBRWxGLGdCQUFXLEdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUEsZ0JBQWdCLENBQUM7UUFDcEcsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUUvQixZQUFPLEdBQVcsZ0JBQWdCLENBQUM7SUFTeEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFJSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFELENBQUMsQ0FBQztRQUVILHFCQUFxQjtRQUN0Qix1Q0FBdUM7UUFFdEMseURBQXlEO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ25HLENBQUM7Ozs7O0lBR0QsSUFBSSxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7SUFFOUMsUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQzNCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlFLElBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUksNEZBQTRGLENBQUM7YUFDakg7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBSSwrQ0FBK0MsQ0FBQzthQUMvRDtRQUNILENBQUMsRUFBQyxDQUFDO0lBRVAsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwrNENBQThDOzthQUUvQzs7OztZQVRRLFdBQVc7WUFESCxjQUFjO1lBQXRCLE1BQU07WUFHTixxQkFBcUI7NENBaUN2QixNQUFNLFNBQUMsaUJBQWlCOzs7MkJBVjVCLEtBQUs7c0JBRUwsS0FBSzs7OztJQWZOLDhDQUErQjs7SUFDL0IseUNBQXVCOztJQUN2QiwyQ0FBeUI7O0lBQ3pCLDJDQUF5Qjs7SUFDekIsdUNBQWtCOztJQUNsQiwyQ0FBaUM7O0lBQ2pDLDZDQUF3Qjs7SUFFeEIsMENBQXlGOztJQUV6Riw2Q0FBMkc7O0lBQzNHLDRDQUE4Qjs7SUFFOUIsOENBQXdDOztJQUV4Qyx5Q0FBNEM7O0lBSXhDLDZDQUErQjs7SUFDL0IsdUNBQTRCOztJQUM1Qix3Q0FBcUI7O0lBQ3JCLHVEQUFtRDs7SUFDbkQsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9hdXRoLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Jlc2V0LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyByZXNldFB3ZEZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICBwdWJsaWMgcmV0dXJuVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBlcnJvciA9ICcnO1xuICBwdWJsaWMgc2hvd0xvZ2luOiBCb29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGN1cnJlbnRVc2VyOiBhbnk7XG4gIFxuICBwdWJsaWMgbG9naW5VUkw6IHN0cmluZyA9ICh0aGlzLmF1dGhjb25maWcubG9naW5VUkwpID8gdGhpcy5hdXRoY29uZmlnLmxvZ2luVVJMIDonbG9naW4nO1xuICBcbiAgcHVibGljIHJlc2V0UHdkVVJMOiBzdHJpbmcgPSAodGhpcy5hdXRoY29uZmlnLnJlc2V0UHdkVVJMKSA/IHRoaXMuYXV0aGNvbmZpZy5yZXNldFB3ZFVSTCA6J3Jlc2V0LXBhc3N3b3JkJztcbiAgcHVibGljIHN1Y2Nlc3NNc2c6IHN0cmluZyA9Jyc7XG5cbiAgQElucHV0KCkgbG9naW5CdG5UZXh0OiBTdHJpbmcgPSAnTG9naW4nO1xuXG4gIEBJbnB1dCgpIGhlYWRpbmc6IFN0cmluZyA9ICdSZXNldCBQYXNzd29yZCc7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHVibGljIGF1dGhjb25maWc6IEF1dGhDb25maWdcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgICAgXG5cbiAgICAgIHRoaXMucmVzZXRQd2RGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc2V0IGxvZ2luIHN0YXR1c1xuICAgICAvLyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoKTtcblxuICAgICAgLy8gZ2V0IHJldHVybiB1cmwgZnJvbSByb3V0ZSBwYXJhbWV0ZXJzIG9yIGRlZmF1bHQgdG8gJy8nXG4gICAgICB0aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8IHRoaXMuYXV0aGNvbmZpZy5BZnRlckxvZ2luVVJMO1xuICB9XG5cbiAgLy8gY29udmVuaWVuY2UgZ2V0dGVyIGZvciBlYXN5IGFjY2VzcyB0byBmb3JtIGZpZWxkc1xuICBnZXQgZigpIHsgcmV0dXJuIHRoaXMucmVzZXRQd2RGb3JtLmNvbnRyb2xzOyB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG5cbiAgICAgIC8vIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWRcbiAgICAgIGlmICh0aGlzLnJlc2V0UHdkRm9ybS5pbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLmYudXNlcm5hbWUudmFsdWUpLnN1YnNjcmliZShyZXMgPT57XG4gICAgICAgIGlmKHJlcy5tZXNzYWdlICA9PVwib2tcIil7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzTXNnID0gIFwiUGFzc3dvcmQgcmVzZXQgbGluayBoYXMgYmVlbiBzZW50IHRvIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbC4gVG8gcmVzZXQgcGFzc3dvcmQgY2hlY2sgZW1haWwuXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSAgXCJTb21ldGhpbmcgd3Jvbmcgd2l0aCBzZXJ2ZXIuIFBsZWFzZSB0cnkgYWdhaW5cIjtcbiAgICAgICAgfSAgXG4gICAgICB9KTtcbiAgICAgIFxuICB9XG5cbn1cbiJdfQ==