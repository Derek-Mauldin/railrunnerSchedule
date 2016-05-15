import { Component } from '@angular/core';
import {StationDropdown } from "./station-dropdown";
import { HeaderComponent } from './knights-header';

@Component({
	selector: 'knights-app',
	templateUrl: 'app/template/knights-app.html',
	directives: [StationDropdown, HeaderComponent]
})
export class KnightsApp {

}