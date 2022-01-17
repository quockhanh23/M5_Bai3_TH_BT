import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string | undefined;
  @Input() email: string | undefined;
  @Input() phone: string | undefined;
  @Input() age: number | undefined;
  @Output() voteSize = new EventEmitter<any>();
  @Output() newItemEvent = new EventEmitter<string>();
  counter: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  voted() {
    this.counter++;
    this.voteSize.emit(this.counter);
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
