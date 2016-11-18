import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {AgendaService} from "../../providers/agenda";
import {Observable} from "rxjs";
import {AgendaDetailPage} from "../agenda-detail/agenda-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  talks: Observable<any>;

  constructor(public navCtrl: NavController, public agendaService: AgendaService) {
  }

  ngOnInit(): void {
    this.talks = this.agendaService.getTalks();
  }

  itemClicked($event) {
    this.navCtrl.push(AgendaDetailPage, {talk: $event})
  }

}
