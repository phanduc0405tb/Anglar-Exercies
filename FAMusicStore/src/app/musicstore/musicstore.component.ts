import { Component, OnInit } from '@angular/core';
import { MusicstoreService } from '../service/musicstore.service';

@Component({
  selector: 'app-musicstore',
  templateUrl: './musicstore.component.html',
  styleUrls: ['./musicstore.component.css']
})
export class MusicstoreComponent implements OnInit {

  url = 'https://api.spotify.com/v1/search';
  urlTopTrack = '	https://api.spotify.com/v1/artists';
  urlNoAvatar = 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547';
  name = 'Muse';
  country = 'VN';
  listArtist: any[];
  listTopTrackArtist: any[];
  constructor(private musicStoreService: MusicstoreService) { }

  ngOnInit() {
    endPlayAudio();
  }
  getAll() {
     this.musicStoreService.getList(this.url, this.name).subscribe( data => {
    });
  }
  getArtist(event) {
    this.musicStoreService.getList(this.url, event.target.value).subscribe(data => {
      this.listArtist = data.artists.items;
      console.log(data);
    });
    this.listTopTrackArtist = [];
  }
  getArtistTopTracks(id ) {
     id = '/' + id + '/top-tracks';
     this.musicStoreService.getArtistTopTracks( this.urlTopTrack, id , this.country ).subscribe (data => {
       this.listTopTrackArtist = data.tracks;
       console.log(this.listTopTrackArtist);
     });
  }
}
function endPlayAudio() {
  const audio = new Audio();

  // tslint:disable-next-line:only-arrow-functions
  audio.addEventListener('ended', function() {
        audio.src = 'new url';
        audio.pause();
        audio.load();
        audio.play();
    });
}
