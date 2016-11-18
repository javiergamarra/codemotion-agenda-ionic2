import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

    let headers = new Headers();
    headers.append('accept', 'application/json');

    this.http
      .get('http://www.koliseo.com/codemotion/codemotion-madrid/r4p/5753906952929280/agenda', {headers: headers})
      .map(res => res.json())
      .do(x => console.log(x))
      .map(data => data["days"][0])
      .map(day => day["tracks"][0]["slots"])
      .subscribe(talks => this.talks = talks);
  }

  talks

}
