import { Component, OnInit, Inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfigService, AuthConfig } from '../auth-config';

@Component({
  selector: 'ion-login',
  templateUrl: './ion-login.component.html',
  styleUrls: ['./ion-login.component.css']
})
export class IonLoginComponent extends LoginComponent implements OnInit {

  constructor(public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public authenticationService: AuthenticationService,
    @Inject(AuthConfigService) public authconfig: AuthConfig) { 
    super(
      formBuilder,
      route,
      router,
      authenticationService,
      authconfig
    );
  }

  ngOnInit() {
   super.ngOnInit();
  }

}
