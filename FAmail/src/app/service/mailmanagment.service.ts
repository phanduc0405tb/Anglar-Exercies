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
  public getData() {
    return this.listMail;
  }
  public getDataByFolder(nameFolder) {
    this.listMail = this.listMail.filter((mail) => mail.folder === nameFolder);
    return this.listMail;
  }
}
