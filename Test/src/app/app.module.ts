import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SqrtPipe } from './SqrtPipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyIfDirective } from './directive/my-if.directive';
import { AttributeDirectiveDirective } from './directive/attribute-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    MyIfDirective,
    AttributeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
