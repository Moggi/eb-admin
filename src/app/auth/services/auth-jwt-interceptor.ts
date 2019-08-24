import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, Subject, of } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';


@Injectable({
    providedIn: 'root'
})
export class AuthJWTInterceptor implements HttpInterceptor {

    refreshTokenInProgress = false;

    tokenRefreshedSource = new Subject();
    tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

    constructor(
        private service: AuthService,
        private router: Router,
    ) {}

    addAuthHeader(request) {
        const accessToken = this.service.getAccessToken();
        if(accessToken) {
            const req_clone = request.clone({
                headers: request.headers.set(
                    AUTH_HEADER_KEY, `${AUTH_PREFIX} ${accessToken}`
                )}
            );
            return req_clone;
        }
        return request;
    }

    refreshToken() {
        if (this.refreshTokenInProgress) {
            return new Observable(observer => {
                this.tokenRefreshed$.subscribe(() => {
                    observer.next();
                    observer.complete();
                });
            });
        } else {
            this.refreshTokenInProgress = true;

            return this.service.refreshAccessToken()
            .pipe(
                tap(() => {
                    this.refreshTokenInProgress = false;
                    this.tokenRefreshedSource.next();
                })
            );
        }
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>
    {
        if(!this.service.isLoggedId()) {
            return next.handle(request);
        }
        request = this.addAuthHeader(request);
        
        return next.handle(request)
        .pipe(
            catchError(error=> {
                if( error.status == 401) {
                    return this.refreshToken()
                    .pipe(
                        switchMap(() => {
                            request = this.addAuthHeader(request);
                            return next.handle(request);
                        }),
                        catchError(err => {
                            this.service.logOut();
                            this.router.navigate(['/auth/login']);
                            return of(err);
                        })
                    );
                }
                return Observable.throw(error);
            })
        );
    }

}