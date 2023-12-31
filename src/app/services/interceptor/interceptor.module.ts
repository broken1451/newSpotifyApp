import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { provideClientHydration } from '@angular/platform-browser';

@Injectable()
export class InterceptorSpotify implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = request.headers;
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST,GET,DELETE,PATCH');
    console.log(`Intercept service: ${request?.url}, method: ${request?.method}`);
    let reqWithHeader;
    if (request.url.includes('/generate-token')) {
      reqWithHeader = request.clone({});
    } else {
      reqWithHeader = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')!}`),
      });
    }

    return next.handle(reqWithHeader).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        console.log({ error });
        const err = new Error('Error en el servidor --->> ', error);
        return throwError(() => err);
      })
    );
  }
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // provideClientHydration(),
    // provideHttpClient(withFetch(), withInterceptorsFromDi()), // con esto se puede usar el fetch en vez de http
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorSpotify, multi: true }]
})
export class InterceptorModule { }

