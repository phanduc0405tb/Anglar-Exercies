import { Component, OnInit, Input } from '@angular/core';
import { MailmanagmentService } from '../service/mailmanagment.service';
import { Mail } from '../model/mail';

@Component({
  selector: 'app-right-mail',
  templateUrl: './right-mail.component.html',
  styleUrls: ['./right-mail.component.css']
})
export class RightMailComponent implements OnInit {

  listMail: Mail[] = [];
  constructor( private messagesService: MailmanagmentService) { }

  @Input() foldername = '' ;
  ngOnInit() {
    this.getMailByFolder(this.foldername);
    console.log(this.getMailByFolder(this.foldername));
    console.log(this.foldername);
  }
  getMailByFolder(foldername) {
    this.listMail = this.messagesService.getDataByFolder(foldername);
    return this.listMail;
  }
}
