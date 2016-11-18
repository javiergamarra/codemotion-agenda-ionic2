import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

/*
 Generated class for the AgendaDetail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-agenda-detail',
  template: `<ion-header>
    <ion-navbar>
      <ion-title>Agenda Detail</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <h1>{{talk?.contents?.title}}</h1>
    <p>{{talk?.contents?.description}}</p>
</ion-content>`
})
export class AgendaDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('Hello AgendaDetailPage Page');
    this.talk = this.navParams.get('talk');
    console.log(this.talk)
  }

  talk

}
