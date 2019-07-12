/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
import { first } from 'rxjs/operators';
export class InstaLoginComponent {
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
                    this.authenticationService.register(profile)
                        .pipe(first())
                        .subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        // after successs full registration, just called the login method.
                        this.authenticationService.login(profile).subscribe((/**
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
if (false) {
    /** @type {?} */
    InstaLoginComponent.prototype.accessToken;
    /**
     * @type {?}
     * @private
     */
    InstaLoginComponent.prototype.IGClientid;
    /**
     * @type {?}
     * @private
     */
    InstaLoginComponent.prototype.IGRedirectURL;
    /** @type {?} */
    InstaLoginComponent.prototype.btnText;
    /**
     * @type {?}
     * @private
     */
    InstaLoginComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    InstaLoginComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    InstaLoginComponent.prototype.authconfig;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGEtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2luc3RhLWxvZ2luL2luc3RhLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXZDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFROUIsWUFBcUIsTUFBYyxFQUN6QixxQkFBNEMsRUFDakIsVUFBc0I7UUFGdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUcEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVcsaUJBQWlCLENBQUM7SUFNa0IsQ0FBQzs7Ozs7SUFJaEUsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUU7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LENBQUMsRUFBQyxDQUFDO29CQUNMLENBQUM7Ozs7b0JBQ0QsS0FBSyxDQUFDLEVBQUU7d0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFDLENBQUM7aUJBQ1I7WUFHSCxDQUFDLEVBQUMsQ0FBQztTQUVKO0lBRUgsQ0FBQzs7O1lBcEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw4S0FBMkM7O2FBRTVDOzs7O1lBVlEsTUFBTTtZQUNOLHFCQUFxQjs0Q0FvQnpCLE1BQU0sU0FBQyxpQkFBaUI7OztzQkFOMUIsS0FBSzs7OztJQUhOLDBDQUEwQjs7Ozs7SUFDMUIseUNBQXdCOzs7OztJQUN4Qiw0Q0FBMkI7O0lBQzNCLHNDQUE2Qzs7Ozs7SUFJaEMscUNBQXNCOzs7OztJQUNqQyxvREFBb0Q7Ozs7O0lBQ3BELHlDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTb2NpYWxVc2VyIH0gZnJvbSAnLi4vX3NlcnZpY2VzL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1pbnN0YS1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnN0YS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luc3RhLWxvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YUxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgcHJpdmF0ZSBJR0NsaWVudGlkID0gJyc7XG4gIHByaXZhdGUgSUdSZWRpcmVjdFVSTCA9ICcnO1xuICBASW5wdXQoKSBidG5UZXh0OiBTdHJpbmcgPSAnSW5zdGFncmFtIExvZ2luJztcblxuXG4gIC8vIGNvbnN0cnVjdG9yIHN0YXJ0IGhlcmUgXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsICAgIFxuICAgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHByaXZhdGUgYXV0aGNvbmZpZzogQXV0aENvbmZpZyApIHt9XG5cbiAgLy9uZ09uSW5pdCBjYWxsZWQgYXQgcGFnZSBsb2FkLy8gXG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLklHQ2xpZW50aWQgPSB0aGlzLmF1dGhjb25maWcuSUdDbGllbnRpZDtcbiAgICB0aGlzLklHUmVkaXJlY3RVUkwgPSAodGhpcy5hdXRoY29uZmlnLklHUmVkaXJlY3RVUkwgIT0nJykgPyB0aGlzLmF1dGhjb25maWcuSUdSZWRpcmVjdFVSTCA6IHRoaXMuYXV0aGNvbmZpZy5sb2dpblVSTCA7XG4gIH1cbiBcblxuICAvKipcbiAgICogQE1ldGhvZDogb3BlbiB0aGUgcG9wIHVwIHRvIGF1dGhvcml6ZWQgdGhlIHVzZXJcbiAgICogQGlucHV0OiBjbGllbnQgSWRcbiAgICogQG91dHB1dDogYWNjZXNzIHRva2VuXG4gICAqIFxuICAgKi9cbiAgaW5zdGFTaWduSW4oKXsgICAgXG5cbiAgICB0aGlzLmF1dGhlbnRpY2F0ZUluc3RhZ3JhbShcbiAgICAgIHRoaXMuSUdDbGllbnRpZCxcbiAgICAgIHRoaXMuSUdSZWRpcmVjdFVSTFxuICApO1xuICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4vKipcbiAqIEBtZXRob2QgdG8gb3BlbiB0aGUgcG9wdXAgYW5kIGF1dGhlbnRpY2F0ZSB0aGUgSW5zdGFncmFtIFVzZXJcbiAqIEBwYXJhbSBpbnN0YWdyYW1DbGllbnRJZCBcbiAqIEBwYXJhbSBpbnN0YWdyYW1SZWRpcmVjdFVyaVxuICogQG91dHB1dCB1c2VyIGRhdGEgaW4gb2JqZWN0XG4gKi9cblxuYXV0aGVudGljYXRlSW5zdGFncmFtIChpbnN0YWdyYW1DbGllbnRJZCwgaW5zdGFncmFtUmVkaXJlY3RVcmkpIHtcbiAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIC8vIFBvcC11cCB3aW5kb3cgc2l6ZSwgY2hhbmdlIGlmIHlvdSB3YW50XG4gICAgbGV0IHBvcHVwV2lkdGggPSA3MDAsXG4gICAgICAgIHBvcHVwSGVpZ2h0ID0gNTAwLFxuICAgICAgICBwb3B1cExlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAtIHBvcHVwV2lkdGgpIC8gMixcbiAgICAgICAgcG9wdXBUb3AgPSAod2luZG93LnNjcmVlbi5oZWlnaHQgLSBwb3B1cEhlaWdodCkgLyAyO1xuICAgIC8vIFVybCBuZWVkcyB0byBwb2ludCB0byBpbnN0YWdyYW1fYXV0aC5waHBcbiAgICBsZXQgcG9wdXAgPSB3aW5kb3cub3BlbignaW5zdGFncmFtX2F1dGgucGhwJywgJycsICd3aWR0aD0nK3BvcHVwV2lkdGgrJyxoZWlnaHQ9Jytwb3B1cEhlaWdodCsnLGxlZnQ9Jytwb3B1cExlZnQrJyx0b3A9Jytwb3B1cFRvcCsnJyk7XG4gICAgcG9wdXAub25sb2FkID0gKCkgPT57XG4gICAgICAgIC8vIE9wZW4gYXV0aG9yaXplIHVybCBpbiBwb3AtdXBcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHBvcHVwLm9wZW4oJ2h0dHBzOi8vaW5zdGFncmFtLmNvbS9vYXV0aC9hdXRob3JpemUvP2NsaWVudF9pZD0nK2luc3RhZ3JhbUNsaWVudElkKycmcmVkaXJlY3RfdXJpPScraW5zdGFncmFtUmVkaXJlY3RVcmkrJyZyZXNwb25zZV90eXBlPXRva2VuJywgJ19zZWxmJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQW4gaW50ZXJ2YWwgcnVucyB0byBnZXQgdGhlIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBwb3AtdXBcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBoYXNoIGV4aXN0cyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGlmKHBvcHVwLmxvY2F0aW9uLmhhc2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhc2ggZm91bmQsIHRoYXQgaW5jbHVkZXMgdGhlIGFjY2VzcyB0b2tlblxuICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIHRoYXQuYWNjZXNzVG9rZW4gPSBwb3B1cC5sb2NhdGlvbi5oYXNoLnNsaWNlKDE0KTsgLy9zbGljZSAjYWNjZXNzX3Rva2VuPSBmcm9tIHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sb2dpbl9jYWxsYmFjaygpOyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChldnQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIGVycicpO1xuICAgICAgICAgICAgICAgIC8vIFBlcm1pc3Npb24gZGVuaWVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBJbnN0YWdyYW0gQXV0aCBjYWxsIGJhY2sgXG4gKiBAcGFyYW0gbm9uZVxuICogQG91dHB1dCBqc29uIG9iamVjdFxuICovXG4gIGxvZ2luX2NhbGxiYWNrKCl7ICAgICBcbiAgICBpZih0aGlzLmFjY2Vzc1Rva2VuKXsgICBcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEluc3RhVXNlckRhdGEodGhpcy5hY2Nlc3NUb2tlbikuc3Vic2NyaWJlKCByZXN1bHQgPT4ge1xuICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgIGxldCBwcm9maWxlID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgbGV0IGZ1bGxOYW1lID0gcHJvZmlsZS5mdWxsX25hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIGNhbGxpbmcgdGhlIHVzZXIgcmVnaXN0cmF0aW9uIG1ldGhvZCBcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3Rlcihwcm9maWxlKVxuICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzcCA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBhZnRlciBzdWNjZXNzcyBmdWxsIHJlZ2lzdHJhdGlvbiwganVzdCBjYWxsZWQgdGhlIGxvZ2luIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbihwcm9maWxlKS5zdWJzY3JpYmUocmVzdWx0ID0+e1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuYXV0aGNvbmZpZy5BZnRlckxvZ2luVVJMXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICBcbiAgICAgIH0pOyAgICAgICBcblxuICAgIH1cbiAgICBcbiAgfVxuIFxufVxuIl19