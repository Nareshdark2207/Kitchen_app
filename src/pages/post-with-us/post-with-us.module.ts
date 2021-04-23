import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostWithUsPage } from './post-with-us';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  declarations: [
    PostWithUsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostWithUsPage),
    IonicSelectableModule
  ],
})
export class PostWithUsPageModule {}
