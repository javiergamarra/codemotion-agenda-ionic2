import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgendaService {

  constructor(public http: Http) {

  }

  getTalks() {

    let headers = new Headers();
    headers.append('accept', 'application/json');

    return this.http
      .get('http://www.koliseo.com/codemotion/codemotion-madrid/r4p/5753906952929280/agenda', {headers: headers})
      .map(res => res.json())
      .map(data => data["days"][0])
      .map(day => day["tracks"][0]["slots"]);
  }

}
