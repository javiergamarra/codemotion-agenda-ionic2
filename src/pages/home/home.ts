import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {AgendaService} from "../../providers/agenda";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  ngOnInit(): void {
    this.agendaService.getTalks().subscribe(talks => this.talks = talks);
  }

  constructor(public navCtrl: NavController, public agendaService: AgendaService) {
  }

  talks

}
