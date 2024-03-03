import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsleepinessPage } from './logsleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: LogsleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsleepinessPageRoutingModule {}
