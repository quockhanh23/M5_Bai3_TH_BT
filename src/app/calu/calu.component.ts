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

  res(): any {
    // @ts-ignore
    let res = document.getElementById('res')
    return res
  }

  check(): boolean {
    let check = isNaN(this.number1()) || isNaN(this.number2())
    return check
  }

  add(): any {
    let res = this.number1() + this.number2();
    if (this.check())
      res = "Nhập số vào"
    this.res().innerHTML = res
  }

  minus(): any {
    if (this.check())
      this.res().innerHTML = "Nhập số vào"
    else
      // @ts-ignore
      this.res().innerHTML = this.number1() - this.number2()
  }

  multiplication(): any {
    if (this.check())
      this.res().innerHTML = "Nhập số vào"
    else
      // @ts-ignore
      this.res().innerHTML = this.number1() * this.number2()
  }

  division(): any {
    if (this.check())
      this.res().innerHTML = "Nhập số vào"
    else
      // @ts-ignore
      this.res().innerHTML = this.number1() / this.number2()
  }

  change() {
    // @ts-ignore
    document.getElementById('nhập1').style.background = "#1ee02f";
  }

  change1() {
    // @ts-ignore
    document.getElementById('nhập1').style.background = "#9d0f75";
  }
}



