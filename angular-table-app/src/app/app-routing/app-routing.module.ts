import { NgModule } from '@angular/core';
import { RouterModule,  Routes} from '@angular/router';
import { TableComponent } from '../table/table.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TestRouterComponent } from '../test-router/test-router.component';

const routes: Routes = [
  { path: 'tableApp', component: TableComponent },
  { path: 'testRoute', component: TestRouterComponent },
  { path: 'dashbroads', component: DashboardComponent},
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
