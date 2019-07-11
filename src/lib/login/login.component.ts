import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig, AuthConfigService } from '../auth-config';

@Component({
  selector: 'td-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public loading = false;
    public submitted = false;
    public returnUrl: string;
    public error = '';
    public showLogin: Boolean = true;
    public currentUser: any;
    
    public regURL: string = (this.authconfig.registerURL) ? this.authconfig.registerURL :'register';
    
    public resetPwdURL: string = (this.authconfig.resetPwdURL) ? this.authconfig.resetPwdURL :'reset-password';
    

    @Input() loginBtnText: String = 'Login';
    @Input() RegBtnText: String = 'Register';
    @Input() heading: String = '';
    @Input() registerLink: number = 1;
    @Input() passwordHints: String = "";
    


    constructor(
        public formBuilder: FormBuilder,
        public route: ActivatedRoute,
        public router: Router,
        public authenticationService: AuthenticationService,
        @Inject(AuthConfigService) public authconfig: AuthConfig
    ) { }

    ngOnInit() {

        if(this.authenticationService.currentUserValue){
            this.showLogin = false;
            this.currentUser = this.authenticationService.currentUserValue;            
        }
        this.registerLink = (this.registerLink == 1 ) ? 0 : 1 ;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
        });
        console.log(this.passwordHints);
        // reset login status
       // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.authconfig.AfterLoginURL;
        
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error)
                    this.error = error;
                    this.loading = false;
                });
    }
}