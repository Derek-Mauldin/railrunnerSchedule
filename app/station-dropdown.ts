import { Component, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/common';

@Component({
	selector: 'station-dropdown',
	templateUrl: 'app/template/station-dropdown.html',
	outputs: ['stationSelected']
})

export class StationDropdown {

	stationSelected : EventEmitter<string>;

	stations: Array<string> = [ 'Belen', 'Los Lunas', 'Isleta Pueblo', 'Bernalillo County',
		'Downtown ABQ', 'Montano', 'Los Ranchos/Journal Center', 'Sandia Pueblo', 'Downtown Bernalillo',
		'Sandoval/US 550', 'Kewa', 'SF County/NM 599', 'South Capitol', 'Santa Fe Depot' ];



	constructor() {
		this.stationSelected = new EventEmitter();
	}

	selected(station) {
		console.log(station.value)
		this.stationSelected.emit(station);
	}

}
