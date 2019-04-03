import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import { TestComponent } from '../test/test.component';
import { Test02Component } from '../test02/test02.component';
import { DetailComponent } from '../detail/detail.component';
import { ChildrenAComponent } from '../children-a/children-a.component';
import { ChildrenBComponent } from '../children-b/children-b.component';
const routers: Route[] = [
  {path: 'router 01', component: TestComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'router 02', component: Test02Component, children: [
    {path: 'children A', component: ChildrenAComponent, outlet: 'children01'},
    {path: 'children B', component: ChildrenBComponent, outlet: 'children02'},
  ]}
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routers)
  ],

  exports: [ RouterModule ],
})
export class AppRoutingModule { }
