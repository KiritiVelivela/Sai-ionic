import { Component } from '@angular/core';

import {Http} from "@angular/http";
import {NavController} from "ionic-angular";


@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {

  data:any = {};

  constructor(public navCtrl: NavController, public http: Http) {
    this.data.startupname = '';
    this.data.founders = '';
    this.data.teamsize = '';
    this.data.industry = '';
    this.data.vision = '';
    this.data.mission = '';
    this.data.problemstatement = '';
    this.data.solution = '';
    this.data.businessmodel = '';
    this.data.keymilestones = '';
    this.data.place = '';
    this.data.websiteurl = '';
    this.data.primaryemail = '';
    this.data.contact = '';
    this.data.foundersprofiles = '';
    this.data.Anyquestions = '';

    this.data.response = '';

    this.http = http;
  }

  submit() {
    var link = 'http://localhost/connectionSQL/api.php';
    var myData = JSON.stringify({
      startupname: this.data.startupname,
      founders: this.data.founders,
      teamsize: this.data.teamsize,
      industry: this.data.industry,
      vision: this.data.vision,
      mission: this.data.mission,
      problemstatement: this.data.problemstatement,
      solution: this.data.solution,
      businessmodel: this.data.businessmodel,
      keymilestones: this.data.keymilestones,
      place: this.data.place,
      websiteurl: this.data.websiteurl,
      primaryemail: this.data.primaryemail,
      contact: this.data.contact,
      foundersprofiles: this.data.foundersprofiles,
      Anyquestions: this.data.Anyquestions  });
    console.log(this.data.startupname);
    console.log(this.data.studentstartup);
    this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log(this.data.response);//https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      }, error => {
        console.log("Oooops!");
      });
  }


}
