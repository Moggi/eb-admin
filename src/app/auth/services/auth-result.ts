import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';


// @Injectable({
//     providedIn: 'root'
// })
export class AuthResult extends HttpResponse<any> {

    constructor(
        init: {
            body?: any;
            headers?: HttpHeaders;
            status?: number; 
            statusText?: string;
            url?: string;
        } = {}
    ) {
        super(init);
    }

    isSuccess(): boolean {
        return true;
    }

    getMessages(): string[] {
        return [];
    }

    getErrors(): string[] {
        return [];
    }

    getRedirect(): string {
        return '';
    }

}
