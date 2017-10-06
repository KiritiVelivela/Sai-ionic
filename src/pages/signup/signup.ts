import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  newcreds = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public authservice: AuthProvider, public alertCtrl: AlertController) {
  }

  register(user) {
     this.authservice.adduser(user).then(data => {
       if(data == true) {
         console.log(data);
         console.log(user);
         var alert = this.alertCtrl.create({
           title: 'Registration Successful',
           subTitle: 'Please verify your mailid using the mail sent to your id and proceed for login.',
           buttons: [
             {
               text:'Login',
               handler: () => {
                 this.navCtrl.pop();
               }
            }]
         });
         alert.present();
         console.log(data);
       }
       else {
         console.log(data);
         var alertfail = this.alertCtrl.create({
           title: 'Registration failed',
           subTitle: 'Please enter valid details!',
           buttons: [
             {
               text:'Login',
               handler: () => {
                 this.navCtrl.pop();
               }
            }]
         });
         alertfail.present();
         console.log(data);
       }
     });
   }


   gotoLogin() {
     this.navCtrl.pop();
   }

}
