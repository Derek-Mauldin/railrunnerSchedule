import { Component, OnInit } from '@angular/core';
import { StationDropdown } from "./station-dropdown";
import { HeaderComponent } from './knights-header';
import { ScheduleRow } from './schedule-row';



@Component({
	selector: 'knights-app',
	templateUrl: 'app/template/knights-app.html',
	directives: [StationDropdown, HeaderComponent, ScheduleRow],
})
export class KnightsApp{ }