import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Company, Details} from "../../data/article.interface";


@Component({
  selector: 'page-teamddetails',
  templateUrl: 'teamddetails.html',
})
export class TeamddetailsPage implements OnInit{
  te:{name: string, position: string, pic: string, details: Details[], companies?: Company[]}[]
  // me:{name: string, position: string, details: Menabout[], pic: string, companies?: Company[]}[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.te = this.navParams.data;
  }

}
