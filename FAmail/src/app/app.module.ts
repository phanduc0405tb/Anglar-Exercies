import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FaMailComponent } from './fa-mail/fa-mail.component';
import { LeftMailComponent } from './left-mail/left-mail.component';
import { RightMailComponent } from './right-mail/right-mail.component';
import {MailmanagmentService} from './service/mailmanagment.service';
import { MessageComponent } from './message/message.component';
import { AccountComponent } from './account/account.component';
import { PipestringPipe } from './pipe/pipestring.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: AccountComponent},
  {path: 'appmessages/:account', component: FaMailComponent, children: [
    {path: 'mymessages', component: LeftMailComponent, children: [
      {path: ':folder', component: RightMailComponent},
      {path: ':id', component: MessageComponent, outlet: 'details'}
    ]},
  ]},
];
@NgModule({
  declarations: [
    AppComponent,
    FaMailComponent,
    LeftMailComponent,
    RightMailComponent,
    MessageComponent,
    AccountComponent,
    PipestringPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MailmanagmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
