import { Injectable } from '@angular/core';
import { map, timeout } from 'rxjs/operators';

import { BaseService } from './base.service';
import { User } from '../@models/user.model';


@Injectable({
    providedIn: 'root'
})
export class UsersService extends BaseService {

    protected basepath = 'http://localhost:8000/api/users/';

    public users: User[];

    getUserByUsername(username: string) {
        for (const i of this.users) {
            if (i.username == username)
                return i;
        }
        return null;
    }
    
    searchByID(id: string) {
        let url = encodeURI(this.basepath + id + '/');

        return this.http.get(url)
        .pipe(
            timeout(this.defaultTimeOut),
            map( response => {
                return response;
            })
        );
    }
    
    searchByUsername(username: string) {
        let url = encodeURI(this.basepath + '?username=' + username);

        return this.http.get(url)
        .pipe(
            timeout(this.defaultTimeOut),
            map( response => {
                return response;
            })
        );
    }

}
