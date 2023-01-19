import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("jwt");
    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("access-token", idToken),

      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
