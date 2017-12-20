import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {FirstPage} from "../first/first";
import {BeginPage} from "../begin/begin";

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

gotoFirst() {
  this.navCtrl.push(FirstPage);
}

gotoBegin() {
  this.navCtrl.push(BeginPage);
}

}
