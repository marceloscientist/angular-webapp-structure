import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseInvoiceModernComponent } from './invoice.component';
import { InvoiceService } from './invoice.service';

import { AuthGuard } from '../../../shared/guard/auth.guard';

const routes = [
    {
        path     : 'invoice',
        component: FuseInvoiceModernComponent,
        resolve  : {
            search: InvoiceService
        },
        canActivate: [AuthGuard],
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        FuseInvoiceModernComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        InvoiceService
    ]   
})

export class FuseInvoiceModernModule
{

}
