import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'water',
    loadChildren: () => import('./water/water.module').then( m => m.WaterPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },  {
    path: 'edita-drink',
    loadChildren: () => import('./edita-drink/edita-drink.module').then( m => m.EditaDrinkPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
