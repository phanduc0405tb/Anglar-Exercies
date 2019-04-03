import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MailmanagmentService } from '../service/mailmanagment.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router,
              private mailService: MailmanagmentService ) {}
  onCLick(user, password) {
  // tslint:disable-next-line:max-line-length
  if ((user.value === 'myself@angular.dev' || user.value === 'devguy@angular.dev' || user.value === 'devgal@angular.dev') && password.value === '12345' )  {
      this.router.navigate(['appmessages', user.value]);
  }
  }
  ngOnInit() {
  }

}
