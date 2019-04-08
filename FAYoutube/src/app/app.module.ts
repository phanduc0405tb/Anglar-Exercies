import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { TubeService } from './service/tube.service';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChangeTimeDirective } from './directive/change-time.directive';
import { ConvertPipe } from './pipe/convert.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: ':textSearch/:order',
        component: ResultComponent,
        children: [
          {
            path: ':id',
            component: DetailComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    DetailComponent,
    ChangeTimeDirective,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
