import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {ScheduleData} from "./schedule-data";

@Injectable()
export class GetSchedule {
	constructor(private http: Http) {}

	private railSchedule = "https://bootcamp-coders.cnm.edu/~mball15/angular-knights/apps/railrunnerschedule.json/";

	getSchedule() : Observable<ScheduleData[]> {
		return(this.http.get(this.railSchedule)
			.map(this.extractData)
			.catch(this.handleError));
	}

	private extractData(response: Response) {
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status));
		}

		let reply = [];
		let body = response.json();
		body.features.forEach(function(item) {
			let attributes = item.attributes;
			let schedule = {id: attributes.FIELD1, time: attributes.FIELD2, station: attributes.FIELD4, stop: attributes.FIELD5};
			reply.push(schedule);
		});
		return(reply);
	}

	private handleError(error: any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}
