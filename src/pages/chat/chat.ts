import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ConversationProvider} from "../../providers/conversation/conversation";
import {RelativeTime} from "../../pipes/relative-time";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
retrieved: any;

  message = {
    content: '',
    to: '',
    from: ''
  }

toUser: any;
  constructor( public navCtrl: NavController, public navParams: NavParams, public messageService: ConversationProvider) {

    this.message.to = navParams.get('email');
    console.log(this.message.to);
    this.message.from = window.localStorage.getItem('email');
    console.log(this.message.from);

    this.toUser = {
    id: navParams.get('email'),
    name: navParams.get('verified')
};

  }

  ionViewDidLoad() {
    this.getmsg();
  }

  getmsg() {
    console.log("get msg man");
    var dets = "to=" + this.message.to + "&from=" + this.message.from;
    console.log(dets);
    this.messageService.get(dets).then(data => {
      console.log(dets);
      if(data) {
        console.log(data);
        this.retrieved = data;
        console.log("retrieved= " + this.retrieved);
      }
    });
  }

  sendMsg(messages) {
    console.log("Hey Chatty");
    console.log(messages);
    this.messageService.send(messages).then(data => {
      console.log(messages);
      if(data) {
        console.log(this.message);
        console.log(data);
      }
    });
  }

}
