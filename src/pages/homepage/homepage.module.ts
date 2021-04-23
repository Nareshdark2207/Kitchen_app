import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartModalPage } from '../cart-modal/cart-modal';
import { HomepagePage } from './homepage';

@NgModule({
  declarations: [
    HomepagePage,
  ],
  imports: [
    IonicPageModule.forChild(HomepagePage),
  ],
  entryComponents: [
    // CartModalPage
  ],
})
export class HomepagePageModule {}
