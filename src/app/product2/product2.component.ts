import {Component, OnInit} from '@angular/core';
import {Product2} from "../model/product2";
import {FormControl, FormGroup} from "@angular/forms";

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
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    })

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): any {
    this.listProduct.push(this.form.value)
  }
}
