/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthConfigService } from '../auth-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../auth-config";
//import { AioAuthV01Service } from '../aio-auth-v01.service';
export class AuthenticationService {
    /**
     * @param {?} http
     * @param {?} authconfig
     */
    constructor(http, authconfig) {
        this.http = http;
        this.authconfig = authconfig;
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    /**
     * validate username and password
     * \@method: login
     * \@input: username & password
     * \@output: Users data object      *
     * @param {?} dataObj
     * @return {?}
     */
    login(dataObj) {
        return this.http.post(this.authconfig.ApiURL + '/login', dataObj)
            .pipe(tap((
        // Log the result or error
        /**
         * @param {?} user
         * @return {?}
         */
        // Log the result or error
        user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            throwError(error);
        })));
    }
    /**
     * Facebook Login
     * @param {?} data
     * @return {?}
     */
    FBlogin(data) {
        /** @type {?} */
        var username = data.email;
        /** @type {?} */
        var password = data.id;
        return this.http.post(this.authconfig.ApiURL + '/login', { username, password })
            .pipe(tap((
        // Log the result or error
        /**
         * @param {?} user
         * @return {?}
         */
        // Log the result or error
        user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            throwError(error);
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    /**
     * \@method: register()
     * \@input: user data in Object
     * \@output: boolean
     * @param {?} dataObj
     * @return {?}
     */
    register(dataObj) {
        // console.log(displayName, full_name, email, password, provider, photoURL, access_token)
        return this.http.post(this.authconfig.ApiURL + '/create_user', dataObj)
            .pipe(tap((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            throwError(error);
        })));
    }
    /**
     * check email existance
     * \@input: email
     * \@output: object
     * @param {?} email
     * @return {?}
     */
    checkEmailExis(email) {
        return this.http.post(this.authconfig.ApiURL + '/users/auth', { email: email })
            .pipe(tap((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
            return resp;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            throwError(error);
        })));
    }
    /**
     * Facebook Registration/login
     * @param {?} data
     * @return {?}
     */
    fbRegister(data) {
        return this.http.post(this.authconfig.ApiURL + '/create_user', { username: data.email, password: data.id, firstName: data.firstName, lastName: data.lastName, provider: data.provider, img_url: data.photoURL })
            .pipe(tap((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            throwError(error);
        })));
    }
    /**
     * Get Instagram User Data
     * \@input: auth token id
     * \@output: object
     * @param {?} AccessToken
     * @return {?}
     */
    getInstaUserData(AccessToken) {
        return this.http.get('https://api.instagram.com/v1/users/self/?access_token=' + AccessToken).pipe(tap((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            throwError(error);
        })));
    }
    /**
     * Method to send the reset password link to user's email
     * \@input: email/user Id
     * \@ouput: boolean
     * @param {?} emailAdd
     * @return {?}
     */
    resetPassword(emailAdd) {
        return this.http.post(this.authconfig.ApiURL + '/reset_password', { email: emailAdd })
            .pipe(tap((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
            return resp;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            throwError(error);
        })));
    }
}
AuthenticationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.inject(i1.HttpClient), i0.inject(i2.AuthConfigService)); }, token: AuthenticationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.currentUserSubject;
    /** @type {?} */
    AuthenticationService.prototype.currentUser;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.authconfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25wbS1haW8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQWMsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFLL0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFJOUIsWUFBb0IsSUFBZ0IsRUFBc0MsVUFBc0I7UUFBNUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTlELENBQUM7Ozs7SUFFRCxJQUFXLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7Ozs7Ozs7O0lBU0QsS0FBSyxDQUFDLE9BQU87UUFFVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDOUQsSUFBSSxDQUFFLEdBQUc7Ozs7OztRQUNOLEFBRFEsMEJBQTBCO1FBQ2xDLElBQUksQ0FBQyxFQUFFO1lBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7OztRQUNELEtBQUssQ0FBQyxFQUFFO1lBQ0osVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFDRixDQUFDLENBQUM7SUFFYixDQUFDOzs7Ozs7SUFLRCxPQUFPLENBQUUsSUFBVTs7WUFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUM5RSxJQUFJLENBQUUsR0FBRzs7Ozs7O1FBQ04sQUFEUSwwQkFBMEI7UUFDbEMsSUFBSSxDQUFDLEVBQUU7WUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7O1FBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDSixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUNGLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0YsaURBQWlEO1FBQ2pELFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7OztJQU9ELFFBQVEsQ0FBQyxPQUFPO1FBQ2IseUZBQXlGO1FBQ3hGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQzthQUN6RSxJQUFJLENBQUUsR0FBRzs7OztRQUNOLElBQUksQ0FBQyxFQUFFO1lBQ0gsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7OztRQUNELEtBQUssQ0FBQyxFQUFFO1lBQ0osVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFDRixDQUFDLENBQUM7SUFFVCxDQUFDOzs7Ozs7OztJQU9ELGNBQWMsQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ2pGLElBQUksQ0FBRSxHQUFHOzs7O1FBQ04sSUFBSSxDQUFDLEVBQUU7WUFDSCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7O1FBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDSixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUNGLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7OztJQUtELFVBQVUsQ0FBQyxJQUFVO1FBRWpCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNsTixJQUFJLENBQUUsR0FBRzs7OztRQUNOLElBQUksQ0FBQyxFQUFFO1lBQ0gsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7OztRQUNELEtBQUssQ0FBQyxFQUFFO1lBQ0osVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFDRixDQUFDLENBQUM7SUFDVCxDQUFDOzs7Ozs7OztJQU9ELGdCQUFnQixDQUFDLFdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSx3REFBd0QsR0FBQyxXQUFXLENBQUMsQ0FBRSxJQUFJLENBQUUsR0FBRzs7OztRQUN0RyxJQUFJLENBQUMsRUFBRTtZQUNILE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7Ozs7UUFDRCxLQUFLLENBQUMsRUFBRTtZQUNKLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQ0YsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Ozs7Ozs7SUFPRCxhQUFhLENBQUMsUUFBZ0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUN4RixJQUFJLENBQUUsR0FBRzs7OztRQUNOLElBQUksQ0FBQyxFQUFFO1lBQ0gsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7OztRQUNELEtBQUssQ0FBQyxFQUFFO1lBQ0osVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFDRixDQUFDLENBQUM7SUFFVCxDQUFDOzs7WUFuSkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVJ6QixVQUFVOzRDQWF5QixNQUFNLFNBQUMsaUJBQWlCOzs7Ozs7OztJQUhoRSxtREFBa0Q7O0lBQ2xELDRDQUFxQzs7Ozs7SUFFekIscUNBQXdCOzs7OztJQUFHLDJDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL19tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbi8vaW1wb3J0IHsgQWlvQXV0aFYwMVNlcnZpY2UgfSBmcm9tICcuLi9haW8tYXV0aC12MDEuc2VydmljZSc7XG4gXG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFVzZXI+O1xuICAgIHB1YmxpYyBjdXJyZW50VXNlcjogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHByaXZhdGUgYXV0aGNvbmZpZzogQXV0aENvbmZpZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5jdXJyZW50VXNlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VycmVudFVzZXJWYWx1ZSgpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0LnZhbHVlO1xuICAgIH1cbiBcbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQgXG4gICAgICogQG1ldGhvZDogbG9naW5cbiAgICAgKiBAaW5wdXQ6IHVzZXJuYW1lICYgcGFzc3dvcmRcbiAgICAgKiBAb3V0cHV0OiBVc2VycyBkYXRhIG9iamVjdCAgICAgICogXG4gICAgICovXG5cbiAgICBsb2dpbihkYXRhT2JqKSB7XG4gICAgICAgXG4gICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hdXRoY29uZmlnLkFwaVVSTCsnL2xvZ2luJywgZGF0YU9iailcbiAgICAgICAgICAgIC5waXBlKCB0YXAoIC8vIExvZyB0aGUgcmVzdWx0IG9yIGVycm9yXG4gICAgICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclN1YmplY3QubmV4dCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7IFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmFjZWJvb2sgTG9naW5cbiAgICAgKi9cbiAgICBGQmxvZ2luKCBkYXRhIDogYW55ICl7XG4gICAgICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZW1haWw7XG4gICAgICAgIHZhciBwYXNzd29yZCA9IGRhdGEuaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYXV0aGNvbmZpZy5BcGlVUkwrJy9sb2dpbicsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgICAucGlwZSggdGFwKCAvLyBMb2cgdGhlIHJlc3VsdCBvciBlcnJvclxuICAgICAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQodXNlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyOyBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIC8vIHJlbW92ZSB1c2VyIGZyb20gbG9jYWwgc3RvcmFnZSB0byBsb2cgdXNlciBvdXRcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQobnVsbCk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBtZXRob2Q6IHJlZ2lzdGVyKClcbiAgICAgKiBAaW5wdXQ6IHVzZXIgZGF0YSBpbiBPYmplY3RcbiAgICAgKiBAb3V0cHV0OiBib29sZWFuICBcbiAgICAgKi9cbiAgICByZWdpc3RlcihkYXRhT2JqKXtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhkaXNwbGF5TmFtZSwgZnVsbF9uYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHByb3ZpZGVyLCBwaG90b1VSTCwgYWNjZXNzX3Rva2VuKVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmF1dGhjb25maWcuQXBpVVJMKycvY3JlYXRlX3VzZXInLCBkYXRhT2JqKVxuICAgICAgICAucGlwZSggdGFwKFxuICAgICAgICAgICAgdXNlciA9PiB7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBlbWFpbCBleGlzdGFuY2VcbiAgICAgKiBAaW5wdXQ6IGVtYWlsXG4gICAgICogQG91dHB1dDogb2JqZWN0XG4gICAgICovXG4gICAgY2hlY2tFbWFpbEV4aXMoZW1haWwpeyAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYXV0aGNvbmZpZy5BcGlVUkwrJy91c2Vycy9hdXRoJywgeyBlbWFpbDogZW1haWwgfSlcbiAgICAgICAgLnBpcGUoIHRhcChcbiAgICAgICAgICAgIHJlc3AgPT4geyAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDsgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4geyBcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGYWNlYm9vayBSZWdpc3RyYXRpb24vbG9naW5cbiAgICAgKi9cbiAgICBmYlJlZ2lzdGVyKGRhdGEgOiBhbnkpe1xuICAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYXV0aGNvbmZpZy5BcGlVUkwrJy9jcmVhdGVfdXNlcicsIHsgdXNlcm5hbWU6IGRhdGEuZW1haWwsIHBhc3N3b3JkOiBkYXRhLmlkLCBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lLCBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSwgcHJvdmlkZXI6IGRhdGEucHJvdmlkZXIsIGltZ191cmw6IGRhdGEucGhvdG9VUkwgfSlcbiAgICAgICAgLnBpcGUoIHRhcChcbiAgICAgICAgICAgIHVzZXIgPT4geyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyOyBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBJbnN0YWdyYW0gVXNlciBEYXRhXG4gICAgICogQGlucHV0OiBhdXRoIHRva2VuIGlkXG4gICAgICogQG91dHB1dDogb2JqZWN0XG4gICAgICovXG4gICAgZ2V0SW5zdGFVc2VyRGF0YShBY2Nlc3NUb2tlbil7IFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KCdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzL3NlbGYvP2FjY2Vzc190b2tlbj0nK0FjY2Vzc1Rva2VuKSAucGlwZSggdGFwKFxuICAgICAgICAgICAgdXNlciA9PiB7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIHNlbmQgdGhlIHJlc2V0IHBhc3N3b3JkIGxpbmsgdG8gdXNlcidzIGVtYWlsXG4gICAgICogQGlucHV0OiBlbWFpbC91c2VyIElkXG4gICAgICogQG91cHV0OiBib29sZWFuXG4gICAgICovXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbEFkZDogc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hdXRoY29uZmlnLkFwaVVSTCsnL3Jlc2V0X3Bhc3N3b3JkJywgeyBlbWFpbDogZW1haWxBZGQgfSlcbiAgICAgICAgLnBpcGUoIHRhcChcbiAgICAgICAgICAgIHJlc3AgPT4geyAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDsgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4geyBcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApKTtcblxuICAgIH1cbn1cbiJdfQ==