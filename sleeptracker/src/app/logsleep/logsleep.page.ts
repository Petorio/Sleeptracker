import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { format, parseISO } from 'date-fns';
import { SleepService } from '../services/sleep.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-logsleep',
  templateUrl: './logsleep.page.html',
  styleUrls: ['./logsleep.page.scss'],
})
export class LogsleepPage implements OnInit {

  startTime: Date;
  endTime: Date;
  showCalendar = false;
  showCalendar2 = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  dateValue2 = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  formattedString2 = '';

  constructor(private sleepService:SleepService, private alertController:AlertController) { }

  ngOnInit() {
    this.setToday();
    this.setToday2();
  }

  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm, MMM d, yyyy');
  }

  setToday2() {
    this.formattedString2 = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm, MMM d, yyyy');
  }

  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
    this.showCalendar = false;
  }

  dateChanged2(value) {
    this.dateValue2 = value;
    this.formattedString2 = format(parseISO(value), 'HH:mm, MMM d, yyyy');
    this.showCalendar2 = false;
  }

  logSleep() {
    this.startTime = new Date(this.startTime);
    this.endTime = new Date(this.endTime);

    let overnightSleepData:OvernightSleepData = new OvernightSleepData(this.startTime, this.endTime);
    this.sleepService.logOvernightData(overnightSleepData);
    this.sleepService.addSleepLog(
                    this.startTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }), 
                    this.endTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }), 
                    overnightSleepData.summaryString(),
                    overnightSleepData.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
                  );
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Logged",
      message: "Sleep logged",
      buttons: ["OK"],
    });
    await alert.present();
  }

}
