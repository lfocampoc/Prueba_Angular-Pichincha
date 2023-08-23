import {
  RouterModule,
  Routes
} from '@angular/router';
import { NgModule } from '@angular/core';
import { SessionAuthGuard } from './guards/session-auth.guard';

const routes: Routes = [
  {
    canActivate: [SessionAuthGuard],
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
    path: ''
  },
  {
    canActivate: [SessionAuthGuard],
    loadChildren: () => import('@modules/create/create.module').then(m => m.CreateModule),
    path: 'create'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
