import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthIntercaptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }


  intercept(request, next) {
    var authService = this.injector.get(AuthService)
    var authRequest = request.clone({
      setHeaders: {Authorization : 'Bearer ${localStorage.getItem("token")}'}
    })
    return next.handle(authRequest)
  }
}