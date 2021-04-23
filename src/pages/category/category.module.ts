import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CategoryPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(CategoryPage),
  ],
})
export class CategoryPageModule {}
