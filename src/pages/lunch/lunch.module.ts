import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LunchPage } from './lunch';

@NgModule({
  declarations: [
    LunchPage,
  ],
  imports: [
    IonicPageModule.forChild(LunchPage),
  ],
})
export class LunchPageModule {}
