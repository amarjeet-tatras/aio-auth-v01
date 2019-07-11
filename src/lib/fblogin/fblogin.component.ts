import { Component, OnInit, Input, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig, AuthConfigService } from '../auth-config';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { SocialUser } from '../_services/user';
declare var FB: any;

@Component({
  selector: 'lib-fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.css']
})
export class FbloginComponent implements OnInit {

  public currentUser: Observable<SocialUser>;

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  @Input() btnText: String = 'SignIn/SignUp with ';
  constructor(@Inject(AuthConfigService) private authconfig: AuthConfig, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {

  }

  ngAfterViewInit() {
    let $fbProvider = this.authconfig.FBProvider;
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: $fbProvider,
        autoLogAppEvents: true,
        cookie: true,
        xfbml: true,
        version: 'v3.3'
      });
    };
  }
  ngOnInit() {

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.async = false;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  /**
   * fbLogin method to check or do  facebook login
   * @input: none
   * @ouput: object
   * 
   */

  fbLogin() {
    this.getFbUserData().then(data => {
      this.loading = true;
      this.authenticationService.fbRegister(data)
        .pipe(first())
        .subscribe(
          resp => {

            this.authenticationService.FBlogin(data).subscribe(result => {
              this.router.navigate([this.authconfig.AfterLoginURL]);
            });
          },
          error => {
            this.error = error;
            this.loading = false;
          });

    }).catch(error => {
      console.log(error)
    })
  }

  /**
   * @method: Facebook Login
   * @input: Facebook App Id
   * @outpt: Object User data 
   */
  getFbUserData() {
    return new Promise((
      function (resolve, reject) {
        FB.login((function (response) {

          if (response.authResponse) {
            var authResponse_2 = response.authResponse;
            FB.api("/me", { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' }, (
              function (fbUser) {

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
              }));
          }
          else {
            reject('User cancelled login or did not fully authorize.');
          }
        }), { scope: 'email' });
      }
    ));
  }
}