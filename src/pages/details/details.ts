import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Article, Benefits, Products, Reason, Solution, Why} from "../../data/article.interface";


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit {
  public tof: boolean;
  idd: string;
  det:{ id: string, image: string, name: string, vision: string, problem?: string, solution?: Solution[], mission?: string, values?: string,
    articles?: Article[], website: string, poster?: string, description?: string, reasons?: Reason[], why?: Why[], benefits?: Benefits[], products?: Products[],
    services?: string, managementteam?: string, technology?: string, conclusion?: string, team?: string, problemimage?: string}[];

  constructor( public navParams: NavParams) {


  }

  check() {
    this.idd = this.navParams.get('id');
    console.log(this.idd);
    if ( this.idd == '2'|| this.idd == '8' || this.idd == '12' ) {
      console.log(this.idd);
      this.tof = false
    }
  }

  ngOnInit() {
    this.det = this.navParams.data;
  }

}
