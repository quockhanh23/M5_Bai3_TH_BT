import {Component, OnInit} from '@angular/core';
import {Category} from "../app.module";
import {Team2} from "../app.module";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category = {
    name: 'khánh',
    age: 0,
    team: ['Seal 6', 'SAS', 'GIGN', 'FBI'],
    team2 : {
      gign: 'GIGN',
      fbi: 'FBI',
      sas: 'SAS'
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

