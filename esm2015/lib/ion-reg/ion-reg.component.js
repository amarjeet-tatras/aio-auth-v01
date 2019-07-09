/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthConfigService } from '../auth-config';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { RegisterComponent } from '../register/register.component';
export class IonRegComponent extends RegisterComponent {
    /**
     * @param {?} fb
     * @param {?} route
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(fb, route, router, authenticationService, authconfig) {
        super(fb, route, router, authenticationService, authconfig);
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authconfig = authconfig;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
}
IonRegComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-reg',
                template: "<!-- main app container -->\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n<div *ngIf=\"registerForm.valid && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n<form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <ion-grid>\n    <ion-row justify-content-center>\n\n    \n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n          <h3> {{heading}} </h3>\n        </div>\n        <div padding>\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"></ion-input> \n          </ion-item>\n          \n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\" id=\"email\" formControlName=\"email\" #emailAdd\n              class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" ></ion-input>           \n          </ion-item>\n\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n            <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n\n\n          <ion-item>\n              \n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"></ion-input>           \n          </ion-item>\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n              <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n\n          <ion-item>\n            <ion-button type=\"sumit\"  expand=\"block\" class=\"btn btn-primary btn-\">{{RegBtnText}}</ion-button>\n            <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
IonRegComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXJlZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9haW8tYXV0aC12MDEvIiwic291cmNlcyI6WyJsaWIvaW9uLXJlZy9pb24tcmVnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPbkUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsaUJBQWlCOzs7Ozs7OztJQUdwRCxZQUVTLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QscUJBQTRDLEVBQ2pCLFVBQXNCO1FBRXRELEtBQUssQ0FDSCxFQUFFLEVBQ0YsS0FBSyxFQUNMLE1BQU0sRUFDTixxQkFBcUIsRUFDckIsVUFBVSxDQUNYLENBQUE7UUFaSSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQVN4RCxDQUFDOzs7O0lBRUgsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiw0MEhBQXVDOzthQUV4Qzs7OztZQVJRLFdBQVc7WUFGWCxjQUFjO1lBQUUsTUFBTTtZQUd0QixxQkFBcUI7NENBaUJ6QixNQUFNLFNBQUMsaUJBQWlCOzs7O0lBSnpCLDZCQUFzQjs7SUFDdEIsZ0NBQTRCOztJQUM1QixpQ0FBcUI7O0lBQ3JCLGdEQUFtRDs7SUFDbkQscUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1yZWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uLXJlZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lvbi1yZWcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIElvblJlZ0NvbXBvbmVudCBleHRlbmRzIFJlZ2lzdGVyQ29tcG9uZW50e1xuXG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgIFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsIFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwdWJsaWMgYXV0aGNvbmZpZzogQXV0aENvbmZpZ1xuICAgICkgeyBcbiAgICAgIHN1cGVyKFxuICAgICAgICBmYixcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgYXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBhdXRoY29uZmlnXG4gICAgICApXG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7IFxuICB9XG5cbn1cbiJdfQ==