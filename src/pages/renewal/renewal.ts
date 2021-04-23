import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service'

@IonicPage()
@Component({
  selector: 'page-renewal',
  templateUrl: 'renewal.html',
})
export class RenewalPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
    this.data = JSON.parse(localStorage.getItem('eastern_deals'))
    this.customer_id = this.data.id;
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
    this.getRenewalList();
  }
  data: any;
  renewalUrl: string;
  renewalAdList: any = [];
  renewalPostList: any = [];
  imgUrl: string = this.service.API_URL_IMG;
  api_token: any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  code: any;
  customer_id: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  ionViewDidLoad() {
    this.language_header();
    this.language_field();
  }
  // ====================================================================================================================
  // GET RENEWAL LIST
  // ==========================
  getRenewalList = () => {
    this.renewalUrl = 'renewal_list'
    const obj = {
      'api_token': this.service.api_token,
      'user_id': this.data.id
    };
    this.service.post_data(this.renewalUrl, obj)
      .subscribe(result => {
        this.service.stopLoader();
        this.renewalAdList = result.data.ad_data;
        this.renewalPostList = result.data.post_data;

      }, (error) => {
        this.service.stopLoader();
        this.service.create(error, 'top', 'error');

        console.log(error)
      })
  }
  // ======================================================================================================================
  // PULL TO REFRESH
  // ============================
  //   doRefresh(refresher: any) {
  //     console.log('Begin async operation', refresher);
  //   this.page = Number(this.page) + Number(1);
  //  this.getRenewalList();
  //     setTimeout(() => {
  //       console.log('Async operation has ended');
  //       refresher.complete();
  //     }, 2000);
  //   }
  // ======================================================================================================================
  // RENEWAL DETAIL
  // ======================
  order_description(data: any, type: any) {
    this.navCtrl.push('OrderDescriptionPage', { renewal: data, type: 'renewal', postAd: type });
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
  language_field() {
    this.service.get_list(this.language_field_url + '?api_token=' + this.service.api_token + '&lang_code='+this.code).subscribe((result: any) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          this.languagefield = result.field_list;
        }
        else {
          this.service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.service.create(error, 'top', 'error');
        });
  }
}
