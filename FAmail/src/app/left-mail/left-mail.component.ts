import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MailmanagmentService } from '../service/mailmanagment.service';
import { Mail } from '../model/mail';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-mail',
  templateUrl: './left-mail.component.html',
  styleUrls: ['./left-mail.component.css']
})
export class LeftMailComponent implements OnInit {

  listFolder: Mail[] = [];
  account = '';
  isActive = false;
  constructor(  private mailService: MailmanagmentService,
                private router: Router,
                private activeRouter: ActivatedRoute
    ) { }
  ngOnInit() {
    this.getListFolder();
    this.activeRouter.parent.params.subscribe( param => {
      // tslint:disable-next-line:no-unused-expression
      this.account = param.account;
    });
    this.router.navigateByUrl('/appmessages/' + this.account + '/mymessages/travel' );
  }
   getListMail() {
   return this.mailService.getData();
   }
   getListFolder() {
     this.mailService.getData().filter((mail) => {
      const i = this.listFolder.findIndex(x => x.folder === mail.folder);
      if (i <= -1) {
        this.listFolder.push ({
          folder: mail.folder,
          body: mail.body,
          subject: mail.subject,
          from: mail.from,
          to: mail.to,
          date: mail.date,
          senderName: mail.senderName,
          corpus: mail.corpus,
          _id: mail._id
        });
      }
     });
     return this.listFolder;
   }
}
