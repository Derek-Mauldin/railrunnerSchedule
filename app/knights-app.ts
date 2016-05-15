import { Component, OnInit } from '@angular/core';
import { StationDropdown } from "./station-dropdown";
import { HeaderComponent } from './knights-header';
import { GetSchedule } from './get-schedule';
import { ScheduleData } from './schedule-data';
import { HTTP_PROVIDERS } from '@angular/http';



@Component({
	selector: 'knights-app',
	templateUrl: 'app/template/knights-app.html',
	directives: [StationDropdown, HeaderComponent],
	providers: [HTTP_PROVIDERS, GetSchedule],
	outputs: ['sched']
})
export class KnightsApp implements OnInit {
	constructor(private getSchedule: GetSchedule) { }

	sched: ScheduleData[];
	errorMessage: string;
	
	ngOnInit() {
		this.getData();
	}
	
	getData() {

		this.getSchedule.getSchedule().subscribe( sch => {
			this.sched = sch;
			console.log(this.sched[1].id)
		},
			error => this.errorMessage = error
		);
	}

}