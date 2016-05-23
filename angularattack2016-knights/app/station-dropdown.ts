import { Component, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/common';
import { ScheduleRow } from './schedule-row';



@Component({
	selector: 'station-dropdown',
	templateUrl: 'app/template/station-dropdown.html',
	outputs: ['stationSelected'],
	directives: [ScheduleRow]
})

export class StationDropdown {

	stationSelected : string;
	
	stations: Array<string> = [ 'Belen', 'Los Lunas', 'Isleta Pueblo', 'Bernalillo County',
		'Downtown ABQ', 'Montaño', 'Los Ranchos / JC', 'Sandia Pueblo', 'Downtown Bernalillo',
		'Sandoval / US550', 'Kewa', 'SF County / NM 599', 'South Capitol', 'Santa Fe Depot' ];



	selected(station) {

		this.stationSelected = station.value;

	}

}
