import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FuseRegisterComponent } from './register.component';


const routes = [    
    {
        path: 'register',
        component: FuseRegisterComponent
    }
];


/* { 
    path: '', 
    redirectTo: 'register', 
    pathMatch: 'full' }, */

@NgModule({
    declarations: [
        FuseRegisterComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class RegisterModule {

}
