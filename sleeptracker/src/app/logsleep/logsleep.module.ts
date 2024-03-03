import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogsleepPageRoutingModule } from './logsleep-routing.module';

import { LogsleepPage } from './logsleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsleepPageRoutingModule
  ],
  declarations: [LogsleepPage]
})
export class LogsleepPageModule {}
