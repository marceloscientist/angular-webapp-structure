import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';

import { FusePricingComponent } from './pricing.component';
import { AuthGuard } from '../../../shared/guard/auth.guard';

const routes = [
    {
        path     : 'pricing',
        component: FusePricingComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        FusePricingComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        FusePricingComponent
    ]
})

export class FusePricingModule { }