import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDescriptionPage } from './order-description';

@NgModule({
  declarations: [
    OrderDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDescriptionPage),
  ],
})
export class OrderDescriptionPageModule {}
