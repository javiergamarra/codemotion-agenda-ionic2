import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AgendaService} from "../providers/agenda";
import {AgendaDetailPage} from "../pages/agenda-detail/agenda-detail";
import {TalkComponent} from "../pages/talk/talk";
import {MultiTabComponent} from "../pages/agenda-day/multi-tab";
import {CustomTabComponent} from "../pages/agenda-day/custom-tab";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgendaDetailPage,
    TalkComponent,
    MultiTabComponent,
    CustomTabComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgendaDetailPage,
    CustomTabComponent
  ],
  providers: [AgendaService]
})
export class AppModule {}
