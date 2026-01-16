import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },

  // path: 'main',
  // loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  // },


  // {
  //   path: 'navbar',
  //   loadChildren: () => import('../components/navbar/navbar.module').then( m => m.NavbarComponentModule)
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
