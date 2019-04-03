import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHeaders, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const addHeader = req.clone({
      // tslint:disable-next-line:max-line-length
      headers: req.headers.set('Authorization', 'Bearer BQCyuKyZE1wNnDGFuPAIj-RRmhybrcozhtlkiyNKjh6GuqfHIMSnnjnOwm0YF7iqzO12W_-M05mMlJhOoe-JPI2YOBxWpu9sP7WYB-t9TMkaKXLZmT8TU4ZaFBlKP_jxaFTszZaIAfcqPx0Khp8kv9pXNqZz1HYKPA')
    });
    return next.handle(addHeader);

 }
  constructor() { }
}
