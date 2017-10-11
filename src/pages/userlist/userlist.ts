import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {ChatPage} from "../chat/chat";


@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html',
})
export class UserlistPage {
lists: any = [];
chatpage = ChatPage
  constructor(public navCtrl: NavController, public authservice: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log("Hey");
    this.authservice.getusers().subscribe(data => {
      if(data) {
        console.log(data);
        this.lists = data;
        console.log("hellooo this is getu");
      }
    });
  }

}
