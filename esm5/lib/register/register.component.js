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
        this.authenticationService.register(this.f)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFDLFVBQVUsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRy9EO0lBd0JFLDJCQUNTLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QscUJBQTRDLEVBQ2pCLFVBQXNCO1FBSmpELE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBdEIxRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUksSUFBSSxDQUFDO1FBQ1QsYUFBUSxHQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENB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O3dCQWxCRCxTQWtCQyxDQUFDOzs7OztLQUNIOztnQkF2SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qix5dkhBQXdDOztpQkFFekM7Ozs7Z0JBWlEsV0FBVztnQkFFSCxjQUFjO2dCQUF0QixNQUFNO2dCQUVOLHFCQUFxQjtnREFpQ3pCLE1BQU0sU0FBQyxpQkFBaUI7OzsrQkFaMUIsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBcUdSLHdCQUFDO0NBQUEsQUF4SEQsSUF3SEM7U0FuSFksaUJBQWlCOzs7SUFFNUIsb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLHNDQUFrQjs7SUFDbEIsa0NBQVc7O0lBQ1gseUNBQXdCOztJQUV4QixzQ0FBZTs7SUFDZixvQ0FBZ0I7O0lBQ2hCLHFDQUF5Rjs7SUFDekYsMENBQXlIOztJQUN6SCx5Q0FBd0M7O0lBQ3hDLHVDQUF5Qzs7SUFDekMsb0NBQTJDOztJQWtFM0Msc0NBQTJCOztJQUMzQixxQ0FBc0I7O0lBN0RwQiwrQkFBc0I7O0lBQ3RCLGtDQUE0Qjs7SUFDNUIsbUNBQXFCOztJQUNyQixrREFBbUQ7O0lBQ25ELHVDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlcixWYWxpZGF0b3JzLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE11c3RNYXRjaCB9IGZyb20gJy4uL19oZWxwZXJzL211c3QtbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlyc3QsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1lcmdlTWFwLCBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuVXJsOiBzdHJpbmc7XG4gIGVycm9yID0gJyc7IFxuICByZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcbiBcbiAgY3VzdENsYXNzID0gJyc7XG4gIGZybVNob3cgID0gdHJ1ZTtcbiAgcHVibGljIGxvZ2luVVJMOiBzdHJpbmcgPSAodGhpcy5hdXRoY29uZmlnLmxvZ2luVVJMKSA/IHRoaXMuYXV0aGNvbmZpZy5sb2dpblVSTCA6J2xvZ2luJztcbiAgcHVibGljIHJlZ1N1Y2Nlc3NNc2c6IHN0cmluZyA9ICh0aGlzLmF1dGhjb25maWcucmVnU3VjY2Vzc01zZykgPyB0aGlzLmF1dGhjb25maWcucmVnU3VjY2Vzc01zZyA6J1N1Y2Nlc3NmdWxseSBTdWJtaXR0ZWQnO1xuICBASW5wdXQoKSBsb2dpbkJ0blRleHQ6IFN0cmluZyA9ICdMb2dpbic7XG4gIEBJbnB1dCgpIFJlZ0J0blRleHQ6IFN0cmluZyA9ICdSZWdpc3Rlcic7XG4gIEBJbnB1dCgpIGhlYWRpbmc6IFN0cmluZyA9ICdVc2VyIFJlZ2lzdGVyJztcblxuXG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHVibGljIGF1dGhjb25maWc6IEF1dGhDb25maWdcbiAgKSB7IH1cblxuICBcbiAgLy8gZ2V0IGNvbnRyb2xsIHZhbHVlIGZvciBmb3JtIHZhbGlkYXRhdGlvbiBcbiAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sczsgfSBcblxuLyoqXG4gKiBAIE1ldGhvZCB0byBkbyByZWdpc3RlclxuICogQCBpbnB1dDogdGhlIHJlcXVpcmVkIGZpZWxkcyBsaWtlIHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgZXRjXG4gKiBAIG91dHB1dDogb2Jqc2VydmFibGVcbiAqL1xuICBvblN1Ym1pdCgpe1xuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcblxuXG4gICAgaWYodGhpcy5yZWdpc3RlckZvcm0uaW52YWxpZCAmJiB0aGlzLnVzZXJFeGlzdCA9PSBmYWxzZSl7XG4gICAgICBjb25zb2xlLmxvZygnUmVnIEZvcm0gRXJyb3InKTtcbiAgICAgIHJldHVybiA7XG4gICAgfSAgIFxuICAgXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3Rlcih0aGlzLmYpXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICByZXNwID0+IHsgXG4gICAgICAgICAgICBpZihyZXNwLmVycm9yQ29kZSA9PW51bGwpe1xuICAgICAgICAgICAgICB0aGlzLmN1c3RDbGFzcyA9ICdzdWNjZXNzJzsgXG4gICAgICAgICAgICAgIHRoaXMuZnJtU2hvdyA9IGZhbHNlOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXNwLmVycm9yQ29kZSA9PSAndXNlcl9leGlzdCcpe1xuICAgICAgICAgICAgICB0aGlzLnVzZXJFeGlzdCA9IHRydWU7ICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ1NvbWV0aGluZyB3cm9uZyc7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgIC8vdGhpcy5yZWdpc3RlckZvcm0ucmVzZXQoKTsgXG59XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLmZiLmdyb3VwKFxuICAgICAgICB7XG4gICAgICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldXSxcbiAgICAgICAgICBsYXN0TmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCAsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldXSxcbiAgICAgICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWxpZGF0b3I6IFtNdXN0TWF0Y2goJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpXVxuICAgICAgICB9XG4gICAgKVxuICB9O1xuICB1c2VyRXhpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VyRW1haWw6IHN0cmluZyA9ICcnO1xuICBcbiAgYXN5bmMgaXNFbWFpbFVuaXF1ZShlbWFpbDogc3RyaW5nKSB7IFxuICAgIFxuICAgIGlmKHRoaXMuZi5maXJzdE5hbWUudmFsdWUgPT1cIlwiICYmIHRoaXMuZi5sYXN0TmFtZS52YWx1ZT09XCJcIil7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAgXG5cbiAgICBpZihlbWFpbCA9PSB0aGlzLmN1ckVtYWlsKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuY3VyRW1haWwgPSBlbWFpbDtcbiAgICB9IFxuXG4gICAgYXdhaXQgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY2hlY2tFbWFpbEV4aXMoZW1haWwpXG4gICAgLnBpcGUoXG4gICAgICBmaXJzdCgpLCBcbiAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgIClcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgcmVzcCA9PiB7ICBcbiAgICAgICAgaWYocmVzcC5tZXNzYWdlICE9J29rJyl7IFxuICAgICAgICAgIHRoaXMudXNlckV4aXN0ID0gdHJ1ZTsgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMudXNlckV4aXN0ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICApOyBcbiAgfVxufVxuIl19