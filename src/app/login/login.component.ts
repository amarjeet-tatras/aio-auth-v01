import { Component, OnInit } from '@angular/core';
import { AioAuthV01Service } from 'aio-auth-v01';


@Component({
  selector: 'ld-login',
  templateUrl : './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  // define the  form status 
  showLogin: Boolean = true;
  currentUser: object;
  status = 'ONLINE';
  isConnected = true;
  constructor(private AutSer: AioAuthV01Service){
    
  }
  ngOnInit() {
   if(this.AutSer.isLogin){
     this.showLogin = false;
     this.currentUser = this.AutSer.isLogin;
     
   }
    
  }

  checkNetwork(){ 
  }
   
  }