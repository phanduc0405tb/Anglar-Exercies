import { Component, OnInit } from '@angular/core';
import { MusicstoreService } from '../service/musicstore.service';

@Component({
  selector: 'app-musicstore',
  templateUrl: './musicstore.component.html',
  styleUrls: ['./musicstore.component.css']
})
export class MusicstoreComponent implements OnInit {

  url = 'https://api.spotify.com/v1/search';
  urlNoAvatar = 'http://bidiquatest.vn/wp-content/uploads/2017/09/no-avatar-300x300.jpg';
  name = 'Muse';
  listArtist: any[];
  constructor(private musicStoreService: MusicstoreService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
     this.musicStoreService.getList(this.url, this.name).subscribe( data => {
     // console.log(data);
    });
  }
  getArtist(event) {
    this.musicStoreService.getList(this.url, event.target.value).subscribe(data => {
      this.listArtist = data.artists.items;
      console.log( this.listArtist[0]);

    });
  }

}
