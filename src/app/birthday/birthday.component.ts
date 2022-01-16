import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  public birthday = new Date(1988, 3, 15);
  public toggle = true

  constructor() {
  }

  ngOnInit(): void {
  }
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() {
    this.toggle = !this.toggle; }
}
