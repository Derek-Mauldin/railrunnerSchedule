import {Component} from "@angular/core";
import {GetSchedule} from "./get-schedule";

@Component({
	selector: "schedule-row",
templateUrl: "schedule-row.html",

})

export class ScheduleRow {
	constructor(private getSchedule: GetSchedule) {}


}