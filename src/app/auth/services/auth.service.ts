import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, timeout, mergeMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError, of } from 'rxjs';
// import { AuthResult } from './auth-result';

const helper = new JwtHelperService();


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    protected basepath = 'http://localhost:8000/api';

    accessToken: string = null;
    
    public redirectUrl = null;

    constructor(
        private http: HttpClient,
    ) { }

    login({ username= '', password= '' }) {
        return this.authenticate(username,password);
    }
    
    onAuthenticationChange() {
        return Observable.create(observer => {
            
        });
    }

    // authenticate(strategy: any, user: any) {
    //     return this.http.get('');
    // }

    authenticate(username: string, password: string) {
        let url = this.basepath + '/token/';
        let body = {
            'username': username,
            'password': password,
        };

        return this.http.post(url, body)
        .pipe(
            timeout(1 * 60 * 1000),
            map( response => {
                if(response['refresh'] && response['access']) {
                    localStorage.setItem('accessToken', response['access'])
                    localStorage.setItem('refreshToken', response['refresh']);
                    return true;
                }
                else {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    return false;
                }
                // return new AuthResult(response);
                // return response;
            })
        );
    }

    isLoggedId() {
        try {
            return !helper.isTokenExpired(localStorage.getItem('refreshToken'));
        }
        catch (err) {
            return false;
        }
    }
    
    isAccessExpired() {
        try {
            return helper.isTokenExpired(localStorage.getItem('accessToken'));
        }
        catch (err) {
            return true;
        }
    }

    public refreshAccessToken() {
        let url = this.basepath + '/token/refresh/';

        let refreshToken = localStorage.getItem('refreshToken');

        return this.http.post(url, {'refresh': refreshToken}, {})
        .pipe(
            timeout(60 * 1000),
            map( response => {
                // console.log(response);
                if(response['access']) {
                    this.accessToken = response['access'];
                    localStorage.setItem('accessToken', response['access'])
                    return true;
                }
                else {
                    // this.accessToken = null;
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('accessToken');
                    return false;
                }
            })
        );
    }

    checkRefreshToken() {
        return new Promise(
            (resolve,reject) =>
            {
                let refreshToken = localStorage.getItem('refreshToken');
                try {
                    if(!helper.isTokenExpired(refreshToken))
                        resolve(true);
                } catch(error) {
                    console.warn(error);
                }
                // this.accessToken = null;
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                reject(new Error('[AuthProvider]: Invalid Refresh Token'));
            }
        );
    }

    logOut() {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        // this.accessToken = null;
    }

    getAccessToken() {
        // return this.accessToken;
        return localStorage.getItem('accessToken');
    }

    public refreshIfTokenExpired() {
        if(this.isLoggedId()) {
            if( this.isAccessExpired() )
                return this.refreshAccessToken();
            return of(true);
        }
        return of(false);
    }

    public retryWhenTokenExpire(errors: Observable<any>) {
        return errors.pipe(
            mergeMap(
                error => {
                    // console.log(error);
                    if (error.status === 401 && error['error']['code'] === 'token_not_valid') {
                        return this.refreshAccessToken();
                    }
                    return throwError(error);
                }
            )
        );
    }

}
