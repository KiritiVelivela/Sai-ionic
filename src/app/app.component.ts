import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BeginPage } from '../pages/begin/begin';
import {PortfolioPage} from "../pages/portfolio/portfolio";
import {MediaPage} from "../pages/media/media";
import {ContactPage} from "../pages/contact/contact";
import {TabsPage} from "../pages/tabs/tabs";
import {LandingPage} from "../pages/landing/landing";
import {AuthProvider} from "../../src/providers/auth/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
public edited = true;
public mail;
  rootPage: any = LandingPage;

  pages: Array<{title: string, component: any, name: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public authserv: AuthProvider) {
    this.initializeApp();
    this.saveTodos();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: BeginPage, name: 'home' },
      { title: 'About', component: TabsPage, name: 'information-circle' },
      { title: 'Portfolio', component: PortfolioPage, name: 'briefcase' },
      { title: 'Media & Events', component: MediaPage, name: 'md-calendar' },
      { title: 'Contact', component: ContactPage, name: 'call' }
    ];

  }


saveTodos(): void {
  this.authserv.loadUserCredentials();
  if (this.authserv.AuthToken == null) {
    this.edited = false;
    console.log(this.edited);
  } else {
    this.edited = true;
    this.mail = window.localStorage.getItem('email');
    console.log(this.mail);
    console.log(this.edited);
  }
  //show box msg
}

gotoDestroy() {
  this.authserv.destroyUserCredentials();
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
