import { Component, OnInit } from '@angular/core';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit(): void {

  }

}

