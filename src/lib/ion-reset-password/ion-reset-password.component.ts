import { Component, OnInit, Inject } from '@angular/core';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AuthConfig, AuthConfigService } from '../auth-config';


@Component({
  selector: 'ion-reset-password',
  templateUrl: './ion-reset-password.component.html',
  styleUrls: ['./ion-reset-password.component.css']
})
export class IonResetPasswordComponent extends ResetPasswordComponent implements OnInit {

  constructor( public formBuilder: FormBuilder,
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
    )
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
