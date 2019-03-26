import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../service/table-service.service';
import { User } from '../model/user';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public listUser: User[] = [];
  private textOrder = '';
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.listUser = this.tableService.getAll();
  }
  changeFiledOrder(target) {
    this.textOrder =  target.value;
    // this.orderPipe.transform(this.listUser, this.textOrder);
    console.log(this.textOrder);
  }
  constructor(
    private tableService: TableServiceService,
    private orderPipe: OrderPipe
    ) {
    }
}
