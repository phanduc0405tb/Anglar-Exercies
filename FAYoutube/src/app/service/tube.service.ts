import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TubeService {
  constructor(private httpClient: HttpClient) {}
  urlSearch = 'https://www.googleapis.com/youtube/v3/search';
  urlDetail = 'https://www.googleapis.com/youtube/v3/videos';
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {}
  getByInput(value, orderBy?): Observable<any> {
    return this.httpClient.get(this.urlSearch, {
      params: {
        part: 'snippet',
        maxResults: '25',
        q: value,
        order: orderBy,
        type: 'video',
        key: 'AIzaSyDX2W-7oSR0sKPYGxGq4qHRPe78jTNn_mE'
      }
    });
  }
  getDetail(videoId: string): Observable<any> {
    return this.httpClient.get(this.urlDetail, {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: videoId,
        key: 'AIzaSyDX2W-7oSR0sKPYGxGq4qHRPe78jTNn_mE'
      }
    });
  }
  getRelatedVideos(videoId): Observable<any> {
    return this.httpClient.get(this.urlSearch, { params: {
      part: 'snippet',
      relatedToVideoId: videoId,
      type: 'video',
      key: 'AIzaSyDX2W-7oSR0sKPYGxGq4qHRPe78jTNn_mE'
    }});
  }
}
