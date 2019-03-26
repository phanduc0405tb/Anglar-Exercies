import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableServiceService } from './service/table-service.service';
import { PipePhonePipe } from './pipes/pipe-phone.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { OrderPipe } from './pipes/order.pipe';
import { TestRouterComponent } from './test-router/test-router.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PipePhonePipe,
    OrderPipe,
    TestRouterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    AppRoutingModule
  ],
  providers: [
    TableServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
