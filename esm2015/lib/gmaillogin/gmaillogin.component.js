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
export class GmailloginComponent {
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
        ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ21haWxsb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9haW8tYXV0aC12MDEvIiwic291cmNlcyI6WyJsaWIvZ21haWxsb2dpbi9nbWFpbGxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU8vQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBRzlCLFlBQW9CLHFCQUE0QyxFQUMzQixVQUFzQixFQUFTLE1BQWMsRUFBVyxLQUFxQjtRQUQ5RiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzNCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGekcsWUFBTyxHQUFXLHFCQUFxQixDQUFDO1FBSS9DLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBY2QsZUFBVTs7O1FBQUc7O2dCQUNQLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7O2dCQUM5QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXOztnQkFDcEMsS0FBSyxHQUFHLElBQUk7WUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQzs7Ozs7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QyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUFBLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7O1lBdklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw2TEFBMEM7O2FBRTNDOzs7O1lBVFEscUJBQXFCOzRDQWN6QixNQUFNLFNBQUMsaUJBQWlCO1lBWnBCLE1BQU07WUFBRSxjQUFjOzs7c0JBVTVCLEtBQUs7Ozs7SUFBTixzQ0FBaUQ7O0lBSS9DLHNDQUFnQjs7SUFDaEIsd0NBQWtCOztJQUNsQix3Q0FBa0I7O0lBQ2xCLG9DQUFXOztJQWNkLHlDQTJCRTs7Ozs7SUEvQ1csb0RBQW9EOzs7OztJQUM5RCx5Q0FBeUQ7Ozs7O0lBQUMscUNBQXNCOzs7OztJQUFHLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTb2NpYWxVc2VyIH0gZnJvbSAnLi4vX3NlcnZpY2VzL3VzZXInO1xuZGVjbGFyZSB2YXIgZ2FwaSA6IGFueTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1nbWFpbGxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dtYWlsbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbWFpbGxvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbWFpbGxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBidG5UZXh0OiBTdHJpbmcgPSAnU2lnbkluL1NpZ25VcCB3aXRoICc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHJpdmF0ZSBhdXRoY29uZmlnOiBBdXRoQ29uZmlnLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgc3VibWl0dGVkID0gZmFsc2U7XG4gICAgcmV0dXJuVXJsOiBzdHJpbmc7XG4gICAgZXJyb3IgPSAnJztcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAvLyBnZXQgcmV0dXJuIHVybCBmcm9tIHJvdXRlIHBhcmFtZXRlcnMgb3IgZGVmYXVsdCB0byAnLydcbiAgICAgIHRoaXMucmV0dXJuVXJsID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1sncmV0dXJuVXJsJ10gfHwgdGhpcy5hdXRoY29uZmlnLkFmdGVyTG9naW5VUkw7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwnZXJyb3InKVxuICAgICAgfSk7XG4gICAgICBcbiAgIH1cblxuIGluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICBsZXQgY2xpZW50U2VjcmV0SWQgPSB0aGlzLmF1dGhjb25maWcuZ21haWxQcm92aWRlcjtcbiAgIGxldCBHX0FwaUtleSA9IHRoaXMuYXV0aGNvbmZpZy5nbWFpbEFQSUtleTtcbiAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChcbiAgICAgICBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICBfdGhpcy5sb2FkU2NyaXB0KGNsaWVudFNlY3JldElkLCAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGxhdGZvcm0uanMnLCAoXG4gICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICBnYXBpLmxvYWQoJ2F1dGgyJywgKFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICBfdGhpcy5hdXRoMiA9IGdhcGkuYXV0aDIuaW5pdCh7XG4gICAgICAgICAgICAgICAgICBhcGlLZXk6IEdfQXBpS2V5LFxuICAgICAgICAgICAgICAgICAgY2xpZW50SWQ6IGNsaWVudFNlY3JldElkLFxuICAgICAgICAgICAgICAgICAgc2NvcGU6ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5lbWFpbCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3BsdXMubWUnXG4gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICBfdGhpcy5hdXRoMi50aGVuKChcbiAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAvL190aGlzLl9yZWFkeVN0YXRlLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoXG4gICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgfSkpO1xuICAgICAgICAgfSkpO1xuICAgICB9KSk7XG4gfTtcbiBcbiAgXG4gIGxvYWRTY3JpcHQoaWQsIHNyYywgb25sb2FkLCBhc3luYywgaW5uZXJfdGV4dF9jb250ZW50KSB7XG4gICAgICBpZiAoYXN5bmMgPT09IHZvaWQgMCkgeyBhc3luYyA9IHRydWU7IH1cbiAgICAgIGlmIChpbm5lcl90ZXh0X2NvbnRlbnQgPT09IHZvaWQgMCkgeyBpbm5lcl90ZXh0X2NvbnRlbnQgPSAnJzsgfVxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNyYz0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsYXRmb3JtLmpzJztcbiAgICAgIFxuICAgICAgdmFyIHNpZ25JbkpTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzaWduSW5KUy5hc3luYyA9IHRydWU7XG4gICAgICBzaWduSW5KUy5zcmMgPSBzcmM7XG4gICAgICBzaWduSW5KUy5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICBzaWduSW5KUy50ZXh0ID0gJ0dtYWlsIExvZ2luJzsgLy8gTGlua2VkSW5cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2lnbkluSlMpO1xuICB9O1xuXG4gIHNpZ25JbldpdGhHb29nbGUgKCkgeyBcbiAgICAgIGNvbnN0IGlzU2lnbmVkSW4gPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmlzU2lnbmVkSW4uZ2V0KCk7XG4gICAgIC8qICBpZihpc1NpZ25lZEluKSB7XG4gICAgICAgIGxldCBwcm9maWxlID0gdGhpcy5nZXRHb29nbGVQcm9maWxlKCk7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZ2lzdGVyKHByb2ZpbGUuZmlyc3ROYW1lLCBwcm9maWxlLmxhc3ROYW1lLCBwcm9maWxlLmVtYWlsLCBwcm9maWxlLmlkLCBwcm9maWxlLnByb3ZpZGVyLCBwcm9maWxlLnBob3RvVVJMKVxuICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzcCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHByb2ZpbGUuZW1haWwscHJvZmlsZS5pZCkuc3Vic2NyaWJlKHJlc3VsdCA9PntcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoY29uZmlnLkFmdGVyTG9naW5VUkxdKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfWVsc2V7ICovXG4gICAgICAgIGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKCkudGhlbih1c2VycyA9PntcbiAgICAgICAgICBsZXQgcHJvZmlsZSA9IHRoaXMuZ2V0R29vZ2xlUHJvZmlsZSgpO1xuXG4gICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UucmVnaXN0ZXIocHJvZmlsZS5maXJzdE5hbWUsIHByb2ZpbGUubGFzdE5hbWUsIHByb2ZpbGUuZW1haWwsIHByb2ZpbGUuaWQsIHByb2ZpbGUucHJvdmlkZXIsIHByb2ZpbGUucGhvdG9VUkwpXG4gICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICByZXNwID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbihwcm9maWxlLmVtYWlsLHByb2ZpbGUuaWQpLnN1YnNjcmliZShyZXN1bHQgPT57XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoY29uZmlnLkFmdGVyTG9naW5VUkxdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSkuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWxsZWQnKTtcbiAgICAgICAgfSlcbiAgICAgIC8vfVxuICB9XG5cbiAgLyoqXG4gICAqIGdldCBHb29nbGUgdXNlciBwcm9maWxlXG4gICAqIEBpbnB1dDogdG9rZW5cbiAgICogQG91dHB1dDogb2JqZWN0XG4gICAqL1xuICBnZXRHb29nbGVQcm9maWxlKCl7XG4gICAgICB2YXIgcHJvZmlsZSA9IGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QmFzaWNQcm9maWxlKCk7XG4gICAgICBcbiAgICAgIHZhciB0b2tlbiA9ICcnOy8vZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5jdXJyZW50VXNlci5nZXQoKS5nZXRBdXRoUmVzcG9uc2UodHJ1ZSkuYWNjZXNzX3Rva2VuO1xuICAgICAgdmFyIGJhY2tlbmRUb2tlbiA9ICcnOy8vZ2FwaS5hdXRoMi5jdXJyZW50VXNlci5nZXRBdXRoSW5zdGFuY2UoKS5nZXQoKS5nZXRBdXRoUmVzcG9uc2UodHJ1ZSkuaWRfdG9rZW47ICAgIFxuICAgICAgdmFyIHVzZXIgPSBuZXcgU29jaWFsVXNlcigpO1xuICAgICAgdXNlci5pZCA9IHByb2ZpbGUuZ2V0SWQoKTtcbiAgICAgIHVzZXIuZW1haWwgPSBwcm9maWxlLmdldEVtYWlsKCk7XG4gICAgICB1c2VyLnBob3RvVVJMID0gcHJvZmlsZS5nZXRJbWFnZVVybCgpO1xuICAgICAgdXNlci5maXJzdE5hbWUgPSBwcm9maWxlLmdldEdpdmVuTmFtZSgpO1xuICAgICAgdXNlci5sYXN0TmFtZSA9IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpOztcbiAgICAgIHVzZXIuYXV0aFRva2VuID0gdG9rZW47XG4gICAgICB1c2VyLmlkVG9rZW4gPSBiYWNrZW5kVG9rZW47XG4gICAgICB1c2VyLnByb3ZpZGVyID0gXCJHT09HTEVcIjtcbiAgICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iXX0=