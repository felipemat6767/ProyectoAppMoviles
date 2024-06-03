import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessPage } from './access.page';

const routes: Routes = [
  {
    path: '',
    component: AccessPage,
    children:[{
       path: "perfil",
       loadChildren:() => import('../perfil/perfil.module').then(m => m.HomePageModule)    
      },{
        path: 'buscar',
        loadChildren: () => import('../buscar/buscar.module').then( m => m.BuscarPageModule)
      },{
        path: 'catalogo',
        loadChildren: () => import('../home/home.module').then( m => m.CatalogPageModule)
      }
      ,{
        path: 'element-page',
        loadChildren: () => import('../element-page/element-page.module').then( m => m.ElementPagePageModule)
      }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessPageRoutingModule {}
