import { Component, OnInit, Input } from '@angular/core';
import { MailmanagmentService } from '../service/mailmanagment.service';
import { Mail } from '../model/mail';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-right-mail',
  templateUrl: './right-mail.component.html',
  styleUrls: ['./right-mail.component.css']
})
export class RightMailComponent implements OnInit {

  listMail: Mail[] = [];
  account = '';
  selectedItem = '';
  constructor( private messagesService: MailmanagmentService,
               private router: Router,
               private activeRouter: ActivatedRoute) { }

  ngOnInit() {
      this.activeRouter.parent.parent.params.subscribe( (param) => {
      this.account = param.account;
    });
      this.activeRouter.params.subscribe((param) => {
     this.listMail = this.messagesService.getDataByFolder(this.account , param.folder);
    });
  }
  detailMail(id) {
    this.selectedItem = id;
    this.router.navigate(['appmessages', this.account, 'mymessages', { outlets: { details: [id] } }] );

  }
}
