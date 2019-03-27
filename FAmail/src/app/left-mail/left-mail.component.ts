import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MailmanagmentService } from '../service/mailmanagment.service';
import { Mail } from '../model/mail';

@Component({
  selector: 'app-left-mail',
  templateUrl: './left-mail.component.html',
  styleUrls: ['./left-mail.component.css']
})
export class LeftMailComponent implements OnInit {

  listFolder: Mail[] = [];
  isActive = false;
  constructor(  private mailService: MailmanagmentService) { }

  @Output() sendFolderName = new EventEmitter();
  ngOnInit() {
    this.getListFolder();
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
   changActive($event) {
     // console.log($event.target.text);
     this.sendFolderName.emit($event.target.text);
   }
}
