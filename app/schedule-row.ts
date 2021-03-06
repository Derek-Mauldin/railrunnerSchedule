import { Component, OnInit } from '@angular/core';
import { ScheduleData} from './schedule-data';
import { GetSchedule } from './get-schedule';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
	selector: 'schedule-row',
	templateUrl: 'app/template/schedule-row.html',
	inputs: ['selected'],
	providers: [HTTP_PROVIDERS, GetSchedule]
})

export class ScheduleRow implements OnInit {


	selected:string;

	satArray:ScheduleData[] = [];
	sunArray:ScheduleData[] = [];
	wdArray:ScheduleData[] = [];
	errorMessage:string;


	constructor(private getSchedule:GetSchedule) {
	}

	ngOnInit() {
		this.getData();
	}

	getData() {

		this.getSchedule.getSchedule().subscribe(sch => {

			console.log(sch);
			sch.forEach(item => {

				if(item.id.search("wd") >= 0)
					this.wdArray.push(item);
				else if(item.id.search("sat") >= 0)
					this.satArray.push(item);
				else
					this.sunArray.push(item);
			}),
				error => {
					this.errorMessage = error
				}

		});

	}

}