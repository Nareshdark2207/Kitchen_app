import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishViewallPage } from './dish-viewall';

@NgModule({
  declarations: [
    DishViewallPage,
  ],
  imports: [
    IonicPageModule.forChild(DishViewallPage),
  ],
})
export class DishViewallPageModule {}
