import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-name-card';
  vote: number = 0;

  constructor() {
  }

  ngOnInit() {
  }
}
