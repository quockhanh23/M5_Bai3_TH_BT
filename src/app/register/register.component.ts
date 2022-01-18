import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Register} from "../app.module";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listUser: Register[] = [
    {
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      age: '',
      gender: '',
      phone: ''
    }
  ]
  register = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    country: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): any {
    console.log(this.register.value)
    this.listUser.push(this.register.value)
  }
}
