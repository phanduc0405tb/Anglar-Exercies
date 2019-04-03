import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicstoreComponent } from './musicstore/musicstore.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {InterceptorService} from './service/interceptor.service';
import { MusicstoreService } from './service/musicstore.service';
@NgModule({
  declarations: [
    AppComponent,
    MusicstoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  },
  MusicstoreService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
