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
                    _this.authenticationService.register(profile_1)
                        .pipe(first())
                        .subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        // after successs full registration, just called the login method.
                        _this.authenticationService.login(profile_1).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGEtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbnBtLWFpby1hdXRoLyIsInNvdXJjZXMiOlsibGliL2luc3RhLWxvZ2luL2luc3RhLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDO0lBWUUsMEJBQTBCO0lBQzFCLDZCQUFxQixNQUFjLEVBQ3pCLHFCQUE0QyxFQUNqQixVQUFzQjtRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVRwRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxpQkFBaUIsQ0FBQztJQU1rQixDQUFDO0lBRWhFLGlDQUFpQzs7Ozs7SUFFakMsc0NBQVE7Ozs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENB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Q0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELENBQUMsRUFBQyxDQUFDO29CQUNMLENBQUM7Ozs7b0JBQ0QsVUFBQSxLQUFLO3dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBQyxDQUFDO2lCQUNSO1lBR0gsQ0FBQyxFQUFDLENBQUM7U0FFSjtJQUVILENBQUM7O2dCQXBIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsOEtBQTJDOztpQkFFNUM7Ozs7Z0JBVlEsTUFBTTtnQkFDTixxQkFBcUI7Z0RBb0J6QixNQUFNLFNBQUMsaUJBQWlCOzs7MEJBTjFCLEtBQUs7O0lBNkdSLDBCQUFDO0NBQUEsQUF0SEQsSUFzSEM7U0FqSFksbUJBQW1COzs7SUFDOUIsMENBQTBCOzs7OztJQUMxQix5Q0FBd0I7Ozs7O0lBQ3hCLDRDQUEyQjs7SUFDM0Isc0NBQTZDOzs7OztJQUloQyxxQ0FBc0I7Ozs7O0lBQ2pDLG9EQUFvRDs7Ozs7SUFDcEQseUNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNvY2lhbFVzZXIgfSBmcm9tICcuLi9fc2VydmljZXMvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWluc3RhLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luc3RhLWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5zdGEtbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEluc3RhTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYWNjZXNzVG9rZW4gPSBudWxsO1xuICBwcml2YXRlIElHQ2xpZW50aWQgPSAnJztcbiAgcHJpdmF0ZSBJR1JlZGlyZWN0VVJMID0gJyc7XG4gIEBJbnB1dCgpIGJ0blRleHQ6IFN0cmluZyA9ICdJbnN0YWdyYW0gTG9naW4nO1xuXG5cbiAgLy8gY29uc3RydWN0b3Igc3RhcnQgaGVyZSBcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgICAgXG4gICAgQEluamVjdChBdXRoQ29uZmlnU2VydmljZSkgcHJpdmF0ZSBhdXRoY29uZmlnOiBBdXRoQ29uZmlnICkge31cblxuICAvL25nT25Jbml0IGNhbGxlZCBhdCBwYWdlIGxvYWQvLyBcbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuSUdDbGllbnRpZCA9IHRoaXMuYXV0aGNvbmZpZy5JR0NsaWVudGlkO1xuICAgIHRoaXMuSUdSZWRpcmVjdFVSTCA9ICh0aGlzLmF1dGhjb25maWcuSUdSZWRpcmVjdFVSTCAhPScnKSA/IHRoaXMuYXV0aGNvbmZpZy5JR1JlZGlyZWN0VVJMIDogdGhpcy5hdXRoY29uZmlnLmxvZ2luVVJMIDtcbiAgfVxuIFxuXG4gIC8qKlxuICAgKiBATWV0aG9kOiBvcGVuIHRoZSBwb3AgdXAgdG8gYXV0aG9yaXplZCB0aGUgdXNlclxuICAgKiBAaW5wdXQ6IGNsaWVudCBJZFxuICAgKiBAb3V0cHV0OiBhY2Nlc3MgdG9rZW5cbiAgICogXG4gICAqL1xuICBpbnN0YVNpZ25JbigpeyAgICBcblxuICAgIHRoaXMuYXV0aGVudGljYXRlSW5zdGFncmFtKFxuICAgICAgdGhpcy5JR0NsaWVudGlkLFxuICAgICAgdGhpcy5JR1JlZGlyZWN0VVJMXG4gICk7XG4gIHJldHVybiBmYWxzZTtcblxuICB9XG5cbi8qKlxuICogQG1ldGhvZCB0byBvcGVuIHRoZSBwb3B1cCBhbmQgYXV0aGVudGljYXRlIHRoZSBJbnN0YWdyYW0gVXNlclxuICogQHBhcmFtIGluc3RhZ3JhbUNsaWVudElkIFxuICogQHBhcmFtIGluc3RhZ3JhbVJlZGlyZWN0VXJpXG4gKiBAb3V0cHV0IHVzZXIgZGF0YSBpbiBvYmplY3RcbiAqL1xuXG5hdXRoZW50aWNhdGVJbnN0YWdyYW0gKGluc3RhZ3JhbUNsaWVudElkLCBpbnN0YWdyYW1SZWRpcmVjdFVyaSkge1xuICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy8gUG9wLXVwIHdpbmRvdyBzaXplLCBjaGFuZ2UgaWYgeW91IHdhbnRcbiAgICBsZXQgcG9wdXBXaWR0aCA9IDcwMCxcbiAgICAgICAgcG9wdXBIZWlnaHQgPSA1MDAsXG4gICAgICAgIHBvcHVwTGVmdCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoIC0gcG9wdXBXaWR0aCkgLyAyLFxuICAgICAgICBwb3B1cFRvcCA9ICh3aW5kb3cuc2NyZWVuLmhlaWdodCAtIHBvcHVwSGVpZ2h0KSAvIDI7XG4gICAgLy8gVXJsIG5lZWRzIHRvIHBvaW50IHRvIGluc3RhZ3JhbV9hdXRoLnBocFxuICAgIGxldCBwb3B1cCA9IHdpbmRvdy5vcGVuKCdpbnN0YWdyYW1fYXV0aC5waHAnLCAnJywgJ3dpZHRoPScrcG9wdXBXaWR0aCsnLGhlaWdodD0nK3BvcHVwSGVpZ2h0KycsbGVmdD0nK3BvcHVwTGVmdCsnLHRvcD0nK3BvcHVwVG9wKycnKTtcbiAgICBwb3B1cC5vbmxvYWQgPSAoKSA9PntcbiAgICAgICAgLy8gT3BlbiBhdXRob3JpemUgdXJsIGluIHBvcC11cFxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcG9wdXAub3BlbignaHR0cHM6Ly9pbnN0YWdyYW0uY29tL29hdXRoL2F1dGhvcml6ZS8/Y2xpZW50X2lkPScraW5zdGFncmFtQ2xpZW50SWQrJyZyZWRpcmVjdF91cmk9JytpbnN0YWdyYW1SZWRpcmVjdFVyaSsnJnJlc3BvbnNlX3R5cGU9dG9rZW4nLCAnX3NlbGYnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbiBpbnRlcnZhbCBydW5zIHRvIGdldCB0aGUgYWNjZXNzIHRva2VuIGZyb20gdGhlIHBvcC11cFxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGhhc2ggZXhpc3RzICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgaWYocG9wdXAubG9jYXRpb24uaGFzaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFzaCBmb3VuZCwgdGhhdCBpbmNsdWRlcyB0aGUgYWNjZXNzIHRva2VuXG4gICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgdGhhdC5hY2Nlc3NUb2tlbiA9IHBvcHVwLmxvY2F0aW9uLmhhc2guc2xpY2UoMTQpOyAvL3NsaWNlICNhY2Nlc3NfdG9rZW49IGZyb20gc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICB0aGF0LmxvZ2luX2NhbGxiYWNrKCk7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGV2dCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gZXJyJyk7XG4gICAgICAgICAgICAgICAgLy8gUGVybWlzc2lvbiBkZW5pZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBAbWV0aG9kIEluc3RhZ3JhbSBBdXRoIGNhbGwgYmFjayBcbiAqIEBwYXJhbSBub25lXG4gKiBAb3V0cHV0IGpzb24gb2JqZWN0XG4gKi9cbiAgbG9naW5fY2FsbGJhY2soKXsgICAgIFxuICAgIGlmKHRoaXMuYWNjZXNzVG9rZW4peyAgIFxuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0SW5zdGFVc2VyRGF0YSh0aGlzLmFjY2Vzc1Rva2VuKS5zdWJzY3JpYmUoIHJlc3VsdCA9PiB7XG4gICAgICAgIGlmKHJlc3VsdCl7XG4gICAgICAgICAgbGV0IHByb2ZpbGUgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICBsZXQgZnVsbE5hbWUgPSBwcm9maWxlLmZ1bGxfbmFtZS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gY2FsbGluZyB0aGUgdXNlciByZWdpc3RyYXRpb24gbWV0aG9kIFxuICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZ2lzdGVyKHByb2ZpbGUpXG4gICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICByZXNwID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHN1Y2Nlc3NzIGZ1bGwgcmVnaXN0cmF0aW9uLCBqdXN0IGNhbGxlZCB0aGUgbG9naW4gbWV0aG9kLlxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHByb2ZpbGUpLnN1YnNjcmliZShyZXN1bHQgPT57XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoY29uZmlnLkFmdGVyTG9naW5VUkxdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIFxuICAgICAgfSk7ICAgICAgIFxuXG4gICAgfVxuICAgIFxuICB9XG4gXG59XG4iXX0=