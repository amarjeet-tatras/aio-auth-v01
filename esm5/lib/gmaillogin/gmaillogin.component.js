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
            _this_1.authenticationService.register(profile.firstName, profile.lastName, profile.email, profile.id, profile.provider, profile.photoURL)
                .pipe(first())
                .subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                _this_1.authenticationService.login(profile.email, profile.id).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ21haWxsb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9haW8tYXV0aC12MDEvIiwic291cmNlcyI6WyJsaWIvZ21haWxsb2dpbi9nbWFpbGxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQVFFLDZCQUFvQixxQkFBNEMsRUFDM0IsVUFBc0IsRUFBUyxNQUFjLEVBQVcsS0FBcUI7UUFEOUYsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUMzQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFXLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRnpHLFlBQU8sR0FBVyxxQkFBcUIsQ0FBQztRQUkvQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQWNkLGVBQVU7OztRQUFHOztnQkFDUCxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztnQkFDOUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVzs7Z0JBQ3BDLEtBQUssR0FBRyxJQUFJO1lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUM7Ozs7O1lBQ2pCLFVBQVUsT0FBTyxFQUFFLE1B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T0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQUEsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztnQkF2SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZMQUEwQzs7aUJBRTNDOzs7O2dCQVRRLHFCQUFxQjtnREFjekIsTUFBTSxTQUFDLGlCQUFpQjtnQkFacEIsTUFBTTtnQkFBRSxjQUFjOzs7MEJBVTVCLEtBQUs7O0lBaUlSLDBCQUFDO0NBQUEsQUF4SUQsSUF3SUM7U0FuSVksbUJBQW1COzs7SUFFOUIsc0NBQWlEOztJQUkvQyxzQ0FBZ0I7O0lBQ2hCLHdDQUFrQjs7SUFDbEIsd0NBQWtCOztJQUNsQixvQ0FBVzs7SUFjZCx5Q0EyQkU7Ozs7O0lBL0NXLG9EQUFvRDs7Ozs7SUFDOUQseUNBQXlEOzs7OztJQUFDLHFDQUFzQjs7Ozs7SUFBRyxvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU29jaWFsVXNlciB9IGZyb20gJy4uL19zZXJ2aWNlcy91c2VyJztcbmRlY2xhcmUgdmFyIGdhcGkgOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZ21haWxsb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbWFpbGxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ21haWxsb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR21haWxsb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYnRuVGV4dDogU3RyaW5nID0gJ1NpZ25Jbi9TaWduVXAgd2l0aCAnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHByaXZhdGUgYXV0aGNvbmZpZzogQXV0aENvbmZpZyxwcml2YXRlIHJvdXRlcjogUm91dGVyLCAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIHJldHVyblVybDogc3RyaW5nO1xuICAgIGVycm9yID0gJyc7XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgLy8gZ2V0IHJldHVybiB1cmwgZnJvbSByb3V0ZSBwYXJhbWV0ZXJzIG9yIGRlZmF1bHQgdG8gJy8nXG4gICAgICB0aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8IHRoaXMuYXV0aGNvbmZpZy5BZnRlckxvZ2luVVJMO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsJ2Vycm9yJylcbiAgICAgIH0pO1xuICAgICAgXG4gICB9XG5cbiBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgbGV0IGNsaWVudFNlY3JldElkID0gdGhpcy5hdXRoY29uZmlnLmdtYWlsUHJvdmlkZXI7XG4gICBsZXQgR19BcGlLZXkgPSB0aGlzLmF1dGhjb25maWcuZ21haWxBUElLZXk7XG4gICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgIHJldHVybiBuZXcgUHJvbWlzZSgoXG4gICAgICAgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgX3RoaXMubG9hZFNjcmlwdChjbGllbnRTZWNyZXRJZCwgJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsYXRmb3JtLmpzJywgKFxuICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgZ2FwaS5sb2FkKCdhdXRoMicsIChcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgX3RoaXMuYXV0aDIgPSBnYXBpLmF1dGgyLmluaXQoe1xuICAgICAgICAgICAgICAgICAgYXBpS2V5OiBHX0FwaUtleSxcbiAgICAgICAgICAgICAgICAgIGNsaWVudElkOiBjbGllbnRTZWNyZXRJZCxcbiAgICAgICAgICAgICAgICAgIHNjb3BlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8uZW1haWwgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9wbHVzLm1lJ1xuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgX3RoaXMuYXV0aDIudGhlbigoXG4gICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgLy9fdGhpcy5fcmVhZHlTdGF0ZS5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goKFxuICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgIH0pKTtcbiAgICAgfSkpO1xuIH07XG4gXG4gIFxuICBsb2FkU2NyaXB0KGlkLCBzcmMsIG9ubG9hZCwgYXN5bmMsIGlubmVyX3RleHRfY29udGVudCkge1xuICAgICAgaWYgKGFzeW5jID09PSB2b2lkIDApIHsgYXN5bmMgPSB0cnVlOyB9XG4gICAgICBpZiAoaW5uZXJfdGV4dF9jb250ZW50ID09PSB2b2lkIDApIHsgaW5uZXJfdGV4dF9jb250ZW50ID0gJyc7IH1cbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzcmM9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbGF0Zm9ybS5qcyc7XG4gICAgICBcbiAgICAgIHZhciBzaWduSW5KUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2lnbkluSlMuYXN5bmMgPSB0cnVlO1xuICAgICAgc2lnbkluSlMuc3JjID0gc3JjO1xuICAgICAgc2lnbkluSlMub25sb2FkID0gb25sb2FkO1xuICAgICAgc2lnbkluSlMudGV4dCA9ICdHbWFpbCBMb2dpbic7IC8vIExpbmtlZEluXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNpZ25JbkpTKTtcbiAgfTtcblxuICBzaWduSW5XaXRoR29vZ2xlICgpIHsgXG4gICAgICBjb25zdCBpc1NpZ25lZEluID0gZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5pc1NpZ25lZEluLmdldCgpO1xuICAgICAvKiAgaWYoaXNTaWduZWRJbikge1xuICAgICAgICBsZXQgcHJvZmlsZSA9IHRoaXMuZ2V0R29vZ2xlUHJvZmlsZSgpO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3Rlcihwcm9maWxlLmZpcnN0TmFtZSwgcHJvZmlsZS5sYXN0TmFtZSwgcHJvZmlsZS5lbWFpbCwgcHJvZmlsZS5pZCwgcHJvZmlsZS5wcm92aWRlciwgcHJvZmlsZS5waG90b1VSTClcbiAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3AgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbihwcm9maWxlLmVtYWlsLHByb2ZpbGUuaWQpLnN1YnNjcmliZShyZXN1bHQgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aGNvbmZpZy5BZnRlckxvZ2luVVJMXSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1lbHNleyAqL1xuICAgICAgICBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpLnRoZW4odXNlcnMgPT57XG4gICAgICAgICAgbGV0IHByb2ZpbGUgPSB0aGlzLmdldEdvb2dsZVByb2ZpbGUoKTtcblxuICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZ2lzdGVyKHByb2ZpbGUuZmlyc3ROYW1lLCBwcm9maWxlLmxhc3ROYW1lLCBwcm9maWxlLmVtYWlsLCBwcm9maWxlLmlkLCBwcm9maWxlLnByb3ZpZGVyLCBwcm9maWxlLnBob3RvVVJMKVxuICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4ocHJvZmlsZS5lbWFpbCxwcm9maWxlLmlkKS5zdWJzY3JpYmUocmVzdWx0ID0+e1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aGNvbmZpZy5BZnRlckxvZ2luVVJMXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FuY2VsbGVkJyk7XG4gICAgICAgIH0pXG4gICAgICAvL31cbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgR29vZ2xlIHVzZXIgcHJvZmlsZVxuICAgKiBAaW5wdXQ6IHRva2VuXG4gICAqIEBvdXRwdXQ6IG9iamVjdFxuICAgKi9cbiAgZ2V0R29vZ2xlUHJvZmlsZSgpe1xuICAgICAgdmFyIHByb2ZpbGUgPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmN1cnJlbnRVc2VyLmdldCgpLmdldEJhc2ljUHJvZmlsZSgpO1xuICAgICAgXG4gICAgICB2YXIgdG9rZW4gPSAnJzsvL2dhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QXV0aFJlc3BvbnNlKHRydWUpLmFjY2Vzc190b2tlbjtcbiAgICAgIHZhciBiYWNrZW5kVG9rZW4gPSAnJzsvL2dhcGkuYXV0aDIuY3VycmVudFVzZXIuZ2V0QXV0aEluc3RhbmNlKCkuZ2V0KCkuZ2V0QXV0aFJlc3BvbnNlKHRydWUpLmlkX3Rva2VuOyAgICBcbiAgICAgIHZhciB1c2VyID0gbmV3IFNvY2lhbFVzZXIoKTtcbiAgICAgIHVzZXIuaWQgPSBwcm9maWxlLmdldElkKCk7XG4gICAgICB1c2VyLmVtYWlsID0gcHJvZmlsZS5nZXRFbWFpbCgpO1xuICAgICAgdXNlci5waG90b1VSTCA9IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKTtcbiAgICAgIHVzZXIuZmlyc3ROYW1lID0gcHJvZmlsZS5nZXRHaXZlbk5hbWUoKTtcbiAgICAgIHVzZXIubGFzdE5hbWUgPSBwcm9maWxlLmdldEZhbWlseU5hbWUoKTs7XG4gICAgICB1c2VyLmF1dGhUb2tlbiA9IHRva2VuO1xuICAgICAgdXNlci5pZFRva2VuID0gYmFja2VuZFRva2VuO1xuICAgICAgdXNlci5wcm92aWRlciA9IFwiR09PR0xFXCI7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIl19