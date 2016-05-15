import { Component, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Schedule } from './schedule';
import { ScheduleData } from  './schedule-data';


@Component({
	selector: 'station-dropdown',
	templateUrl: 'app/template/station-dropdown.html',
	inputs: ['sch'],
	outputs: ['stationSelected'],
	directives: [Schedule]
})

export class StationDropdown {

	stationSelected : string;
	
	sch : ScheduleData[];

	stations: Array<string> = [ 'Belen', 'Los Lunas', 'Isleta Pueblo', 'Bernalillo County',
		'Downtown ABQ', 'Montaño', 'Los Ranchos / JC', 'Sandia Pueblo', 'Downtown Bernalillo',
		'Sandoval / US550', 'Kewa', 'SF County / NM 599', 'South Capitol', 'Santa Fe Depot' ];



	selected(station) {

		this.stationSelected = station.value;

	}

}
