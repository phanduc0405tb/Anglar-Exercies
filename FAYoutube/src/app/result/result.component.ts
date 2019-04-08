import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TubeService } from '../service/tube.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  isClick = false;
  p = 1;
  textSearch = '';
  orderBy = 'title';
  listResult = [];
  constructor(
    private activeRouter: ActivatedRoute,
    private tubeService: TubeService
  ) {}
  ngOnInit() {
    this.activeRouter.params.subscribe(param => {
      console.log(param);
      if (param != null) {
        this.textSearch = param.textSearch;
        this.orderBy = param.order;
        this.tubeService.getByInput(param.textSearch, this.orderBy).subscribe(data => {
          this.listResult = data.items;
          this.p = 1;
        });
      }
    });
  }
  changeStatus() {
    this.isClick = false;
  }
  pageChanged(event) {
    this.isClick = true;
    this.p = event;
  }
}
