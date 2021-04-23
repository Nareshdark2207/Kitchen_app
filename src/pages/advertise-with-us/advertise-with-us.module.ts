import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertiseWithUsPage } from './advertise-with-us';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AdvertiseWithUsPage,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    IonicPageModule.forChild(AdvertiseWithUsPage),
  ],
})
export class AdvertiseWithUsPageModule {}
