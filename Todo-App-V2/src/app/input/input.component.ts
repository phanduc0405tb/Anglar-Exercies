import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPressEnter = new EventEmitter();

  onEnter($event) {
    this.onPressEnter.emit($event.target.value);
    $event.target.value = '';
  }
  constructor() { }
  ngOnInit() {
  }

}
