import { Injectable, Inject } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const tokenString = localStorage.getItem("access_token");
        const url = req.url;

        console.log("interceptor")
        console.log(tokenString)
        console.log(!url.endsWith('/login'))
        if (tokenString && !url.endsWith('/login')) {
            console.log(tokenString)
            const token = JSON.parse(tokenString);
            const jwt = token.token;
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + jwt
                }
            })
        }
        return next.handle(req);
    }


}