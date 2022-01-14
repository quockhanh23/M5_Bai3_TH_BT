import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calu',
  templateUrl: './calu.component.html',
  styleUrls: ['./calu.component.css']
})
export class CaluComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  number1(): any {
    // @ts-ignore
    let a = +document.getElementById('number1').value;
    return a
  }

  number2(): any {
    // @ts-ignore
    let b = +document.getElementById('number2').value;
    return b
  }

  add(): any {
    let res = this.number1() + this.number2();
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }

  minus(): any {
    let res = this.number1() - this.number2();
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }

  multiplication(): any {
    let res = this.number1() * this.number2();
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }

  division() {
    let res = this.number1() / this.number2();
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }
}


