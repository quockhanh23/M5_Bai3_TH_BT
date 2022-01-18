import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    age: new FormControl('',[Validators.required,Validators.min(16)]),
    gender: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required,Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): any {
    alert("Đăng kí thành công")
    console.log(this.register.value)
    this.listUser.push(this.register.value)
  }
}
