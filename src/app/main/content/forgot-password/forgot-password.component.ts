import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '../../../core/services/config.service';
import { fuseAnimations } from '../../../core/animations';
import { Router } from '@angular/router';
import { EventAction } from 'calendar-utils';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';

import { locale as PtBr } from './i18n/pt-br';
import { locale as EnUs } from './i18n/en-us';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector   : 'fuse-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls  : ['./forgot-password.component.scss'],
    animations : fuseAnimations
})
export class FuseForgotPasswordComponent implements OnInit
{
    forgotPasswordForm: FormGroup;
    forgotPasswordFormErrors: any;

    constructor(
        private fuseConfig: FuseConfigService,
        private translationLoader: FuseTranslationLoaderService,
        private formBuilder: FormBuilder,
        private router: Router 
    )
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });

        this.translationLoader.loadTranslations(PtBr, EnUs)

        this.forgotPasswordFormErrors = {
            email: {}
        };
    }

    ngOnInit()
    {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });

        this.forgotPasswordForm.valueChanges.subscribe(() => {
            this.onForgotPasswordFormValuesChanged();
        });
    }

    onForgotPasswordFormValuesChanged()
    {
        for ( const field in this.forgotPasswordFormErrors )
        {
            if ( !this.forgotPasswordFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};

            // Get the control
            const control = this.forgotPasswordFormErrors.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    }
    redirectTo(event: any): void {
        event.preventDefault()
        this.router.navigate(['/mail-confirm'])
    }
    
    
}
