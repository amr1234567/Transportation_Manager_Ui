import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../../Token/token.service';

@Injectable({
  providedIn: 'root'
})

export class TokenSetterService implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenService.hasToken()) {
      const modifiedRequest = req.clone({
        headers: req.headers.set('Authorization', "Bearer " + this.tokenService.getToken()),
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(req)
    // .pipe(tap((response) => {
    //   console.log(response);
    //   if (response instanceof HttpResponse) {
    //     if (response.body.status != 200) {
    //       this.router.navigate(["/login"]);
    //     }
    //   }
    //   return response;
    // }));
  }
}