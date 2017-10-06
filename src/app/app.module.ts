import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AboutPage} from "../pages/about/about";
import {PortfolioPage} from "../pages/portfolio/portfolio";
import {DetailsPage} from "../pages/details/details";
import {MediaPage} from "../pages/media/media";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {ApplyPage} from "../pages/apply/apply";
import {MentorPage} from "../pages/mentor/mentor";
import {HttpModule} from "@angular/http";
import {ContactPage} from "../pages/contact/contact";
import {TabsPage} from "../pages/tabs/tabs";
import {FounderPage} from "../pages/founder/founder";
import {TeamPage} from "../pages/team/team";
import {StartupfoundersPage} from "../pages/startupfounders/startupfounders";
import {TeamddetailsPage} from "../pages/teamddetails/teamddetails";
import {StartupfdetailsPage} from "../pages/startupfdetails/startupfdetails";
import {BeginPage} from "../pages/begin/begin";
import {FirstPage} from "../pages/first/first";
import {LandingPage} from "../pages/landing/landing";
import {SignupPage} from "../pages/signup/signup";
import { AuthProvider } from '../providers/auth/auth';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    PortfolioPage,
    DetailsPage,
    MediaPage,
    ApplyPage,
    MentorPage,
    ContactPage,
    TabsPage,
    FounderPage,
    TeamPage,
    StartupfoundersPage,
    TeamddetailsPage,
    StartupfdetailsPage,
    BeginPage,
    FirstPage,
    LandingPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    PortfolioPage,
    DetailsPage,
    MediaPage,
    ApplyPage,
    MentorPage,
    ContactPage,
    TabsPage,
    FounderPage,
    TeamPage,
    StartupfoundersPage,
    TeamddetailsPage,
    StartupfdetailsPage,
    BeginPage,
    FirstPage,
    LandingPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {
}
