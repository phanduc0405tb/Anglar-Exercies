import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicstoreService {

  url = '';

  constructor(private httpClient: HttpClient) { }
  getList(url: string, name: string): Observable<any> {
    return this.httpClient.get(url, {params: {
      q: name, type: 'artist'
    } });
  }
}
