import { Component} from '@angular/core';

import { FuseConfigService } from '../../../core/services/config.service';
import { fuseAnimations } from '../../../core/animations';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';

import { locale as PtBr } from './i18n/pt-br';
import { locale as EnUs } from './i18n/en-us';
import { UpperCasePipe } from '@angular/common';


import { ActivatedRoute } from "@angular/router";

@Component({
    selector   : 'fuse-mail-confirm',
    templateUrl: './mail-confirm.component.html',
    styleUrls  : ['./mail-confirm.component.scss'],
    animations : fuseAnimations
})
export class FuseMailConfirmComponent
{
    mail: any

    constructor(
        private fuseConfig: FuseConfigService,
        private translationLoader: FuseTranslationLoaderService,
        private route: ActivatedRoute
    )
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });
        this.translationLoader.loadTranslations(PtBr, EnUs);

        this.route.params.subscribe(
            params => { 
                this.mail = params['mail']
                console.log(this.mail)
                
            }
        )
    }
}
