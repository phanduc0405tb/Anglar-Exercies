import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  public listTodo = [
    { name: 'The duc', completed: false },
    { name: 'Di hoc', completed: false },
    { name: 'Hoc bai', completed: false }
  ];
  public taskname: string;
  // khai bao bien can trong mang
  add() {
    this.listTodo.push({ name: this.taskname, completed: false });
    this.taskname = '';
  }
  delete(todo) {
    this.listTodo.splice(this.listTodo.indexOf(todo), 1);
  }
  changComplete(todo) {
    // tslint:disable-next-line:no-unused-expression
    this.listTodo[this.listTodo.indexOf(todo)].completed = !todo.completed;
  }
  generateSpiralMatrix(n) {
    let arr: number[][] = [];
    let i = 0;
    let giaTri = 1;
    let j = 0;
    let vong = 0;
    let hang = n - 1;
    let cot = n - 1;
    while (vong <= n / 2) {
      for (i = vong; i <= cot; i++) {
        arr[vong][i] = giaTri++;
      }
      for (i = vong + 1; i <= hang; i++) {
        arr[i][cot] = giaTri++;
      }
      for (i = cot - 1; i >= vong; i--) {
        arr[hang][i] = giaTri++;
      }
      for (i = hang - 1; i >= vong; i--) {
        arr[i][vong] = giaTri++;
      }
      vong++;
      hang--;
      cot--;
    }
    // console.log(this.arr.length);
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        console.log(arr[i][j]);
      }
    }
  }
}
