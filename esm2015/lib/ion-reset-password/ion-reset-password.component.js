/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
export class IonResetPasswordComponent extends ResetPasswordComponent {
    /**
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(formBuilder, route, router, authenticationService, authconfig) {
        super(formBuilder, route, router, authenticationService, authconfig);
        this.formBuilder = formBuilder;
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
IonResetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-reset-password',
                template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\">\n        <form class=\"form-signin\" [formGroup]=\"resetPwdForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div *ngIf=\"successMsg\" class=\"text-success\">{{successMsg}}</div>\n            \n            <ion-item>\n                <ion-label position=\"floating\" for=\"username\">Username/Email Address</ion-label>\n                <ion-input type=\"email\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" ></ion-input>\n                \n            </ion-item>           \n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n\n            <ion-item>\n                <ion-button class=\"btn btn-success btn-block\">Reset Password</ion-button>       \n            </ion-item>         \n        </form>\n        <ion-item>                \n            <a routerLink=\"/{{loginURL}}\" id=\"newAccount\">{{loginBtnText}}</a>                \n        </ion-item>\n    </div>\n</div> \n<hr/>",
                styles: [""]
            }] }
];
/** @nocollapse */
IonResetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
if (false) {
    /** @type {?} */
    IonResetPasswordComponent.prototype.formBuilder;
    /** @type {?} */
    IonResetPasswordComponent.prototype.route;
    /** @type {?} */
    IonResetPasswordComponent.prototype.router;
    /** @type {?} */
    IonResetPasswordComponent.prototype.authenticationService;
    /** @type {?} */
    IonResetPasswordComponent.prototype.authconfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25wbS1haW8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9pb24tcmVzZXQtcGFzc3dvcmQvaW9uLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRL0QsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHNCQUFzQjs7Ozs7Ozs7SUFFbkUsWUFBb0IsV0FBd0IsRUFDbkMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLHFCQUE0QyxFQUNqQixVQUFzQjtRQUN4RCxLQUFLLENBQ0gsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04scUJBQXFCLEVBQ3JCLFVBQVUsQ0FDWCxDQUFBO1FBWGlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFRMUQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwwMENBQWtEOzthQUVuRDs7OztZQVZRLFdBQVc7WUFDWCxjQUFjO1lBQUUsTUFBTTtZQUN0QixxQkFBcUI7NENBZXpCLE1BQU0sU0FBQyxpQkFBaUI7Ozs7SUFKZCxnREFBK0I7O0lBQzFDLDBDQUE0Qjs7SUFDNUIsMkNBQXFCOztJQUNyQiwwREFBbUQ7O0lBQ25ELCtDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1yZXNldC1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb24tcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pb24tcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIElvblJlc2V0UGFzc3dvcmRDb21wb25lbnQgZXh0ZW5kcyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvciggcHVibGljIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHVibGljIGF1dGhjb25maWc6IEF1dGhDb25maWcpIHsgXG4gICAgc3VwZXIoXG4gICAgICBmb3JtQnVpbGRlcixcbiAgICAgIHJvdXRlLFxuICAgICAgcm91dGVyLFxuICAgICAgYXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgYXV0aGNvbmZpZ1xuICAgIClcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxufVxuIl19