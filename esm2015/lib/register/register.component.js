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
        this.authenticationService.register(this.f)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFDLFVBQVUsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUS9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBbUI1QixZQUNTLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QscUJBQTRDLEVBQ2pCLFVBQXNCO1FBSmpELE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBdEIxRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUksSUFBSSxDQUFDO1FBQ1QsYUFBUSxHQUFXLENBQUMsSUFB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Q3ZCLHl2SEFBd0M7O2FBRXpDOzs7O1lBWlEsV0FBVztZQUVILGNBQWM7WUFBdEIsTUFBTTtZQUVOLHFCQUFxQjs0Q0FpQ3pCLE1BQU0sU0FBQyxpQkFBaUI7OzsyQkFaMUIsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFaTixvQ0FBZ0I7O0lBQ2hCLHNDQUFrQjs7SUFDbEIsc0NBQWtCOztJQUNsQixrQ0FBVzs7SUFDWCx5Q0FBd0I7O0lBRXhCLHNDQUFlOztJQUNmLG9DQUFnQjs7SUFDaEIscUNBQXlGOztJQUN6RiwwQ0FBeUg7O0lBQ3pILHlDQUF3Qzs7SUFDeEMsdUNBQXlDOztJQUN6QyxvQ0FBMkM7O0lBa0UzQyxzQ0FBMkI7O0lBQzNCLHFDQUFzQjs7SUE3RHBCLCtCQUFzQjs7SUFDdEIsa0NBQTRCOztJQUM1QixtQ0FBcUI7O0lBQ3JCLGtEQUFtRDs7SUFDbkQsdUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLFZhbGlkYXRvcnMsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTXVzdE1hdGNoIH0gZnJvbSAnLi4vX2hlbHBlcnMvbXVzdC1tYXRjaC52YWxpZGF0b3InO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaXJzdCwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWVyZ2VNYXAsIGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9hdXRoLWNvbmZpZyc7XG4gXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2FkaW5nID0gZmFsc2U7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICByZXR1cm5Vcmw6IHN0cmluZztcbiAgZXJyb3IgPSAnJzsgXG4gIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xuIFxuICBjdXN0Q2xhc3MgPSAnJztcbiAgZnJtU2hvdyAgPSB0cnVlO1xuICBwdWJsaWMgbG9naW5VUkw6IHN0cmluZyA9ICh0aGlzLmF1dGhjb25maWcubG9naW5VUkwpID8gdGhpcy5hdXRoY29uZmlnLmxvZ2luVVJMIDonbG9naW4nO1xuICBwdWJsaWMgcmVnU3VjY2Vzc01zZzogc3RyaW5nID0gKHRoaXMuYXV0aGNvbmZpZy5yZWdTdWNjZXNzTXNnKSA/IHRoaXMuYXV0aGNvbmZpZy5yZWdTdWNjZXNzTXNnIDonU3VjY2Vzc2Z1bGx5IFN1Ym1pdHRlZCc7XG4gIEBJbnB1dCgpIGxvZ2luQnRuVGV4dDogU3RyaW5nID0gJ0xvZ2luJztcbiAgQElucHV0KCkgUmVnQnRuVGV4dDogU3RyaW5nID0gJ1JlZ2lzdGVyJztcbiAgQElucHV0KCkgaGVhZGluZzogU3RyaW5nID0gJ1VzZXIgUmVnaXN0ZXInO1xuXG5cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwdWJsaWMgYXV0aGNvbmZpZzogQXV0aENvbmZpZ1xuICApIHsgfVxuXG4gIFxuICAvLyBnZXQgY29udHJvbGwgdmFsdWUgZm9yIGZvcm0gdmFsaWRhdGF0aW9uIFxuICBnZXQgZigpIHsgcmV0dXJuIHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzOyB9IFxuXG4vKipcbiAqIEAgTWV0aG9kIHRvIGRvIHJlZ2lzdGVyXG4gKiBAIGlucHV0OiB0aGUgcmVxdWlyZWQgZmllbGRzIGxpa2UgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCBldGNcbiAqIEAgb3V0cHV0OiBvYmpzZXJ2YWJsZVxuICovXG4gIG9uU3VibWl0KCl7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuXG5cbiAgICBpZih0aGlzLnJlZ2lzdGVyRm9ybS5pbnZhbGlkICYmIHRoaXMudXNlckV4aXN0ID09IGZhbHNlKXtcbiAgICAgIGNvbnNvbGUubG9nKCdSZWcgRm9ybSBFcnJvcicpO1xuICAgICAgcmV0dXJuIDtcbiAgICB9ICAgXG4gICBcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuZilcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3AgPT4geyBcbiAgICAgICAgICAgIGlmKHJlc3AuZXJyb3JDb2RlID09bnVsbCl7XG4gICAgICAgICAgICAgIHRoaXMuY3VzdENsYXNzID0gJ3N1Y2Nlc3MnOyBcbiAgICAgICAgICAgICAgdGhpcy5mcm1TaG93ID0gZmFsc2U7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3AuZXJyb3JDb2RlID09ICd1c2VyX2V4aXN0Jyl7XG4gICAgICAgICAgICAgIHRoaXMudXNlckV4aXN0ID0gdHJ1ZTsgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnU29tZXRoaW5nIHdyb25nJzsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgLy90aGlzLnJlZ2lzdGVyRm9ybS5yZXNldCgpOyBcbn1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoXG4gICAgICAgIHtcbiAgICAgICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgICAgIGZpcnN0TmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxuICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkICwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV1dLFxuICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXV0sXG4gICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhbGlkYXRvcjogW011c3RNYXRjaCgncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJyldXG4gICAgICAgIH1cbiAgICApXG4gIH07XG4gIHVzZXJFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xuICBjdXJFbWFpbDogc3RyaW5nID0gJyc7XG4gIFxuICBhc3luYyBpc0VtYWlsVW5pcXVlKGVtYWlsOiBzdHJpbmcpIHsgXG4gICAgXG4gICAgaWYodGhpcy5mLmZpcnN0TmFtZS52YWx1ZSA9PVwiXCIgJiYgdGhpcy5mLmxhc3ROYW1lLnZhbHVlPT1cIlwiKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ICBcblxuICAgIGlmKGVtYWlsID09IHRoaXMuY3VyRW1haWwpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJFbWFpbCA9IGVtYWlsO1xuICAgIH0gXG5cbiAgICBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jaGVja0VtYWlsRXhpcyhlbWFpbClcbiAgICAucGlwZShcbiAgICAgIGZpcnN0KCksIFxuICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICByZXNwID0+IHsgIFxuICAgICAgICBpZihyZXNwLm1lc3NhZ2UgIT0nb2snKXsgXG4gICAgICAgICAgdGhpcy51c2VyRXhpc3QgPSB0cnVlOyBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy51c2VyRXhpc3QgPSBmYWxzZTsgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICk7IFxuICB9XG59XG4iXX0=