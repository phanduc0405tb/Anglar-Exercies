import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa-mail',
  templateUrl: './fa-mail.component.html',
  styleUrls: ['./fa-mail.component.css']
})
export class FaMailComponent implements OnInit {
 public folder = '';
  constructor() { }
  ngOnInit() {
  }
  sendData(folderName) {
    this.folder = folderName;
    }

}
