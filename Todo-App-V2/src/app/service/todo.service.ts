import { Injectable } from '@angular/core';
import { Todo } from '../../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  logData(todo: any) {
    console.log(todo);
  }
}
