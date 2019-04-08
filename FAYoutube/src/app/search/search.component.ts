import { Component, OnInit } from '@angular/core';
import { TubeService } from '../service/tube.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  order = 'title';
  constructor(private tubeService: TubeService, private router: Router) {}

  ngOnInit() {
  }
  sentData(data) {
    this.router.navigate(['search', data.value, this.order]);
  }
  search() {
    this.tubeService.getByInput('dog').subscribe(data => {
      console.log(data);
    });
  }
  changeFiledOrder(textSearch, orderBy) {
    this.router.navigate(['search', textSearch.value, orderBy.value]);
  }
}
