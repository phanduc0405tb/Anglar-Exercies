import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableServiceService } from './service/table-service.service';
import { PipePhonePipe } from './pipes/pipe-phone.pipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PipePhonePipe
  ],
  imports: [
    BrowserModule,
    OrderModule
  ],
  providers: [
    TableServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
