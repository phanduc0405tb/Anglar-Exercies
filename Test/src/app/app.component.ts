import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  num = 25;
  name = 'Nguyen Van A';
  dob: Date = new Date(2018, 2, 1);

  obj = {
    name: 'abc',
    address: 'sssss'
  };
  color = 'red';
  isBool = true;
  changStatus() {
    this.isBool = !this.isBool;
  }
}
