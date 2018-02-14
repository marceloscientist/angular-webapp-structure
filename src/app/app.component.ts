import { Component } from '@angular/core';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { TranslateService } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from './core/services/translation-loader.service';

import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseNavigationModel } from './navigation/navigation.model';

import { locale as navigationPtBr } from './navigation/i18n/pt-br';
import { locale as navigationEnUs } from './navigation/i18n/en-us';

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private fuseNavigationService: FuseNavigationService,
        private fuseSplashScreen: FuseSplashScreenService,
        private translate: TranslateService,
        private translationLoader: FuseTranslationLoaderService
    )
    {
        // Add languages
        this.translate.addLangs(['pt-br', 'en-us']);

        // Set the default language
        this.translate.setDefaultLang('pt-br');

        // Use a language
        this.translate.use('pt-br');

        // Set the navigation model
        this.fuseNavigationService.setNavigationModel(new FuseNavigationModel());

        // Set the navigation translations
        this.translationLoader.loadTranslations(navigationEnUs, navigationPtBr);

        //
        //
        //

        // Set the default language
        this.translate.setDefaultLang('pt-br');

        // Use a language
        this.translate.use('pt-br');
    }
}