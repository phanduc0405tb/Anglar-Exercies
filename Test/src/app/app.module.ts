import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SqrtPipe } from './SqrtPipe';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { MyIfDirective } from './directive/my-if.directive';
import { AttributeDirectiveDirective } from './directive/attribute-directive.directive';
import { TestComponent } from './test/test.component';
import { Test02Component } from './test02/test02.component';

import { ChildrenAComponent } from './children-a/children-a.component';
import { ChildrenBComponent } from './children-b/children-b.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    MyIfDirective,
    AttributeDirectiveDirective,
    TestComponent,
    Test02Component,
    ChildrenAComponent,
    ChildrenBComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
