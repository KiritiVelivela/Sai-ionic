import { Component } from '@angular/core';
import {AboutPage} from "../about/about";
import {FounderPage} from "../founder/founder";
import {TeamPage} from "../team/team";
import {StartupfoundersPage} from "../startupfounders/startupfounders";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  aboutPage = AboutPage;
  founderPage = FounderPage;
  teamPage = TeamPage;
  startupfoundersPage = StartupfoundersPage;
  constructor() {
  }


}
