import {Component, OnInit} from '@angular/core';
import {Category} from "../app.module";
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})

export class CategoryComponent implements OnInit {
  public category: Category = {
    name: 'khánh',
    age: 0,
    team: ['Seal 6', 'SAS', 'GIGN', 'FBI'],
    team2: [
      {gign: 'GIGN', sas: 'SAS', fbi: 'FBI'},
      {cia: 'CIA', policezei: 'POLICEZEI', swat: 'SWAT'}
    ]
  }

  constructor(private common: CommonService) {
    this.category.age = common.age
    this.category.name = common.name
  }

  ngOnInit(): void {
  }

  changeAge() {
    this.common.age++
    this.category.age = this.common.age
  }
  changeName() {
    this.common.name = this.category.name
  }

}
