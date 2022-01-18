import {Component, OnInit} from '@angular/core';
import {Product2} from "../model/product2";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  listProduct: Product2[] = [{
    id: '1',
    name: 'IP1',
    price: '100'
  },
    {
      id: '2',
      name: 'IP2',
      price: '100'
    },
    {
      id: '3',
      name: 'IP3',
      price: '100'
    }]

  form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.nullValidator]),
    name: new FormControl('', [Validators.required, Validators.nullValidator]),
    price: new FormControl('', [Validators.required, Validators.nullValidator]),
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  add(): any {
    this.listProduct.push(this.form.value)
  }

  findByIndex(): any {
    for (let i = 0; i < this.listProduct.length; i++) {
      // @ts-ignore
      if (this.listProduct === i) {
        return i
      }
      return -1
    }
  }

  validNumber(): any {
    // @ts-ignore
    if (isNaN(this.form.get('id'))) {
      return "Nhập số bạn ơi"
    }
  }

  delete(): any {
    let index = this.findByIndex()
    this.listProduct.splice(index)
  }

  get form1() {
    return this.form.controls
  }

  get form2(): { [key: string]: AbstractControl; } {
    return this.form.controls;
  }

}
