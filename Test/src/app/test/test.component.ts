import { Component, OnInit } from '@angular/core';
import { listData } from '../Data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //  data: any[] = [
  //   {id: 1, name: 'A'},
  //   {id: 2, name: 'B'},
  //   {id: 3, name: 'C'},
  //   {id: 4, name: 'D'},
  // ];
  data = listData;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
