import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddStartupProvider } from '../../providers/add-startup/add-startup';



@IonicPage()
@Component({
  selector: 'page-add-portfoilio',
  templateUrl: 'add-portfoilio.html',
})
export class AddPortfoilioPage {

  startupcreds = {
    startupname: '',
    startupvision: '',
    startupmission: '',
    startupproblem: '',
    startupsolution: '',
    startupdescription: '',
    startupurl: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public addservice: AddStartupProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPortfoilioPage');
  }

  newStartup(startupcreds) {
    console.log(startupcreds);
     this.addservice.addstartup(startupcreds).then(data => {
       console.log(data)
       if(data == true) {
         console.log(data);
         console.log(startupcreds);
         var alert = this.alertCtrl.create({
           title: 'Startup Successful Create',
           buttons: [
             {
               text:'List of Startups',
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
           title: 'Startup Creation failed',
           subTitle: 'Please enter valid details!',
           buttons: [
             {
               text:'Try Again',
               handler: () => {
                 // this.navCtrl.pop();
               }
            }]
         });
         alertfail.present();
         console.log(data);
       }
     });
   }

}
