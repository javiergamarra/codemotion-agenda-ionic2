import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'talk',
  template: `
    <button ion-item (click)="talkClicked()">
      <span item-left style="border-right: 4px solid; padding-right: 10px" [style.border-color]="color()">
        {{talk.start}}
      </span>
      <span item-right>
        {{talk.contents.title}}
      </span>
    </button>`
})
export class TalkComponent {

  @Input()
  talk: any;

  @Output()
  talkClick: EventEmitter<any> = new EventEmitter<any>();

  talkClicked() {
    this.talkClick.emit(this.talk);
  }

  color() {

    if (!this.talk!.contents!.tags) {
      return 'black'
    }

    const level = this.talk!.contents!.tags.Level;

    return level == 'Intermediate' ? 'green' : level == 'Advanced' ? 'red' : 'blue';
  }

}
