(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@ionic/angular'), require('@angular/forms'), require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('npm-aio-auth', ['exports', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@ionic/angular', '@angular/forms', '@angular/core', '@angular/router'], factory) :
    (factory((global['npm-aio-auth'] = {}),global.ng.common,global.ng.common.http,global.rxjs,global.rxjs.operators,global.angular,global.ng.forms,global.ng.core,global.ng.router));
}(this, (function (exports,common,i1,rxjs,operators,angular,forms,i0,i1$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // then define injectionToken
    /** @type {?} */
    var AuthConfigService = new i0.InjectionToken('AuthConfig');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { AioAuthV01Service } from '../aio-auth-v01.service';
    var AuthenticationService = /** @class */ (function () {
        function AuthenticationService(http, authconfig) {
            this.http = http;
            this.authconfig = authconfig;
            this.currentUserSubject = new rxjs.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
            this.currentUser = this.currentUserSubject.asObservable();
        }
        Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
            get: /**
             * @return {?}
             */ function () {
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
         * @param {?} dataObj
         * @return {?}
         */
        AuthenticationService.prototype.login = /**
         * validate username and password
         * \@method: login
         * \@input: username & password
         * \@output: Users data object      *
         * @param {?} dataObj
         * @return {?}
         */
            function (dataObj) {
                var _this = this;
                return this.http.post(this.authconfig.ApiURL + '/login', dataObj)
                    .pipe(operators.tap((
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
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    rxjs.throwError(error);
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
                return this.http.post(this.authconfig.ApiURL + '/login', { username: username, password: password })
                    .pipe(operators.tap((
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
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    rxjs.throwError(error);
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
         * @param {?} dataObj
         * @return {?}
         */
        AuthenticationService.prototype.register = /**
         * \@method: register()
         * \@input: user data in Object
         * \@output: boolean
         * @param {?} dataObj
         * @return {?}
         */
            function (dataObj) {
                // console.log(displayName, full_name, email, password, provider, photoURL, access_token)
                return this.http.post(this.authconfig.ApiURL + '/create_user', dataObj)
                    .pipe(operators.tap(( /**
             * @param {?} user
             * @return {?}
             */function (user) {
                    return user;
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    rxjs.throwError(error);
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
                    .pipe(operators.tap(( /**
             * @param {?} resp
             * @return {?}
             */function (resp) {
                    return resp;
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    rxjs.throwError(error);
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
                return this.http.post(this.authconfig.ApiURL + '/create_user', { username: data.email, password: data.id, firstName: data.firstName, lastName: data.lastName, provider: data.provider, img_url: data.photoURL })
                    .pipe(operators.tap(( /**
             * @param {?} user
             * @return {?}
             */function (user) {
                    return user;
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    rxjs.throwError(error);
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
                return this.http.get('https://api.instagram.com/v1/users/self/?access_token=' + AccessToken).pipe(operators.tap(( /**
                 * @param {?} user
                 * @return {?}
                 */function (user) {
                    return user;
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    rxjs.throwError(error);
                })));
            };
        /**
         * Method to send the reset password link to user's email
         * @input: email/user Id
         * @ouput: boolean
         */
        /**
         * Method to send the reset password link to user's email
         * \@input: email/user Id
         * \@ouput: boolean
         * @param {?} emailAdd
         * @return {?}
         */
        AuthenticationService.prototype.resetPassword = /**
         * Method to send the reset password link to user's email
         * \@input: email/user Id
         * \@ouput: boolean
         * @param {?} emailAdd
         * @return {?}
         */
            function (emailAdd) {
                return this.http.post(this.authconfig.ApiURL + '/reset_password', { email: emailAdd })
                    .pipe(operators.tap(( /**
             * @param {?} resp
             * @return {?}
             */function (resp) {
                    return resp;
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    rxjs.throwError(error);
                })));
            };
        AuthenticationService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        AuthenticationService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        /** @nocollapse */ AuthenticationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.inject(i1.HttpClient), i0.inject(AuthConfigService)); }, token: AuthenticationService, providedIn: "root" });
        return AuthenticationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
             */ function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AioAuthV01Service.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] },
                { type: AuthenticationService }
            ];
        };
        /** @nocollapse */ AioAuthV01Service.ngInjectableDef = i0.defineInjectable({ factory: function AioAuthV01Service_Factory() { return new AioAuthV01Service(i0.inject(AuthConfigService), i0.inject(AuthenticationService)); }, token: AioAuthV01Service, providedIn: "root" });
        return AioAuthV01Service;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AioAuthV01Component = /** @class */ (function () {
        function AioAuthV01Component() {
        }
        /**
         * @return {?}
         */
        AioAuthV01Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AioAuthV01Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-aio-auth-v01',
                        template: "\n    <p>\n      aio-auth-v01 works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AioAuthV01Component.ctorParameters = function () { return []; };
        return AioAuthV01Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JwtInterceptor = /** @class */ (function () {
        function JwtInterceptor(authenticationService) {
            this.authenticationService = authenticationService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        JwtInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                // add authorization header with jwt token if available
                // add authorization header with jwt token if available
                /** @type {?} */
                var currentUser = this.authenticationService.currentUserValue;
                if (currentUser && currentUser.token) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: "Bearer " + currentUser.token
                        }
                    });
                }
                //console.log('clone header'+JSON.stringify(request))
                return next.handle(request);
            };
        JwtInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        JwtInterceptor.ctorParameters = function () {
            return [
                { type: AuthenticationService }
            ];
        };
        return JwtInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ErrorInterceptor = /** @class */ (function () {
        function ErrorInterceptor(authenticationService, router) {
            this.authenticationService = authenticationService;
            this.router = router;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        ErrorInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                return next.handle(request).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('Error Inceptor', err);
                    if (err.status === 401) {
                        // auto logout if 401 response returned from api
                        _this.authenticationService.logout();
                        _this.router.navigate(['/']);
                    }
                    /** @type {?} */
                    var error = err.error.message || err.statusText;
                    return rxjs.throwError(error);
                })));
            };
        ErrorInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ErrorInterceptor.ctorParameters = function () {
            return [
                { type: AuthenticationService },
                { type: i1$1.Router }
            ];
        };
        return ErrorInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(formBuilder, route, router, authenticationService, authconfig) {
            this.formBuilder = formBuilder;
            this.route = route;
            this.router = router;
            this.authenticationService = authenticationService;
            this.authconfig = authconfig;
            this.loading = false;
            this.submitted = false;
            this.error = '';
            this.showLogin = true;
            this.regURL = (this.authconfig.registerURL) ? this.authconfig.registerURL : 'register';
            this.resetPwdURL = (this.authconfig.resetPwdURL) ? this.authconfig.resetPwdURL : 'reset-password';
            this.loginBtnText = 'Login';
            this.RegBtnText = 'Register';
            this.heading = '';
            this.registerLink = 1;
            this.passwordHints = "";
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.authenticationService.currentUserValue) {
                    this.showLogin = false;
                    this.currentUser = this.authenticationService.currentUserValue;
                }
                this.registerLink = (this.registerLink == 1) ? 0 : 1;
                this.loginForm = this.formBuilder.group({
                    username: ['', forms.Validators.required],
                    password: ['', [forms.Validators.required, forms.Validators.minLength(6), forms.Validators.maxLength(30)]]
                });
                console.log(this.passwordHints);
                // reset login status
                // this.authenticationService.logout();
                // get return url from route parameters or default to '/'
                this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
            };
        Object.defineProperty(LoginComponent.prototype, "f", {
            // convenience getter for easy access to form fields
            get: 
            // convenience getter for easy access to form fields
            /**
             * @return {?}
             */
            function () { return this.loginForm.controls; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LoginComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.submitted = true;
                // stop here if form is invalid
                if (this.loginForm.invalid) {
                    return;
                }
                this.loading = true;
                this.authenticationService.login(this.f)
                    .pipe(operators.first())
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    _this.router.navigate([_this.returnUrl]);
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    console.log(error);
                    _this.error = error;
                    _this.loading = false;
                }));
            };
        LoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'td-login',
                        template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\" *ngIf=\"showLogin\">\n        <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n\n                <div *ngIf=\"passwordHints\" class=\"password-hints\">\n                    {{passwordHints}}\n                </div>\n\n                \n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-success btn-block\">{{loginBtnText}}</button>       \n            </div>         \n            </form>\n            <div class=\"form-group\">\n\n                <div [hidden]=\"!registerLink\" class=\"col-sm-6 text-center\">\n                        <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n                </div>\n                <div class=\"col-sm-6 text-center\">\n                    <a routerLink=\"/{{resetPwdURL}}\" id=\"resetPwd\">Forgot Password ?</a>               \n                </div>               \n        \n            </div>\n    </div>\n</div>\n\n<div class=\"clear\"></div>\n<div class=\"well\"  *ngIf=\"!showLogin\">\n    You are loggedIN with following details:<br/>\n    Username : {{currentUser.username}}\n    <p> First Name : {{currentUser.firstName}} </p>\n    <p> <td-log-out></td-log-out></p>\n</div>\n<div class=\"clear\"></div>\n<hr/>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.ActivatedRoute },
                { type: i1$1.Router },
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        LoginComponent.propDecorators = {
            loginBtnText: [{ type: i0.Input }],
            RegBtnText: [{ type: i0.Input }],
            heading: [{ type: i0.Input }],
            registerLink: [{ type: i0.Input }],
            passwordHints: [{ type: i0.Input }]
        };
        return LoginComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // custom validator to check that two fields match
    /**
     * @param {?} controlName
     * @param {?} matchingControlName
     * @return {?}
     */
    function MustMatch(controlName, matchingControlName) {
        return ( /**
         * @param {?} formGroup
         * @return {?}
         */function (formGroup) {
            /** @type {?} */
            var control = formGroup.controls[controlName];
            /** @type {?} */
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RegisterComponent = /** @class */ (function () {
        function RegisterComponent(fb, route, router, authenticationService, authconfig) {
            this.fb = fb;
            this.route = route;
            this.router = router;
            this.authenticationService = authenticationService;
            this.authconfig = authconfig;
            this.loading = false;
            this.submitted = false;
            this.error = '';
            this.custClass = '';
            this.frmShow = true;
            this.loginURL = (this.authconfig.loginURL) ? this.authconfig.loginURL : 'login';
            this.regSuccessMsg = (this.authconfig.regSuccessMsg) ? this.authconfig.regSuccessMsg : 'Successfully Submitted';
            this.loginBtnText = 'Login';
            this.RegBtnText = 'Register';
            this.heading = 'User Register';
            this.userExist = false;
            this.curEmail = '';
        }
        Object.defineProperty(RegisterComponent.prototype, "f", {
            // get controll value for form validatation 
            get: 
            // get controll value for form validatation 
            /**
             * @return {?}
             */
            function () { return this.registerForm.controls; },
            enumerable: true,
            configurable: true
        });
        /**
         * @ Method to do register
         * @ input: the required fields like username, email, password etc
         * @ output: objservable
         */
        /**
         * \@ Method to do register
         * \@ input: the required fields like username, email, password etc
         * \@ output: objservable
         * @return {?}
         */
        RegisterComponent.prototype.onSubmit = /**
         * \@ Method to do register
         * \@ input: the required fields like username, email, password etc
         * \@ output: objservable
         * @return {?}
         */
            function () {
                var _this = this;
                this.submitted = true;
                if (this.registerForm.invalid && this.userExist == false) {
                    console.log('Reg Form Error');
                    return;
                }
                this.loading = true;
                this.authenticationService.register(this.f)
                    .pipe(operators.first())
                    .subscribe(( /**
             * @param {?} resp
             * @return {?}
             */function (resp) {
                    if (resp.errorCode == null) {
                        _this.custClass = 'success';
                        _this.frmShow = false;
                    }
                    else if (resp.errorCode == 'user_exist') {
                        _this.userExist = true;
                    }
                    else {
                        _this.error = 'Something wrong';
                    }
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    _this.error = error;
                    _this.loading = false;
                }));
                //this.registerForm.reset(); 
            };
        /**
         * @return {?}
         */
        RegisterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.registerForm = this.fb.group({
                    email: ['', [forms.Validators.required, forms.Validators.email]],
                    firstName: ['', [forms.Validators.required, forms.Validators.minLength(2), forms.Validators.maxLength(30)]],
                    lastName: ['', [forms.Validators.required, forms.Validators.minLength(2), forms.Validators.maxLength(30)]],
                    password: ['', [forms.Validators.required, forms.Validators.minLength(6), forms.Validators.maxLength(30)]],
                    confirmPassword: ['', [forms.Validators.required, forms.Validators.minLength(6), forms.Validators.maxLength(30)]]
                }, {
                    validator: [MustMatch('password', 'confirmPassword')]
                });
            };
        /**
         * @param {?} email
         * @return {?}
         */
        RegisterComponent.prototype.isEmailUnique = /**
         * @param {?} email
         * @return {?}
         */
            function (email) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.f.firstName.value == "" && this.f.lastName.value == "") {
                                    return [2 /*return*/, false];
                                }
                                if (email == this.curEmail) {
                                    return [2 /*return*/, false];
                                }
                                else {
                                    this.curEmail = email;
                                }
                                return [4 /*yield*/, this.authenticationService.checkEmailExis(email)
                                        .pipe(operators.first(), operators.debounceTime(200), operators.distinctUntilChanged())
                                        .subscribe(( /**
                                 * @param {?} resp
                                 * @return {?}
                                 */function (resp) {
                                        if (resp.message != 'ok') {
                                            _this.userExist = true;
                                        }
                                        else {
                                            _this.userExist = false;
                                        }
                                    }), ( /**
                                     * @param {?} error
                                     * @return {?}
                                     */function (error) {
                                        _this.error = error;
                                        _this.loading = false;
                                    }))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        RegisterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'td-register',
                        template: "<!-- main app container -->\n\n              <h3 class=\"text-justify\">{{ heading }}</h3>\n              <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n              <div *ngIf=\"!frmShow && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n              <form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">                \n\n                  <div class=\"form-group\">\n                      <label>First Name</label>\n                      <input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                      <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Last Name</label>\n                      <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                      <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Email</label>\n                      <input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\"  id=\"email\" formControlName=\"email\" #emailAdd  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    \n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                      </div>\n                        <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Password</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Confirm Password</label>\n                      <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                      <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                          <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button class=\"btn btn-primary\">{{RegBtnText}}</button>\n                      <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n                  </div>\n              </form>",
                        styles: [".regForm{padding:10px}"]
                    }] }
        ];
        /** @nocollapse */
        RegisterComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.ActivatedRoute },
                { type: i1$1.Router },
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        RegisterComponent.propDecorators = {
            loginBtnText: [{ type: i0.Input }],
            RegBtnText: [{ type: i0.Input }],
            heading: [{ type: i0.Input }]
        };
        return RegisterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SocialUser = /** @class */ (function () {
        function SocialUser() {
        }
        return SocialUser;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FbloginComponent = /** @class */ (function () {
        function FbloginComponent(authconfig, router, route, authenticationService) {
            this.authconfig = authconfig;
            this.router = router;
            this.route = route;
            this.authenticationService = authenticationService;
            this.loading = false;
            this.submitted = false;
            this.error = '';
            this.btnText = 'SignIn/SignUp with ';
        }
        /**
         * @return {?}
         */
        FbloginComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var $fbProvider = this.authconfig.FBProvider;
                (( /** @type {?} */(window))).fbAsyncInit = ( /**
                 * @return {?}
                 */function () {
                    FB.init({
                        appId: $fbProvider,
                        autoLogAppEvents: true,
                        cookie: true,
                        xfbml: true,
                        version: 'v3.3'
                    });
                });
            };
        /**
         * @return {?}
         */
        FbloginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                (( /**
                 * @param {?} d
                 * @param {?} s
                 * @param {?} id
                 * @return {?}
                 */function (d, s, id) {
                    /** @type {?} */
                    var js;
                    /** @type {?} */
                    var fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.async = false;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                })(document, 'script', 'facebook-jssdk'));
            };
        /**
         * fbLogin method to check or do  facebook login
         * @input: none
         * @ouput: object
         *
         */
        /**
         * fbLogin method to check or do  facebook login
         * \@input: none
         * \@ouput: object
         *
         * @return {?}
         */
        FbloginComponent.prototype.fbLogin = /**
         * fbLogin method to check or do  facebook login
         * \@input: none
         * \@ouput: object
         *
         * @return {?}
         */
            function () {
                var _this = this;
                this.getFbUserData().then(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this.loading = true;
                    _this.authenticationService.fbRegister(data)
                        .pipe(operators.first())
                        .subscribe(( /**
                 * @param {?} resp
                 * @return {?}
                 */function (resp) {
                        _this.authenticationService.FBlogin(data).subscribe(( /**
                         * @param {?} result
                         * @return {?}
                         */function (result) {
                            _this.router.navigate([_this.authconfig.AfterLoginURL]);
                        }));
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        _this.error = error;
                        _this.loading = false;
                    }));
                })).catch(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    console.log(error);
                }));
            };
        /**
         * @method: Facebook Login
         * @input: Facebook App Id
         * @outpt: Object User data
         */
        /**
         * \@method: Facebook Login
         * \@input: Facebook App Id
         * \@outpt: Object User data
         * @return {?}
         */
        FbloginComponent.prototype.getFbUserData = /**
         * \@method: Facebook Login
         * \@input: Facebook App Id
         * \@outpt: Object User data
         * @return {?}
         */
            function () {
                return new Promise((( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    FB.login((( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        if (response.authResponse) {
                            /** @type {?} */
                            var authResponse_2 = response.authResponse;
                            FB.api("/me", { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' }, (( /**
                             * @param {?} fbUser
                             * @return {?}
                             */function (fbUser) {
                                /** @type {?} */
                                var user = new SocialUser();
                                user.id = fbUser.id;
                                user.email = fbUser.email;
                                user.photoURL = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                                user.firstName = fbUser.first_name;
                                user.lastName = fbUser.last_name;
                                user.authToken = authResponse_2.accessToken;
                                user.facebook = fbUser;
                                user.provider = "FACEBOOK";
                                resolve(user);
                            })));
                        }
                        else {
                            reject('User cancelled login or did not fully authorize.');
                        }
                    })), { scope: 'email' });
                })));
            };
        FbloginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-fblogin',
                        template: "<button class=\"btn facebook-btn social-btn btn-facebook\"  (click)=\"fbLogin()\" type=\"button\"> <span> {{ btnText }}</span> <i class=\"fa fa-facebook\"></i> </button>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FbloginComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] },
                { type: i1$1.Router },
                { type: i1$1.ActivatedRoute },
                { type: AuthenticationService }
            ];
        };
        FbloginComponent.propDecorators = {
            btnText: [{ type: i0.Input }]
        };
        return FbloginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GmailloginComponent = /** @class */ (function () {
        function GmailloginComponent(authenticationService, authconfig, router, route) {
            this.authenticationService = authenticationService;
            this.authconfig = authconfig;
            this.router = router;
            this.route = route;
            this.btnText = 'SignIn/SignUp with ';
            this.loading = false;
            this.submitted = false;
            this.error = '';
            this.initialize = ( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var clientSecretId = this.authconfig.gmailProvider;
                /** @type {?} */
                var G_ApiKey = this.authconfig.gmailAPIKey;
                /** @type {?} */
                var _this = this;
                return new Promise((( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    _this.loadScript(clientSecretId, 'https://apis.google.com/js/platform.js', (( /**
                     * @return {?}
                     */function () {
                        gapi.load('auth2', (( /**
                         * @return {?}
                         */function () {
                            _this.auth2 = gapi.auth2.init({
                                apiKey: G_ApiKey,
                                clientId: clientSecretId,
                                scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
                            });
                            _this.auth2.then((( /**
                             * @return {?}
                             */function () {
                                //_this._readyState.next(true);
                                resolve();
                            }))).catch((( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                reject(err);
                            })));
                        })));
                    })));
                })));
            });
        }
        /**
         * @return {?}
         */
        GmailloginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // get return url from route parameters or default to '/'
                this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
                this.initialize().then(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                })).catch(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    console.log(error, 'error');
                }));
            };
        /**
         * @param {?} id
         * @param {?} src
         * @param {?} onload
         * @param {?} async
         * @param {?} inner_text_content
         * @return {?}
         */
        GmailloginComponent.prototype.loadScript = /**
         * @param {?} id
         * @param {?} src
         * @param {?} onload
         * @param {?} async
         * @param {?} inner_text_content
         * @return {?}
         */
            function (id, src, onload, async, inner_text_content) {
                if (async === void 0) {
                    async = true;
                }
                if (inner_text_content === void 0) {
                    inner_text_content = '';
                }
                if (document.getElementById(id)) {
                    return;
                }
                src = 'https://apis.google.com/js/platform.js';
                /** @type {?} */
                var signInJS = document.createElement('script');
                signInJS.async = true;
                signInJS.src = src;
                signInJS.onload = onload;
                signInJS.text = 'Gmail Login'; // LinkedIn
                document.head.appendChild(signInJS);
            };
        /**
         * @return {?}
         */
        GmailloginComponent.prototype.signInWithGoogle = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                /** @type {?} */
                var isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
                /*  if(isSignedIn) {
                   let profile = this.getGoogleProfile();
                   this.authenticationService.register(profile.firstName, profile.lastName, profile.email, profile.id, profile.provider, profile.photoURL)
                   .pipe(first())
                   .subscribe(
                       resp => {
                         this.authenticationService.login(profile.email,profile.id).subscribe(result =>{
                           this.router.navigate([this.authconfig.AfterLoginURL]);
                         });
                       },
                       error => {
                           console.log(error)
                           this.error = error;
                           this.loading = false;
                       });
                 }else{ */
                gapi.auth2.getAuthInstance().signIn().then(( /**
                 * @param {?} users
                 * @return {?}
                 */function (users) {
                    /** @type {?} */
                    var profile = _this_1.getGoogleProfile();
                    _this_1.authenticationService.register(profile)
                        .pipe(operators.first())
                        .subscribe(( /**
                 * @param {?} resp
                 * @return {?}
                 */function (resp) {
                        _this_1.authenticationService.login(profile).subscribe(( /**
                         * @param {?} result
                         * @return {?}
                         */function (result) {
                            _this_1.router.navigate([_this_1.authconfig.AfterLoginURL]);
                        }));
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        console.log(error);
                        _this_1.error = error;
                        _this_1.loading = false;
                    }));
                })).catch(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    console.log('Cancelled');
                }));
                //}
            };
        /**
         * get Google user profile
         * @input: token
         * @output: object
         */
        /**
         * get Google user profile
         * \@input: token
         * \@output: object
         * @return {?}
         */
        GmailloginComponent.prototype.getGoogleProfile = /**
         * get Google user profile
         * \@input: token
         * \@output: object
         * @return {?}
         */
            function () {
                /** @type {?} */
                var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
                /** @type {?} */
                var token = '';
                //gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token;
                /** @type {?} */
                var backendToken = '';
                //gapi.auth2.currentUser.getAuthInstance().get().getAuthResponse(true).id_token;    
                /** @type {?} */
                var user = new SocialUser();
                user.id = profile.getId();
                user.email = profile.getEmail();
                user.photoURL = profile.getImageUrl();
                user.firstName = profile.getGivenName();
                user.lastName = profile.getFamilyName();
                user.authToken = token;
                user.idToken = backendToken;
                user.provider = "GOOGLE";
                return user;
            };
        GmailloginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-gmaillogin',
                        template: "<button class=\"btn google-btn social-btn btn-google\" (click)=\"signInWithGoogle()\" type=\"button\">  <span> {{ btnText }}</span><i class=\"fa fa-google-plus\"></i></button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GmailloginComponent.ctorParameters = function () {
            return [
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] },
                { type: i1$1.Router },
                { type: i1$1.ActivatedRoute }
            ];
        };
        GmailloginComponent.propDecorators = {
            btnText: [{ type: i0.Input }]
        };
        return GmailloginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'td-log-out',
                        template: "<a (click)=\"signOut()\" href=\"javascript:void(0)\"> Log Out</a>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LogOutComponent.ctorParameters = function () {
            return [
                { type: AuthenticationService },
                { type: i1$1.Router },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        return LogOutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InstaLoginComponent = /** @class */ (function () {
        // constructor start here 
        function InstaLoginComponent(router, authenticationService, authconfig) {
            this.router = router;
            this.authenticationService = authenticationService;
            this.authconfig = authconfig;
            this.accessToken = null;
            this.IGClientid = '';
            this.IGRedirectURL = '';
            this.btnText = 'Instagram Login';
        }
        //ngOnInit called at page load// 
        //ngOnInit called at page load// 
        /**
         * @return {?}
         */
        InstaLoginComponent.prototype.ngOnInit =
            //ngOnInit called at page load// 
            /**
             * @return {?}
             */
            function () {
                this.IGClientid = this.authconfig.IGClientid;
                this.IGRedirectURL = (this.authconfig.IGRedirectURL != '') ? this.authconfig.IGRedirectURL : this.authconfig.loginURL;
            };
        /**
         * @Method: open the pop up to authorized the user
         * @input: client Id
         * @output: access token
         *
         */
        /**
         * \@Method: open the pop up to authorized the user
         * \@input: client Id
         * \@output: access token
         *
         * @return {?}
         */
        InstaLoginComponent.prototype.instaSignIn = /**
         * \@Method: open the pop up to authorized the user
         * \@input: client Id
         * \@output: access token
         *
         * @return {?}
         */
            function () {
                this.authenticateInstagram(this.IGClientid, this.IGRedirectURL);
                return false;
            };
        /**
         * @method to open the popup and authenticate the Instagram User
         * @param instagramClientId
         * @param instagramRedirectUri
         * @output user data in object
         */
        /**
         * \@method to open the popup and authenticate the Instagram User
         * \@output user data in object
         * @param {?} instagramClientId
         * @param {?} instagramRedirectUri
         * @return {?}
         */
        InstaLoginComponent.prototype.authenticateInstagram = /**
         * \@method to open the popup and authenticate the Instagram User
         * \@output user data in object
         * @param {?} instagramClientId
         * @param {?} instagramRedirectUri
         * @return {?}
         */
            function (instagramClientId, instagramRedirectUri) {
                /** @type {?} */
                var that = this;
                // Pop-up window size, change if you want
                /** @type {?} */
                var popupWidth = 700;
                /** @type {?} */
                var popupHeight = 500;
                /** @type {?} */
                var popupLeft = (window.screen.width - popupWidth) / 2;
                /** @type {?} */
                var popupTop = (window.screen.height - popupHeight) / 2;
                // Url needs to point to instagram_auth.php
                /** @type {?} */
                var popup = window.open('instagram_auth.php', '', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeft + ',top=' + popupTop + '');
                popup.onload = ( /**
                 * @return {?}
                 */function () {
                    // Open authorize url in pop-up
                    if (window.location.hash.length == 0) {
                        popup.open('https://instagram.com/oauth/authorize/?client_id=' + instagramClientId + '&redirect_uri=' + instagramRedirectUri + '&response_type=token', '_self');
                    }
                    // An interval runs to get the access token from the pop-up
                    /** @type {?} */
                    var interval = setInterval(( /**
                     * @return {?}
                     */function () {
                        try {
                            // Check if hash exists                
                            if (popup.location.hash.length) {
                                // Hash found, that includes the access token
                                clearInterval(interval);
                                that.accessToken = popup.location.hash.slice(14); //slice #access_token= from string                                   
                                popup.close();
                                that.login_callback();
                            }
                        }
                        catch (evt) {
                            console.log('in err');
                            // Permission denied
                        }
                    }), 100);
                });
            };
        /**
         * @method Instagram Auth call back
         * @param none
         * @output json object
         */
        /**
         * \@method Instagram Auth call back
         * \@output json object
         * @return {?}
         */
        InstaLoginComponent.prototype.login_callback = /**
         * \@method Instagram Auth call back
         * \@output json object
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.accessToken) {
                    this.authenticationService.getInstaUserData(this.accessToken).subscribe(( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) {
                        if (result) {
                            /** @type {?} */
                            var profile_1 = result.data;
                            /** @type {?} */
                            var fullName = profile_1.full_name.split(" ");
                            // calling the user registration method 
                            _this.authenticationService.register(profile_1)
                                .pipe(operators.first())
                                .subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                                // after successs full registration, just called the login method.
                                _this.authenticationService.login(profile_1).subscribe(( /**
                                 * @param {?} result
                                 * @return {?}
                                 */function (result) {
                                    _this.router.navigate([_this.authconfig.AfterLoginURL]);
                                }));
                            }), ( /**
                             * @param {?} error
                             * @return {?}
                             */function (error) {
                                console.log(error);
                            }));
                        }
                    }));
                }
            };
        InstaLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'td-insta-login',
                        template: "<a id=\"instagram-button\" (click)=\"instaSignIn()\" class=\"btn btn-block btn-social btn-instagram\">\n  <i class=\"fa fa-instagram\"></i>  {{btnText}}\n</a>\n\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        InstaLoginComponent.ctorParameters = function () {
            return [
                { type: i1$1.Router },
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        InstaLoginComponent.propDecorators = {
            btnText: [{ type: i0.Input }]
        };
        return InstaLoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonLoginComponent = /** @class */ (function (_super) {
        __extends(IonLoginComponent, _super);
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
            { type: i0.Component, args: [{
                        selector: 'ion-login',
                        template: "<div id=\"logreg-forms\" *ngIf=\"showLogin\">\n  <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <ion-grid>\n          <ion-row justify-content-center>\n              <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                  <div text-center>\n                      <h3>  {{heading}} </h3>\n                  </div>\n                  <div padding>\n\n                      <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n\n                      <ion-item>\n                          <ion-label position=\"floating\">Username</ion-label>\n                          <ion-input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"></ion-input>                            \n                      </ion-item>\n                      <ion-item *ngIf=\"submitted && f.username.errors\" class=\"error-message\">\n                          <div  *ngIf=\"f.username.errors.required\">Username is required</div>\n                      </ion-item>\n                      <ion-item>\n                          <ion-label position=\"floating\" for=\"password\">Password</ion-label>\n                          <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"></ion-input>                            \n                      </ion-item>\n                      <ion-item *ngIf=\"submitted && f.password.errors\" class=\"error-message\">\n                          <div class=\"error-message\" *ngIf=\"f.password.errors.required\">Password is required</div>\n                      </ion-item>\n                      <ion-item>\n                          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"loading\" color=\"success\" class=\"btn btn-success btn-block\">Login\n                          </ion-button>\n                      </ion-item>\n                      \n                      <ion-item [hidden]=\"registerLink\">\n                        <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n                      </ion-item>\n                  </div>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </form>\n</div>\n\n<!--\n<div class=\"well\" *ngIf=\"!showLogin\">\n  You are loggedIN with following details:<br />\n\n  Username : {{currentUser.username}}\n  <p> First Name : {{currentUser.firstName}} </p>\n  <p> <td-log-out></td-log-out></p>\n</div>-->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        IonLoginComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.ActivatedRoute },
                { type: i1$1.Router },
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        return IonLoginComponent;
    }(LoginComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonRegComponent = /** @class */ (function (_super) {
        __extends(IonRegComponent, _super);
        function IonRegComponent(fb, route, router, authenticationService, authconfig) {
            var _this = _super.call(this, fb, route, router, authenticationService, authconfig) || this;
            _this.fb = fb;
            _this.route = route;
            _this.router = router;
            _this.authenticationService = authenticationService;
            _this.authconfig = authconfig;
            return _this;
        }
        /**
         * @return {?}
         */
        IonRegComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                _super.prototype.ngOnInit.call(this);
            };
        IonRegComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ion-reg',
                        template: "<!-- main app container -->\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n<div *ngIf=\"registerForm.valid && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n<form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <ion-grid>\n    <ion-row justify-content-center>\n\n    \n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n          <h3> {{heading}} </h3>\n        </div>\n        <div padding>\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"></ion-input> \n          </ion-item>\n          \n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\" id=\"email\" formControlName=\"email\" #emailAdd\n              class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" ></ion-input>           \n          </ion-item>\n\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n            <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n\n\n          <ion-item>\n              \n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"></ion-input>           \n          </ion-item>\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n              <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n\n          <ion-item>\n            <ion-button type=\"sumit\"  expand=\"block\" class=\"btn btn-primary btn-\">{{RegBtnText}}</ion-button>\n            <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        IonRegComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.ActivatedRoute },
                { type: i1$1.Router },
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        return IonRegComponent;
    }(RegisterComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResetPasswordComponent = /** @class */ (function () {
        function ResetPasswordComponent(formBuilder, route, router, authenticationService, authconfig) {
            this.formBuilder = formBuilder;
            this.route = route;
            this.router = router;
            this.authenticationService = authenticationService;
            this.authconfig = authconfig;
            this.loading = false;
            this.submitted = false;
            this.error = '';
            this.showLogin = true;
            this.loginURL = (this.authconfig.loginURL) ? this.authconfig.loginURL : 'login';
            this.resetPwdURL = (this.authconfig.resetPwdURL) ? this.authconfig.resetPwdURL : 'reset-password';
            this.successMsg = '';
            this.loginBtnText = 'Login';
            this.heading = 'Reset Password';
        }
        /**
         * @return {?}
         */
        ResetPasswordComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.resetPwdForm = this.formBuilder.group({
                    username: ['', [forms.Validators.required, forms.Validators.email]]
                });
                // reset login status
                // this.authenticationService.logout();
                // get return url from route parameters or default to '/'
                this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
            };
        Object.defineProperty(ResetPasswordComponent.prototype, "f", {
            // convenience getter for easy access to form fields
            get: 
            // convenience getter for easy access to form fields
            /**
             * @return {?}
             */
            function () { return this.resetPwdForm.controls; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ResetPasswordComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.submitted = true;
                // stop here if form is invalid
                if (this.resetPwdForm.invalid) {
                    return;
                }
                this.loading = true;
                this.authenticationService.resetPassword(this.f.username.value).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    if (res.message == "ok") {
                        _this.successMsg = "Password reset link has been sent to your registered email. To reset password check email.";
                    }
                    else {
                        _this.error = "Something wrong with server. Please try again";
                    }
                }));
            };
        ResetPasswordComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'reset-password',
                        template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\" *ngIf=\"showLogin\">\n        <form class=\"form-signin\" [formGroup]=\"resetPwdForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div *ngIf=\"successMsg\" class=\"text-success\">{{successMsg}}</div>\n            \n            <div class=\"form-group\">\n                <label for=\"username\">Email Address</label>\n                <input type=\"email\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>             \n            <div class=\"form-group\">\n                <button class=\"btn btn-success btn-block\">Reset Password</button>       \n            </div>         \n            </form>\n            <div class=\"form-group\">\n                <div class=\"col-sm-6 text-center\">\n                        <a routerLink=\"/{{loginURL}}\" id=\"newAccount\">{{loginBtnText}}</a>\n                </div>    \n        \n            </div>\n    </div>\n</div> \n<hr/>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ResetPasswordComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.ActivatedRoute },
                { type: i1$1.Router },
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        ResetPasswordComponent.propDecorators = {
            loginBtnText: [{ type: i0.Input }],
            heading: [{ type: i0.Input }]
        };
        return ResetPasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonResetPasswordComponent = /** @class */ (function (_super) {
        __extends(IonResetPasswordComponent, _super);
        function IonResetPasswordComponent(formBuilder, route, router, authenticationService, authconfig) {
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
        IonResetPasswordComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                _super.prototype.ngOnInit.call(this);
            };
        IonResetPasswordComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ion-reset-password',
                        template: "<div class=\"row pb-15\">\n    <div id=\"logreg-forms pb-4\">\n        <form class=\"form-signin\" [formGroup]=\"resetPwdForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n            <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n            <div *ngIf=\"successMsg\" class=\"text-success\">{{successMsg}}</div>\n            \n            <ion-item>\n                <ion-label position=\"floating\" for=\"username\">Username/Email Address</ion-label>\n                <ion-input type=\"email\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" ></ion-input>\n                \n            </ion-item>           \n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n\n            <ion-item>\n                <ion-button class=\"btn btn-success btn-block\">Reset Password</ion-button>       \n            </ion-item>         \n        </form>\n        <ion-item>                \n            <a routerLink=\"/{{loginURL}}\" id=\"newAccount\">{{loginBtnText}}</a>                \n        </ion-item>\n    </div>\n</div> \n<hr/>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        IonResetPasswordComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1$1.ActivatedRoute },
                { type: i1$1.Router },
                { type: AuthenticationService },
                { type: undefined, decorators: [{ type: i0.Inject, args: [AuthConfigService,] }] }
            ];
        };
        return IonResetPasswordComponent;
    }(ResetPasswordComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: 'login',
            component: LoginComponent
        }
    ];
    var AioAuthV01Module = /** @class */ (function () {
        function AioAuthV01Module() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        AioAuthV01Module.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: AioAuthV01Module,
                    providers: [
                        AioAuthV01Service,
                        {
                            provide: AuthConfigService,
                            useValue: config
                        }
                    ]
                };
            };
        AioAuthV01Module.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent, ResetPasswordComponent, IonResetPasswordComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.HttpClientModule,
                            angular.IonicModule,
                            i1$1.RouterModule.forChild(routes)
                        ],
                        providers: [
                            { provide: i1.HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                            { provide: i1.HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                        ],
                        exports: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent, ResetPasswordComponent, IonResetPasswordComponent, i1$1.RouterModule]
                    },] }
        ];
        return AioAuthV01Module;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuard = /** @class */ (function () {
        function AuthGuard(router) {
            this.router = router;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AuthGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                if (localStorage.getItem('currentUser')) {
                    // logged in so return true
                    return true;
                }
                // not logged in so redirect to login page with the return url
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            };
        AuthGuard.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () {
            return [
                { type: i1$1.Router }
            ];
        };
        /** @nocollapse */ AuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.inject(i1$1.Router)); }, token: AuthGuard, providedIn: "root" });
        return AuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AioAuthV01Service = AioAuthV01Service;
    exports.AioAuthV01Component = AioAuthV01Component;
    exports.AioAuthV01Module = AioAuthV01Module;
    exports.AuthConfigService = AuthConfigService;
    exports.AuthGuard = AuthGuard;
    exports.ɵm = ErrorInterceptor;
    exports.ɵl = JwtInterceptor;
    exports.ɵa = AuthenticationService;
    exports.ɵd = FbloginComponent;
    exports.ɵe = GmailloginComponent;
    exports.ɵg = InstaLoginComponent;
    exports.ɵh = IonLoginComponent;
    exports.ɵi = IonRegComponent;
    exports.ɵk = IonResetPasswordComponent;
    exports.ɵf = LogOutComponent;
    exports.ɵb = LoginComponent;
    exports.ɵc = RegisterComponent;
    exports.ɵj = ResetPasswordComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=npm-aio-auth.umd.js.map