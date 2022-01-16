import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color2',
  templateUrl: './color2.component.html',
  styleUrls: ['./color2.component.css']
})
export class Color2Component implements OnInit {
  color1 = 0
  color2 = 0
  color3 = 0

  constructor() {
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

}
