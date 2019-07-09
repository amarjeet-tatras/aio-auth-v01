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
export class AioAuthV01Service {
    /**
     * @param {?} authConfig
     * @param {?} authSer
     */
    constructor(authConfig, authSer) {
        this.authConfig = authConfig;
        this.authSer = authSer;
    }
    /**
     * Method to get the login status
     *
     * @return {?}
     */
    get isLogin() {
        return this.authSer.currentUserValue;
    }
    // path to redirect after login
    /**
     * @return {?}
     */
    getLoginRedirect() {
        return this.authConfig.AfterLoginURL;
    }
}
AioAuthV01Service.fbProvider = '';
AioAuthV01Service.GmProvider = 'default';
AioAuthV01Service.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AioAuthV01Service.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] },
    { type: AuthenticationService }
];
/** @nocollapse */ AioAuthV01Service.ngInjectableDef = i0.defineInjectable({ factory: function AioAuthV01Service_Factory() { return new AioAuthV01Service(i0.inject(i1.AuthConfigService), i0.inject(i2.AuthenticationService)); }, token: AioAuthV01Service, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlvLWF1dGgtdjAxLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9haW8tYXV0aC12MDEvIiwic291cmNlcyI6WyJsaWIvYWlvLWF1dGgtdjAxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQU0zRSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUs1QixZQUErQyxVQUFzQixFQUFXLE9BQThCO1FBQS9ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVyxZQUFPLEdBQVAsT0FBTyxDQUF1QjtJQUFHLENBQUM7Ozs7OztJQU9sSCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBR0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOztBQWpCTSw0QkFBVSxHQUFHLEVBQUUsQ0FBQztBQUNoQiw0QkFBVSxHQUFHLFNBQVMsQ0FBQzs7WUFQL0IsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQU9jLE1BQU0sU0FBQyxpQkFBaUI7WUFYOUIscUJBQXFCOzs7OztJQVE1Qiw2QkFBdUI7O0lBQ3ZCLDZCQUE4Qjs7Ozs7SUFFbEIsdUNBQXlEOzs7OztJQUFHLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEFpb0F1dGhWMDFTZXJ2aWNlIHtcbiAgXG4gIHN0YXRpYyBmYlByb3ZpZGVyID0gJyc7XG4gIHN0YXRpYyBHbVByb3ZpZGVyID0gJ2RlZmF1bHQnO1xuICBcbiAgY29uc3RydWN0b3IoQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHJpdmF0ZSBhdXRoQ29uZmlnOiBBdXRoQ29uZmlnLCAgcHJpdmF0ZSBhdXRoU2VyOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHt9XG4gICBcblxuICAvKipcbiAgICogTWV0aG9kIHRvIGdldCB0aGUgbG9naW4gc3RhdHVzXG4gICAqIFxuICAgKi9cbiAgcHVibGljIGdldCBpc0xvZ2luKCl7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlci5jdXJyZW50VXNlclZhbHVlO1xuICB9XG5cbiAgLy8gcGF0aCB0byByZWRpcmVjdCBhZnRlciBsb2dpblxuICBnZXRMb2dpblJlZGlyZWN0KCl7XG4gICAgcmV0dXJuIHRoaXMuYXV0aENvbmZpZy5BZnRlckxvZ2luVVJMO1xuICB9IFxufVxuIl19