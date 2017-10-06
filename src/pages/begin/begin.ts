import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {PortfolioPage} from "../portfolio/portfolio";
import {MediaPage} from "../media/media";
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home"


@Component({
  selector: 'page-begin',
  templateUrl: 'begin.html',
})
export class BeginPage implements OnInit {
ema: any;
  homePage = HomePage;
  portfolioPage = PortfolioPage;
  mediaPage = MediaPage;
  contactPage = ContactPage;
  constructor(public navParams: NavParams) {
  }

ngOnInit() {
  this.ema = this.navParams.data;
  console.log(this.ema);
}

}
