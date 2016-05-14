import { Component } from '@angular/core';
import {StationDropdown} from "./station-dropdown";

@Component({
	selector: 'knights-app',
	templateUrl: 'app/template/knights-app.html',
	directives: [StationDropdown]
})
export class KnightsApp {

}