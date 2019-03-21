import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/model/Todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() todo: Todo ;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete = new EventEmitter();

  Complete(id) {
    this.onComplete.emit(id);
  }

  Delete(id) {
    this.onDelete.emit(id);
  }

  ngOnInit() {
  }

}
