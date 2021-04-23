import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthyPage } from './healthy';

@NgModule({
  declarations: [
    HealthyPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthyPage),
  ],
})
export class HealthyPageModule {}
