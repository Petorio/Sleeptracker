import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { format, parseISO } from 'date-fns';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logsleepiness',
  templateUrl: './logsleepiness.page.html',
  styleUrls: ['./logsleepiness.page.scss'],
})
export class LogsleepinessPage implements OnInit {
  degree:number;
  dateTime: Date;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  showCalendar = false;
  formattedString = '';

  constructor(private sleepService:SleepService, private alertController: AlertController) { }

  ngOnInit() {

  }

  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
    this.showCalendar = false;
  }

  logSleepiness() {
    this.dateTime = new Date(this.dateTime);

    let stanfordSleepinessData:StanfordSleepinessData = new StanfordSleepinessData(this.degree, this.dateTime);
    this.sleepService.logSleepinessData(stanfordSleepinessData);
    this.sleepService.addSleepinessLog(
                  this.dateTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }), 
                  stanfordSleepinessData.summaryString(),
                  stanfordSleepinessData.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
                );
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Logged",
      message: "Sleepiness logged",
      buttons: ["OK"],
    });
    await alert.present();
  }
}
