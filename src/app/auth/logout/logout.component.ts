import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

    private redirectDelay = 800;

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.auth.logOut();
        
        setTimeout(() => {
            this.router.navigateByUrl('/auth/login');
        }, this.redirectDelay);
    }

}
