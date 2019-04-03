import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatPictureService } from './services/cat-picture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  /**
   *
   */
  constructor(private router: Router, private pivService: CatPictureService) {}
  num = 25;
  name = 'Nguyen Van A';
  dob: Date = new Date(2018, 2, 1);
  obj = {
    name: 'abc',
    address: 'sssss'
  };
  listObject: any[] = [];
  color = 'red';
  isBool = true;
  changStatus() {
    this.isBool = !this.isBool;
  }
  changURL() {
    this.router.navigateByUrl('/router 01');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.pivService
      .get(
        // tslint:disable-next-line:max-line-length
        'http://dummy.restapiexample.com/api/v1/employee/6369'
      ).subscribe ( value => {
        // tslint:disable-next-line:no-unused-expression
        this.listObject = value;
        console.log(this.listObject);
      });
  }
}
