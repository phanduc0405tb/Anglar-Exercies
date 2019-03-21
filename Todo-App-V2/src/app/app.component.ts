import { Component } from '@angular/core';
import { Todo } from '../model/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-App-V2';
   listTodo: Todo[] = [];
   handleInput( value ) {
     const item: Todo = {
       id: new Date().getMilliseconds(),
       text: value,
       isCompleted: false
     };
     this.listTodo.push(item);
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
