import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ScheduleData} from "./schedule-data";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import "rxjs/Rx";


@Injectable()
export class GetSchedule {
	constructor(private http: Http) {}


	getSchedule() :  Observable<ScheduleData[]>   {

		return this.http.get('../railrunnerschedule.json').map(this.extractData).catch(this.handleError);

	}

	extractData (response: Response) {

		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status));
		}

		let reply = [];
		let body = response.json();
		body.forEach(function(item) {
			let sch = {id: item.FIELD1, time: item.FIELD2, station: item.FIELD4, stop: item.FIELD5};
			reply.push(sch);
		});
		return(reply);

	}

	private handleError(error: any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}

}
