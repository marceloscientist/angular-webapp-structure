import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseTermsAndConditionsComponent } from './terms-and-conditions.component';
import { InvoiceService } from './terms-and-conditions.service';

import { AuthGuard } from '../../../shared/guard/auth.guard';

const routes = [
    {
        path     : 'terms-and-conditions',
        component: FuseTermsAndConditionsComponent,
        resolve  : {
            search: InvoiceService
        },
        /* canActivate: [AuthGuard], */
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        FuseTermsAndConditionsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        InvoiceService
    ]   
})

export class FuseTermsAndConditionsModule
{

}
