import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  data: any = {};

  constructor(public navCtrl: NavController, public http: Http ) {
    this.data.conname = '';
    this.data.emailid = '';
    this.data.mobile = '';
    this.data.subject = '';
    this.data.yourmessage = '';
  }


  submit() {
    var link = 'http://localhost/connectionSQL/contact.php';
    var yourData = JSON.stringify({
      conname: this.data.conname,
      emailid: this.data.emailid,
      mobile: this.data.mobile,
      subject: this.data.subject,
      yourmessage: this.data.yourmessage });
    console.log(this.data.conname);
    console.log(this.data.emailid);
    this.http.post(link, yourData)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log(this.data.response);//https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      }, error => {
        console.log("Oooops!");
      });
  }

}
