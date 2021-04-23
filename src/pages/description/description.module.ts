import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescriptionPage } from './description';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(DescriptionPage),
    PipesModule
  ],
})
export class DescriptionPageModule {
 
}
