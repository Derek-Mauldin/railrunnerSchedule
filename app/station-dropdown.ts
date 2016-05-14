import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';


@Component ({
	selector: 'station-dropdown',
	templateUrl: 'app/template/station-dropdown.html',
	inputs: ['items'],
	outputs: ['stationChosen'],
	directives: [SELECT_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES, BUTTON_DIRECTIVES],
})

export class StationDropdown {

	/**
	 * @output stationChosen outputs the chosen station
	 */
	stationChosen: EventEmitter<string>;

	private items: Array<string> = [ 'Belen', 'Los Lunas', 'Isleta Pueblo', 'Bernalillo County',
		'Downtown ABQ', 'Montano', 'Los Ranchos/Journal Center', 'Sandia Pueblo', 'Downtown Bernalillo',
		'Sandoval/US 550', 'Kewa', 'SF County/NM 599', 'South Capitol', 'Santa Fe Depot' ];

	constructor() {
		this.stationChosen = new EventEmitter();
	}

	private selected(value:any) {
		console.log('Selected value is: ', value);
	}


}