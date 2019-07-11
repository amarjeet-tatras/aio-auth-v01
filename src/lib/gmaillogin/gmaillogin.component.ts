import { Component, OnInit, Input, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig, AuthConfigService } from '../auth-config';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialUser } from '../_services/user';
declare var gapi : any;
@Component({
  selector: 'lib-gmaillogin',
  templateUrl: './gmaillogin.component.html',
  styleUrls: ['./gmaillogin.component.css']
})
export class GmailloginComponent implements OnInit {

  @Input() btnText: String = 'SignIn/SignUp with ';
  constructor(private authenticationService: AuthenticationService,
    @Inject(AuthConfigService) private authconfig: AuthConfig,private router: Router,  private route: ActivatedRoute) { }

    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    ngOnInit() {

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
      this.initialize().then(response => {
          
      }).catch(error => {
          console.log(error,'error')
      });
      
   }

 initialize = function () {
   let clientSecretId = this.authconfig.gmailProvider;
   let G_ApiKey = this.authconfig.gmailAPIKey;
     var _this = this;
     return new Promise((
       function (resolve, reject) {
         _this.loadScript(clientSecretId, 'https://apis.google.com/js/platform.js', (
           function () {
             gapi.load('auth2', (
               
             function () {
                 _this.auth2 = gapi.auth2.init({
                  apiKey: G_ApiKey,
                  clientId: clientSecretId,
                  scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
                 });
                 _this.auth2.then((
                   function () {
                     //_this._readyState.next(true);
                     resolve();
                 })).catch((
                 function (err) {
                     reject(err);
                 }));
             }));
         }));
     }));
 };
 
  
  loadScript(id, src, onload, async, inner_text_content) {
      if (async === void 0) { async = true; }
      if (inner_text_content === void 0) { inner_text_content = ''; }
      if (document.getElementById(id)) {
          return;
      }
      src= 'https://apis.google.com/js/platform.js';
      
      var signInJS = document.createElement('script');
      signInJS.async = true;
      signInJS.src = src;
      signInJS.onload = onload;
      signInJS.text = 'Gmail Login'; // LinkedIn
      document.head.appendChild(signInJS);
  };

  signInWithGoogle () { 
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
        gapi.auth2.getAuthInstance().signIn().then(users =>{
          let profile = this.getGoogleProfile();

          this.authenticationService.register(profile)
          .pipe(first())
          .subscribe(
              resp => {
                this.authenticationService.login(profile).subscribe(result =>{
                  this.router.navigate([this.authconfig.AfterLoginURL]);
                });
              },
              error => {
                  console.log(error)
                  this.error = error;
                  this.loading = false;
              });

        }).catch( error => {
            console.log('Cancelled');
        })
      //}
  }

  /**
   * get Google user profile
   * @input: token
   * @output: object
   */
  getGoogleProfile(){
      var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
      
      var token = '';//gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token;
      var backendToken = '';//gapi.auth2.currentUser.getAuthInstance().get().getAuthResponse(true).id_token;    
      var user = new SocialUser();
      user.id = profile.getId();
      user.email = profile.getEmail();
      user.photoURL = profile.getImageUrl();
      user.firstName = profile.getGivenName();
      user.lastName = profile.getFamilyName();;
      user.authToken = token;
      user.idToken = backendToken;
      user.provider = "GOOGLE";
      return user;
  }
}
