import { Component } from '@angular/core';
import { ScheduleData } from './schedule-data';
//import { StationDropdown } from './station-dropdown';
import { ScheduleRow } from './schedule-row';




@Component({
	selector: 'schedule',
	templateUrl: 'app/template/schedule.html',
	directives: [ScheduleRow],
	inputs: ['schData', 'selectedStation'],
	outputs: ['stationArray']
})

export class Schedule {

	/**
	 * @input schedule data from parent compenent
	 */
	schData: ScheduleData[];

	/**
	 * @output array of objects for a specific station
	 */
	stationArray: ScheduleData[];

	/**
	 * @selectedStation - station selected from dropdown
	 */
   selectedStation: string;

	constructor() {

		this.schData.forEach(function(item) {
			if(item.station === this.selectedStation) {
				this.stationArray.push(item);
			}
		});

		console.log(this.schData)
	}


}