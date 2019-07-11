/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { AuthConfigService } from './auth-config';
import { AuthenticationService } from './_services/authentication.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth-config";
import * as i2 from "./_services/authentication.service";
var AioAuthV01Service = /** @class */ (function () {
    function AioAuthV01Service(authConfig, authSer) {
        this.authConfig = authConfig;
        this.authSer = authSer;
    }
    Object.defineProperty(AioAuthV01Service.prototype, "isLogin", {
        /**
         * Method to get the login status
         *
         */
        get: /**
         * Method to get the login status
         *
         * @return {?}
         */
        function () {
            return this.authSer.currentUserValue;
        },
        enumerable: true,
        configurable: true
    });
    // path to redirect after login
    // path to redirect after login
    /**
     * @return {?}
     */
    AioAuthV01Service.prototype.getLoginRedirect = 
    // path to redirect after login
    /**
     * @return {?}
     */
    function () {
        return this.authConfig.AfterLoginURL;
    };
    AioAuthV01Service.fbProvider = '';
    AioAuthV01Service.GmProvider = 'default';
    AioAuthV01Service.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AioAuthV01Service.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] },
        { type: AuthenticationService }
    ]; };
    /** @nocollapse */ AioAuthV01Service.ngInjectableDef = i0.defineInjectable({ factory: function AioAuthV01Service_Factory() { return new AioAuthV01Service(i0.inject(i1.AuthConfigService), i0.inject(i2.AuthenticationService)); }, token: AioAuthV01Service, providedIn: "root" });
    return AioAuthV01Service;
}());
export { AioAuthV01Service };
if (false) {
    /** @type {?} */
    AioAuthV01Service.fbProvider;
    /** @type {?} */
    AioAuthV01Service.GmProvider;
    /**
     * @type {?}
     * @private
     */
    AioAuthV01Service.prototype.authConfig;
    /**
     * @type {?}
     * @private
     */
    AioAuthV01Service.prototype.authSer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlvLWF1dGgtdjAxLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ucG0tYWlvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYWlvLWF1dGgtdjAxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUUzRTtJQVNFLDJCQUErQyxVQUFzQixFQUFXLE9BQThCO1FBQS9ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVyxZQUFPLEdBQVAsT0FBTyxDQUF1QjtJQUFHLENBQUM7SUFPbEgsc0JBQVcsc0NBQU87UUFKbEI7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELCtCQUErQjs7Ozs7SUFDL0IsNENBQWdCOzs7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQWpCTSw0QkFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQiw0QkFBVSxHQUFHLFNBQVMsQ0FBQzs7Z0JBUC9CLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBT2MsTUFBTSxTQUFDLGlCQUFpQjtnQkFYOUIscUJBQXFCOzs7NEJBRjlCO0NBNEJDLEFBeEJELElBd0JDO1NBcEJZLGlCQUFpQjs7O0lBRTVCLDZCQUF1Qjs7SUFDdkIsNkJBQThCOzs7OztJQUVsQix1Q0FBeUQ7Ozs7O0lBQUcsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4vYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQWlvQXV0aFYwMVNlcnZpY2Uge1xuICBcbiAgc3RhdGljIGZiUHJvdmlkZXIgPSAnJztcbiAgc3RhdGljIEdtUHJvdmlkZXIgPSAnZGVmYXVsdCc7XG4gIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwcml2YXRlIGF1dGhDb25maWc6IEF1dGhDb25maWcsICBwcml2YXRlIGF1dGhTZXI6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge31cbiAgIFxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZ2V0IHRoZSBsb2dpbiBzdGF0dXNcbiAgICogXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzTG9naW4oKXtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VyLmN1cnJlbnRVc2VyVmFsdWU7XG4gIH1cblxuICAvLyBwYXRoIHRvIHJlZGlyZWN0IGFmdGVyIGxvZ2luXG4gIGdldExvZ2luUmVkaXJlY3QoKXtcbiAgICByZXR1cm4gdGhpcy5hdXRoQ29uZmlnLkFmdGVyTG9naW5VUkw7XG4gIH0gXG59XG4iXX0=