import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig, AuthConfigService } from '../auth-config';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public resetPwdForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public showLogin: Boolean = true;
  public currentUser: any;
  
  public loginURL: string = (this.authconfig.loginURL) ? this.authconfig.loginURL :'login';
  
  public resetPwdURL: string = (this.authconfig.resetPwdURL) ? this.authconfig.resetPwdURL :'reset-password';
  public successMsg: string ='';

  @Input() loginBtnText: String = 'Login';

  @Input() heading: String = 'Reset Password';


  constructor(
      public formBuilder: FormBuilder,
      public route: ActivatedRoute,
      public router: Router,
      public authenticationService: AuthenticationService,
      @Inject(AuthConfigService) public authconfig: AuthConfig
  ) { }

  ngOnInit() {

      

      this.resetPwdForm = this.formBuilder.group({
          username: ['', [Validators.required, Validators.email]]
      });

      // reset login status
     // this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetPwdForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.resetPwdForm.invalid) {
          return;
      }
      
      this.loading = true;
      this.authenticationService.resetPassword(this.f.username.value).subscribe(res =>{
        if(res.message  =="ok"){
          this.successMsg =  "Password reset link has been sent to your registered email. To reset password check email.";
        }else{
          this.error =  "Something wrong with server. Please try again";
        }  
      });
      
  }

}
