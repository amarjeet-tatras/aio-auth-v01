import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { __awaiter } from 'tslib';
import { tap, catchError, first, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Injectable, Inject, Component, Input, NgModule, defineInjectable, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// then define injectionToken
/** @type {?} */
const AuthConfigService = new InjectionToken('AuthConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { AioAuthV01Service } from '../aio-auth-v01.service';
class AuthenticationService {
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
/** @nocollapse */ AuthenticationService.ngInjectableDef = defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(inject(HttpClient), inject(AuthConfigService)); }, token: AuthenticationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AioAuthV01Service {
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
/** @nocollapse */ AioAuthV01Service.ngInjectableDef = defineInjectable({ factory: function AioAuthV01Service_Factory() { return new AioAuthV01Service(inject(AuthConfigService), inject(AuthenticationService)); }, token: AioAuthV01Service, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AioAuthV01Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AioAuthV01Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-aio-auth-v01',
                template: `
    <p>
      aio-auth-v01 works!
    </p>
  `
            }] }
];
/** @nocollapse */
AioAuthV01Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JwtInterceptor {
    /**
     * @param {?} authenticationService
     */
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // add authorization header with jwt token if available
        // add authorization header with jwt token if available
        /** @type {?} */
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        //console.log('clone header'+JSON.stringify(request))
        return next.handle(request);
    }
}
JwtInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
JwtInterceptor.ctorParameters = () => [
    { type: AuthenticationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorInterceptor {
    /**
     * @param {?} authenticationService
     * @param {?} router
     */
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next.handle(request).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            console.log(err);
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                this.router.navigate(['/']);
            }
            /** @type {?} */
            const error = err.error.message || err.statusText;
            return throwError(error);
        })));
    }
}
ErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ErrorInterceptor.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(formBuilder, route, router, authenticationService, authconfig) {
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
        this.loginBtnText = 'Login';
        this.RegBtnText = 'Register';
        this.heading = 'Sign In';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.authenticationService.currentUserValue) {
            this.showLogin = false;
            this.currentUser = this.authenticationService.currentUserValue;
        }
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
    }
    // convenience getter for easy access to form fields
    /**
     * @return {?}
     */
    get f() { return this.loginForm.controls; }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.router.navigate([this.returnUrl]);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error);
            this.error = error;
            this.loading = false;
        }));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-login',
                template: "<div id=\"logreg-forms\" *ngIf=\"showLogin\">\n    <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> {{heading}}</h1>         \n\n        <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-success btn-block\">{{loginBtnText}}</button>       \n        </div> \n        <div class=\"form-group\">\n                <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n        </div>\n        </form>\n \n        \n       \n</div>\n\n\n<div class=\"well\"  *ngIf=\"!showLogin\">\n        You are loggedIN with following details:<br/>\n\n        Username : {{currentUser.username}}\n        <p> First Name : {{currentUser.firstName}} </p>\n        <p> <td-log-out></td-log-out></p>\n    </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
