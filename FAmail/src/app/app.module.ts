import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaMailComponent } from './fa-mail/fa-mail.component';
import { LeftMailComponent } from './left-mail/left-mail.component';
import { RightMailComponent } from './right-mail/right-mail.component';
import {MailmanagmentService} from './service/mailmanagment.service';

@NgModule({
  declarations: [
    AppComponent,
    FaMailComponent,
    LeftMailComponent,
    RightMailComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    MailmanagmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
