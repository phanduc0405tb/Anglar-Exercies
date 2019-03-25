import { Component } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from './service/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-App-V2';
   listTodo: Todo[] = [];
   constructor(private todoService: TodoService) {}
   handleInput( value ) {
     const item: Todo = {
       id: new Date().getMilliseconds(),
       text: value,
       isCompleted: false
     };
     this.listTodo.push(item);
     this.todoService.logData(value);
   }
   completeTodo(id) {
     // tslint:disable-next-line:prefer-const
     let item = this.listTodo.find( todo => todo.id === id);
     item.isCompleted = !item.isCompleted;
   }

   deleteTodo(id) {
     this.listTodo = this.listTodo.filter(todo => todo.id !== id);
   }
}
