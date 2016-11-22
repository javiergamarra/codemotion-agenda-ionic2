import {Component} from "@angular/core";
import {ModalController, NavParams} from "ionic-angular";

@Component({
  selector: 'custom-tab',
  templateUrl: 'custom-tab.html'
})
export class CustomTabComponent {

  items: Array<any>;

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log(this.navParams);

    this.items = this.navParams.data;
  }

}
