/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';
import { Router } from '@angular/router';
import { AuthConfigService } from '../auth-config';
export class LogOutComponent {
    /**
     * @param {?} authenticationService
     * @param {?} router
     * @param {?} authconfig
     */
    constructor(authenticationService, router, authconfig) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.authconfig = authconfig;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * \@method: SignOut
     * \@input: none
     * \@output: boolean
     * @return {?}
     */
    signOut() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}
LogOutComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-log-out',
                template: "<a (click)=\"signOut()\" href=\"javascript:void(0)\"> Log Out</a>",
                styles: [""]
            }] }
];
/** @nocollapse */
LogOutComponent.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogOutComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    LogOutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LogOutComponent.prototype.authconfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9haW8tYXV0aC12MDEvIiwic291cmNlcyI6WyJsaWIvbG9nLW91dC9sb2ctb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTy9ELE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFFMUIsWUFBcUIscUJBQTRDLEVBQVUsTUFBYyxFQUFzQyxVQUFzQjtRQUFoSSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQzs7OztJQUcxSixRQUFRO0lBQ1IsQ0FBQzs7Ozs7OztJQU9ELE9BQU87UUFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDZFQUF1Qzs7YUFFeEM7Ozs7WUFSUSxxQkFBcUI7WUFDckIsTUFBTTs0Q0FVZ0YsTUFBTSxTQUFDLGlCQUFpQjs7Ozs7OztJQUF4RyxnREFBb0Q7Ozs7O0lBQUUsaUNBQXNCOzs7OztJQUFHLHFDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9nLW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2ctb3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9nLW91dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9nT3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHByaXZhdGUgYXV0aGNvbmZpZzogQXV0aENvbmZpZykgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICAvKipcbiAgICogQG1ldGhvZDogU2lnbk91dFxuICAgKiBAaW5wdXQ6IG5vbmVcbiAgICogQG91dHB1dDogYm9vbGVhblxuICAgKi9cblxuICBzaWduT3V0KCl7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCk7ICAgICAgICAgICAgICAgIFxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgfVxuXG59XG4iXX0=