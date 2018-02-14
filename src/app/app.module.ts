import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
//
import { FuseLoginModule } from './main/content/login/login.module';
import { FuseComingSoonModule } from './main/content/coming-soon/coming-soon.module';
import { FuseInvoiceModernModule } from './main/content/invoices/invoice.module';
import { FusePricingModule } from './main/content/pricing/pricing.module';

//
import { ProjectModule } from './main/content/dashboards/project/project.module';
import { ROUTES } from './app.routes'
import { AuthGuard } from './shared/index';
import { RegisterModule } from './main/content/register/register.module';
import { ForgotPasswordModule } from './main/content/forgot-password/forgot-password.module';
import { MailConfirmModule } from './main/content/mail-confirm/mail-confirm.module';
import { NotFoundModule } from './main/content/not-found/not-found.module';
import { ResetPasswordModule } from './main/content/reset-password/reset-password.module';
import { FuseTermsAndConditionsModule } from './main/content/terms-and-conditions/terms-and-conditions.module';


/* 
import { TextMaskModule } from 'angular2-text-mask'; */

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,

        RegisterModule,
        FuseLoginModule,
        ForgotPasswordModule,
        MailConfirmModule,
        NotFoundModule,
        ResetPasswordModule,
        FuseTermsAndConditionsModule,


        /* TextMaskModule, */
        

        FuseComingSoonModule, 
        FuseInvoiceModernModule,
        FusePricingModule,        
        ProjectModule,
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        })
        
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        AuthGuard
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}