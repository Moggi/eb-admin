import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { takeWhile } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    private alive = true;

    subscription: any;

    authenticated: boolean = false;
    // token: string = '';

    constructor(
        protected auth: AuthService,
        private location: Location
    ) {
        // this.subscription = this.auth.onAuthenticationChange()
        //     .pipe(takeWhile(() => this.alive))
        //     .subscribe((authenticated: boolean) => {
        //         this.authenticated = authenticated;
        //     });
    }

    ngOnInit(): void {
        this.alive = false;
    }

    back() {
        this.location.back();
    }
}