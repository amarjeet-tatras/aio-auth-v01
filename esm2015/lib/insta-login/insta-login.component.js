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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGEtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWlvLWF1dGgtdjAxLyIsInNvdXJjZXMiOlsibGliL2luc3RhLWxvZ2luL2luc3RhLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFjLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXZDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFROUIsWUFBcUIsTUFBYyxFQUN6QixxQkFBNEMsRUFDakIsVUFBc0I7UUFGdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUcEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVcsaUJBQWlCLENBQUM7SUFNa0IsQ0FBQzs7Ozs7SUFJaEUsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUU7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QWtFO3dCQUNsRSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVM7Ozs7d0JBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQy9FLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxDQUFDLEVBQUMsQ0FBQztvQkFDTCxDQUFDOzs7O29CQUNELEtBQUssQ0FBQyxFQUFFO3dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBQyxDQUFDO2lCQUNSO1lBR0gsQ0FBQyxFQUFDLENBQUM7U0FFSjtJQUVILENBQUM7OztZQXBIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsOEtBQTJDOzthQUU1Qzs7OztZQVZRLE1BQU07WUFDTixxQkFBcUI7NENBb0J6QixNQUFNLFNBQUMsaUJBQWlCOzs7c0JBTjFCLEtBQUs7Ozs7SUFITiwwQ0FBMEI7Ozs7O0lBQzFCLHlDQUF3Qjs7Ozs7SUFDeEIsNENBQTJCOztJQUMzQixzQ0FBNkM7Ozs7O0lBSWhDLHFDQUFzQjs7Ozs7SUFDakMsb0RBQW9EOzs7OztJQUNwRCx5Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBdXRoQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU29jaWFsVXNlciB9IGZyb20gJy4uL19zZXJ2aWNlcy91c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtaW5zdGEtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5zdGEtbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnN0YS1sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5zdGFMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBhY2Nlc3NUb2tlbiA9IG51bGw7XG4gIHByaXZhdGUgSUdDbGllbnRpZCA9ICcnO1xuICBwcml2YXRlIElHUmVkaXJlY3RVUkwgPSAnJztcbiAgQElucHV0KCkgYnRuVGV4dDogU3RyaW5nID0gJ0luc3RhZ3JhbSBMb2dpbic7XG5cblxuICAvLyBjb25zdHJ1Y3RvciBzdGFydCBoZXJlIFxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCAgICBcbiAgICBASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBwcml2YXRlIGF1dGhjb25maWc6IEF1dGhDb25maWcgKSB7fVxuXG4gIC8vbmdPbkluaXQgY2FsbGVkIGF0IHBhZ2UgbG9hZC8vIFxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5JR0NsaWVudGlkID0gdGhpcy5hdXRoY29uZmlnLklHQ2xpZW50aWQ7XG4gICAgdGhpcy5JR1JlZGlyZWN0VVJMID0gKHRoaXMuYXV0aGNvbmZpZy5JR1JlZGlyZWN0VVJMICE9JycpID8gdGhpcy5hdXRoY29uZmlnLklHUmVkaXJlY3RVUkwgOiB0aGlzLmF1dGhjb25maWcubG9naW5VUkwgO1xuICB9XG4gXG5cbiAgLyoqXG4gICAqIEBNZXRob2Q6IG9wZW4gdGhlIHBvcCB1cCB0byBhdXRob3JpemVkIHRoZSB1c2VyXG4gICAqIEBpbnB1dDogY2xpZW50IElkXG4gICAqIEBvdXRwdXQ6IGFjY2VzcyB0b2tlblxuICAgKiBcbiAgICovXG4gIGluc3RhU2lnbkluKCl7ICAgIFxuXG4gICAgdGhpcy5hdXRoZW50aWNhdGVJbnN0YWdyYW0oXG4gICAgICB0aGlzLklHQ2xpZW50aWQsXG4gICAgICB0aGlzLklHUmVkaXJlY3RVUkxcbiAgKTtcbiAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuLyoqXG4gKiBAbWV0aG9kIHRvIG9wZW4gdGhlIHBvcHVwIGFuZCBhdXRoZW50aWNhdGUgdGhlIEluc3RhZ3JhbSBVc2VyXG4gKiBAcGFyYW0gaW5zdGFncmFtQ2xpZW50SWQgXG4gKiBAcGFyYW0gaW5zdGFncmFtUmVkaXJlY3RVcmlcbiAqIEBvdXRwdXQgdXNlciBkYXRhIGluIG9iamVjdFxuICovXG5cbmF1dGhlbnRpY2F0ZUluc3RhZ3JhbSAoaW5zdGFncmFtQ2xpZW50SWQsIGluc3RhZ3JhbVJlZGlyZWN0VXJpKSB7XG4gIGxldCB0aGF0ID0gdGhpcztcbiAgICAvLyBQb3AtdXAgd2luZG93IHNpemUsIGNoYW5nZSBpZiB5b3Ugd2FudFxuICAgIGxldCBwb3B1cFdpZHRoID0gNzAwLFxuICAgICAgICBwb3B1cEhlaWdodCA9IDUwMCxcbiAgICAgICAgcG9wdXBMZWZ0ID0gKHdpbmRvdy5zY3JlZW4ud2lkdGggLSBwb3B1cFdpZHRoKSAvIDIsXG4gICAgICAgIHBvcHVwVG9wID0gKHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC0gcG9wdXBIZWlnaHQpIC8gMjtcbiAgICAvLyBVcmwgbmVlZHMgdG8gcG9pbnQgdG8gaW5zdGFncmFtX2F1dGgucGhwXG4gICAgbGV0IHBvcHVwID0gd2luZG93Lm9wZW4oJ2luc3RhZ3JhbV9hdXRoLnBocCcsICcnLCAnd2lkdGg9Jytwb3B1cFdpZHRoKycsaGVpZ2h0PScrcG9wdXBIZWlnaHQrJyxsZWZ0PScrcG9wdXBMZWZ0KycsdG9wPScrcG9wdXBUb3ArJycpO1xuICAgIHBvcHVwLm9ubG9hZCA9ICgpID0+e1xuICAgICAgICAvLyBPcGVuIGF1dGhvcml6ZSB1cmwgaW4gcG9wLXVwXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBwb3B1cC5vcGVuKCdodHRwczovL2luc3RhZ3JhbS5jb20vb2F1dGgvYXV0aG9yaXplLz9jbGllbnRfaWQ9JytpbnN0YWdyYW1DbGllbnRJZCsnJnJlZGlyZWN0X3VyaT0nK2luc3RhZ3JhbVJlZGlyZWN0VXJpKycmcmVzcG9uc2VfdHlwZT10b2tlbicsICdfc2VsZicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFuIGludGVydmFsIHJ1bnMgdG8gZ2V0IHRoZSBhY2Nlc3MgdG9rZW4gZnJvbSB0aGUgcG9wLXVwXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaGFzaCBleGlzdHMgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZihwb3B1cC5sb2NhdGlvbi5oYXNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYXNoIGZvdW5kLCB0aGF0IGluY2x1ZGVzIHRoZSBhY2Nlc3MgdG9rZW5cbiAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0aGF0LmFjY2Vzc1Rva2VuID0gcG9wdXAubG9jYXRpb24uaGFzaC5zbGljZSgxNCk7IC8vc2xpY2UgI2FjY2Vzc190b2tlbj0gZnJvbSBzdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubG9naW5fY2FsbGJhY2soKTsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZXZ0KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBlcnInKTtcbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIGRlbmllZFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH07XG59O1xuXG4vKipcbiAqIEBtZXRob2QgSW5zdGFncmFtIEF1dGggY2FsbCBiYWNrIFxuICogQHBhcmFtIG5vbmVcbiAqIEBvdXRwdXQganNvbiBvYmplY3RcbiAqL1xuICBsb2dpbl9jYWxsYmFjaygpeyAgICAgXG4gICAgaWYodGhpcy5hY2Nlc3NUb2tlbil7ICAgXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRJbnN0YVVzZXJEYXRhKHRoaXMuYWNjZXNzVG9rZW4pLnN1YnNjcmliZSggcmVzdWx0ID0+IHtcbiAgICAgICAgaWYocmVzdWx0KXtcbiAgICAgICAgICBsZXQgcHJvZmlsZSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgIGxldCBmdWxsTmFtZSA9IHByb2ZpbGUuZnVsbF9uYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBjYWxsaW5nIHRoZSB1c2VyIHJlZ2lzdHJhdGlvbiBtZXRob2QgXG4gICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UucmVnaXN0ZXIoZnVsbE5hbWVbMF0sIChmdWxsTmFtZVsxXSA/IGZ1bGxOYW1lWzFdIDogJy4nKSwgcHJvZmlsZS51c2VybmFtZSwgcHJvZmlsZS5pZCwgJ0lOU1RBR1JBTScsIHByb2ZpbGUucHJvZmlsZV9waWN0dXJlKVxuICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzcCA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBhZnRlciBzdWNjZXNzcyBmdWxsIHJlZ2lzdHJhdGlvbiwganVzdCBjYWxsZWQgdGhlIGxvZ2luIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dpbihwcm9maWxlLnVzZXJuYW1lLHByb2ZpbGUuaWQpLnN1YnNjcmliZShyZXN1bHQgPT57XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5hdXRoY29uZmlnLkFmdGVyTG9naW5VUkxdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIFxuICAgICAgfSk7ICAgICAgIFxuXG4gICAgfVxuICAgIFxuICB9XG4gXG59XG4iXX0=