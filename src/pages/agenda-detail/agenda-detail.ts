import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {NativeStorage} from "ionic-native";

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
   <ion-fab bottom right (click)="starTalk()" *ngIf="!starred">
    <button ion-fab mini><ion-icon name="add"></ion-icon></button>
     </ion-fab>
</ion-content>`
})
export class AgendaDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  starred = false;

  ionViewDidLoad() {
    console.log('Hello AgendaDetailPage Page');
    this.talk = this.navParams.get('talk');
    console.log(this.talk);

    NativeStorage.getItem(this.talk.id)
      .then(x => this.starred = x)
      .catch(err => {
        this.starred = err.code != 2;
        console.log(err)
      });
  }

  starTalk() {
    NativeStorage.setItem(this.talk.id, true)
      .then(x => !this.starred)
      .catch(err => console.log(err));
  }

  talk

}
