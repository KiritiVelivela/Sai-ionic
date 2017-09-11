import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import ports from '../../data/portfolio'
import {PortfolioPage} from "../portfolio/portfolio";
import {Article, Benefits, Products, Reason, Solution, Why} from "../../data/article.interface";
import eve from '../../data/media'
import {MediaPage} from "../media/media";
import {TabsPage} from "../tabs/tabs";
import {ApplyPage} from "../apply/apply";
import {MentorPage} from "../mentor/mentor";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  datas:{id: string, image: string, name: string, vision: string, problem?: string, solution?: Solution[], mission?: string, values?: string,
    articles?: Article[], website: string, poster?: string, description?: string, reasons?: Reason[], why?: Why[], benefits?: Benefits[], products?: Products[],
    services?: string, managementteam?: string, technology?: string, conclusion?: string, team?: string, problemimage?: string}[];

  med: {id: string, image: string, link: string, title: string}[];

  constructor(public navCtrl: NavController) {}

  ngOnInit(){
    this.datas = ports;
    this.med = eve;
  }

  goToAbout() {
    this.navCtrl.push(TabsPage);
  }

  goToPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }

  goToMedia() {
    this.navCtrl.push(MediaPage);
  }

  goToMentor() {
    this.navCtrl.push(MentorPage);
  }

  goToApply() {
    this.navCtrl.push(ApplyPage);
  }

}
