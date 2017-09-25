import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";


@Component({
  selector: 'page-mentor',
  templateUrl: 'mentor.html',
})
export class MentorPage {
  data: any = {};

  constructor(public navCtrl: NavController, public http: Http) {
    this.data.mentorname = '';
    this.data.organddesignation = '';
    this.data.emailid = '';
    this.data.mobile = '';
    this.data.skype = '';
    this.data.linkedin = '';
  }


  submit() {
    var link = 'http://localhost/connectionSQL/mentor.php';
    var yourData = JSON.stringify({
      mentorname: this.data.mentorname,
      organddes: this.data.organddesignation,
      email: this.data.emailid,
      mobile: this.data.mobile,
      skype: this.data.skype,
      linkedin: this.data.linkedin });
    console.log(this.data.name);
    console.log(this.data.organddesignation);
    console.log(yourData);
    this.http.post(link, yourData)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log(this.data.response);//https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      }, error => {
        console.log("Oooops!");
      });
  }


}
