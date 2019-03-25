import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SqrtPipe } from './SqrtPipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
