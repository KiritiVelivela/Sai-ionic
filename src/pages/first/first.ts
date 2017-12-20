import { Component } from '@angular/core';
import { NavController, AlertController, Events } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {AuthProvider} from "../../providers/auth/auth";
import {BeginPage} from '../begin/begin';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  usercreds = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public authservice: AuthProvider, public alertCtrl: AlertController, private events: Events) {
  }


  login(user) {
    this.events.publish('user:login');
    this.authservice.authenticate(user).then(data => {
      if(data) {
        console.log("on login click!!!!");
        console.log(data);
        // if (data == "mail verified") {
        console.log(user.email);
        this.navCtrl.setRoot(BeginPage, user.email);
        // }
        // else{
        //   let alert = this.alertCtrl.create({
        //     title: 'Email Not Verified!!',
        //     subTitle: 'Please verify your email to move ahead.!',
        //     buttons: ['OK']
        //   });
        // alert.present();
        // }
      }
    });
  }


gotoSignup() {
  this.navCtrl.push(SignupPage);
}


}
