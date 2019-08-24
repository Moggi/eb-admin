import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, timeout } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    protected basepath = 'http://localhost:8000';

    constructor(
        private http: HttpClient,
    ) { }

    list() {
        let url = encodeURI(this.basepath + '/api/users/');

        return this.http.get(url)
        .pipe(
            timeout(2 * 60 * 1000),
            map( response => {
                return response;
            })
        );
    }
    
    search(search: string) {
        let url = encodeURI(this.basepath + '/api/users/?search=' + search);

        return this.http.get(url)
        .pipe(
            timeout(2 * 60 * 1000),
            map( response => {
                return response;
            })
        );
    }
    
    searchByID(id: number) {
        let url = encodeURI(this.basepath + '/api/users/' + id.toString() + '/');

        return this.http.get(url)
        .pipe(
            timeout(2 * 60 * 1000),
            map( response => {
                return response;
            })
        );
    }

    generateReport(data) {
        let url = encodeURI(this.basepath + '/reports/media/report/');

        return this.http.get(url, {params:data, responseType:'blob'})
        .pipe(
            timeout(5 * 60 * 1000),
            map( response => {
                return response;
            })
        );
    }

}
