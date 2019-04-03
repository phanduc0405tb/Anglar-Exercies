import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listmail } from '../data/listmail';
@Injectable({
  providedIn: 'root'
})
export class MailmanagmentService {
listMail = Listmail;
  constructor() {
   }
   getData() {
     return  this.listMail;
  }
   getDataByFolder(account: string, nameFolder: string) {
    return  this.listMail.filter((mail) => mail.to === account && mail.folder === nameFolder);
  }
  getMailById(id) {
    return this. listMail.find(x => x._id === id );
  }
}
