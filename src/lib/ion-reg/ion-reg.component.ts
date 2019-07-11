import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthConfig, AuthConfigService } from '../auth-config';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'ion-reg',
  templateUrl: './ion-reg.component.html',
  styleUrls: ['./ion-reg.component.css']
})
export class IonRegComponent extends RegisterComponent{

  
  constructor(
   
    public fb: FormBuilder, 
    public route: ActivatedRoute,
    public router: Router,
    public authenticationService: AuthenticationService,
    @Inject(AuthConfigService) public authconfig: AuthConfig
    ) { 
      super(
        fb,
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
