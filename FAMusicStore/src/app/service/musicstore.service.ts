import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicstoreService {

  constructor(private httpClient: HttpClient) { }
  getList(url: string, name: string): Observable<any> {
    return this.httpClient.get(url, {params: {
      q: name, type: 'artist'
    } });
  }
  getArtistTopTracks(url: string, idArtist: string, countryArtist: string): Observable<any> {
    countryArtist = 'VN';
    url = url + idArtist;
    return this.httpClient.get(url, {params: {
       country: countryArtist
    }});
  }
}
