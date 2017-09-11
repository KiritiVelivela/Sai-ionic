import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import pics from '../../data/about';
import {ApplyPage} from "../apply/apply";
import {MentorPage} from "../mentor/mentor";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage implements OnInit{
  abouts: {id: string; image: string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.abouts = pics;
  }

  goToApply() {
    this.navCtrl.push(ApplyPage);
  }

  goToMentor() {
    this.navCtrl.push(MentorPage);
  }

}
