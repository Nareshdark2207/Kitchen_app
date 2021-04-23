import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-advertise-post',
  templateUrl: 'advertise-post.html',
})
export class AdvertisePostPage {
  api_token: any;
  data: any;
  advertise_list_url: string = 'advertise_post_details';
  addvertise: any = [];
  addvertise_discount: any = {};
  addvertise_tax: any = [];
  posted: any = {};
  posted_discount: any = {};
  details: any = {};
  with_us: any;
  type_advertise: boolean;
  type_Post: boolean;
  children: any[];
  shownGroup = null;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  code: any;
  customer_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_service: Service) {
    let value_item = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = value_item.id;
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  ionViewDidLoad() {
    // this.with_us = 'advertise';
    this.with_us = 'Post';
  }
  // **************** page navigation**********************
  Advertise = (field: any, detail: any, tax_percentage: any) => {
    this.details = { id: field, dicount: detail, tax: tax_percentage }
    this.navCtrl.push('AdvertiseWithUsPage', { id: this.details });
  }
  PostPage = () => {
    this.navCtrl.push('PostWithUsPage');
  }
  // ****************************************************************
  ngOnInit() {
    this.language_header();

    let data = 'advertise';
    console.log(data);
    
    this.tab_vlaue(data);
    this.type_advertise = true;
    console.log(this.type_advertise);
    

  }
  // =======================================================================================================================================
  // TAB VALUE
  // ====================
  tab_vlaue(data: any) {
    console.log(data);
    
    if (data == 'Post') {
      this.type_Post = true;
      this.type_advertise = false;
    }  else {
      this.type_advertise = true;
      this.type_Post = false;
    }
    this.advertise(data)
  }
  // ========================================================================================================================================
  // ADVERTISE
  // ====================
  advertise(data: any) {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    // if (data == 'advertise') {
    //   this.data.type = 'ad';
    // } else {
    //   this.data.type = 'post';
    // }
    this.data.type = 'post';
    this.api_service.post_data(this.advertise_list_url, this.data)
      .subscribe((result: any) => {
        if (result.status == 'success') {
          this.api_service.stopLoader();
          if (this.data.type == 'ad') {
            this.addvertise = result.data;
            console.log(this.addvertise);
            
            this.addvertise_discount = result.discount.data;
            this.addvertise_tax = result.taxes;
          } else {
            this.posted = result.data;
            this.posted_discount = result.discount.data;
            console.log(this.posted);
            
          }
        }
        else {
          this.api_service.stopLoader();
        }
      }, (error) => {
        this.api_service.create(error, "top", "error");

          this.api_service.stopLoader();
        });
  }
  // ==============================================================================================================================
  // TOGGLE GROUP
  toggleGroup(group, id) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  // GROUP SHOWN
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  // TOGGLE ITEM
  toggleItem(i, j) {
    this.addvertise[i].list[j].open = !this.addvertise[i].list[j].open;
  }
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
          console.log(this.languageheader);
          console.log(this.languageheader.advertise);

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
}
