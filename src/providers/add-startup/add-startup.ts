import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AddStartupProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddStartupProvider {

  constructor(public http: Http) {
    console.log('Hello AddStartupProvider Provider');
  }

  addstartup(startupcreds) {
    console.log(startupcreds);
    var creds = "startupname=" + startupcreds.startupname + "&startupvision=" + startupcreds.startupvision + "&startupmission=" + startupcreds.startupmission + "&startupproblem=" + startupcreds.startupproblem + "&startupsolution=" + startupcreds.startupsolution
    + "&startupdescription=" + startupcreds.startupdescription + "&startupurl=" + startupcreds.startupurl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post('http://192.168.6.210:3333/addstartup', creds, {headers: headers}).subscribe(data => {
        console.log("from add-startup.ts");
        console.log(data);
        console.log(creds);
        if(data.json().success){
          resolve(true);
        }
        else
          resolve(false);
      });
    });
  }

}
