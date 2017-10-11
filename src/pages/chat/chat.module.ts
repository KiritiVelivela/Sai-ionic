import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RelativeTime} from "../../pipes/relative-time";
import { ChatPage } from './chat';

@NgModule({
  declarations: [
    ChatPage,
    RelativeTime
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
  ],
})
export class ChatPageModule {}
