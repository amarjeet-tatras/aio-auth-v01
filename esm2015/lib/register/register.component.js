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
export class RegisterComponent {
    /**
     * @param {?} fb
     * @param {?} route
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(fb, route, router, authenticationService, authconfig) {
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
    // get controll value for form validatation 
    /**
     * @return {?}
     */
    get f() { return this.registerForm.controls; }
    /**
     * \@ Method to do register
     * \@ input: the required fields like username, email, password etc
     * \@ output: objservable
     * @return {?}
     */
    onSubmit() {
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
        resp => {
            if (resp.errorCode == null) {
                this.custClass = 'success';
                this.frmShow = false;
            }
            else if (resp.errorCode == 'user_exist') {
                this.userExist = true;
            }
            else {
                this.error = 'Something wrong';
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.error = error;
            this.loading = false;
        }));
        //this.registerForm.reset(); 
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
        }, {
            validator: [MustMatch('password', 'confirmPassword')]
        });
    }
    ;
    /**
     * @param {?} email
     * @return {?}
     */
    isEmailUnique(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.f.firstName.value == "" && this.f.lastName.value == "") {
                return false;
            }
            if (email == this.curEmail) {
                return false;
            }
            else {
                this.curEmail = email;
            }
            yield this.authenticationService.checkEmailExis(email)
                .pipe(first(), debounceTime(200), distinctUntilChanged())
                .subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                if (resp.message != 'ok') {
                    this.userExist = true;
                }
                else {
                    this.userExist = false;
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.error = error;
                this.loading = false;
            }));
        });
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-register',
                template: "<!-- main app container -->\n\n              <h3 class=\"text-justify\">{{ heading }}</h3>\n              <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n              <div *ngIf=\"!frmShow && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n              <form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">                \n\n                  <div class=\"form-group\">\n                      <label>First Name</label>\n                      <input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                      <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Last Name</label>\n                      <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                      <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Email</label>\n                      <input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\"  id=\"email\" formControlName=\"email\" #emailAdd  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    \n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                      </div>\n                        <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Password</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Confirm Password</label>\n                      <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                      <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                          <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button class=\"btn btn-primary\">{{RegBtnText}}</button>\n                      <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n                  </div>\n              </form>",
                styles: [".regForm{padding:10px}"]
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
RegisterComponent.propDecorators = {
    loginBtnText: [{ type: Input }],
    RegBtnText: [{ type: Input }],
    heading: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWlvLWF1dGgtdjAxLyIsInNvdXJjZXMiOlsibGliL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFDLFVBQVUsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUS9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBbUI1QixZQUNTLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QscUJBQTRDLEVBQ2pCLFVBQXNCO1FBSmpELE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBdEIxRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUksSUFBSSxDQUFDO1FBQ1QsYUFBUSxHQUFXLENBQUMsSUFB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QUFDLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsRUFDRixDQUFDO1FBQ0osQ0FBQztLQUFBOzs7WUF2SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix5dkhBQXdDOzthQUV6Qzs7OztZQVpRLFdBQVc7WUFFSCxjQUFjO1lBQXRCLE1BQU07WUFFTixxQkFBcUI7NENBaUN6QixNQUFNLFNBQUMsaUJBQWlCOzs7MkJBWjFCLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBWk4sb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLHNDQUFrQjs7SUFDbEIsa0NBQVc7O0lBQ1gseUNBQXdCOztJQUV4QixzQ0FBZTs7SUFDZixvQ0FBZ0I7O0lBQ2hCLHFDQUF5Rjs7SUFDekYsMENBQXlIOztJQUN6SCx5Q0FBd0M7O0lBQ3hDLHVDQUF5Qzs7SUFDekMsb0NBQTJDOztJQWtFM0Msc0NBQTJCOztJQUMzQixxQ0FBc0I7O0lBN0RwQiwrQkFBc0I7O0lBQ3RCLGtDQUE0Qjs7SUFDNUIsbUNBQXFCOztJQUNyQixrREFBbUQ7O0lBQ25ELHVDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlcixWYWxpZGF0b3JzLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE11c3RNYXRjaCB9IGZyb20gJy4uL19oZWxwZXJzL211c3QtbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlyc3QsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1lcmdlTWFwLCBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuVXJsOiBzdHJpbmc7XG4gIGVycm9yID0gJyc7IFxuICByZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcbiBcbiAgY3VzdENsYXNzID0gJyc7XG4gIGZybVNob3cgID0gdHJ1ZTtcbiAgcHVibGljIGxvZ2luVVJMOiBzdHJpbmcgPSAodGhpcy5hdXRoY29uZmlnLmxvZ2luVVJMKSA/IHRoaXMuYXV0aGNvbmZpZy5sb2dpblVSTCA6J2xvZ2luJztcbiAgcHVibGljIHJlZ1N1Y2Nlc3NNc2c6IHN0cmluZyA9ICh0aGlzLmF1dGhjb25maWcucmVnU3VjY2Vzc01zZykgPyB0aGlzLmF1dGhjb25maWcucmVnU3VjY2Vzc01zZyA6J1N1Y2Nlc3NmdWxseSBTdWJtaXR0ZWQnO1xuICBASW5wdXQoKSBsb2dpbkJ0blRleHQ6IFN0cmluZyA9ICdMb2dpbic7XG4gIEBJbnB1dCgpIFJlZ0J0blRleHQ6IFN0cmluZyA9ICdSZWdpc3Rlcic7XG4gIEBJbnB1dCgpIGhlYWRpbmc6IFN0cmluZyA9ICdVc2VyIFJlZ2lzdGVyJztcblxuXG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHVibGljIGF1dGhjb25maWc6IEF1dGhDb25maWdcbiAgKSB7IH1cblxuICBcbiAgLy8gZ2V0IGNvbnRyb2xsIHZhbHVlIGZvciBmb3JtIHZhbGlkYXRhdGlvbiBcbiAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLnJlZ2lzdGVyRm9ybS5jb250cm9sczsgfSBcblxuLyoqXG4gKiBAIE1ldGhvZCB0byBkbyByZWdpc3RlclxuICogQCBpbnB1dDogdGhlIHJlcXVpcmVkIGZpZWxkcyBsaWtlIHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgZXRjXG4gKiBAIG91dHB1dDogb2Jqc2VydmFibGVcbiAqL1xuICBvblN1Ym1pdCgpe1xuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcblxuXG4gICAgaWYodGhpcy5yZWdpc3RlckZvcm0uaW52YWxpZCAmJiB0aGlzLnVzZXJFeGlzdCA9PSBmYWxzZSl7XG4gICAgICBjb25zb2xlLmxvZygnUmVnIEZvcm0gRXJyb3InKTtcbiAgICAgIHJldHVybiA7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3Rlcih0aGlzLmYuZmlyc3ROYW1lLnZhbHVlLCB0aGlzLmYubGFzdE5hbWUudmFsdWUsIHRoaXMuZi5lbWFpbC52YWx1ZSwgdGhpcy5mLnBhc3N3b3JkLnZhbHVlLCAnZW1haWwnLCAnJylcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3AgPT4geyBcbiAgICAgICAgICAgIGlmKHJlc3AuZXJyb3JDb2RlID09bnVsbCl7XG4gICAgICAgICAgICAgIHRoaXMuY3VzdENsYXNzID0gJ3N1Y2Nlc3MnOyBcbiAgICAgICAgICAgICAgdGhpcy5mcm1TaG93ID0gZmFsc2U7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3AuZXJyb3JDb2RlID09ICd1c2VyX2V4aXN0Jyl7XG4gICAgICAgICAgICAgIHRoaXMudXNlckV4aXN0ID0gdHJ1ZTsgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnU29tZXRoaW5nIHdyb25nJzsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgLy90aGlzLnJlZ2lzdGVyRm9ybS5yZXNldCgpOyBcbn1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoXG4gICAgICAgIHtcbiAgICAgICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgICAgIGZpcnN0TmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxuICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkICwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxuICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXV0sXG4gICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhbGlkYXRvcjogW011c3RNYXRjaCgncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJyldXG4gICAgICAgIH1cbiAgICApXG4gIH07XG4gIHVzZXJFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xuICBjdXJFbWFpbDogc3RyaW5nID0gJyc7XG4gIFxuICBhc3luYyBpc0VtYWlsVW5pcXVlKGVtYWlsOiBzdHJpbmcpIHsgXG4gICAgXG4gICAgaWYodGhpcy5mLmZpcnN0TmFtZS52YWx1ZSA9PVwiXCIgJiYgdGhpcy5mLmxhc3ROYW1lLnZhbHVlPT1cIlwiKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ICBcblxuICAgIGlmKGVtYWlsID09IHRoaXMuY3VyRW1haWwpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJFbWFpbCA9IGVtYWlsO1xuICAgIH0gXG5cbiAgICBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jaGVja0VtYWlsRXhpcyhlbWFpbClcbiAgICAucGlwZShcbiAgICAgIGZpcnN0KCksIFxuICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICByZXNwID0+IHsgIFxuICAgICAgICBpZihyZXNwLm1lc3NhZ2UgIT0nb2snKXsgXG4gICAgICAgICAgdGhpcy51c2VyRXhpc3QgPSB0cnVlOyBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy51c2VyRXhpc3QgPSBmYWxzZTsgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICk7IFxuICB9XG59XG4iXX0=