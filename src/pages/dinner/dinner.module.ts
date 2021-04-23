import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinnerPage } from './dinner';

@NgModule({
  declarations: [
    DinnerPage,
  ],
  imports: [
    IonicPageModule.forChild(DinnerPage),
  ],
})
export class DinnerPageModule {}
