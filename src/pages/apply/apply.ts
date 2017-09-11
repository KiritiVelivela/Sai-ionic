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
    this.data.studentstartup = '';
    this.data.collegename = '';
    this.data.foundername = '';
    this.data.primaryemail = '';
    this.data.contact = '';
    this.data.teamsize = '';
    this.data.founders = '';
    this.data.womenfounders = '';
    this.data.registered = '';
    this.data.angellist = '';
    this.data.websiteurl = '';
    this.data.founderbackgrounds = '';
    this.data.fulltime = '';
    this.data.describebusiness = '';
    this.data.targetcustomers = '';
    this.data.raisemoney = '';
    this.data.businessmodel = '';
    this.data.llppvt = '';
    this.data.problemsolving = '';
    this.data.competitor = '';
    this.data.transactionacheived = '';
    this.data.teamweakness = '';
    this.data.Anyquestions = '';

    this.data.response = '';

    this.http = http;
  }

  submit() {
    var link = 'http://localhost/connectionSQL/api.php';
    var myData = JSON.stringify({
      startupname: this.data.startupname,
      studentstartup: this.data.studentstartup,
      collegename: this.data.collegename,
      foundername: this.data.foundername,
      primaryemail: this.data.primaryemail,
      contact: this.data.contact,
      teamsize: this.data.teamsize,
      founders: this.data.founders,
      womenfounders: this.data.womenfounders,
      registered: this.data.registered,
      angellist: this.data.angellist,
      websiteurl: this.data.websiteurl,
      founderbackgrounds: this.data.founderbackgrounds,
      fulltime: this.data.fulltime,
      describebusiness: this.data.describebusiness,
      targetcustomers: this.data.targetcustomers,
      raisemoney: this.data.raisemoney,
      businessmodel: this.data.businessmodel,
      llppvt: this.data.llppvt,
      problemsolving: this.data.problemsolving,
      competitor: this.data.competitor,
      transactionacheived: this.data.transactionacheived,
      teamweakness: this.data.teamweakness,
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
