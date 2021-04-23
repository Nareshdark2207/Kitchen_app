import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuisineViewallPage } from './cuisine-viewall';

@NgModule({
  declarations: [
    CuisineViewallPage,
  ],
  imports: [
    IonicPageModule.forChild(CuisineViewallPage),
  ],
})
export class CuisineViewallPageModule {}
