import { Component, OnInit } from '@angular/core';

import { FuseConfigService } from '../../../core/services/config.service';
import { fuseAnimations } from '../../../core/animations';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';

import { locale as EnUs } from './i18n/en-us'
import { locale as PtBr } from './i18n/pt-br'

@Component({
    selector   : 'fuse-not-found',
    templateUrl: './not-found.component.html',
    styleUrls  : ['./not-found.component.scss'],
    animations : fuseAnimations
})
export class FuseNotFoundComponent implements OnInit
{
    constructor(
        private fuseConfig: FuseConfigService,
        private fuseTranslator: FuseTranslationLoaderService
    )
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });

        this.fuseTranslator.loadTranslations(PtBr,EnUs)
    }

    ngOnInit()
    {

    }
}
