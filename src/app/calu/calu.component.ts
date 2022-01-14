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

  add() {
    // @ts-ignore
    let a = +document.getElementById('number1').value;
    // @ts-ignore
    let b = +document.getElementById('number2').value;
    let res = a + b
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }

  minus(): any {
    // @ts-ignore
    let a = +document.getElementById('number1').value;
    // @ts-ignore
    let b = +document.getElementById('number2').value;
    let res = a - b
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }

  multiplication(): any {
    // @ts-ignore
    let a = +document.getElementById('number1').value;
    // @ts-ignore
    let b = +document.getElementById('number2').value;
    let res = a * b
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }

  division() {
    // @ts-ignore
    let a = +document.getElementById('number1').value;
    // @ts-ignore
    let b = +document.getElementById('number2').value;
    let res = a / b
    // @ts-ignore
    document.getElementById('res').innerHTML = res
  }
}


