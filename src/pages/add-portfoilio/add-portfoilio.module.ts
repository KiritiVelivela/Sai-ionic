import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPortfoilioPage } from './add-portfoilio';

@NgModule({
  declarations: [
    AddPortfoilioPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPortfoilioPage),
  ],
})
export class AddPortfoilioPageModule {}
