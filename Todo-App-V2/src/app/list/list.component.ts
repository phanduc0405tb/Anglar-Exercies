import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/model/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() data: Todo[] = [];

  @Output() handleComplete = new EventEmitter();

  @Output() handleDelete = new EventEmitter();

  onCompleted(id) {
    this.handleComplete.emit(id);
  }

  onDeleted(id) {
    this.handleDelete.emit(id);
  }
  ngOnInit() {
  }

}
