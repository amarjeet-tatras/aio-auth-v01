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
export class FbloginComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmJsb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9haW8tYXV0aC12MDEvIiwic291cmNlcyI6WyJsaWIvZmJsb2dpbi9mYmxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVEvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBVTNCLFlBQStDLFVBQXNCLEVBQVUsTUFBYyxFQUFVLEtBQXFCLEVBQVUscUJBQTRDO1FBQW5JLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBTmxMLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRUYsWUFBTyxHQUFXLHFCQUFxQixDQUFDO0lBR2pELENBQUM7Ozs7SUFFRCxlQUFlOztZQUNULFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7UUFDNUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLFdBQVc7OztRQUFHO1lBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLE9BQU8sRUFBRSxNQUFNO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7OztJQUNELFFBQVE7UUFFTixDQUFDOzs7Ozs7UUFBQSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ2IsRUFBRTs7Z0JBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUNyQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxHQUFHLEdBQUcscUNBQXFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7OztJQVNELE9BQU87UUFDTCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2lCQUN4QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2IsU0FBUzs7OztZQUNSLElBQUksQ0FBQyxFQUFFO2dCQUVMLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxNQUFNLENBQUMsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQzs7OztZQUNELEtBQUssQ0FBQyxFQUFFO2dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztRQUVULENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7Ozs7O0lBT0QsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQUM7Ozs7O1FBQ2pCLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQzs7OztZQUFDLFVBQVUsUUFBUTtnQkFFMUIsSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFOzt3QkFDckIsY0FBYyxHQUFHLFFBQVEsQ0FBQyxZQUFZO29CQUMxQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLDBEQUEwRCxFQUFFLEVBQUU7Ozs7b0JBQ3JHLFVBQVUsTUFBTTs7NEJBRVYsSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO3dCQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLHNCQUFzQixDQUFDO3dCQUNuRixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7d0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDUDtxQkFDSTtvQkFDSCxNQUFNLENBQUMsa0RBQWtELENBQUMsQ0FBQztpQkFDNUQ7WUFDSCxDQUFDLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixxTEFBdUM7O2FBRXhDOzs7OzRDQVdjLE1BQU0sU0FBQyxpQkFBaUI7WUFwQjlCLE1BQU07WUFBRSxjQUFjO1lBRnRCLHFCQUFxQjs7O3NCQXFCM0IsS0FBSzs7OztJQVBOLHVDQUEyQzs7SUFFM0MsbUNBQWdCOztJQUNoQixxQ0FBa0I7O0lBQ2xCLHFDQUFrQjs7SUFDbEIsaUNBQVc7O0lBRVgsbUNBQWlEOzs7OztJQUNyQyxzQ0FBeUQ7Ozs7O0lBQUUsa0NBQXNCOzs7OztJQUFFLGlDQUE2Qjs7Ozs7SUFBRSxpREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU29jaWFsVXNlciB9IGZyb20gJy4uL19zZXJ2aWNlcy91c2VyJztcbmRlY2xhcmUgdmFyIEZCOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mYmxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZibG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mYmxvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGYmxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgY3VycmVudFVzZXI6IE9ic2VydmFibGU8U29jaWFsVXNlcj47XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuVXJsOiBzdHJpbmc7XG4gIGVycm9yID0gJyc7XG5cbiAgQElucHV0KCkgYnRuVGV4dDogU3RyaW5nID0gJ1NpZ25Jbi9TaWduVXAgd2l0aCAnO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwcml2YXRlIGF1dGhjb25maWc6IEF1dGhDb25maWcsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsZXQgJGZiUHJvdmlkZXIgPSB0aGlzLmF1dGhjb25maWcuRkJQcm92aWRlcjtcbiAgICAod2luZG93IGFzIGFueSkuZmJBc3luY0luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBGQi5pbml0KHtcbiAgICAgICAgYXBwSWQ6ICRmYlByb3ZpZGVyLFxuICAgICAgICBhdXRvTG9nQXBwRXZlbnRzOiB0cnVlLFxuICAgICAgICBjb29raWU6IHRydWUsXG4gICAgICAgIHhmYm1sOiB0cnVlLFxuICAgICAgICB2ZXJzaW9uOiAndjMuMydcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XG4gICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHsgcmV0dXJuOyB9XG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcbiAgICAgIGpzLmFzeW5jID0gZmFsc2U7XG4gICAgICBqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCI7XG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG4gICAgfShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmYkxvZ2luIG1ldGhvZCB0byBjaGVjayBvciBkbyAgZmFjZWJvb2sgbG9naW5cbiAgICogQGlucHV0OiBub25lXG4gICAqIEBvdXB1dDogb2JqZWN0XG4gICAqIFxuICAgKi9cblxuICBmYkxvZ2luKCkge1xuICAgIHRoaXMuZ2V0RmJVc2VyRGF0YSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZmJSZWdpc3RlcihkYXRhKVxuICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3AgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5GQmxvZ2luKGRhdGEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoY29uZmlnLkFmdGVyTG9naW5VUkxdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG5cbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Q6IEZhY2Vib29rIExvZ2luXG4gICAqIEBpbnB1dDogRmFjZWJvb2sgQXBwIElkXG4gICAqIEBvdXRwdDogT2JqZWN0IFVzZXIgZGF0YSBcbiAgICovXG4gIGdldEZiVXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChcbiAgICAgIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgRkIubG9naW4oKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmF1dGhSZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGF1dGhSZXNwb25zZV8yID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlO1xuICAgICAgICAgICAgRkIuYXBpKFwiL21lXCIsIHsgbG9jYWxlOiAnZW5fVVMnLCBmaWVsZHM6ICdpZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxsaW5rLGdlbmRlcixsb2NhbGUscGljdHVyZScgfSwgKFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZmJVc2VyKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9IG5ldyBTb2NpYWxVc2VyKCk7XG4gICAgICAgICAgICAgICAgdXNlci5pZCA9IGZiVXNlci5pZDtcbiAgICAgICAgICAgICAgICB1c2VyLmVtYWlsID0gZmJVc2VyLmVtYWlsO1xuICAgICAgICAgICAgICAgIHVzZXIucGhvdG9VUkwgPSAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJyArIGZiVXNlci5pZCArICcvcGljdHVyZT90eXBlPW5vcm1hbCc7XG4gICAgICAgICAgICAgICAgdXNlci5maXJzdE5hbWUgPSBmYlVzZXIuZmlyc3RfbmFtZTtcbiAgICAgICAgICAgICAgICB1c2VyLmxhc3ROYW1lID0gZmJVc2VyLmxhc3RfbmFtZTtcbiAgICAgICAgICAgICAgICB1c2VyLmF1dGhUb2tlbiA9IGF1dGhSZXNwb25zZV8yLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgICAgIHVzZXIuZmFjZWJvb2sgPSBmYlVzZXI7XG4gICAgICAgICAgICAgICAgdXNlci5wcm92aWRlciA9IFwiRkFDRUJPT0tcIjtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVzZXIpO1xuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCdVc2VyIGNhbmNlbGxlZCBsb2dpbiBvciBkaWQgbm90IGZ1bGx5IGF1dGhvcml6ZS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCB7IHNjb3BlOiAnZW1haWwnIH0pO1xuICAgICAgfVxuICAgICkpO1xuICB9XG59Il19