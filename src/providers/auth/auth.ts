import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthProvider {
  AuthToken;
  isLoggedin: boolean;

  constructor(public http: Http) {
    this.http = http;
    this.isLoggedin = false;
    this.AuthToken = null;
  }


    storeUserCredentials(response) {
      window.localStorage.setItem('sai', response.token);
      window.localStorage.setItem('email', response.email);
      this.useCredentials(response);

    }

    useCredentials(token) {
      this.isLoggedin = true;
      this.AuthToken = token;
    }

    loadUserCredentials() {
      var token = window.localStorage.getItem('sai');
      this.useCredentials(token);
    }

    destroyUserCredentials() {
      this.isLoggedin = false;
      this.AuthToken = null;
      window.localStorage.clear();
      console.log(this.AuthToken);
    }

    authenticate(user) {
      var creds = "email=" + user.email + "&password=" + user.password;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return new Promise(resolve => {
        this.http.post('http://localhost:3333/authenticate', creds, {headers: headers}).subscribe(data => {
          if(data.json().success){
            this.storeUserCredentials(data.json());
            console.log(data.json().email);
            resolve(data);
          }
          else
            resolve(false);
        });
      });
    }
    adduser(user) {
      var creds = "email=" + user.email + "&password=" + user.password;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return new Promise(resolve => {
        this.http.post('http://localhost:3333/adduser', creds, {headers: headers}).subscribe(data => {
          if(data.json().success){
            resolve(true);
          }
          else
            resolve(false);
        });
      });
    }

    getinfo() {
      return new Promise(resolve => {
        var headers = new Headers();
        this.loadUserCredentials();
        console.log(this.AuthToken);
        headers.append('Authorization', 'Bearer ' +this.AuthToken);
        this.http.get('http://localhost:3333/getinfo', {headers: headers}).subscribe(data => {
          if(data.json().success)
            resolve(data.json());
          else
            resolve(false);
        });
      })
    }

    logout() {
      this.destroyUserCredentials();
      console.log(this.AuthToken);
    }

    getusers() {
      return  this.http.get('http://localhost:3333/getu').map(res => res.json());
    }



}
