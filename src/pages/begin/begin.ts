import { Component } from '@angular/core';
import {PortfolioPage} from "../portfolio/portfolio";
import {MediaPage} from "../media/media";
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home"


@Component({
  selector: 'page-begin',
  templateUrl: 'begin.html',
})
export class BeginPage {

  homePage = HomePage;
  portfolioPage = PortfolioPage;
  mediaPage = MediaPage;
  contactPage = ContactPage;
  constructor() {
  }

}
