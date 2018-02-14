import { Routes } from '@angular/router'
import { AuthGuard } from './shared/guard/auth.guard';

import { FuseLoginModule } from './main/content/login/login.module'

export const ROUTES: Routes = [
    { path: 'login', loadChildren: './main/content/login/login.module#FuseLoginModule'}
]