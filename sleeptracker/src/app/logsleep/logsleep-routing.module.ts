import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsleepPage } from './logsleep.page';

const routes: Routes = [
  {
    path: '',
    component: LogsleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsleepPageRoutingModule {}
