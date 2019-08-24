import { Component, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
// import { AuthResult } from '../services/auth-result';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    
    protected options: {};
    // protected cd: ChangeDetectorRef;

    redirectDelay: number = 800;
    showMessages: boolean = false;
    // strategy: string = '';

    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted: boolean = false;
    rememberMe = true;
    
    constructor(
        protected service: AuthService,
        // options: {},
        // cd: ChangeDetectorRef,
        protected router: Router
    ) {
        this.user = {
            username: '',
            password: ''
        }
    }
    
    login(): void {
        // console.log(this.user);
        this.errors = [];
        this.messages = [];
        this.submitted = true;
    
        this.service.authenticate(this.user.username, this.user.password)
        .subscribe((result: boolean) => {
            this.submitted = false;
            if(!result) {
                // console.log('login.component.ts:login()');
                // console.log(result);
                this.showMessages = true;
                this.errors.push('O sistema parece estar com problema. Tente mais tarde ou chame o suporte!');
                return;
            }
            this.showMessages = false;

            // this.user.password = '';
            
            // if (result.isSuccess()) {
            //     this.messages = result.getMessages();
            // } else {
            //     this.errors = result.getErrors();
            // }

            let redirect = this.service.redirectUrl;
            if (!redirect) {
                redirect = '/';
            }

            setTimeout(() => {
                return this.router.navigateByUrl(redirect);
            }, this.redirectDelay);
            // this.cd.detectChanges();
        },
        err => {
            this.submitted = false;
            this.showMessages = true;
            this.user.password = '';
            if(err.error) {
                for (const key in err.error) {
                    if (err.error.hasOwnProperty('non_field_errors') ||
                        err.error.hasOwnProperty('detail')) {
                        const element = err.error[key];
                        this.errors.push(element);
                    }
                }
            }
        });
    }
    
    getConfigValue(key: string): any {
        if(key == 'forms.validation.password.minLength')
            return 6;
        if(key == 'forms.validation.password.maxLength')
            return 100;
        if(key == '')
            return 0;
        return this.getFromObject(this.options, key, null);
    }

    getFromObject(o,k,n) {
        return null
    }


}