LoginComponent.propDecorators = {
    loginBtnText: [{ type: Input }],
    RegBtnText: [{ type: Input }],
    heading: [{ type: Input }]
};

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
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    (formGroup) => {
        /** @type {?} */
        const control = formGroup.controls[controlName];
        /** @type {?} */
        const matchingControl = formGroup.controls[matchingControlName];
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
class RegisterComponent {
    /**
     * @param {?} fb
     * @param {?} route
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(fb, route, router, authenticationService, authconfig) {
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
    // get controll value for form validatation 
    /**
     * @return {?}
     */
    get f() { return this.registerForm.controls; }
    /**
     * \@ Method to do register
     * \@ input: the required fields like username, email, password etc
     * \@ output: objservable
     * @return {?}
     */
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid && this.userExist == false) {
            console.log('Reg Form Error');
            return;
        }
        this.loading = true;
        this.authenticationService.register(this.f.firstName.value, this.f.lastName.value, this.f.email.value, this.f.password.value, 'email', '')
            .pipe(first())
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
            if (resp.errorCode == null) {
                this.custClass = 'success';
                this.frmShow = false;
            }
            else if (resp.errorCode == 'user_exist') {
                this.userExist = true;
            }
            else {
                this.error = 'Something wrong';
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.error = error;
            this.loading = false;
        }));
        //this.registerForm.reset(); 
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
        }, {
            validator: [MustMatch('password', 'confirmPassword')]
        });
    }
    ;
    /**
     * @param {?} email
     * @return {?}
     */
    isEmailUnique(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.f.firstName.value == "" && this.f.lastName.value == "") {
                return false;
            }
            if (email == this.curEmail) {
                return false;
            }
            else {
                this.curEmail = email;
            }
            yield this.authenticationService.checkEmailExis(email)
                .pipe(first(), debounceTime(200), distinctUntilChanged())
                .subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                if (resp.message != 'ok') {
                    this.userExist = true;
                }
                else {
                    this.userExist = false;
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.error = error;
                this.loading = false;
            }));
        });
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-register',
                template: "<!-- main app container -->\n\n              <h3 class=\"text-justify\">{{ heading }}</h3>\n              <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n              <div *ngIf=\"!frmShow && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n              <form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">                \n\n                  <div class=\"form-group\">\n                      <label>First Name</label>\n                      <input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                      <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Last Name</label>\n                      <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                      <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Email</label>\n                      <input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\"  id=\"email\" formControlName=\"email\" #emailAdd  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    \n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                      </div>\n                        <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Password</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Confirm Password</label>\n                      <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                      <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                          <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button class=\"btn btn-primary\">{{RegBtnText}}</button>\n                      <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n                  </div>\n              </form>",
                styles: [".regForm{padding:10px}"]
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
RegisterComponent.propDecorators = {
    loginBtnText: [{ type: Input }],
    RegBtnText: [{ type: Input }],
    heading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SocialUser {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FbloginComponent {
    /**
     * @param {?} authconfig
     * @param {?} router
     * @param {?} route
     * @param {?} authenticationService
     */
    constructor(authconfig, router, route, authenticationService) {
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
    ngAfterViewInit() {
        /** @type {?} */
        let $fbProvider = this.authconfig.FBProvider;
        ((/** @type {?} */ (window))).fbAsyncInit = (/**
         * @return {?}
         */
        function () {
            FB.init({
                appId: $fbProvider,
                autoLogAppEvents: true,
                cookie: true,
                xfbml: true,
                version: 'v3.3'
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        ((/**
         * @param {?} d
         * @param {?} s
         * @param {?} id
         * @return {?}
         */
        function (d, s, id) {
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
    }
    /**
     * fbLogin method to check or do  facebook login
     * \@input: none
     * \@ouput: object
     *
     * @return {?}
     */
    fbLogin() {
        this.getFbUserData().then((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.loading = true;
            this.authenticationService.fbRegister(data)
                .pipe(first())
                .subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                this.authenticationService.FBlogin(data).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => {
                    this.router.navigate([this.authconfig.AfterLoginURL]);
                }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.error = error;
                this.loading = false;
            }));
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error);
        }));
    }
    /**
     * \@method: Facebook Login
     * \@input: Facebook App Id
     * \@outpt: Object User data
     * @return {?}
     */
    getFbUserData() {
        return new Promise(((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            FB.login(((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.authResponse) {
                    /** @type {?} */
                    var authResponse_2 = response.authResponse;
                    FB.api("/me", { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' }, ((/**
                     * @param {?} fbUser
                     * @return {?}
                     */
                    function (fbUser) {
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
    }
}
FbloginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-fblogin',
                template: "<button class=\"btn facebook-btn social-btn btn-facebook\"  (click)=\"fbLogin()\" type=\"button\"> <span> {{ btnText }}</span> <i class=\"fa fa-facebook\"></i> </button>",
                styles: [""]
            }] }
];
/** @nocollapse */
FbloginComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] },
    { type: Router },
    { type: ActivatedRoute },
    { type: AuthenticationService }
];
FbloginComponent.propDecorators = {
    btnText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GmailloginComponent {
    /**
     * @param {?} authenticationService
     * @param {?} authconfig
     * @param {?} router
     * @param {?} route
     */
    constructor(authenticationService, authconfig, router, route) {
        this.authenticationService = authenticationService;
        this.authconfig = authconfig;
        this.router = router;
        this.route = route;
        this.btnText = 'SignIn/SignUp with ';
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.initialize = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            let clientSecretId = this.authconfig.gmailProvider;
            /** @type {?} */
            let G_ApiKey = this.authconfig.gmailAPIKey;
            /** @type {?} */
            var _this = this;
            return new Promise(((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                _this.loadScript(clientSecretId, 'https://apis.google.com/js/platform.js', ((/**
                 * @return {?}
                 */
                function () {
                    gapi.load('auth2', ((/**
                     * @return {?}
                     */
                    function () {
                        _this.auth2 = gapi.auth2.init({
                            apiKey: G_ApiKey,
                            clientId: clientSecretId,
                            scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
                        });
                        _this.auth2.then(((/**
                         * @return {?}
                         */
                        function () {
                            //_this._readyState.next(true);
                            resolve();
                        }))).catch(((/**
                         * @param {?} err
                         * @return {?}
                         */
                        function (err) {
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
    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
        this.initialize().then((/**
         * @param {?} response
         * @return {?}
         */
        response => {
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log(error, 'error');
        }));
    }
    /**
     * @param {?} id
     * @param {?} src
     * @param {?} onload
     * @param {?} async
     * @param {?} inner_text_content
     * @return {?}
     */
    loadScript(id, src, onload, async, inner_text_content) {
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
    }
    ;
    /**
     * @return {?}
     */
    signInWithGoogle() {
        /** @type {?} */
        const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
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
        gapi.auth2.getAuthInstance().signIn().then((/**
         * @param {?} users
         * @return {?}
         */
        users => {
            /** @type {?} */
            let profile = this.getGoogleProfile();
            this.authenticationService.register(profile.firstName, profile.lastName, profile.email, profile.id, profile.provider, profile.photoURL)
                .pipe(first())
                .subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                this.authenticationService.login(profile.email, profile.id).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => {
                    this.router.navigate([this.authconfig.AfterLoginURL]);
                }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                console.log(error);
                this.error = error;
                this.loading = false;
            }));
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            console.log('Cancelled');
        }));
        //}
    }
    /**
     * get Google user profile
     * \@input: token
     * \@output: object
     * @return {?}
     */
    getGoogleProfile() {
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
    }
}
GmailloginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gmaillogin',
                template: "<button class=\"btn google-btn social-btn btn-google\" (click)=\"signInWithGoogle()\" type=\"button\">  <span> {{ btnText }}</span><i class=\"fa fa-google-plus\"></i></button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
GmailloginComponent.ctorParameters = () => [
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] },
    { type: Router },
    { type: ActivatedRoute }
];
GmailloginComponent.propDecorators = {
    btnText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogOutComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InstaLoginComponent {
    // constructor start here 
    /**
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(router, authenticationService, authconfig) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authconfig = authconfig;
        this.accessToken = null;
        this.IGClientid = '';
        this.IGRedirectURL = '';
        this.btnText = 'Instagram Login';
    }
    //ngOnInit called at page load// 
    /**
     * @return {?}
     */
    ngOnInit() {
        this.IGClientid = this.authconfig.IGClientid;
        this.IGRedirectURL = (this.authconfig.IGRedirectURL != '') ? this.authconfig.IGRedirectURL : this.authconfig.loginURL;
    }
    /**
     * \@Method: open the pop up to authorized the user
     * \@input: client Id
     * \@output: access token
     *
     * @return {?}
     */
    instaSignIn() {
        this.authenticateInstagram(this.IGClientid, this.IGRedirectURL);
        return false;
    }
    /**
     * \@method to open the popup and authenticate the Instagram User
     * \@output user data in object
     * @param {?} instagramClientId
     * @param {?} instagramRedirectUri
     * @return {?}
     */
    authenticateInstagram(instagramClientId, instagramRedirectUri) {
        /** @type {?} */
        let that = this;
        // Pop-up window size, change if you want
        /** @type {?} */
        let popupWidth = 700;
        /** @type {?} */
        let popupHeight = 500;
        /** @type {?} */
        let popupLeft = (window.screen.width - popupWidth) / 2;
        /** @type {?} */
        let popupTop = (window.screen.height - popupHeight) / 2;
        // Url needs to point to instagram_auth.php
        /** @type {?} */
        let popup = window.open('instagram_auth.php', '', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeft + ',top=' + popupTop + '');
        popup.onload = (/**
         * @return {?}
         */
        () => {
            // Open authorize url in pop-up
            if (window.location.hash.length == 0) {
                popup.open('https://instagram.com/oauth/authorize/?client_id=' + instagramClientId + '&redirect_uri=' + instagramRedirectUri + '&response_type=token', '_self');
            }
            // An interval runs to get the access token from the pop-up
            /** @type {?} */
            let interval = setInterval((/**
             * @return {?}
             */
            () => {
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
    }
    ;
    /**
     * \@method Instagram Auth call back
     * \@output json object
     * @return {?}
     */
    login_callback() {
        if (this.accessToken) {
            this.authenticationService.getInstaUserData(this.accessToken).subscribe((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                if (result) {
                    /** @type {?} */
                    let profile = result.data;
                    /** @type {?} */
                    let fullName = profile.full_name.split(" ");
                    // calling the user registration method 
                    this.authenticationService.register(fullName[0], (fullName[1] ? fullName[1] : '.'), profile.username, profile.id, 'INSTAGRAM', profile.profile_picture)
                        .pipe(first())
                        .subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        // after successs full registration, just called the login method.
                        this.authenticationService.login(profile.username, profile.id).subscribe((/**
                         * @param {?} result
                         * @return {?}
                         */
                        result => {
                            this.router.navigate([this.authconfig.AfterLoginURL]);
                        }));
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    error => {
                        console.log(error);
                    }));
                }
            }));
        }
    }
}
InstaLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-insta-login',
                template: "<a id=\"instagram-button\" (click)=\"instaSignIn()\" class=\"btn btn-block btn-social btn-instagram\">\n  <i class=\"fa fa-instagram\"></i>  {{btnText}}\n</a>\n\n",
                styles: [""]
            }] }
];
/** @nocollapse */
InstaLoginComponent.ctorParameters = () => [
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];
InstaLoginComponent.propDecorators = {
    btnText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonLoginComponent extends LoginComponent {
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
IonLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-login',
                template: "<div id=\"logreg-forms\" *ngIf=\"showLogin\">\n  <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n      <ion-grid>\n          <ion-row justify-content-center>\n              <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                  <div text-center>\n                      <h3>  {{heading}} </h3>\n                  </div>\n                  <div padding>\n\n                      <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n\n                      <ion-item>\n                          <ion-label position=\"floating\">Username</ion-label>\n                          <ion-input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"></ion-input>                            \n                      </ion-item>\n                      <ion-item *ngIf=\"submitted && f.username.errors\" class=\"error-message\">\n                          <div  *ngIf=\"f.username.errors.required\">Username is required</div>\n                      </ion-item>\n                      <ion-item>\n                          <ion-label position=\"floating\" for=\"password\">Password</ion-label>\n                          <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"></ion-input>                            \n                      </ion-item>\n                      <ion-item *ngIf=\"submitted && f.password.errors\" class=\"error-message\">\n                          <div class=\"error-message\" *ngIf=\"f.password.errors.required\">Password is required</div>\n                      </ion-item>\n                      <ion-item>\n                          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"loading\" color=\"success\" class=\"btn btn-success btn-block\">Login\n                          </ion-button>\n                      </ion-item>\n                      <ion-item>\n                        <a routerLink=\"/{{regURL}}\" id=\"newAccount\">{{RegBtnText}}</a>\n                      </ion-item>\n                  </div>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </form>\n</div>\n\n\n<div class=\"well\" *ngIf=\"!showLogin\">\n  You are loggedIN with following details:<br />\n\n  Username : {{currentUser.username}}\n  <p> First Name : {{currentUser.firstName}} </p>\n  <!-- <p> <td-log-out></td-log-out></p>-->\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
IonLoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonRegComponent extends RegisterComponent {
    /**
     * @param {?} fb
     * @param {?} route
     * @param {?} router
     * @param {?} authenticationService
     * @param {?} authconfig
     */
    constructor(fb, route, router, authenticationService, authconfig) {
        super(fb, route, router, authenticationService, authconfig);
        this.fb = fb;
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
IonRegComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-reg',
                template: "<!-- main app container -->\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n<div *ngIf=\"registerForm.valid && submitted && regSuccessMsg\" class=\"alert alert-{{custClass}}\">{{regSuccessMsg}}</div>\n\n<form *ngIf=\"frmShow\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <ion-grid>\n    <ion-row justify-content-center>\n\n    \n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n          <h3> {{heading}} </h3>\n        </div>\n        <div padding>\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" tabindex=\"-1\" formControlName=\"firstName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"></ion-input> \n          </ion-item>\n          \n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"text\" (blur)=\"isEmailUnique(emailAdd.value)\" id=\"email\" formControlName=\"email\" #emailAdd\n              class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" ></ion-input>           \n          </ion-item>\n\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n            <div *ngIf=\"userExist\" class=\"invalid-feedback\">This Email is already exists.</div>\n\n\n          <ion-item>\n              \n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"></ion-input>            \n          </ion-item>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"></ion-input>           \n          </ion-item>\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n              <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n\n          <ion-item>\n            <ion-button type=\"sumit\"  expand=\"block\" class=\"btn btn-primary btn-\">{{RegBtnText}}</ion-button>\n            <a routerLink=\"/{{loginURL}}\" routerLinkActive=\"active\" class=\"pull-right\">{{loginBtnText}}</a>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
IonRegComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Router },
    { type: AuthenticationService },
    { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AioAuthV01Module {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
AioAuthV01Module.decorators = [
    { type: NgModule, args: [{
                declarations: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule,
                    IonicModule
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                ],
                exports: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(Router)); }, token: AuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AioAuthV01Service, AioAuthV01Component, AioAuthV01Module, AuthConfigService, AuthGuard, ErrorInterceptor as ɵk, JwtInterceptor as ɵj, AuthenticationService as ɵa, FbloginComponent as ɵd, GmailloginComponent as ɵe, InstaLoginComponent as ɵg, IonLoginComponent as ɵh, IonRegComponent as ɵi, LogOutComponent as ɵf, LoginComponent as ɵb, RegisterComponent as ɵc };

//# sourceMappingURL=aio-auth-v01.js.map