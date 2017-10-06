import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupPage} from '../signup/signup'
import {AuthProvider} from "../../providers/auth/auth";
import {BeginPage} from '../begin/begin'

@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  usercreds = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public authservice: AuthProvider) {
  }


  login(user) {
    this.authservice.authenticate(user).then(data => {
      if(data) {
        console.log(user.email);
        this.navCtrl.setRoot(BeginPage, user.email);
      }
    });
  }


gotoSignup() {
  this.navCtrl.push(SignupPage);
}

}
