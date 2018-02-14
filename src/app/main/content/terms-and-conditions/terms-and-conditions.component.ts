import { Component } from '@angular/core';
import { InvoiceService } from './terms-and-conditions.service';
import { FuseConfigService } from '../../../core/services/config.service';

@Component({
    selector   : 'fuse-terms-and-conditions',
    templateUrl: './terms-and-conditions.component.html',
    styleUrls  : ['./terms-and-conditions.component.scss']
})
export class FuseTermsAndConditionsComponent
{
    invoice: any;

    constructor(private invoiceService: InvoiceService,
                private fuseConfig: FuseConfigService)
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });


        this.invoiceService.invoiceOnChanged
            .subscribe((invoice) => {
                this.invoice = invoice;
            });
    }

}
