import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  profile_url = 'user_profile';
  customer_id: any;
  profile_data: any = {};
  img_path: any;
  profile_fullname: any;
  account_items: Array<{ title: string, component: any }>;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  api_token: any;
  data: any;
  code:any;
  // ==============================================================================================================================================================
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_service: Service, public modalCtrl: ModalController, private events: Events) {
    let customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = customer_data.id;
 
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
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
          this.account_items = [
            { title: this.languageheader.edit_profile, component: 'ProfilePage' },
            { title: this.languageheader.edit_email, component: 'EditEmailPage' },
            { title: this.languageheader.change_password, component: 'ChangePasswordPage' },
            { title: this.languageheader.my_orders, component: 'MyOrdersPage' }
          ]
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
   
    this.events.subscribe('backpage', () => {
      this.get_profile();
    })
  }
  ionViewDidLoad() {
    this.get_profile();
  }
  // ==============================================================================================================================================================
  // GET PROFILE
  // =========================
  get_profile() {
    let user_id = this.customer_id;
    let api_token = this.api_service.api_token;
    const url = this.profile_url + '?api_token=' + api_token + '&user_id=' + user_id;
    this.api_service.get_list(url)
      .subscribe((result: any) => {
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.profile_data = result.data;
          this.img_path = this.api_service.API_URL_IMG;
          this.profile_fullname = result.data.first_name;
        }
      }, (error) => {
          this.api_service.stopLoader();
        });
  }
  //  =============================================================================================================================================================
  // NAVIGATE THE PAGES
  // ===========================
  itemSelected(item) {
    this.navCtrl.push(item.component);
  }
  // IMAGE VIEW PAGE
  // =============================
  imageView(img_data, cust_name) {
    const modal = this.modalCtrl.create('ImageviewerPage', { img_data: img_data, name: cust_name });
    modal.present();
  }
 
}
