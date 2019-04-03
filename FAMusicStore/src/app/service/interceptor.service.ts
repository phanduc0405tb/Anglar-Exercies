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
      headers: req.headers.set('Authorization', 'Bearer BQCHP19xppMdpw4uiCbzO-sdLdlQ2w_uYL_TK4Fbh7micSglBC1iTNm2F6znnFabOgVksLHVGWwmf0kd_33qSMuTbN9QFOhkCRQ7OHET5WB_BsGJQ3eLaUL6ITWNgHF8ves5yBiGvC2KKFOmBep_bnM9fbPu4GvL7A')
    });
    return next.handle(addHeader);

 }
  constructor() { }
}
