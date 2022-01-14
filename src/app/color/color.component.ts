import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = '#d91d1d'

  constructor() { }

  ngOnInit(): void {
  }
  change1 () {
    this.color = '#123456'
  }
  change2() {
    this.color = '#879391'
  }

}
