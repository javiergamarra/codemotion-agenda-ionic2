import {Component} from "@angular/core";
import {ModalController} from "ionic-angular";

const CUSTOM_ITEMS = [{
  'title': 'custom',
  'units': 1
}];

@Component({
  selector: 'custom-tab',
  templateUrl: 'custom-tab.html'
})
export class CustomTabComponent {

  items: Array<any> = CUSTOM_ITEMS;

  constructor(public modalCtrl: ModalController) {
  }

}
