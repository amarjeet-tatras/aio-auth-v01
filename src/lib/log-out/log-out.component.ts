import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';
import { Router } from '@angular/router';
import { AuthConfig, AuthConfigService } from '../auth-config';
 
@Component({
  selector: 'td-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService, private router: Router,  @Inject(AuthConfigService) private authconfig: AuthConfig) { }


  ngOnInit() {
  }
  /**
   * @method: SignOut
   * @input: none
   * @output: boolean
   */

  signOut(){
    this.authenticationService.logout();                
    this.router.navigate(['/']);
  }

}
