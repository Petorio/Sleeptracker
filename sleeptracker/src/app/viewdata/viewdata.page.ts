import { Component, OnInit, ViewChild } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.page.html',
  styleUrls: ['./viewdata.page.scss'],
})
export class ViewdataPage implements OnInit {
  sleepDataArray; // list of firebase entries
  sleepinessDataArray; // list of firebase entries
  constructor(private sleepService:SleepService, private router: Router) { 

  }

  ngOnInit() {
    console.log("here");
    window.scrollTo(0,0);
    this.getSleep();
    this.getSleepiness();
  }

  async getSleep() {
    this.sleepDataArray = await this.sleepService.getSleepLogs();
  }

  async getSleepiness() {
    this.sleepinessDataArray = await this.sleepService.getSleepinessLogs();
  }
}
