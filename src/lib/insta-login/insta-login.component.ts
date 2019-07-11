import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig, AuthConfigService } from '../auth-config';
import { first } from 'rxjs/operators';
import { SocialUser } from '../_services/user';

@Component({
  selector: 'td-insta-login',
  templateUrl: './insta-login.component.html',
  styleUrls: ['./insta-login.component.css']
})
export class InstaLoginComponent implements OnInit {
  public accessToken = null;
  private IGClientid = '';
  private IGRedirectURL = '';
  @Input() btnText: String = 'Instagram Login';


  // constructor start here 
  constructor( private router: Router,
    private authenticationService: AuthenticationService,    
    @Inject(AuthConfigService) private authconfig: AuthConfig ) {}

  //ngOnInit called at page load// 
  
  ngOnInit() {
    this.IGClientid = this.authconfig.IGClientid;
    this.IGRedirectURL = (this.authconfig.IGRedirectURL !='') ? this.authconfig.IGRedirectURL : this.authconfig.loginURL ;
  }
 

  /**
   * @Method: open the pop up to authorized the user
   * @input: client Id
   * @output: access token
   * 
   */
  instaSignIn(){    

    this.authenticateInstagram(
      this.IGClientid,
      this.IGRedirectURL
  );
  return false;

  }

/**
 * @method to open the popup and authenticate the Instagram User
 * @param instagramClientId 
 * @param instagramRedirectUri
 * @output user data in object
 */

authenticateInstagram (instagramClientId, instagramRedirectUri) {
  let that = this;
    // Pop-up window size, change if you want
    let popupWidth = 700,
        popupHeight = 500,
        popupLeft = (window.screen.width - popupWidth) / 2,
        popupTop = (window.screen.height - popupHeight) / 2;
    // Url needs to point to instagram_auth.php
    let popup = window.open('instagram_auth.php', '', 'width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+'');
    popup.onload = () =>{
        // Open authorize url in pop-up
        if(window.location.hash.length == 0) {
            popup.open('https://instagram.com/oauth/authorize/?client_id='+instagramClientId+'&redirect_uri='+instagramRedirectUri+'&response_type=token', '_self');
        }
        // An interval runs to get the access token from the pop-up
        let interval = setInterval(() => {
            try {
                // Check if hash exists                
               if(popup.location.hash.length) {
                    // Hash found, that includes the access token
                   clearInterval(interval);                  
                   that.accessToken = popup.location.hash.slice(14); //slice #access_token= from string                                   
                    popup.close()
                    that.login_callback();                   
                   
                }
            }
            catch(evt) {
              console.log('in err');
                // Permission denied
            }
        }, 100);
    };
};

/**
 * @method Instagram Auth call back 
 * @param none
 * @output json object
 */
  login_callback(){     
    if(this.accessToken){   
      this.authenticationService.getInstaUserData(this.accessToken).subscribe( result => {
        if(result){
          let profile = result.data;
          let fullName = profile.full_name.split(" ");
          
          // calling the user registration method 
          this.authenticationService.register(profile)
          .pipe(first())
          .subscribe(
              resp => {

                // after successs full registration, just called the login method.
                this.authenticationService.login(profile).subscribe(result =>{
                  this.router.navigate([this.authconfig.AfterLoginURL]);
                });
              },
              error => {
                  console.log(error);
              });
        }
        
         
      });       

    }
    
  }
 
}
