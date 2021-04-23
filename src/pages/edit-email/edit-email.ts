import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController  } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Service } from '../../app/service';
/**
 * Generated class for the EditEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-email',
  templateUrl: 'edit-email.html',
})
export class EditEmailPage {
  profile_url = 'user_profile';
  customer_id: any;
  profile_data: any = {};
  img_path: any;
  disabled: any = true;
  customer_profile_form: FormGroup;
  show: boolean;
  emailSubmitUrl: string = 'user_mail';
  cus_id: any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  code: any;
  api_token: any;
  data: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
    // ================================================================================================================================
  // VALIDATION MESSAGES
  // ==============================
  validation_messages = {
    'customer_email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Email is not valid' }
    ],
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, 
    public api_service: Service, private modalCtrl: ModalController) {
    let customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = customer_data.id;
    this.cus_id = customer_data.customer_id;
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEmailPage');
  }
  ngOnInit() {
    this.customer_profile();
    this.get_profile();
    this.language_header();
    this.language_field();
  }
  // =================================================================================================================================
  // CUSTOMER PROFILE FORMINITIATE
  // =======================================
  customer_profile() {
    this.customer_profile_form = this.formBuilder.group({
      customer_email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}]*')]),
    });
  }
  // ==================================================================================================================================
  // GET PROFILE DETAILS
  // ============================
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
          this.customer_profile_form.patchValue({
            customer_email: this.profile_data.email,
          });
          this.show = true;

        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
  }
    // EMAIL EDIT
  // ========================
  emailSubmit = () => {
    let updated_data: any = {};
    updated_data.api_token = this.api_service.api_token;
    updated_data.user_id = this.customer_id;
    updated_data.customer_id = this.cus_id;
    updated_data.email = this.customer_profile_form.value.customer_email;
    this.api_service.post_data(this.emailSubmitUrl, updated_data)
      .subscribe((result) => {
        if (result.status == 'Success') {
          this.api_service.stopLoader();
          this.show = true;
          const myModal: Modal = this.modalCtrl.create('EmailOtpPage', { data: updated_data });
          myModal.present();
        } else {
          this.api_service.stopLoader();
          this.api_service.create(result.errors.email[0], 'top', 'error');
          this.show = false;
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      })
  }
  // =============================================================================================================================================
  hide = () => {
    this.show = false;
    this.disabled = false;
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
