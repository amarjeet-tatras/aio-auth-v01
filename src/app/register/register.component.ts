import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ld-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  @Output() title: String = "Membership Form";
  ngOnInit() {
  }

}
