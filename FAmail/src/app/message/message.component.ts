import { Component, OnInit } from '@angular/core';
import { MailmanagmentService } from '../service/mailmanagment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mail } from '../model/mail';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: Mail;
  constructor(private messageSevice: MailmanagmentService,
              private activeRouter: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression

    this.activeRouter.params.subscribe( (param) => {
      this.message = this.messageSevice.getMailById(param.id);
    });
  }
}
