import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  data: any;

  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  api_token: any;
  code:any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  img: any;
  imageUrl: string = this.service.API_URL_IMG;
  postListUrl: string;
  postList: any = [];
  category_count: any = 6;
  showEndPage: any;
  master_search: any;
  reActiveInfinite: any;
  show:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service, public events: Events) {
  
    if (localStorage.getItem('eastern_deals') != null && localStorage.getItem('eastern_deals') != undefined) {
      this.data = JSON.parse(localStorage.getItem('eastern_deals'))
    }
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
    // this.getList();
    this.language_header();
    this.language_field();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
  // ============================================================================================================================
  // GET LIST
  // ============================
  getList = () => {
    let obj;
    obj = {
      'api_token': this.service.api_token,
      'search': this.master_search,
      'lang_code': this.code
    }
  
    this.postListUrl = 'post_list';
    this.service.post_data(this.postListUrl, obj)
      .subscribe((result) => {
        if (result.status == 'success') {
          this.service.stopLoader();
          this.postList = result.data;
        } else {
          this.service.create(JSON.stringify(result), 'top', 'error');
          this.service.stopLoader();
        }
      }, (error) => {
        this.service.stopLoader();
        this.service.create(error, 'top', 'error');
      })
  }
  doInfinite(infiniteScroll) {
    if (this.postList.length <= this.category_count) {
      this.category_count = this.postList.length;
      this.showEndPage = true;
      infiniteScroll.enable(false);
    } else {
      setTimeout(() => {
        this.category_count = this.category_count + 6;
        this.showEndPage = false;
        infiniteScroll.complete();
        this.reActiveInfinite = infiniteScroll;
      }, 1000);
    }

  }
  // =====================================================================================================================
  // PULL TO REFRESH
  // ============================
  doRefresh(refresher) {
    this.category_count = 6;
    if (this.reActiveInfinite) {
      this.reActiveInfinite.enable(true);

    }
    this.events.publish('refresher:enabled', true);
    this.getList();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  // =====================================================================================================================
  toggle() {
    this.show = !this.show;
  }
  description(id: any) {
    // alert(id);
    if(id != undefined){
      this.navCtrl.push('DescriptionPage', { id: id });
    }
    
  }
  // =============================================================================================================================
  language_header() {
    this.data = {};
    this.api_token = this.service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;
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
    this.service.get_list(this.language_field_url + '?api_token=' + this.service.api_token + '&lang_code=' + this.code).subscribe((result: any) => {
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
