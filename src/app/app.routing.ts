import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthentificationComponent } from './authentification/authentification.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
  ,
  {
    path: 'auth',
    component: AuthentificationComponent
  }
];
