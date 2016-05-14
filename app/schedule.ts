import {Component} from "@angular/core";
import {ScheduleRow} from "./schedule-row";



@Component({
	selector: 'schedule',
	inputs: ['schedule-rows'],
	directives: ["schedule-row"],
	templateUrl: "app/template/schedule.html"
})

export class Schedule {
	scheduleRow: ScheduleRow[];
}