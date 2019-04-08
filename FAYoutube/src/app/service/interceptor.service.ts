import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const addHeader = req.clone({
      headers: req.headers.set('Authorization', 'Bearer AIzaSyBuGqsSgyWx7hiHca3C2YPLGNHvxFdgI40')
    });
    return next.handle(addHeader);
  }
  constructor() { }
}
