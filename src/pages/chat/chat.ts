import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import {ConversationProvider} from "../../providers/conversation/conversation";
import {RelativeTime} from "../../pipes/relative-time";
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
retrieved1: any;
  @ViewChild(Content) content: Content;
msgs = [];

  message = {
    content: '',
    to: '',
    from: ''
  }

toUser: any;
  constructor( public navCtrl: NavController, public navParams: NavParams, public messageService: ConversationProvider, private socket: Socket) {



    this.getMessages().subscribe(message => {
          console.log("get===" + message);
          console.log( message);
          this.msgs.push(message);
          this.scrollToBottom();
        });

    this.message.to = navParams.get('email');
    console.log(this.message.to);
    this.message.from = window.localStorage.getItem('email');
    console.log(this.message.from);

    this.toUser = {
    id: navParams.get('email'),
    name: navParams.get('verified')
};

  }

  ionViewWillLeave() {
  this.socket.disconnect();
}

  ionViewWillEnter() {

  }

  ionViewDidLoad() {
    this.getmsg();
    this.scrollToBottom();
  }

  getmsg() {
    console.log("get msg man");
    var dets = "to=" + this.message.to + "&from=" + this.message.from;
    console.log(dets);
    this.messageService.get(dets).then(data => {
      console.log(dets);
      if(data) {
        console.log(data);
        console.log("retcheck= " + data);
        this.retrieved1 = data;
        console.log("r1=="+this.retrieved1.length);
        for (let i = 0; i < this.retrieved1.length; i++) {
            this.retrieved1[i];
            console.log(this.retrieved1[i]);
            this.msgs.push(this.retrieved1[i]);
        }
      }
      console.log(this.msgs);
    });
  }

  getMessages() {
  let observable = new Observable(observer => {
    this.socket.on('message', (data) => {
      console.log(data);
      console.log("observe="+data.fromemail);
      // var newms = {
      //   message: data.text,
      //   toemail: this.message.to,
      //   fromemail: this.message.from,
      //   time: data.created
      // }
      console.log("observe=="+data);
      console.log(data);
      observer.next(data);
    });
  })
  return observable;
}

  sendMsg(messages) {
    console.log("Hey Chatty");
    console.log(messages);
    this.socket.emit('add-message', messages );
    messages.content = ' ';
    this.scrollToBottom();

  }

  scrollToBottom() {
      setTimeout(() => {
          if (this.content.scrollToBottom) {
              this.content.scrollToBottom();
          }
      }, 400)
  }

}
