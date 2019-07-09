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
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    login(username, password) {
        return this.http.post(this.authconfig.ApiURL + '/users/authenticate', { username, password })
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
        return this.http.post(this.authconfig.ApiURL + '/users/authenticate', { username, password })
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
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} email
     * @param {?} password
     * @param {?} provider
     * @param {?} photoURL
     * @return {?}
     */
    register(firstName, lastName, email, password, provider, photoURL) {
        return this.http.post(this.authconfig.ApiURL + '/users/register', { username: email, password: password, firstName: firstName, lastName: lastName, provider: provider, photoURL: photoURL })
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
        return this.http.post(this.authconfig.ApiURL + '/users/register', { username: data.email, password: data.id, firstName: data.firstName, lastName: data.lastName, provider: data.provider, photoURL: data.photoURL })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fpby1hdXRoLXYwMS8iLCJzb3VyY2VzIjpbImxpYi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFLL0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFJOUIsWUFBb0IsSUFBZ0IsRUFBc0MsVUFBc0I7UUFBNUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTlELENBQUM7Ozs7SUFFRCxJQUFXLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7Ozs7Ozs7OztJQVNELEtBQUssQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBRXJDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMscUJBQXFCLEVBQUUsRUFBRSxRQUFRLEVB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TSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxpQkFBaUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdE4sSUFBSSxDQUFFLEdBQUc7Ozs7UUFDTixJQUFJLENBQUMsRUFBRTtZQUNILE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7Ozs7UUFDRCxLQUFLLENBQUMsRUFBRTtZQUNKLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQ0YsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Ozs7Ozs7SUFPRCxnQkFBZ0IsQ0FBQyxXQUFXO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sd0RBQXdELEdBQUMsV0FBVyxDQUFDLENBQUUsSUFBSSxDQUFFLEdBQUc7Ozs7UUFDdEcsSUFBSSxDQUFDLEVBQUU7WUFDSCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7O1FBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDSixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUNGLENBQUMsQ0FBQztJQUNULENBQUM7OztZQWpJSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBUnpCLFVBQVU7NENBYXlCLE1BQU0sU0FBQyxpQkFBaUI7Ozs7Ozs7O0lBSGhFLG1EQUFrRDs7SUFDbEQsNENBQXFDOzs7OztJQUV6QixxQ0FBd0I7Ozs7O0lBQUcsMkNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vX21vZGVscy91c2VyJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuLy9pbXBvcnQgeyBBaW9BdXRoVjAxU2VydmljZSB9IGZyb20gJy4uL2Fpby1hdXRoLXYwMS5zZXJ2aWNlJztcbiBcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgY3VycmVudFVzZXJTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8VXNlcj47XG4gICAgcHVibGljIGN1cnJlbnRVc2VyOiBPYnNlcnZhYmxlPFVzZXI+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHJpdmF0ZSBhdXRoY29uZmlnOiBBdXRoQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJyZW50VXNlclZhbHVlKCk6IFVzZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlclN1YmplY3QudmFsdWU7XG4gICAgfVxuIFxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBcbiAgICAgKiBAbWV0aG9kOiBsb2dpblxuICAgICAqIEBpbnB1dDogdXNlcm5hbWUgJiBwYXNzd29yZFxuICAgICAqIEBvdXRwdXQ6IFVzZXJzIGRhdGEgb2JqZWN0ICAgICAgKiBcbiAgICAgKi9cblxuICAgIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICBcbiAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmF1dGhjb25maWcuQXBpVVJMKycvdXNlcnMvYXV0aGVudGljYXRlJywgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC5waXBlKCB0YXAoIC8vIExvZyB0aGUgcmVzdWx0IG9yIGVycm9yXG4gICAgICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclN1YmplY3QubmV4dCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7IFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmFjZWJvb2sgTG9naW5cbiAgICAgKi9cbiAgICBGQmxvZ2luKCBkYXRhIDogYW55ICl7XG4gICAgICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZW1haWw7XG4gICAgICAgIHZhciBwYXNzd29yZCA9IGRhdGEuaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYXV0aGNvbmZpZy5BcGlVUkwrJy91c2Vycy9hdXRoZW50aWNhdGUnLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnBpcGUoIHRhcCggLy8gTG9nIHRoZSByZXN1bHQgb3IgZXJyb3JcbiAgICAgICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5uZXh0KHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjsgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyByZW1vdmUgdXNlciBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gbG9nIHVzZXIgb3V0XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5uZXh0KG51bGwpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAbWV0aG9kOiByZWdpc3RlcigpXG4gICAgICogQGlucHV0OiB1c2VyIGRhdGEgaW4gT2JqZWN0XG4gICAgICogQG91dHB1dDogYm9vbGVhbiAgXG4gICAgICovXG4gICAgcmVnaXN0ZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwcm92aWRlciwgcGhvdG9VUkwpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hdXRoY29uZmlnLkFwaVVSTCsnL3VzZXJzL3JlZ2lzdGVyJywgeyB1c2VybmFtZTogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCwgZmlyc3ROYW1lOiBmaXJzdE5hbWUsIGxhc3ROYW1lOiBsYXN0TmFtZSwgcHJvdmlkZXI6IHByb3ZpZGVyLCBwaG90b1VSTDogcGhvdG9VUkwgfSlcbiAgICAgICAgLnBpcGUoIHRhcChcbiAgICAgICAgICAgIHVzZXIgPT4geyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyOyBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2sgZW1haWwgZXhpc3RhbmNlXG4gICAgICogQGlucHV0OiBlbWFpbFxuICAgICAqIEBvdXRwdXQ6IG9iamVjdFxuICAgICAqL1xuICAgIGNoZWNrRW1haWxFeGlzKGVtYWlsKXsgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmF1dGhjb25maWcuQXBpVVJMKycvdXNlcnMvYXV0aCcsIHsgZW1haWw6IGVtYWlsIH0pXG4gICAgICAgIC5waXBlKCB0YXAoXG4gICAgICAgICAgICByZXNwID0+IHsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHsgXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmFjZWJvb2sgUmVnaXN0cmF0aW9uL2xvZ2luXG4gICAgICovXG4gICAgZmJSZWdpc3RlcihkYXRhIDogYW55KXtcbiAgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmF1dGhjb25maWcuQXBpVVJMKycvdXNlcnMvcmVnaXN0ZXInLCB7IHVzZXJuYW1lOiBkYXRhLmVtYWlsLCBwYXNzd29yZDogZGF0YS5pZCwgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSwgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsIHByb3ZpZGVyOiBkYXRhLnByb3ZpZGVyLCBwaG90b1VSTDogZGF0YS5waG90b1VSTCB9KVxuICAgICAgICAucGlwZSggdGFwKFxuICAgICAgICAgICAgdXNlciA9PiB7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEluc3RhZ3JhbSBVc2VyIERhdGFcbiAgICAgKiBAaW5wdXQ6IGF1dGggdG9rZW4gaWRcbiAgICAgKiBAb3V0cHV0OiBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRJbnN0YVVzZXJEYXRhKEFjY2Vzc1Rva2VuKXsgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi8/YWNjZXNzX3Rva2VuPScrQWNjZXNzVG9rZW4pIC5waXBlKCB0YXAoXG4gICAgICAgICAgICB1c2VyID0+IHsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjsgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4geyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApKTtcbiAgICB9XG59XG4iXX0=