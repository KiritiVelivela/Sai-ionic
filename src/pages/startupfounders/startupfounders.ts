import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {About} from "../../data/article.interface";
import stf from "../../data/startupfounders"
import {StartupfdetailsPage} from "../startupfdetails/startupfdetails";


@Component({
  selector: 'page-startupfounders',
  templateUrl: 'startupfounders.html',
})
export class StartupfoundersPage implements OnInit{
  startupfPage = StartupfdetailsPage;
  start: {name: string, position: string, image: string, about: About[]}[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.start = stf;
  }

}
