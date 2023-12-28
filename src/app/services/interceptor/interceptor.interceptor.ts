import { HttpInterceptorFn } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

export const interceptorSpotify: HttpInterceptorFn = (request, next) => {
  let headers = request.headers;
  headers = headers.append('Access-Control-Allow-Origin', '*');
  headers = headers.append('Access-Control-Allow-Methods', 'POST,GET,DELETE,PATCH');
  console.log(`Intercept service: ${request?.url}, method: ${request?.method}`);

  const reqWithHeader = request.clone({
    headers: request.headers.set('Authorization', 'Bearer BQC0hHqx6-EIw_UviALWpFlbJAnqbZSNvVkOhBNUES-NK66Irb3Jh6fhi1V7nHMqP-sEHkF1BqEc6qFggVHiKX04mQkM2um8d-OLAAdLN5B8nInBeGw'),
  });

  return next(reqWithHeader).pipe(
    map(event => {
      return event;
    }),
    catchError(error => {
      console.log({ error });
      const err = new Error('Error en el servidor --->> ', error);
      return throwError(() => err);
    })
  );
};
