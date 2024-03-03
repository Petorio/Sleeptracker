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
    path: 'logsleep',
    loadChildren: () => import('./logsleep/logsleep.module').then( m => m.LogsleepPageModule)
  },
  {
    path: 'logsleepiness',
    loadChildren: () => import('./logsleepiness/logsleepiness.module').then( m => m.LogsleepinessPageModule)
  },
  {
    path: 'viewdata',
    loadChildren: () => import('./viewdata/viewdata.module').then( m => m.ViewdataPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
