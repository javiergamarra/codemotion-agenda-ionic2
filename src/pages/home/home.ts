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

  ngOnInit(): void {
    this.talks = this.agendaService.getTalks();
  }

  constructor(public navCtrl: NavController, public agendaService: AgendaService) {
  }

  itemClicked($event, talk) {
    this.navCtrl.push(AgendaDetailPage, {talk})
  }

  talks: Observable<any>

}
