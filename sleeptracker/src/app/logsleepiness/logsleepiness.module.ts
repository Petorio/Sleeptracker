import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogsleepinessPageRoutingModule } from './logsleepiness-routing.module';

import { LogsleepinessPage } from './logsleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsleepinessPageRoutingModule
  ],
  declarations: [LogsleepinessPage]
})
export class LogsleepinessPageModule {}
