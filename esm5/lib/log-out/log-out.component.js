/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';
import { Router } from '@angular/router';
import { AuthConfigService } from '../auth-config';
var LogOutComponent = /** @class */ (function () {
    function LogOutComponent(authenticationService, router, authconfig) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.authconfig = authconfig;
    }
    /**
     * @return {?}
     */
    LogOutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @method: SignOut
     * @input: none
     * @output: boolean
     */
    /**
     * \@method: SignOut
     * \@input: none
     * \@output: boolean
     * @return {?}
     */
    LogOutComponent.prototype.signOut = /**
     * \@method: SignOut
     * \@input: none
     * \@output: boolean
     * @return {?}
     */
    function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    LogOutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-log-out',
                    template: "<a (click)=\"signOut()\" href=\"javascript:void(0)\"> Log Out</a>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LogOutComponent.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    return LogOutComponent;
}());
export { LogOutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ucG0tYWlvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvbG9nLW91dC9sb2ctb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9EO0lBT0UseUJBQXFCLHFCQUE0QyxFQUFVLE1BQWMsRUFBc0MsVUFBc0I7UUFBaEksMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBc0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7Ozs7SUFHMUosa0NBQVE7OztJQUFSO0lBQ0EsQ0FBQztJQUNEOzs7O09BSUc7Ozs7Ozs7SUFFSCxpQ0FBTzs7Ozs7O0lBQVA7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLDZFQUF1Qzs7aUJBRXhDOzs7O2dCQVJRLHFCQUFxQjtnQkFDckIsTUFBTTtnREFVZ0YsTUFBTSxTQUFDLGlCQUFpQjs7SUFnQnZILHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksZUFBZTs7Ozs7O0lBRWIsZ0RBQW9EOzs7OztJQUFFLGlDQUFzQjs7Ozs7SUFBRyxxQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbiBcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxvZy1vdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9nLW91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZy1vdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ091dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwcml2YXRlIGF1dGhjb25maWc6IEF1dGhDb25maWcpIHsgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgLyoqXG4gICAqIEBtZXRob2Q6IFNpZ25PdXRcbiAgICogQGlucHV0OiBub25lXG4gICAqIEBvdXRwdXQ6IGJvb2xlYW5cbiAgICovXG5cbiAgc2lnbk91dCgpe1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpOyAgICAgICAgICAgICAgICBcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gIH1cblxufVxuIl19