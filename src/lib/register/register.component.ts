import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder,Validators, FormGroup} from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { first, debounceTime, distinctUntilChanged, mergeMap, delay } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig, AuthConfigService } from '../auth-config';
 

@Component({
  selector: 'td-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error = ''; 
  registerForm: FormGroup;
 
  custClass = '';
  frmShow  = true;
  public loginURL: string = (this.authconfig.loginURL) ? this.authconfig.loginURL :'login';
  public regSuccessMsg: string = (this.authconfig.regSuccessMsg) ? this.authconfig.regSuccessMsg :'Successfully Submitted';
  @Input() loginBtnText: String = 'Login';
  @Input() RegBtnText: String = 'Register';
  @Input() heading: String = 'User Register';




  constructor(
    public fb: FormBuilder, 
    public route: ActivatedRoute,
    public router: Router,
    public authenticationService: AuthenticationService,
    @Inject(AuthConfigService) public authconfig: AuthConfig
  ) { }

  
  // get controll value for form validatation 
  get f() { return this.registerForm.controls; } 

/**
 * @ Method to do register
 * @ input: the required fields like username, email, password etc
 * @ output: objservable
 */
  onSubmit(){
    this.submitted = true;


    if(this.registerForm.invalid && this.userExist == false){
      console.log('Reg Form Error');
      return ;
    }   
   
    this.loading = true;
    this.authenticationService.register(this.f)
      .pipe(first())
      .subscribe(
          resp => { 
            if(resp.errorCode ==null){
              this.custClass = 'success'; 
              this.frmShow = false;              
            }else if(resp.errorCode == 'user_exist'){
              this.userExist = true;  
            }else{
              this.error = 'Something wrong';              
            }            
          },
          error => {
              this.error = error;
              this.loading = false;
          });
      //this.registerForm.reset(); 
}

  ngOnInit() {
    this.registerForm = this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
          lastName: ['', [Validators.required , Validators.minLength(2), Validators.maxLength(30)]],
          password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
        },
        {
          validator: [MustMatch('password', 'confirmPassword')]
        }
    )
  };
  userExist: boolean = false;
  curEmail: string = '';
  
  async isEmailUnique(email: string) { 
    
    if(this.f.firstName.value =="" && this.f.lastName.value==""){
      return false;
    }  

    if(email == this.curEmail){
      return false;
    }else{
      this.curEmail = email;
    } 

    await this.authenticationService.checkEmailExis(email)
    .pipe(
      first(), 
      debounceTime(200),
      distinctUntilChanged()
    )
    .subscribe(
      resp => {  
        if(resp.message !='ok'){ 
          this.userExist = true; 
        }else{
          this.userExist = false; 
        }
      },
      error => {
          this.error = error;
          this.loading = false;
      }
    ); 
  }
}
