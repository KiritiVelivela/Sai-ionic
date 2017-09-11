import {Component, OnInit} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Company, Details, Menabout} from "../../data/article.interface";
import team from "../../data/teammembers"
import {TeamddetailsPage} from "../teamddetails/teamddetails";
import mentor from "../../data/mentor";


@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage implements OnInit{
  teamddetailsPage = TeamddetailsPage;
  men:{name: string, position: string, details: Menabout[], pic: string, companies?: Company[]}[]
  tea:{name: string, position: string, pic: string, details: Details[]}[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ngOnInit(){
    this.tea = team;
    this.men = mentor;
}

}
