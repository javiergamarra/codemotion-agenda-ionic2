import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {AgendaService} from "../../providers/agenda";
import {Observable} from "rxjs";

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

  talks: Observable<any>

}
