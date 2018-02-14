import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuseProjectComponent } from './project.component';
import { SharedModule } from '../../../../core/modules/shared.module';
import { ProjectsDashboardService } from './projects.service';
import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Token } from '@angular/compiler';

import { AuthGuard } from '../../../../shared/guard/auth.guard';

const routes: Routes = [
    {
        path     : 'dashboard',
        component: FuseProjectComponent,
        resolve  : {
            data: ProjectsDashboardService
        },
        canActivate: [AuthGuard],
        pathMatch: 'full'
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule,
        NgxChartsModule
    ],
    declarations: [
        FuseProjectComponent
    ],
    providers   : [
        ProjectsDashboardService
    ]
})
export class ProjectModule { 

    constructor(){ }
    
} 

