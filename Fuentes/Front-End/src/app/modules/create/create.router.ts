import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCreateComponent } from './create.component';

const routes: Routes = [
  { path: '', component: PageCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutes { }
