import { Component, OnInit } from '@angular/core';
import { AioAuthV01Service } from 'aio-auth-v01';
import { UserService } from '../user.service';

@Component({
  selector: 'ld-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private serv: UserService) {
      
  }

  profile(){
    this.serv.profile("amarjeet","password").subscribe();
  }

 ngOnInit() {
  }

}
