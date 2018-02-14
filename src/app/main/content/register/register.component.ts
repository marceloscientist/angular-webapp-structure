import { Component, OnInit, /* Injectable */ } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '../../../core/services/config.service';
import { fuseAnimations } from '../../../core/animations';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';

import { locale as PtBr } from './i18n/pt-br';
import { locale as EnUs } from './i18n/en-us';
import { UpperCasePipe } from '@angular/common';


import * as $ from 'jquery';
import 'jquery-mask-plugin'


import { Router, NavigationExtras } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


import { RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { NgForm } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';


@Component({
    selector: 'fuse-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: fuseAnimations
})
export class FuseRegisterComponent implements OnInit {
   
    phone = ''
    registerForm: FormGroup;
    registerFormErrors: any;
    ativar: boolean = false;

    showSpinner: boolean = false;

    command: any = {
        Name: '',
        Login: '',
        Email: '',
        PhoneIDD: 0,
        PhoneAreaCode: 0,
        PhoneNumber: 0
    };

    api: string = 'http://api.recorte.me';
    registerPath: string = '/v1/public/account/register';

    constructor(
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        
        private http: HttpClient,
        private router: Router,

        private translationLoader: FuseTranslationLoaderService

    ) {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.translationLoader.loadTranslations(PtBr, EnUs);
        this.registerFormErrors = {
            name: {},
            email: {},
            terms: {}
        };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            terms: ['', Validators.required]
        });

        this.registerForm.valueChanges.subscribe(() => {
            this.onRegisterFormValuesChanged();
        });
    }
    onKey(event: any) { // grab the phone string from the form 
        this.phone = event.target.value;
    }
    onRegisterFormValuesChanged() {
        for (const field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.registerFormErrors[field] = {};

            // Get the control
            const control = this.registerForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    }
    maskPhone() {
        $('#phone').mask("(00) 0000-00000");
    }
    terms() {
        window.open("/terms-and-conditions", "_blank");
    }
    cleanFormat(pnumber): string {
        return pnumber.replace(/[^\d]/g, '')
    }
    getAreaCode(string): number {
        return Number(string.slice(0, 2));
    }
    getPhoneNumber(string): number {
        return Number(string.slice(2));
    }
    onSubmit(f: NgForm) {
        let fullNumber = this.cleanFormat(this.phone)
        this.command.PhoneIDD = 55,
        this.command.PhoneAreaCode = this.getAreaCode(fullNumber)
        this.command.PhoneNumber = this.getPhoneNumber(fullNumber)

        let obj: any = f.value
        this.command.Name = obj.name
        this.command.Login = obj.email
        this.command.Email = obj.email
        this.register(this.command)
    }
    register(command): any { //Promise<any>
        // if (this.registerForm.valid) { 
        let res: any = {};
        this.showSpinner = true;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        console.log(command)

        return this.http
            .post(this.api + this.registerPath, JSON.stringify(command), { headers: headers })
            .map(res => res)
            .subscribe(
            (dado) => {
                res = dado //res.data.id && res.data.token
                if (res.success == true) {

                    this.showSpinner = false;

                    let navExtras: NavigationExtras = {
                        queryParams: {
                            "mail": JSON.stringify(command.Email) 
                        }
                    };
                    console.log("accessing")
                    console.log(navExtras.queryParams.mail)
                    this.router.navigate(['mail-confirm', navExtras.queryParams.mail]) //?email+this.command.Email
                }
            },  
            (err: HttpErrorResponse) => {
                console.log(err)
                if (err.error.errors[0].message == "Já existe um usuário com este login cadastrado") {
                    this.showSpinner = false;
                    alert(err.error.errors[0].message)
                }
            });
    }
}







