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
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, authconfig) {
        this.http = http;
        this.authconfig = authconfig;
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * validate username and password
     * @method: login
     * @input: username & password
     * @output: Users data object      *
     */
    /**
     * validate username and password
     * \@method: login
     * \@input: username & password
     * \@output: Users data object      *
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    AuthenticationService.prototype.login = /**
     * validate username and password
     * \@method: login
     * \@input: username & password
     * \@output: Users data object      *
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        var _this = this;
        return this.http.post(this.authconfig.ApiURL + '/users/authenticate', { username: username, password: password })
            .pipe(tap((
        // Log the result or error
        /**
         * @param {?} user
         * @return {?}
         */
        function (// Log the result or error
        user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throwError(error);
        })));
    };
    /**
     * Facebook Login
     */
    /**
     * Facebook Login
     * @param {?} data
     * @return {?}
     */
    AuthenticationService.prototype.FBlogin = /**
     * Facebook Login
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var username = data.email;
        /** @type {?} */
        var password = data.id;
        return this.http.post(this.authconfig.ApiURL + '/users/authenticate', { username: username, password: password })
            .pipe(tap((
        // Log the result or error
        /**
         * @param {?} user
         * @return {?}
         */
        function (// Log the result or error
        user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throwError(error);
        })));
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.logout = /**
     * @return {?}
     */
    function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    /**
     * @method: register()
     * @input: user data in Object
     * @output: boolean
     */
    /**
     * \@method: register()
     * \@input: user data in Object
     * \@output: boolean
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} email
     * @param {?} password
     * @param {?} provider
     * @param {?} photoURL
     * @return {?}
     */
    AuthenticationService.prototype.register = /**
     * \@method: register()
     * \@input: user data in Object
     * \@output: boolean
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} email
     * @param {?} password
     * @param {?} provider
     * @param {?} photoURL
     * @return {?}
     */
    function (firstName, lastName, email, password, provider, photoURL) {
        return this.http.post(this.authconfig.ApiURL + '/users/register', { username: email, password: password, firstName: firstName, lastName: lastName, provider: provider, photoURL: photoURL })
            .pipe(tap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throwError(error);
        })));
    };
    /**
     * check email existance
     * @input: email
     * @output: object
     */
    /**
     * check email existance
     * \@input: email
     * \@output: object
     * @param {?} email
     * @return {?}
     */
    AuthenticationService.prototype.checkEmailExis = /**
     * check email existance
     * \@input: email
     * \@output: object
     * @param {?} email
     * @return {?}
     */
    function (email) {
        return this.http.post(this.authconfig.ApiURL + '/users/auth', { email: email })
            .pipe(tap((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            return resp;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throwError(error);
        })));
    };
    /**
     * Facebook Registration/login
     */
    /**
     * Facebook Registration/login
     * @param {?} data
     * @return {?}
     */
    AuthenticationService.prototype.fbRegister = /**
     * Facebook Registration/login
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.post(this.authconfig.ApiURL + '/users/register', { username: data.email, password: data.id, firstName: data.firstName, lastName: data.lastName, provider: data.provider, photoURL: data.photoURL })
            .pipe(tap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throwError(error);
        })));
    };
    /**
     * Get Instagram User Data
     * @input: auth token id
     * @output: object
     */
    /**
     * Get Instagram User Data
     * \@input: auth token id
     * \@output: object
     * @param {?} AccessToken
     * @return {?}
     */
    AuthenticationService.prototype.getInstaUserData = /**
     * Get Instagram User Data
     * \@input: auth token id
     * \@output: object
     * @param {?} AccessToken
     * @return {?}
     */
    function (AccessToken) {
        return this.http.get('https://api.instagram.com/v1/users/self/?access_token=' + AccessToken).pipe(tap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            return user;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throwError(error);
        })));
    };
    AuthenticationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    /** @nocollapse */ AuthenticationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.inject(i1.HttpClient), i0.inject(i2.AuthConfigService)); }, token: AuthenticationService, providedIn: "root" });
    return AuthenticationService;
}());
export { AuthenticationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fpby1hdXRoLXYwMS8iLCJzb3VyY2VzIjpbImxpYi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFJL0Q7SUFLSSwrQkFBb0IsSUFBZ0IsRUFBc0MsVUFBc0I7UUFBNUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTlELENBQUM7SUFFRCxzQkFBVyxtREFBZ0I7Ozs7UUFBM0I7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7OztJQUVILHFDQUFLOzs7Ozs7Ozs7SUFBTCxVQUFNLFFBQWdCLEVBQUUsUUFBZ0I7UUFBeEMsaUJBY0M7UUFaRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFB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Ozs7OztJQUM5QixtREFBa0Q7O0lBQ2xELDRDQUFxQzs7Ozs7SUFFekIscUNBQXdCOzs7OztJQUFHLDJDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL19tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbi8vaW1wb3J0IHsgQWlvQXV0aFYwMVNlcnZpY2UgfSBmcm9tICcuLi9haW8tYXV0aC12MDEuc2VydmljZSc7XG4gXG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFVzZXI+O1xuICAgIHB1YmxpYyBjdXJyZW50VXNlcjogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHByaXZhdGUgYXV0aGNvbmZpZzogQXV0aENvbmZpZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5jdXJyZW50VXNlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VycmVudFVzZXJWYWx1ZSgpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0LnZhbHVlO1xuICAgIH1cbiBcbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQgXG4gICAgICogQG1ldGhvZDogbG9naW5cbiAgICAgKiBAaW5wdXQ6IHVzZXJuYW1lICYgcGFzc3dvcmRcbiAgICAgKiBAb3V0cHV0OiBVc2VycyBkYXRhIG9iamVjdCAgICAgICogXG4gICAgICovXG5cbiAgICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgXG4gICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hdXRoY29uZmlnLkFwaVVSTCsnL3VzZXJzL2F1dGhlbnRpY2F0ZScsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgICAucGlwZSggdGFwKCAvLyBMb2cgdGhlIHJlc3VsdCBvciBlcnJvclxuICAgICAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQodXNlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyOyBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZhY2Vib29rIExvZ2luXG4gICAgICovXG4gICAgRkJsb2dpbiggZGF0YSA6IGFueSApe1xuICAgICAgICB2YXIgdXNlcm5hbWUgPSBkYXRhLmVtYWlsO1xuICAgICAgICB2YXIgcGFzc3dvcmQgPSBkYXRhLmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmF1dGhjb25maWcuQXBpVVJMKycvdXNlcnMvYXV0aGVudGljYXRlJywgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC5waXBlKCB0YXAoIC8vIExvZyB0aGUgcmVzdWx0IG9yIGVycm9yXG4gICAgICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclN1YmplY3QubmV4dCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7IFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICkpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHVzZXIgZnJvbSBsb2NhbCBzdG9yYWdlIHRvIGxvZyB1c2VyIG91dFxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlclN1YmplY3QubmV4dChudWxsKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQG1ldGhvZDogcmVnaXN0ZXIoKVxuICAgICAqIEBpbnB1dDogdXNlciBkYXRhIGluIE9iamVjdFxuICAgICAqIEBvdXRwdXQ6IGJvb2xlYW4gIFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcHJvdmlkZXIsIHBob3RvVVJMKXtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYXV0aGNvbmZpZy5BcGlVUkwrJy91c2Vycy9yZWdpc3RlcicsIHsgdXNlcm5hbWU6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQsIGZpcnN0TmFtZTogZmlyc3ROYW1lLCBsYXN0TmFtZTogbGFzdE5hbWUsIHByb3ZpZGVyOiBwcm92aWRlciwgcGhvdG9VUkw6IHBob3RvVVJMIH0pXG4gICAgICAgIC5waXBlKCB0YXAoXG4gICAgICAgICAgICB1c2VyID0+IHsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjsgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4geyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrIGVtYWlsIGV4aXN0YW5jZVxuICAgICAqIEBpbnB1dDogZW1haWxcbiAgICAgKiBAb3V0cHV0OiBvYmplY3RcbiAgICAgKi9cbiAgICBjaGVja0VtYWlsRXhpcyhlbWFpbCl7ICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hdXRoY29uZmlnLkFwaVVSTCsnL3VzZXJzL2F1dGgnLCB7IGVtYWlsOiBlbWFpbCB9KVxuICAgICAgICAucGlwZSggdGFwKFxuICAgICAgICAgICAgcmVzcCA9PiB7ICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwOyBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7IFxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZhY2Vib29rIFJlZ2lzdHJhdGlvbi9sb2dpblxuICAgICAqL1xuICAgIGZiUmVnaXN0ZXIoZGF0YSA6IGFueSl7XG4gICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hdXRoY29uZmlnLkFwaVVSTCsnL3VzZXJzL3JlZ2lzdGVyJywgeyB1c2VybmFtZTogZGF0YS5lbWFpbCwgcGFzc3dvcmQ6IGRhdGEuaWQsIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLCBwcm92aWRlcjogZGF0YS5wcm92aWRlciwgcGhvdG9VUkw6IGRhdGEucGhvdG9VUkwgfSlcbiAgICAgICAgLnBpcGUoIHRhcChcbiAgICAgICAgICAgIHVzZXIgPT4geyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyOyBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBJbnN0YWdyYW0gVXNlciBEYXRhXG4gICAgICogQGlucHV0OiBhdXRoIHRva2VuIGlkXG4gICAgICogQG91dHB1dDogb2JqZWN0XG4gICAgICovXG4gICAgZ2V0SW5zdGFVc2VyRGF0YShBY2Nlc3NUb2tlbil7IFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KCdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzL3NlbGYvP2FjY2Vzc190b2tlbj0nK0FjY2Vzc1Rva2VuKSAucGlwZSggdGFwKFxuICAgICAgICAgICAgdXNlciA9PiB7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSk7XG4gICAgfVxufVxuIl19