/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
var IonLoginComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IonLoginComponent, _super);
    function IonLoginComponent(formBuilder, route, router, authenticationService, authconfig) {
        var _this = _super.call(this, formBuilder, route, router, authenticationService, authconfig) || this;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.router = router;
        _this.authenticationService = authenticationService;
        _this.authconfig = authconfig;
        return _this;
    }
    /**
     * @return {?}
     */
    IonLoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    IonLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-login',
                    template: "<div id=\"logreg-forms\" *ngIf=\"showLogin\">\n  <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <ion-grid>\n          <ion-row justify-content-center>\n              <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                  <div text-center>\n                      <h3>  {{heading}} </h3>\n                  </div>\n                  <div padding>\n\n                      <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n\n                      <ion-item>\n                          <ion-label position=\"floating\">Username</ion-label>\n                          <ion-input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"></ion-input>                            \n                      </ion-item>\n                      <ion-item *ngIf=\"submitted && f.username.errors\" class=\"error-message\">\n                          <div  *ngIf=\"f.username.errors.required\">Username is required</div>\n                      </ion-item>\n                      <ion-item>\n                          <ion-label position=\"floating\" for=\"password\">Password</ion-label>\n                          <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"></ion-input>                            \n                      </ion-item>\n                      <ion-item *ngIf=\"submitted && f.password.errors\" class=\"error-message\">\n                          <div class=\"error-message\" *ngIf=\"f.password.errors.required\">Password is required</div>\n                      </ion-item>\n                      <ion-item>\n                          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"loading\" color=\"success\" class=\"btn btn-success btn-block\">Login\n                          </ion-button>\n                      </ion-item>\n                      \n                      <ion-item [hidden]=\"registerLink\">\n                        <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n                      </ion-item>\n                  </div>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </form>\n</div>\n\n<!--\n<div class=\"well\" *ngIf=\"!showLogin\">\n  You are loggedIN with following details:<br />\n\n  Username : {{currentUser.username}}\n  <p> First Name : {{currentUser.firstName}} </p>\n  <p> <td-log-out></td-log-out></p>\n</div>-->",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    IonLoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Router },
        { type: AuthenticationService },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    return IonLoginComponent;
}(LoginComponent));
export { IonLoginComponent };
if (false) {
    /** @type {?} */
    IonLoginComponent.prototype.formBuilder;
    /** @type {?} */
    IonLoginComponent.prototype.route;
    /** @type {?} */
    IonLoginComponent.prototype.router;
    /** @type {?} */
    IonLoginComponent.prototype.authenticationService;
    /** @type {?} */
    IonLoginComponent.prototype.authconfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWxvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25wbS1haW8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9pb24tbG9naW4vaW9uLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRDtJQUt1Qyw2Q0FBYztJQUVuRCwyQkFBbUIsV0FBd0IsRUFDbEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLHFCQUE0QyxFQUNqQixVQUFzQjtRQUoxRCxZQUtFLGtCQUNFLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLHFCQUFxQixFQUNyQixVQUFVLENBQ1gsU0FDRjtRQVprQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNqQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTs7SUFRMUQsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNDLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHVrRkFBeUM7O2lCQUUxQzs7OztnQkFUUSxXQUFXO2dCQUNYLGNBQWM7Z0JBQUUsTUFBTTtnQkFDdEIscUJBQXFCO2dEQWN6QixNQUFNLFNBQUMsaUJBQWlCOztJQWM3Qix3QkFBQztDQUFBLEFBekJELENBS3VDLGNBQWMsR0FvQnBEO1NBcEJZLGlCQUFpQjs7O0lBRWhCLHdDQUErQjs7SUFDekMsa0NBQTRCOztJQUM1QixtQ0FBcUI7O0lBQ3JCLGtEQUFtRDs7SUFDbkQsdUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWdTZXJ2aWNlLCBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uLWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uLWxvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJb25Mb2dpbkNvbXBvbmVudCBleHRlbmRzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwdWJsaWMgYXV0aGNvbmZpZzogQXV0aENvbmZpZykgeyBcbiAgICBzdXBlcihcbiAgICAgIGZvcm1CdWlsZGVyLFxuICAgICAgcm91dGUsXG4gICAgICByb3V0ZXIsXG4gICAgICBhdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBhdXRoY29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iXX0=