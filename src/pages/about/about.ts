import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  data: any;
  customer_id: any;
  code: any;
  api_token: any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
    if (localStorage.getItem('eastern_deals')) {
      this.data = JSON.parse(localStorage.getItem('eastern_deals'))
      this.customer_id = this.data.id;
    }
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }

  ionViewDidLoad() {
    this.language_header();

   }
  language_header() {
    this.data = {};
    this.api_token = this.service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;
    this.data.user_id = this.customer_id;
    this.service.post_data(this.languageheader_url, this.data)
      .subscribe((result: any) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          this.service.stopLoader();
          this.languageheader = result.header_list;
        }
        else {
          this.service.stopLoader();
          this.service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.service.stopLoader();
          this.service.create(error, 'top', 'error');
        });
  }

}
