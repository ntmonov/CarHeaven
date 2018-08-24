import { Injectable } from '@angular/core'
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http'
  import { Observable } from "d:/CarHeaven/node_modules/rxjs/internal/Observable"
  

  const appKey = 'kid_HkCipCMU7'
  const appSecret = 'da9a8ad659614f5f82b29cf0e66b8e19'

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith('login') || req.url.endsWith(appKey)) {
            req = req.clone({
              setHeaders: {
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
              }
            })
         } else  {           
        req = req.clone({setHeaders: {
            'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`,
            'Content-Type': 'application/json'
        }}) 
}
    return next.handle(req);
}
}