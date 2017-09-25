import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SignupPage} from '../signup/signup'

@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

gotoSignup() {
  this.navCtrl.push(SignupPage);
}

}
