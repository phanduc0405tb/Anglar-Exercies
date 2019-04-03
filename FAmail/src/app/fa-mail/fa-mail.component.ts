import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fa-mail',
  templateUrl: './fa-mail.component.html',
  styleUrls: ['./fa-mail.component.css']
})
export class FaMailComponent implements OnInit {
 public folder = '';
 account = 'inbox';
  constructor(private activeRouter: ActivatedRoute, private router: Router) { }
  ngOnInit() {
     this.activeRouter.params.subscribe( param => {
      // tslint:disable-next-line:no-string-literal
      this.account =  param.account;
      this.router.navigateByUrl('/appmessages/' + this.account + '/mymessages');
    });
  }
  sendData(folderName) {
    this.folder = folderName;
    }
  onClick($event) {
    this.account = $event.target.text;
    }

}
