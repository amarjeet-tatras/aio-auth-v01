/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialUser } from '../_services/user';
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
        this.initialize = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var clientSecretId = this.authconfig.gmailProvider;
            /** @type {?} */
            var G_ApiKey = this.authconfig.gmailAPIKey;
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
    GmailloginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
        this.initialize().then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
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
    ;
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
        gapi.auth2.getAuthInstance().signIn().then((/**
         * @param {?} users
         * @return {?}
         */
        function (users) {
            /** @type {?} */
            var profile = _this_1.getGoogleProfile();
            _this_1.authenticationService.register(profile)
                .pipe(first())
                .subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                _this_1.authenticationService.login(profile).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    _this_1.router.navigate([_this_1.authconfig.AfterLoginURL]);
                }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                console.log(error);
                _this_1.error = error;
                _this_1.loading = false;
            }));
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
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
        ;
        user.authToken = token;
        user.idToken = backendToken;
        user.provider = "GOOGLE";
        return user;
    };
    GmailloginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-gmaillogin',
                    template: "<button class=\"btn google-btn social-btn btn-google\" (click)=\"signInWithGoogle()\" type=\"button\">  <span> {{ btnText }}</span><i class=\"fa fa-google-plus\"></i></button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GmailloginComponent.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] },
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    GmailloginComponent.propDecorators = {
        btnText: [{ type: Input }]
    };
    return GmailloginComponent;
}());
export { GmailloginComponent };
if (false) {
    /** @type {?} */
    GmailloginComponent.prototype.btnText;
    /** @type {?} */
    GmailloginComponent.prototype.loading;
    /** @type {?} */
    GmailloginComponent.prototype.submitted;
    /** @type {?} */
    GmailloginComponent.prototype.returnUrl;
    /** @type {?} */
    GmailloginComponent.prototype.error;
    /** @type {?} */
    GmailloginComponent.prototype.initialize;
    /**
     * @type {?}
     * @private
     */
    GmailloginComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    GmailloginComponent.prototype.authconfig;
    /**
     * @type {?}
     * @private
     */
    GmailloginComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    GmailloginComponent.prototype.route;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ21haWxsb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ucG0tYWlvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvZ21haWxsb2dpbi9nbWFpbGxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQVFFLDZCQUFvQixxQkFBNEMsRUFDM0IsVUFBc0IsRUFBUyxNQUFjLEVBQVcsS0FBcUI7UUFEOUYsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUMzQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFXLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRnpHLFlBQU8sR0FBVyxxQkFBcUIsQ0FBQztRQUkvQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQWNkLGVBQVU7OztRQUFHOztnQkFDUCxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztnQkFDOUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVzs7Z0JBQ3BDLEtBQUssR0FBRyxJQUFJO1lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUM7Ozs7O1lBQ2pCLFVBQVUsT0FBTyxFQUFFLE1B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QUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUFBLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Z0JBdklGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw2TEFBMEM7O2lCQUUzQzs7OztnQkFUUSxxQkFBcUI7Z0RBY3pCLE1BQU0sU0FBQyxpQkFBaUI7Z0JBWnBCLE1BQU07Z0JBQUUsY0FBYzs7OzBCQVU1QixLQUFLOztJQWlJUiwwQkFBQztDQUFBLEFBeElELElBd0lDO1NBbklZLG1CQUFtQjs7O0lBRTlCLHNDQUFpRDs7SUFJL0Msc0NBQWdCOztJQUNoQix3Q0FBa0I7O0lBQ2xCLHdDQUFrQjs7SUFDbEIsb0NBQVc7O0lBY2QseUNBMkJFOzs7OztJQS9DVyxvREFBb0Q7Ozs7O0lBQzlELHlDQUF5RDs7Ozs7SUFBQyxxQ0FBc0I7Ozs7O0lBQUcsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNvY2lhbFVzZXIgfSBmcm9tICcuLi9fc2VydmljZXMvdXNlcic7XG5kZWNsYXJlIHZhciBnYXBpIDogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdtYWlsbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ21haWxsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dtYWlsbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdtYWlsbG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGJ0blRleHQ6IFN0cmluZyA9ICdTaWduSW4vU2lnblVwIHdpdGggJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwcml2YXRlIGF1dGhjb25maWc6IEF1dGhDb25maWcscHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm5Vcmw6IHN0cmluZztcbiAgICBlcnJvciA9ICcnO1xuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgIC8vIGdldCByZXR1cm4gdXJsIGZyb20gcm91dGUgcGFyYW1ldGVycyBvciBkZWZhdWx0IHRvICcvJ1xuICAgICAgdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCB0aGlzLmF1dGhjb25maWcuQWZ0ZXJMb2dpblVSTDtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIFxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCdlcnJvcicpXG4gICAgICB9KTtcbiAgICAgIFxuICAgfVxuXG4gaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgIGxldCBjbGllbnRTZWNyZXRJZCA9IHRoaXMuYXV0aGNvbmZpZy5nbWFpbFByb3ZpZGVyO1xuICAgbGV0IEdfQXBpS2V5ID0gdGhpcy5hdXRoY29uZmlnLmdtYWlsQVBJS2V5O1xuICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICByZXR1cm4gbmV3IFByb21pc2UoKFxuICAgICAgIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgIF90aGlzLmxvYWRTY3JpcHQoY2xpZW50U2VjcmV0SWQsICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbGF0Zm9ybS5qcycsIChcbiAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgIGdhcGkubG9hZCgnYXV0aDInLCAoXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgIF90aGlzLmF1dGgyID0gZ2FwaS5hdXRoMi5pbml0KHtcbiAgICAgICAgICAgICAgICAgIGFwaUtleTogR19BcGlLZXksXG4gICAgICAgICAgICAgICAgICBjbGllbnRJZDogY2xpZW50U2VjcmV0SWQsXG4gICAgICAgICAgICAgICAgICBzY29wZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8ucHJvZmlsZSBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLmVtYWlsIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvcGx1cy5tZSdcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgIF90aGlzLmF1dGgyLnRoZW4oKFxuICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vX3RoaXMuX3JlYWR5U3RhdGUubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKChcbiAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICB9KSk7XG4gICAgICAgICB9KSk7XG4gICAgIH0pKTtcbiB9O1xuIFxuICBcbiAgbG9hZFNjcmlwdChpZCwgc3JjLCBvbmxvYWQsIGFzeW5jLCBpbm5lcl90ZXh0X2NvbnRlbnQpIHtcbiAgICAgIGlmIChhc3luYyA9PT0gdm9pZCAwKSB7IGFzeW5jID0gdHJ1ZTsgfVxuICAgICAgaWYgKGlubmVyX3RleHRfY29udGVudCA9PT0gdm9pZCAwKSB7IGlubmVyX3RleHRfY29udGVudCA9ICcnOyB9XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3JjPSAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGxhdGZvcm0uanMnO1xuICAgICAgXG4gICAgICB2YXIgc2lnbkluSlMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNpZ25JbkpTLmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNpZ25JbkpTLnNyYyA9IHNyYztcbiAgICAgIHNpZ25JbkpTLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgIHNpZ25JbkpTLnRleHQgPSAnR21haWwgTG9naW4nOyAvLyBMaW5rZWRJblxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzaWduSW5KUyk7XG4gIH07XG5cbiAgc2lnbkluV2l0aEdvb2dsZSAoKSB7IFxuICAgICAgY29uc3QgaXNTaWduZWRJbiA9IGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKTtcbiAgICAgLyogIGlmKGlzU2lnbmVkSW4pIHtcbiAgICAgICAgbGV0IHByb2ZpbGUgPSB0aGlzLmdldEdvb2dsZVByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UucmVnaXN0ZXIocHJvZmlsZS5maXJzdE5hbWUsIHByb2ZpbGUubGFzdE5hbWUsIHByb2ZpbGUuZW1haWwsIHByb2ZpbGUuaWQsIHByb2ZpbGUucHJvdmlkZXIsIHByb2ZpbGUucGhvdG9VUkwpXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4ocHJvZmlsZS5lbWFpbCxwcm9maWxlLmlkKS5zdWJzY3JpYmUocmVzdWx0ID0+e1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhjb25maWcuQWZ0ZXJMb2dpblVSTF0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9ZWxzZXsgKi9cbiAgICAgICAgZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKS50aGVuKHVzZXJzID0+e1xuICAgICAgICAgIGxldCBwcm9maWxlID0gdGhpcy5nZXRHb29nbGVQcm9maWxlKCk7XG5cbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3Rlcihwcm9maWxlKVxuICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4ocHJvZmlsZSkuc3Vic2NyaWJlKHJlc3VsdCA9PntcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhjb25maWcuQWZ0ZXJMb2dpblVSTF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9KS5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbmNlbGxlZCcpO1xuICAgICAgICB9KVxuICAgICAgLy99XG4gIH1cblxuICAvKipcbiAgICogZ2V0IEdvb2dsZSB1c2VyIHByb2ZpbGVcbiAgICogQGlucHV0OiB0b2tlblxuICAgKiBAb3V0cHV0OiBvYmplY3RcbiAgICovXG4gIGdldEdvb2dsZVByb2ZpbGUoKXtcbiAgICAgIHZhciBwcm9maWxlID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5jdXJyZW50VXNlci5nZXQoKS5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgICAgIFxuICAgICAgdmFyIHRva2VuID0gJyc7Ly9nYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmN1cnJlbnRVc2VyLmdldCgpLmdldEF1dGhSZXNwb25zZSh0cnVlKS5hY2Nlc3NfdG9rZW47XG4gICAgICB2YXIgYmFja2VuZFRva2VuID0gJyc7Ly9nYXBpLmF1dGgyLmN1cnJlbnRVc2VyLmdldEF1dGhJbnN0YW5jZSgpLmdldCgpLmdldEF1dGhSZXNwb25zZSh0cnVlKS5pZF90b2tlbjsgICAgXG4gICAgICB2YXIgdXNlciA9IG5ldyBTb2NpYWxVc2VyKCk7XG4gICAgICB1c2VyLmlkID0gcHJvZmlsZS5nZXRJZCgpO1xuICAgICAgdXNlci5lbWFpbCA9IHByb2ZpbGUuZ2V0RW1haWwoKTtcbiAgICAgIHVzZXIucGhvdG9VUkwgPSBwcm9maWxlLmdldEltYWdlVXJsKCk7XG4gICAgICB1c2VyLmZpcnN0TmFtZSA9IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCk7XG4gICAgICB1c2VyLmxhc3ROYW1lID0gcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCk7O1xuICAgICAgdXNlci5hdXRoVG9rZW4gPSB0b2tlbjtcbiAgICAgIHVzZXIuaWRUb2tlbiA9IGJhY2tlbmRUb2tlbjtcbiAgICAgIHVzZXIucHJvdmlkZXIgPSBcIkdPT0dMRVwiO1xuICAgICAgcmV0dXJuIHVzZXI7XG4gIH1cbn1cbiJdfQ==