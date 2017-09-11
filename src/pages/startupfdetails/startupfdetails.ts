import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {About} from "../../data/article.interface";


@Component({
  selector: 'page-startupfdetails',
  templateUrl: 'startupfdetails.html',
})
export class StartupfdetailsPage implements OnInit {
  te: {name: string, position: string, image: string, about: About[]}[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ngOnInit() {
    this.te = this.navParams.data;
}

}
