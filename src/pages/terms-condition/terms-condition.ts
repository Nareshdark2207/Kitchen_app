import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-terms-condition',
  templateUrl: 'terms-condition.html',
})
export class TermsConditionPage {
  api_token: any;
  data: any;
  terms_condition_url: string = 'terms_conditions_data';
  term_condition: any = {};
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  customer_id: any;
  code: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_service: Service, ) {
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
    console.log('ionViewDidLoad TermsConditionPage');
  }
  ngOnInit() {
    this.get_terms();
    this.language_header();
    this.language_field();

  }
  // GET TERMS
  // =====================
  get_terms() {
    let tc_type = "general";
    this.api_service.get_list(this.terms_condition_url + '?api_token=' + this.api_service.api_token + '&tc_type='+tc_type).subscribe((result: any) => {
        let res = result.status
        if (res == 'success') {
          this.term_condition = result.data;
        } else {
          this.api_service.create(result, 'top', 'error');
        }
      }, (error) => {
          this.api_service.create(error, 'top', 'error');
        });
  }
  // ======================================================================================================================
  language_header() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;
    this.data.user_id = this.customer_id;
    this.api_service.post_data(this.languageheader_url, this.data)
      .subscribe((result: any) => {
        this.api_service.stopLoader();
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.languageheader = result.header_list;
        }
        else {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
        });
  }
  language_field() {
    this.api_service.get_list(this.language_field_url + '?api_token=' + this.api_service.api_token + '&lang_code='+this.code).subscribe((result: any) => {
        this.api_service.stopLoader();
        if (result.status == 'success') {
          this.languagefield = result.field_list;
        }
        else {
          this.api_service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.api_service.create(error, 'top', 'error');
        });
  }
}
