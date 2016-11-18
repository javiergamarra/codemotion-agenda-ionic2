import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

    setTimeout(x => this.talk = 'hola!', 5000);
  }

  talk = "Hi!"

}
