import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '../../../core/services/config.service';
import { fuseAnimations } from '../../../core/animations';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';

import { locale as PtBr } from './i18n/pt-br';
import { locale as EnUs } from './i18n/en-us';
import { UpperCasePipe } from '@angular/common';

import { AuthGuard } from '../../../shared/guard/auth.guard';

@Component({
    selector: 'fuse-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: fuseAnimations
})

export class FuseLoginComponent implements OnInit {

    /* public mask: any[] = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]; */
    public email: string;
    public password: string;
    public loginForm: FormGroup;
    public loginFormErrors: any;

    public returnUrl: string;

    constructor(        
        private fuseConfig: FuseConfigService,
        private translationLoader: FuseTranslationLoaderService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authGuard: AuthGuard
    ) {

        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });

        this.translationLoader.loadTranslations(PtBr, EnUs);

        this.loginFormErrors = {
            email: {},
            password: {}
        };

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // Verify if user is logged in
        if(this.authGuard.super_function()){
            if (this.returnUrl != "" && this.returnUrl != "/") {
                this.router.navigate([this.returnUrl])
            } else {
                this.router.navigate(['/dashboard'])
            }
        }
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        /*
        Form Ctrl
        Validators.minLength(3) 
        */
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged() {
        for (const field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            const control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }

    /*    
    Login Ctrl     
    */
    toLogin(token: string): void {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', token);
    }

    login(event: any): void {       
        event.preventDefault()

        if (this.email == "marcelo@smartjuri.com.br" && this.password == "mama") {
            let token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkJydW5vIENoYXJsZXMgQmF0aXN0YSIsIm5hbWVpZCI6IkJydW5vIENoYXJsZXMgQmF0aXN0YSIsImVtYWlsIjoiYnJ1bm9AZ3J1cG9nYnhjYXBpdGFsLmNvbS5iciIsInN1YiI6IkJydW5vIENoYXJsZXMgQmF0aXN0YSIsImp0aSI6ImQ3MjE2OTQyLTdlNWEtNDlmZi04YmI0LTRiNDIyZTEyMTI1NiIsIlVzZXJJZCI6IjZlNjliYjA2LTkzMWQtNDllOC04MzViLWZlN2U1NThkNzEzOCIsIkNvbXBhbnlJZCI6ImMwZmFmYThjLWVhYzAtNGQ3YS1hYmRlLTEwNmM2MTE1MTVhZCIsImlhdCI6MTUxNjIwODI0OSwiUk0iOiJVc2VyIiwibmJmIjoxNTE2MjA4MjQ4LCJleHAiOjE1MTYzODEwNDgsImlzcyI6IjEzMmQ3NGU5LTMxMTQtNDA1Mi1hMDFiLTU0ODE3YzMzMjY4NyIsImF1ZCI6IjZjN2NjMzYwLTA1MzktNDYxZC1iNzI2LTZhYzk5MGI4MTY5YiJ9.k49PRZWiEKFQ0LRBdo74UdeBaqGpyyxxi5ZiRKEKLC8";
            this.toLogin(token);

            if (this.returnUrl != "" && this.returnUrl != "/") {
                this.router.navigateByUrl(this.returnUrl);
            } else {
                this.router.navigateByUrl('/dashboard');
            }
        } else {
            console.log(this.email);
            alert('Login invalido meu chapa');
        }
    }
}


