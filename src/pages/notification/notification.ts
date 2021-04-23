import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notificationUrl: string;
  notificationList: any = [];
  data: any;
  notificationDetailUrl: string;
  notificationDetail: any;
  show_no_notify:boolean;
  show: any = [];
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  code: any;
  api_token: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  notification_id:any;
  user_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service, public events: Events) {
    this.data = JSON.parse(localStorage.getItem('eastern_deals'));
    this.user_id = this.data.id;
    // console.log(this.data);
    this.getNotification();
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
    console.log(this.data);
    this.language_header();
    this.language_field();
  }

  ionViewDidLoad() {
  }
  // ==============================================================================================================================================
  // NOTIFICATION LIST
  // ============================
  getNotification() {
    this.notificationUrl = 'notification_list';
    console.log(this.data, this.user_id);
    const obj = {
      'api_token': this.service.api_token,
      'user_id': this.user_id
    };
    console.log(obj);
    this.service.post_data(this.notificationUrl, obj)
      .subscribe(result => {
        if (result.status == 'success') {
          this.service.stopLoader();
          // result.data.reverse();
          if(result.data.length > 0){
          console.log(result.data);
          this.notificationList = result.data;
          this.notification_id = result.id;
         var i=0;
            for (var val of this.notificationList) {
              if(val){
                val.show[i] = false;
              }
             
            }
          this.show_no_notify = false;
          }else{
          this.show_no_notify = true;

          }

        } else {
          this.service.stopLoader();
          this.service.create(result.message, "top", "error");
        }
      }, (error) => {
        this.service.stopLoader();
        this.service.create(error, "top", "error");
      })
  }
  // ==========================================================================================================================================
  // NOTIFICATION DETAIL
  // =================================
  Detail = (id: any, status: any, i: any, val: any) => {
  
    this.show = []
    if (val != true) {
      // alert(val);
      if (status == 0 || status == undefined ) {
        this.notificationDetailUrl = 'notification_read';
        const obj = {
          'id': id,
          'api_token': this.service.api_token,
          'user_id': this.data.id
        };
      
        this.service.post_data(this.notificationDetailUrl, obj)
          .subscribe(result => {
            this.service.stopLoader();
            if (result.status == 'success') {
              this.getNotification();
              this.show[i] = true;
              this.events.publish('created');
            }
          }, (error) => {
            this.service.stopLoader();
            this.service.create(error, "top", "error");
          })
      } else {
        this.show[i] = true;
      }
    } else if(val == undefined){
      this.show[i] = false;
    }else{
      this.show[i] = false;
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
