import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseNotFoundComponent } from './not-found.component';

const routes = [
    {
        path     : 'not-found',
        component: FuseNotFoundComponent
    }
];

@NgModule({
    declarations: [
        FuseNotFoundComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class NotFoundModule
{

}
