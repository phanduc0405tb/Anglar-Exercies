import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TubeService } from '../service/tube.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  videoDetail: any;
  listRelatedVideos: any;
  videoId = '';
  textSearch = '';
  orderBy = '';
  urlIframe = 'https://www.youtube.com/embed/';
  constructor(
    private activeRouter: ActivatedRoute,
    private tubeService: TubeService
  ) {}
  ngOnInit() {
    this.activeRouter.parent.params.subscribe( param => {
      this.textSearch = param.textSearch;
      this.orderBy = param.order;
      console.log(this.textSearch);
    });
    this.getDetail();
    this.getRelatedVideos();
  }
  getDetail() {
    this.activeRouter.params.subscribe(param => {
      this.tubeService.getDetail(param.id).subscribe(data => {
        this.videoDetail = data;
        document
          .querySelector('iframe')
          .setAttribute('src', this.urlIframe + param.id);
      });
    });
  }
  getRelatedVideos() {
    this.activeRouter.params.subscribe(param => {
      this.tubeService.getRelatedVideos(param.id).subscribe(data => {
        this.listRelatedVideos = data.items;
      });
    });
  }
}
