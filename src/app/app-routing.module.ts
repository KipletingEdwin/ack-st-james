import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutComponentModule)
  },
  { 
  path: 'ministries',
  loadChildren: () => import('./pages/ministries/ministries.module').then( m => m.MinistriesComponentModule)
  },
  { 
  path: 'sermons',
  loadChildren: () => import('./pages/sermons/sermons.module').then( m => m.SermonsComponentModule)
  },
  { 
  path: 'contact',
  loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactComponentModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
