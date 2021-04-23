import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
