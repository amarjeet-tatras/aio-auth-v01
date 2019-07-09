/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService } from '../auth-config';
import { first } from 'rxjs/operators';
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
        popup.onload = (/**
         * @return {?}
         */
        function () {
            // Open authorize url in pop-up
            if (window.location.hash.length == 0) {
                popup.open('https://instagram.com/oauth/authorize/?client_id=' + instagramClientId + '&redirect_uri=' + instagramRedirectUri + '&response_type=token', '_self');
            }
            // An interval runs to get the access token from the pop-up
            /** @type {?} */
            var interval = setInterval((/**
             * @return {?}
             */
            function () {
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
    ;
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
            this.authenticationService.getInstaUserData(this.accessToken).subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result) {
                    /** @type {?} */
                    var profile_1 = result.data;
                    /** @type {?} */
                    var fullName = profile_1.full_name.split(" ");
                    // calling the user registration method 
                    _this.authenticationService.register(fullName[0], (fullName[1] ? fullName[1] : '.'), profile_1.username, profile_1.id, 'INSTAGRAM', profile_1.profile_picture)
                        .pipe(first())
                        .subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        // after successs full registration, just called the login method.
                        _this.authenticationService.login(profile_1.username, profile_1.id).subscribe((/**
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
                        console.log(error);
                    }));
                }
            }));
        }
    };
    InstaLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-insta-login',
                    template: "<a id=\"instagram-button\" (click)=\"instaSignIn()\" class=\"btn btn-block btn-social btn-instagram\">\n  <i class=\"fa fa-instagram\"></i>  {{btnText}}\n</a>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InstaLoginComponent.ctorParameters = function () { return [
        { type: Router },
        { type: AuthenticationService },
        { type: undefined, decorators: [{ type: Inject, args: [AuthConfigService,] }] }
    ]; };
    InstaLoginComponent.propDecorators = {
        btnText: [{ type: Input }]
    };
    return InstaLoginComponent;
}());
export { InstaLoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGEtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWlvLWF1dGgtdjAxLyIsInNvdXJjZXMiOlsibGliL2luc3RhLWxvZ2luL2luc3RhLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDO0lBWUUsMEJBQTBCO0lBQzFCLDZCQUFxQixNQUFjLEVBQ3pCLHFCQUE0QyxFQUNqQixVQUFzQjtRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVRwRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxpQkFBaUIsQ0FBQztJQU1rQixDQUFDO0lBRWhFLGlDQUFpQzs7Ozs7SUFFakMsc0NBQVE7Ozs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENB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eUJBQ3RKLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDYixTQUFTOzs7O29CQUNOLFVBQUEsSUFBSTt3QkFFRixrRUFBa0U7d0JBQ2xFLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsU0FBTyxDQUFDLFFBQVEsRUFBQyxTQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUzs7Ozt3QkFBQyxVQUFBLE1BQU07NEJBQzVFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxDQUFDLEVBQUMsQ0FBQztvQkFDTCxDQUFDOzs7O29CQUNELFVBQUEsS0FBSzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUMsQ0FBQztpQkFDUjtZQUdILENBQUMsRUFBQyxDQUFDO1NBRUo7SUFFSCxDQUFDOztnQkFwSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDhLQUEyQzs7aUJBRTVDOzs7O2dCQVZRLE1BQU07Z0JBQ04scUJBQXFCO2dEQW9CekIsTUFBTSxTQUFDLGlCQUFpQjs7OzBCQU4xQixLQUFLOztJQTZHUiwwQkFBQztDQUFBLEFBdEhELElBc0hDO1NBakhZLG1CQUFtQjs7O0lBQzlCLDBDQUEwQjs7Ozs7SUFDMUIseUNBQXdCOzs7OztJQUN4Qiw0Q0FBMkI7O0lBQzNCLHNDQUE2Qzs7Ozs7SUFJaEMscUNBQXNCOzs7OztJQUNqQyxvREFBb0Q7Ozs7O0lBQ3BELHlDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTb2NpYWxVc2VyIH0gZnJvbSAnLi4vX3NlcnZpY2VzL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1pbnN0YS1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnN0YS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luc3RhLWxvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YUxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgcHJpdmF0ZSBJR0NsaWVudGlkID0gJyc7XG4gIHByaXZhdGUgSUdSZWRpcmVjdFVSTCA9ICcnO1xuICBASW5wdXQoKSBidG5UZXh0OiBTdHJpbmcgPSAnSW5zdGFncmFtIExvZ2luJztcblxuXG4gIC8vIGNvbnN0cnVjdG9yIHN0YXJ0IGhlcmUgXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsICAgIFxuICAgIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIHByaXZhdGUgYXV0aGNvbmZpZzogQXV0aENvbmZpZyApIHt9XG5cbiAgLy9uZ09uSW5pdCBjYWxsZWQgYXQgcGFnZSBsb2FkLy8gXG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLklHQ2xpZW50aWQgPSB0aGlzLmF1dGhjb25maWcuSUdDbGllbnRpZDtcbiAgICB0aGlzLklHUmVkaXJlY3RVUkwgPSAodGhpcy5hdXRoY29uZmlnLklHUmVkaXJlY3RVUkwgIT0nJykgPyB0aGlzLmF1dGhjb25maWcuSUdSZWRpcmVjdFVSTCA6IHRoaXMuYXV0aGNvbmZpZy5sb2dpblVSTCA7XG4gIH1cbiBcblxuICAvKipcbiAgICogQE1ldGhvZDogb3BlbiB0aGUgcG9wIHVwIHRvIGF1dGhvcml6ZWQgdGhlIHVzZXJcbiAgICogQGlucHV0OiBjbGllbnQgSWRcbiAgICogQG91dHB1dDogYWNjZXNzIHRva2VuXG4gICAqIFxuICAgKi9cbiAgaW5zdGFTaWduSW4oKXsgICAgXG5cbiAgICB0aGlzLmF1dGhlbnRpY2F0ZUluc3RhZ3JhbShcbiAgICAgIHRoaXMuSUdDbGllbnRpZCxcbiAgICAgIHRoaXMuSUdSZWRpcmVjdFVSTFxuICApO1xuICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4vKipcbiAqIEBtZXRob2QgdG8gb3BlbiB0aGUgcG9wdXAgYW5kIGF1dGhlbnRpY2F0ZSB0aGUgSW5zdGFncmFtIFVzZXJcbiAqIEBwYXJhbSBpbnN0YWdyYW1DbGllbnRJZCBcbiAqIEBwYXJhbSBpbnN0YWdyYW1SZWRpcmVjdFVyaVxuICogQG91dHB1dCB1c2VyIGRhdGEgaW4gb2JqZWN0XG4gKi9cblxuYXV0aGVudGljYXRlSW5zdGFncmFtIChpbnN0YWdyYW1DbGllbnRJZCwgaW5zdGFncmFtUmVkaXJlY3RVcmkpIHtcbiAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIC8vIFBvcC11cCB3aW5kb3cgc2l6ZSwgY2hhbmdlIGlmIHlvdSB3YW50XG4gICAgbGV0IHBvcHVwV2lkdGggPSA3MDAsXG4gICAgICAgIHBvcHVwSGVpZ2h0ID0gNTAwLFxuICAgICAgICBwb3B1cExlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAtIHBvcHVwV2lkdGgpIC8gMixcbiAgICAgICAgcG9wdXBUb3AgPSAod2luZG93LnNjcmVlbi5oZWlnaHQgLSBwb3B1cEhlaWdodCkgLyAyO1xuICAgIC8vIFVybCBuZWVkcyB0byBwb2ludCB0byBpbnN0YWdyYW1fYXV0aC5waHBcbiAgICBsZXQgcG9wdXAgPSB3aW5kb3cub3BlbignaW5zdGFncmFtX2F1dGgucGhwJywgJycsICd3aWR0aD0nK3BvcHVwV2lkdGgrJyxoZWlnaHQ9Jytwb3B1cEhlaWdodCsnLGxlZnQ9Jytwb3B1cExlZnQrJyx0b3A9Jytwb3B1cFRvcCsnJyk7XG4gICAgcG9wdXAub25sb2FkID0gKCkgPT57XG4gICAgICAgIC8vIE9wZW4gYXV0aG9yaXplIHVybCBpbiBwb3AtdXBcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHBvcHVwLm9wZW4oJ2h0dHBzOi8vaW5zdGFncmFtLmNvbS9vYXV0aC9hdXRob3JpemUvP2NsaWVudF9pZD0nK2luc3RhZ3JhbUNsaWVudElkKycmcmVkaXJlY3RfdXJpPScraW5zdGFncmFtUmVkaXJlY3RVcmkrJyZyZXNwb25zZV90eXBlPXRva2VuJywgJ19zZWxmJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQW4gaW50ZXJ2YWwgcnVucyB0byBnZXQgdGhlIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBwb3AtdXBcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBoYXNoIGV4aXN0cyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGlmKHBvcHVwLmxvY2F0aW9uLmhhc2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhc2ggZm91bmQsIHRoYXQgaW5jbHVkZXMgdGhlIGFjY2VzcyB0b2tlblxuICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIHRoYXQuYWNjZXNzVG9rZW4gPSBwb3B1cC5sb2NhdGlvbi5oYXNoLnNsaWNlKDE0KTsgLy9zbGljZSAjYWNjZXNzX3Rva2VuPSBmcm9tIHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sb2dpbl9jYWxsYmFjaygpOyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChldnQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIGVycicpO1xuICAgICAgICAgICAgICAgIC8vIFBlcm1pc3Npb24gZGVuaWVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfTtcbn07XG5cbi8qKlxuICogQG1ldGhvZCBJbnN0YWdyYW0gQXV0aCBjYWxsIGJhY2sgXG4gKiBAcGFyYW0gbm9uZVxuICogQG91dHB1dCBqc29uIG9iamVjdFxuICovXG4gIGxvZ2luX2NhbGxiYWNrKCl7ICAgICBcbiAgICBpZih0aGlzLmFjY2Vzc1Rva2VuKXsgICBcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEluc3RhVXNlckRhdGEodGhpcy5hY2Nlc3NUb2tlbikuc3Vic2NyaWJlKCByZXN1bHQgPT4ge1xuICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgIGxldCBwcm9maWxlID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgbGV0IGZ1bGxOYW1lID0gcHJvZmlsZS5mdWxsX25hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIGNhbGxpbmcgdGhlIHVzZXIgcmVnaXN0cmF0aW9uIG1ldGhvZCBcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3RlcihmdWxsTmFtZVswXSwgKGZ1bGxOYW1lWzFdID8gZnVsbE5hbWVbMV0gOiAnLicpLCBwcm9maWxlLnVzZXJuYW1lLCBwcm9maWxlLmlkLCAnSU5TVEFHUkFNJywgcHJvZmlsZS5wcm9maWxlX3BpY3R1cmUpXG4gICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICByZXNwID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHN1Y2Nlc3NzIGZ1bGwgcmVnaXN0cmF0aW9uLCBqdXN0IGNhbGxlZCB0aGUgbG9naW4gbWV0aG9kLlxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHByb2ZpbGUudXNlcm5hbWUscHJvZmlsZS5pZCkuc3Vic2NyaWJlKHJlc3VsdCA9PntcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmF1dGhjb25maWcuQWZ0ZXJMb2dpblVSTF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICB9KTsgICAgICAgXG5cbiAgICB9XG4gICAgXG4gIH1cbiBcbn1cbiJdfQ==