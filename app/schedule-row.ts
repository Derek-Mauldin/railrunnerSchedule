import { Component } from '@angular/core';
import { ScheduleData} from './schedule-data';
import { StationDropdown } from './station-dropdown';




@Component({
	selector: 'schedule-row',
	templateUrl: 'app/template/schedule-row.html',
	directives: [StationDropdown],
	inputs: ['stationArray']
})

export class ScheduleRow {

	/**
	 * @input schedule data from parent compenent
	 */
	stationArray: ScheduleData[];
	
	satArray: ScheduleData[];
	sunArray: ScheduleData[];
	wdArray: ScheduleData[];


	

	constructor() {

		
		this.stationArray.forEach(function(item) {
			
			if( item.id.search("wd") >= 0)
				this.wdArray.push(item);
			else if ( item.id.search("sat") >= 0)
				this.satArray.push(item);
			else
				this.sunArray.push(item);
			
		})
		
	}
	
}