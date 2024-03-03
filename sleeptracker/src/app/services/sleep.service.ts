import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];
	newId;

	constructor(private db: AngularFirestore) {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	addSleepLog(_startDate:string, _endDate:string, _length:string, _loggedAt:string) {
		this.newId = this.db.createId()
		this.db.collection("sleepLogs").doc(this.newId).set({startDate: _startDate, endDate: _endDate, length: _length, loggedAt: _loggedAt});
	}

	getSleepLogs() {
		return new Promise<any>((resolve)=> {
			this.db.collection("sleepLogs").valueChanges({idField: 'id'}).subscribe(sleepLogs => resolve(sleepLogs));
		})
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}

	addSleepinessLog(_date:string, _level:string, _loggedAt:string) {
		this.newId = this.db.createId()
		this.db.collection("sleepinessLog").doc(this.newId).set({date: _date, level: _level, loggedAt: _loggedAt});
	}

	getSleepinessLogs() {
		return new Promise<any>((resolve)=> {
			this.db.collection("sleepinessLog").valueChanges({idField: 'id'}).subscribe(sleepinessLog => resolve(sleepinessLog));
		})
	}

}
