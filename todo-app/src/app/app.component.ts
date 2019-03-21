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
  public arr: any[] = [];
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
  generateSpiralMatrix(n: number): number[][] {
    this.arr = [];
    let childArr: number[] = [];
    let i = 0;
    let giaTri = 1;
    let vong = 0;
    let index = n;
    //
    while (giaTri <= n * n) {
      childArr.push(giaTri);
      if (giaTri % n === 0) {
        this.arr.push(childArr);
        childArr = [];
      }
      giaTri++;
    }
    giaTri = 1;
    while (giaTri <= n * n) {
      // thêm phần tử dòng trên cùng của một vòng xoắn
      for (i = vong; i <= index - 1; i++) {
        this.arr[vong][i] = giaTri++;
      }
      // thêm phần tử vào cột phải của một vòng xoắn
      for (i = vong + 1; i <= index - 1 ; i++) {
        this.arr[i][index - 1 ] = giaTri++;
      }
      // thêm phần tử vào dòng dưới cùng  của một vòng xoắn
      for (i = index - 2; i >= vong; i--) {
        this.arr[index - 1][i] = giaTri++;
      }
      // thêm phần tử vào cột bên trái của một vòng xoắn
      for (i = index - 2; i > vong; i--) {
        this.arr[i][vong] = giaTri++;
      }
      vong++;
      index--;
    }
    return this.arr ;
  }
}
