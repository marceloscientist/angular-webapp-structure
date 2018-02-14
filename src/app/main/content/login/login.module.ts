
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router'; 
/* import { CommonModule } from '@angular/common'; */
import { FormsModule } from '@angular/forms';
import { FuseLoginComponent } from './login.component';

const routes = [
    {
        path     : '',
        component: FuseLoginComponent
    }
];


@NgModule({
  declarations: [
      FuseLoginComponent
  ],
  imports     : [
      SharedModule,
      RouterModule.forChild(routes),
    /*   CommonModule,  */
      FormsModule
  ],
  exports: [RouterModule]
})

export class FuseLoginModule { }