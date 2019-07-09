/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { first, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, route, router, authenticationService, authconfig) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authconfig = authconfig;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.custClass = '';
        this.frmShow = true;
        this.loginURL = (this.authconfig.loginURL) ? this.authconfig.loginURL : 'login';
        this.regSuccessMsg = (this.authconfig.regSuccessMsg) ? this.authconfig.regSuccessMsg : 'Successfully Submitted';
        this.loginBtnText = 'Login';
        this.RegBtnText = 'Register';
        this.heading = 'User Register';
        this.userExist = false;
        this.curEmail = '';
    }
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // get controll value for form validatation 
        get: 
        // get controll value for form validatation 
        /**
         * @return {?}
         */
        function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @ Method to do register
     * @ input: the required fields like username, email, password etc
     * @ output: objservable
     */
    /**
     * \@ Method to do register
     * \@ input: the required fields like username, email, password etc
     * \@ output: objservable
     * @return {?}
     */
    RegisterComponent.prototype.onSubmit = /**
     * \@ Method to do register
     * \@ input: the required fields like username, email, password etc
     * \@ output: objservable
     * @return {?}
     */
    function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid && this.userExist == false) {
            console.log('Reg Form Error');
            return;
        }
        this.loading = true;
        this.authenticationService.register(this.f.firstName.value, this.f.lastName.value, this.f.email.value, this.f.password.value, 'email', '')
            .pipe(first())
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            if (resp.errorCode == null) {
                _this.custClass = 'success';
                _this.frmShow = false;
            }
            else if (resp.errorCode == 'user_exist') {
                _this.userExist = true;
            }
            else {
                _this.error = 'Something wrong';
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.error = error;
            _this.loading = false;
        }));
        //this.registerForm.reset(); 
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
        }, {
            validator: [MustMatch('password', 'confirmPassword')]
        });
    };
    ;
    /**
     * @param {?} email
     * @return {?}
     */
    RegisterComponent.prototype.isEmailUnique = /**
     * @param {?} email
     * @return {?}
     */
    function (email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.f.firstName.value == "" && this.f.lastName.value == "") {
                            return [2 /*return*/, false];
                        }
                        if (email == this.curEmail) {
                            return [2 /*return*/, false];
                        }
                        else {
                            this.curEmail = email;
                        }
                        return [4 /*yield*/, this.authenticationService.checkEmailExis(email)
                                .pipe(first(), debounceTime(200), distinctUntilChanged())
                                .subscribe((/**
                             * @param {?} resp
                             * @return {?}
                             */
                            function (resp) {
                                if (resp.message != 'ok') {
                                    _this.userExist = true;
                                }
                                else {
                                    _this.userExist = false;
                                }
                            }), (/**
                             * @param {?} error
                             * @return {?}
                             */
                            function (error) {
                                _this.error = error;
                                _this.loading = false;
                            }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-register',
                    template: "<!-- main app container -->\n\n              <h3 class=\"text-justify\">{{ heading }}</h3>\n              <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n              <div *ngIf=\"!frmShow && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n              <form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">                \n\n                  <div class=\"form-group\">\n                      <label>First Name</label>\n                      <input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                      <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Last Name</label>\n                      <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                      <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Email</label>\n                      <input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\"  id=\"email\" formControlName=\"email\" #emailAdd  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    \n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                      </div>\n                        <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Password</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Confirm Password</label>\n                      <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                      <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                          <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button class=\"btn btn-primary\">{{RegBtnText}}</button>\n                      <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n                  </div>\n              </form>",
                    styles: [".regForm{padding:10px}"]
                }] }
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Router },
        { type: AuthenticationService },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    RegisterComponent.propDecorators = {
        loginBtnText: [{ type: Input }],
        RegBtnText: [{ type: Input }],
        heading: [{ type: Input }]
    };
    return RegisterComponent;
}());
export { RegisterComponent };
if (false) {
    /** @type {?} */
    RegisterComponent.prototype.loading;
    /** @type {?} */
    RegisterComponent.prototype.submitted;
    /** @type {?} */
    RegisterComponent.prototype.returnUrl;
    /** @type {?} */
    RegisterComponent.prototype.error;
    /** @type {?} */
    RegisterComponent.prototype.registerForm;
    /** @type {?} */
    RegisterComponent.prototype.custClass;
    /** @type {?} */
    RegisterComponent.prototype.frmShow;
    /** @type {?} */
    RegisterComponent.prototype.loginURL;
    /** @type {?} */
    RegisterComponent.prototype.regSuccessMsg;
    /** @type {?} */
    RegisterComponent.prototype.loginBtnText;
    /** @type {?} */
    RegisterComponent.prototype.RegBtnText;
    /** @type {?} */
    RegisterComponent.prototype.heading;
    /** @type {?} */
    RegisterComponent.prototype.userExist;
    /** @type {?} */
    RegisterComponent.prototype.curEmail;
    /** @type {?} */
    RegisterComponent.prototype.fb;
    /** @type {?} */
    RegisterComponent.prototype.route;
    /** @type {?} */
    RegisterComponent.prototype.router;
    /** @type {?} */
    RegisterComponent.prototype.authenticationService;
    /** @type {?} */
    RegisterComponent.prototype.authconfig;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWlvLWF1dGgtdjAxLyIsInNvdXJjZXMiOlsibGliL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFDLFVBQVUsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRy9EO0lBd0JFLDJCQUNTLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QscUJBQTRDLEVBQ2pCLFVBQXNCO1FBSmpELE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBdEIxRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUksSUFBSSxDQUFDO1FBQ1QsYUFBUSxHQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENB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QUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2lDQUN4Qjs0QkFDSCxDQUFDOzs7OzRCQUNELFVBQUEsS0FBSztnQ0FDRCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQ0FDbkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7NEJBQ3pCLENBQUMsRUFDRixFQUFBOzt3QkFsQkQsU0FrQkMsQ0FBQzs7Ozs7S0FDSDs7Z0JBdkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIseXZIQUF3Qzs7aUJBRXpDOzs7O2dCQVpRLFdBQVc7Z0JBRUgsY0FBYztnQkFBdEIsTUFBTTtnQkFFTixxQkFBcUI7Z0RBaUN6QixNQUFNLFNBQUMsaUJBQWlCOzs7K0JBWjFCLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQXFHUix3QkFBQztDQUFBLEFBeEhELElBd0hDO1NBbkhZLGlCQUFpQjs7O0lBRTVCLG9DQUFnQjs7SUFDaEIsc0NBQWtCOztJQUNsQixzQ0FBa0I7O0lBQ2xCLGtDQUFXOztJQUNYLHlDQUF3Qjs7SUFFeEIsc0NBQWU7O0lBQ2Ysb0NBQWdCOztJQUNoQixxQ0FBeUY7O0lBQ3pGLDBDQUF5SDs7SUFDekgseUNBQXdDOztJQUN4Qyx1Q0FBeUM7O0lBQ3pDLG9DQUEyQzs7SUFrRTNDLHNDQUEyQjs7SUFDM0IscUNBQXNCOztJQTdEcEIsK0JBQXNCOztJQUN0QixrQ0FBNEI7O0lBQzVCLG1DQUFxQjs7SUFDckIsa0RBQW1EOztJQUNuRCx1Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsVmFsaWRhdG9ycywgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNdXN0TWF0Y2ggfSBmcm9tICcuLi9faGVscGVycy9tdXN0LW1hdGNoLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpcnN0LCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtZXJnZU1hcCwgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbiBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG4gIHJldHVyblVybDogc3RyaW5nO1xuICBlcnJvciA9ICcnOyBcbiAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gXG4gIGN1c3RDbGFzcyA9ICcnO1xuICBmcm1TaG93ICA9IHRydWU7XG4gIHB1YmxpYyBsb2dpblVSTDogc3RyaW5nID0gKHRoaXMuYXV0aGNvbmZpZy5sb2dpblVSTCkgPyB0aGlzLmF1dGhjb25maWcubG9naW5VUkwgOidsb2dpbic7XG4gIHB1YmxpYyByZWdTdWNjZXNzTXNnOiBzdHJpbmcgPSAodGhpcy5hdXRoY29uZmlnLnJlZ1N1Y2Nlc3NNc2cpID8gdGhpcy5hdXRoY29uZmlnLnJlZ1N1Y2Nlc3NNc2cgOidTdWNjZXNzZnVsbHkgU3VibWl0dGVkJztcbiAgQElucHV0KCkgbG9naW5CdG5UZXh0OiBTdHJpbmcgPSAnTG9naW4nO1xuICBASW5wdXQoKSBSZWdCdG5UZXh0OiBTdHJpbmcgPSAnUmVnaXN0ZXInO1xuICBASW5wdXQoKSBoZWFkaW5nOiBTdHJpbmcgPSAnVXNlciBSZWdpc3Rlcic7XG5cblxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZiOiBGb3JtQnVpbGRlciwgXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHB1YmxpYyBhdXRoY29uZmlnOiBBdXRoQ29uZmlnXG4gICkgeyB9XG5cbiAgXG4gIC8vIGdldCBjb250cm9sbCB2YWx1ZSBmb3IgZm9ybSB2YWxpZGF0YXRpb24gXG4gIGdldCBmKCkgeyByZXR1cm4gdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHM7IH0gXG5cbi8qKlxuICogQCBNZXRob2QgdG8gZG8gcmVnaXN0ZXJcbiAqIEAgaW5wdXQ6IHRoZSByZXF1aXJlZCBmaWVsZHMgbGlrZSB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIGV0Y1xuICogQCBvdXRwdXQ6IG9ianNlcnZhYmxlXG4gKi9cbiAgb25TdWJtaXQoKXtcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG5cblxuICAgIGlmKHRoaXMucmVnaXN0ZXJGb3JtLmludmFsaWQgJiYgdGhpcy51c2VyRXhpc3QgPT0gZmFsc2Upe1xuICAgICAgY29uc29sZS5sb2coJ1JlZyBGb3JtIEVycm9yJyk7XG4gICAgICByZXR1cm4gO1xuICAgIH0gICBcblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UucmVnaXN0ZXIodGhpcy5mLmZpcnN0TmFtZS52YWx1ZSwgdGhpcy5mLmxhc3ROYW1lLnZhbHVlLCB0aGlzLmYuZW1haWwudmFsdWUsIHRoaXMuZi5wYXNzd29yZC52YWx1ZSwgJ2VtYWlsJywgJycpXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICByZXNwID0+IHsgXG4gICAgICAgICAgICBpZihyZXNwLmVycm9yQ29kZSA9PW51bGwpe1xuICAgICAgICAgICAgICB0aGlzLmN1c3RDbGFzcyA9ICdzdWNjZXNzJzsgXG4gICAgICAgICAgICAgIHRoaXMuZnJtU2hvdyA9IGZhbHNlOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwLmVycm9yQ29kZSA9PSAndXNlcl9leGlzdCcpe1xuICAgICAgICAgICAgICB0aGlzLnVzZXJFeGlzdCA9IHRydWU7ICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ1NvbWV0aGluZyB3cm9uZyc7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgIC8vdGhpcy5yZWdpc3RlckZvcm0ucmVzZXQoKTsgXG59XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLmZiLmdyb3VwKFxuICAgICAgICB7XG4gICAgICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldXSxcbiAgICAgICAgICBsYXN0TmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCAsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldXSxcbiAgICAgICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWxpZGF0b3I6IFtNdXN0TWF0Y2goJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpXVxuICAgICAgICB9XG4gICAgKVxuICB9O1xuICB1c2VyRXhpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VyRW1haWw6IHN0cmluZyA9ICcnO1xuICBcbiAgYXN5bmMgaXNFbWFpbFVuaXF1ZShlbWFpbDogc3RyaW5nKSB7IFxuICAgIFxuICAgIGlmKHRoaXMuZi5maXJzdE5hbWUudmFsdWUgPT1cIlwiICYmIHRoaXMuZi5sYXN0TmFtZS52YWx1ZT09XCJcIil7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAgXG5cbiAgICBpZihlbWFpbCA9PSB0aGlzLmN1ckVtYWlsKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuY3VyRW1haWwgPSBlbWFpbDtcbiAgICB9IFxuXG4gICAgYXdhaXQgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY2hlY2tFbWFpbEV4aXMoZW1haWwpXG4gICAgLnBpcGUoXG4gICAgICBmaXJzdCgpLCBcbiAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgIClcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgcmVzcCA9PiB7ICBcbiAgICAgICAgaWYocmVzcC5tZXNzYWdlICE9J29rJyl7IFxuICAgICAgICAgIHRoaXMudXNlckV4aXN0ID0gdHJ1ZTsgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMudXNlckV4aXN0ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICApOyBcbiAgfVxufVxuIl19