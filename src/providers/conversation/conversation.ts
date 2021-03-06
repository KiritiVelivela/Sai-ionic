import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConversationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConversationProvider {

  constructor(public http: Http) {
    console.log('Hello ConversationProvider Provider');
  }

send(messages) {
  console.log("Hey conversation provider");
  console.log(messages);
return new Promise(resolve => {  this.http.post('https://sai-vizag.herokuapp.com/sendmessage', messages).subscribe(data => {
    if(data.json().success){
      console.log(data);
        resolve(data.json());
    }
  });
})
}

get(dets) {
  console.log("getting messages btw 2 users");
  return new Promise(resolve => {  this.http.post('https://sai-vizag.herokuapp.com/getmsg', dets).subscribe(data => {
      if(data){
        console.log(data.json().history);
        resolve(data.json().history);
      }
    });
})
}

}
