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
    };
    /**
     * @return {?}
     */
    FbloginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        this.getFbUserData().then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.loading = true;
            _this.authenticationService.fbRegister(data)
                .pipe(first())
                .subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                _this.authenticationService.FBlogin(data).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    _this.router.navigate([_this.authconfig.AfterLoginURL]);
                }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.error = error;
                _this.loading = false;
            }));
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
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
    };
    FbloginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-fblogin',
                    template: "<button class=\"btn facebook-btn social-btn btn-facebook\"  (click)=\"fbLogin()\" type=\"button\"> <span> {{ btnText }}</span> <i class=\"fa fa-facebook\"></i> </button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FbloginComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] },
        { type: Router },
        { type: ActivatedRoute },
        { type: AuthenticationService }
    ]; };
    FbloginComponent.propDecorators = {
        btnText: [{ type: Input }]
    };
    return FbloginComponent;
}());
export { FbloginComponent };
if (false) {
    /** @type {?} */
    FbloginComponent.prototype.currentUser;
    /** @type {?} */
    FbloginComponent.prototype.loading;
    /** @type {?} */
    FbloginComponent.prototype.submitted;
    /** @type {?} */
    FbloginComponent.prototype.returnUrl;
    /** @type {?} */
    FbloginComponent.prototype.error;
    /** @type {?} */
    FbloginComponent.prototype.btnText;
    /**
     * @type {?}
     * @private
     */
    FbloginComponent.prototype.authconfig;
    /**
     * @type {?}
     * @private
     */
    FbloginComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    FbloginComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    FbloginComponent.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmJsb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ucG0tYWlvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvZmJsb2dpbi9mYmxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQWVFLDBCQUErQyxVQUFzQixFQUFVLE1BQWMsRUFBVSxLQUFxQixFQUFVLHFCQUE0QztRQUFuSSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQU5sTCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVGLFlBQU8sR0FBVyxxQkFBcUIsQ0FBQztJQUdqRCxDQUFDOzs7O0lBRUQsMENBQWU7OztJQUFmOztZQUNNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7UUFDNUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLFdBQVc7OztRQUFHO1lBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLGdCQUFnQixFQUFFLElB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SUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO3dCQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ1A7cUJBQ0k7b0JBQ0gsTUFBTSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7aUJBQzVEO1lBQ0gsQ0FBQyxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBekdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIscUxBQXVDOztpQkFFeEM7Ozs7Z0RBV2MsTUFBTSxTQUFDLGlCQUFpQjtnQkFwQjlCLE1BQU07Z0JBQUUsY0FBYztnQkFGdEIscUJBQXFCOzs7MEJBcUIzQixLQUFLOztJQTRGUix1QkFBQztDQUFBLEFBMUdELElBMEdDO1NBckdZLGdCQUFnQjs7O0lBRTNCLHVDQUEyQzs7SUFFM0MsbUNBQWdCOztJQUNoQixxQ0FBa0I7O0lBQ2xCLHFDQUFrQjs7SUFDbEIsaUNBQVc7O0lBRVgsbUNBQWlEOzs7OztJQUNyQyxzQ0FBeUQ7Ozs7O0lBQUUsa0NBQXNCOzs7OztJQUFFLGlDQUE2Qjs7Ozs7SUFBRSxpREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU29jaWFsVXNlciB9IGZyb20gJy4uL19zZXJ2aWNlcy91c2VyJztcbmRlY2xhcmUgdmFyIEZCOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mYmxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZibG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mYmxvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGYmxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgY3VycmVudFVzZXI6IE9ic2VydmFibGU8U29jaWFsVXNlcj47XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuVXJsOiBzdHJpbmc7XG4gIGVycm9yID0gJyc7XG5cbiAgQElucHV0KCkgYnRuVGV4dDogU3RyaW5nID0gJ1NpZ25Jbi9TaWduVXAgd2l0aCAnO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwcml2YXRlIGF1dGhjb25maWc6IEF1dGhDb25maWcsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsZXQgJGZiUHJvdmlkZXIgPSB0aGlzLmF1dGhjb25maWcuRkJQcm92aWRlcjtcbiAgICAod2luZG93IGFzIGFueSkuZmJBc3luY0luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBGQi5pbml0KHtcbiAgICAgICAgYXBwSWQ6ICRmYlByb3ZpZGVyLFxuICAgICAgICBhdXRvTG9nQXBwRXZlbnRzOiB0cnVlLFxuICAgICAgICBjb29raWU6IHRydWUsXG4gICAgICAgIHhmYm1sOiB0cnVlLFxuICAgICAgICB2ZXJzaW9uOiAndjMuMydcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XG4gICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHsgcmV0dXJuOyB9XG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcbiAgICAgIGpzLmFzeW5jID0gZmFsc2U7XG4gICAgICBqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCI7XG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG4gICAgfShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmYkxvZ2luIG1ldGhvZCB0byBjaGVjayBvciBkbyAgZmFjZWJvb2sgbG9naW5cbiAgICogQGlucHV0OiBub25lXG4gICAqIEBvdXB1dDogb2JqZWN0XG4gICAqIFxuICAgKi9cblxuICBmYkxvZ2luKCkge1xuICAgIHRoaXMuZ2V0RmJVc2VyRGF0YSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZmJSZWdpc3RlcihkYXRhKVxuICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3AgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5GQmxvZ2luKGRhdGEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoY29uZmlnLkFmdGVyTG9naW5VUkxdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG5cbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Q6IEZhY2Vib29rIExvZ2luXG4gICAqIEBpbnB1dDogRmFjZWJvb2sgQXBwIElkXG4gICAqIEBvdXRwdDogT2JqZWN0IFVzZXIgZGF0YSBcbiAgICovXG4gIGdldEZiVXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChcbiAgICAgIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgRkIubG9naW4oKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmF1dGhSZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGF1dGhSZXNwb25zZV8yID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlO1xuICAgICAgICAgICAgRkIuYXBpKFwiL21lXCIsIHsgbG9jYWxlOiAnZW5fVVMnLCBmaWVsZHM6ICdpZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxsaW5rLGdlbmRlcixsb2NhbGUscGljdHVyZScgfSwgKFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZmJVc2VyKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9IG5ldyBTb2NpYWxVc2VyKCk7XG4gICAgICAgICAgICAgICAgdXNlci5pZCA9IGZiVXNlci5pZDtcbiAgICAgICAgICAgICAgICB1c2VyLmVtYWlsID0gZmJVc2VyLmVtYWlsO1xuICAgICAgICAgICAgICAgIHVzZXIucGhvdG9VUkwgPSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJyArIGZiVXNlci5pZCArICcvcGljdHVyZT90eXBlPW5vcm1hbCc7XG4gICAgICAgICAgICAgICAgdXNlci5maXJzdE5hbWUgPSBmYlVzZXIuZmlyc3RfbmFtZTtcbiAgICAgICAgICAgICAgICB1c2VyLmxhc3ROYW1lID0gZmJVc2VyLmxhc3RfbmFtZTtcbiAgICAgICAgICAgICAgICB1c2VyLmF1dGhUb2tlbiA9IGF1dGhSZXNwb25zZV8yLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgICAgIHVzZXIuZmFjZWJvb2sgPSBmYlVzZXI7XG4gICAgICAgICAgICAgICAgdXNlci5wcm92aWRlciA9IFwiRkFDRUJPT0tcIjtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVzZXIpO1xuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCdVc2VyIGNhbmNlbGxlZCBsb2dpbiBvciBkaWQgbm90IGZ1bGx5IGF1dGhvcml6ZS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCB7IHNjb3BlOiAnZW1haWwnIH0pO1xuICAgICAgfVxuICAgICkpO1xuICB9XG59Il19