import {Component} from "@angular/core";
import {ModalController} from "ionic-angular";
import {CustomTabComponent} from "./custom-tab";

export class Tab {
  title: string;
  component: any;
}

const TABS = [
  {title: 'Snacks', component: CustomTabComponent},
  {title: 'Drinks', component: CustomTabComponent},
  {title: 'Frozen', component: CustomTabComponent},
  {title: 'Custom', component: CustomTabComponent}
];

const CUSTOM_ITEMS = [{
  'title': 'custom',
  'units': 1
}];

@Component({
  selector: 'multi-tab',
  templateUrl: 'multi-tab.html'
})
export class MultiTabComponent {

  tabs: Array<Tab> = TABS;

  items: Array<any> = CUSTOM_ITEMS;

  constructor(public modalCtrl: ModalController) {

  }

}
