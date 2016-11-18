import {Component, Input} from "@angular/core";
@Component({
  selector: 'talk',
  template: `
    <button ion-item (click)="itemClicked($event, talk)">
      <span item-left style="border-right: 4px solid; padding-right: 10px" [style.border-color]="color(talk)">
        {{talk.start}}
      </span>
      <span item-right>
        {{talk.contents.title}}
      </span>
    </button>`
})
export class TalkComponent {

  itemClicked($event, talk) {
    // this.navCtrl.push(AgendaDetailPage, {talk})
  }

  @Input()
  talk: any;

  color() {

    if (!this.talk!.contents!.tags) {
      return 'black'
    }

    const level = this.talk!.contents!.tags.Level;

    return level == 'Intermediate' ? 'green' : level == 'Advanced' ? 'red' : 'blue';
  }

}
