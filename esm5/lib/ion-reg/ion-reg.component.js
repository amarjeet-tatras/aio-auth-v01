/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthConfigService } from '../auth-config';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { RegisterComponent } from '../register/register.component';
var IonRegComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IonRegComponent, _super);
    function IonRegComponent(fb, route, router, authenticationService, authconfig) {
        var _this = _super.call(this, fb, route, router, authenticationService, authconfig) || this;
        _this.fb = fb;
        _this.route = route;
        _this.router = router;
        _this.authenticationService = authenticationService;
        _this.authconfig = authconfig;
        return _this;
    }
    /**
     * @return {?}
     */
    IonRegComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    IonRegComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-reg',
                    template: "<!-- main app container -->\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n<div *ngIf=\"registerForm.valid && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n<form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <ion-grid>\n    <ion-row justify-content-center>\n\n    \n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n          <h3> {{heading}} </h3>\n        </div>\n        <div padding>\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"></ion-input> \n          </ion-item>\n          \n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\" id=\"email\" formControlName=\"email\" #emailAdd\n              class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" ></ion-input>           \n          </ion-item>\n\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n            <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n\n\n          <ion-item>\n              \n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"></ion-input>           \n          </ion-item>\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n              <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n\n          <ion-item>\n            <ion-button type=\"sumit\"  expand=\"block\" class=\"btn btn-primary btn-\">{{RegBtnText}}</ion-button>\n            <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    IonRegComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Router },
        { type: AuthenticationService },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    return IonRegComponent;
}(RegisterComponent));
export { IonRegComponent };
if (false) {
    /** @type {?} */
    IonRegComponent.prototype.fb;
    /** @type {?} */
    IonRegComponent.prototype.route;
    /** @type {?} */
    IonRegComponent.prototype.router;
    /** @type {?} */
    IonRegComponent.prototype.authenticationService;
    /** @type {?} */
    IonRegComponent.prototype.authconfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXJlZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9haW8tYXV0aC12MDEvIiwic291cmNlcyI6WyJsaWIvaW9uLXJlZy9pb24tcmVnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRW5FO0lBS3FDLDJDQUFpQjtJQUdwRCx5QkFFUyxFQUFlLEVBQ2YsS0FBcUIsRUFDckIsTUFBYyxFQUNkLHFCQUE0QyxFQUNqQixVQUFzQjtRQU4xRCxZQVFJLGtCQUNFLEVBQUUsRUFDRixLQUFLLEVBQ0wsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLENBQ1gsU0FDRjtRQWJNLFFBQUUsR0FBRixFQUFFLENBQWE7UUFDZixXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTs7SUFTeEQsQ0FBQzs7OztJQUVILGtDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDQwSEFBdUM7O2lCQUV4Qzs7OztnQkFSUSxXQUFXO2dCQUZYLGNBQWM7Z0JBQUUsTUFBTTtnQkFHdEIscUJBQXFCO2dEQWlCekIsTUFBTSxTQUFDLGlCQUFpQjs7SUFlN0Isc0JBQUM7Q0FBQSxBQTdCRCxDQUtxQyxpQkFBaUIsR0F3QnJEO1NBeEJZLGVBQWU7OztJQUt4Qiw2QkFBc0I7O0lBQ3RCLGdDQUE0Qjs7SUFDNUIsaUNBQXFCOztJQUNyQixnREFBbUQ7O0lBQ25ELHFDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tcmVnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbi1yZWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pb24tcmVnLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJb25SZWdDb21wb25lbnQgZXh0ZW5kcyBSZWdpc3RlckNvbXBvbmVudHtcblxuICBcbiAgY29uc3RydWN0b3IoXG4gICBcbiAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHVibGljIGF1dGhjb25maWc6IEF1dGhDb25maWdcbiAgICApIHsgXG4gICAgICBzdXBlcihcbiAgICAgICAgZmIsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICByb3V0ZXIsXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgYXV0aGNvbmZpZ1xuICAgICAgKVxuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpOyBcbiAgfVxuXG59XG4iXX0=