import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementPagePage } from './element-page.page';

const routes: Routes = [
  {
    path: '',
    component: ElementPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementPagePageRoutingModule {}
