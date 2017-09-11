import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import port from '../../data/portfolio';
import {DetailsPage} from "../details/details";
import {Article, Benefits, Products, Reason, Solution, Why} from "../../data/article.interface";

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage implements OnInit {
  dat:{ id: string, image: string, name: string, vision: string, problem?: string, solution?: Solution[], mission?: string, values?: string,
        articles?: Article[], website: string, poster?: string, description?: string, reasons?: Reason[], why?: Why[], benefits?: Benefits[],
        products?: Products[], services?: string, managementteam?: string, technology?: string, conclusion?: string, team?: string, problemimage?: string}[];

  detailsPage = DetailsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.dat = port;
  }

}
