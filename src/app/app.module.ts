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
import {UserlistPage} from "../pages/userlist/userlist";
import {ChatPage} from "../pages/chat/chat";
import {AddPortfoilioPage} from "../pages/add-portfoilio/add-portfoilio";
import { ConversationProvider } from '../providers/conversation/conversation';
import {RelativeTime} from "../pipes/relative-time";
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AddStartupProvider } from '../providers/add-startup/add-startup';
const config: SocketIoConfig = { url: 'http://localhost:3333', options: {} };

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
    SignupPage,
    UserlistPage,
    ChatPage,
    RelativeTime,
    AddPortfoilioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SocketIoModule.forRoot(config)
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
    SignupPage,
    UserlistPage,
    ChatPage,
    AddPortfoilioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ConversationProvider,
    AddStartupProvider
  ]
})
export class AppModule {
}
