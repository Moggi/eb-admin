import { HttpClient } from '@angular/common/http';
import { map, timeout } from 'rxjs/operators';


export class BaseService {

    // protected basepath = 'http://localhost:8000/api/{{}}/';
    protected basepath;
    protected defaultTimeOut = 40 * 1000;

    constructor(
        protected http: HttpClient,
    ) { }

    delete(id: string) {
        let url = encodeURI(this.basepath + id + '/');

        return this.http.delete(url)
        .pipe(
            timeout(this.defaultTimeOut),
            map( response => {
                return response;
            })
        );
    }

    add(data) {
        let url = encodeURI(this.basepath);

        return this.http.post(url, data)
        .pipe(
            timeout(this.defaultTimeOut),
            map( response => {
                return response;
            })
        );
    }

    update(id: string, data) {
        let url = encodeURI(this.basepath + id + '/');

        return this.http.patch(url, data)
        .pipe(
            timeout(this.defaultTimeOut),
            map( response => {
                return response;
            })
        );
    }

    list() {
        let url = encodeURI(this.basepath);

        return this.http.get(url)
        .pipe(
            timeout(this.defaultTimeOut),
            map( response => {
                return response;
            })
        );
    }
    
    search(search: string) {
        let url = encodeURI(this.basepath + '?search=' + search);

        return this.http.get(url)
        .pipe(
            timeout(this.defaultTimeOut),
            map( response => {
                return response;
            })
        );
    }

}
