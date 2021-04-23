import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreakfastPage } from './breakfast';

@NgModule({
  declarations: [
    BreakfastPage,
  ],
  imports: [
    IonicPageModule.forChild(BreakfastPage),
  ],
})
export class BreakfastPageModule {}
