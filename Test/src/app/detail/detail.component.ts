import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { listData } from '../Data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   item: any;
  constructor( private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const itemId = +this.activeRoute.snapshot.paramMap.get('id');
    this.item = {
      id: listData.find(x => x.id === itemId).id,
      name: listData.find(x => x.id === itemId).name
    };
  }

}
