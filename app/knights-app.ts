import { Component, OnInit } from '@angular/core';
import { StationDropdown } from "./station-dropdown";
import { HeaderComponent } from './knights-header';
import { GetSchedule } from './get-schedule';
import { ScheduleData } from './schedule-data';
import { HTTP_PROVIDERS } from '@angular/http';
import { Observer } from 'rxjs/Observer';
import "rxjs/Rx";



@Component({
	selector: 'knights-app',
	templateUrl: 'app/template/knights-app.html',
	directives: [StationDropdown, HeaderComponent],
	providers: [HTTP_PROVIDERS, GetSchedule]
})
export class KnightsApp implements OnInit {
	constructor(private getSchedule: GetSchedule) { }

	scheduleInfo : ScheduleData[];
	
	ngOnInit() {
		this.getData();
		this.displayStuff();
	}
	
	getData() {

		this.getSchedule.getSchedule().subscribe( sch => (this.scheduleInfo = sch));

	}
	
	displayStuff() {
		console.log(this.scheduleInfo[20].station);
	}

}