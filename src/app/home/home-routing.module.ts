import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogPage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogPageRoutingModule {}
