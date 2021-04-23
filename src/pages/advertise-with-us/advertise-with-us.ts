import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-advertise-with-us',
  templateUrl: 'advertise-with-us.html',
})
export class AdvertiseWithUsPage {
  api_token: any;
  data: any;
  categorylist_url: string = 'master_category_list';
  categories: any = [];
  add_id: any;
  amount: any;
  id: any;
  customer_id: any;
  discount: any;
  total_dis_amt: any;
  discount_ammt: any;
  tax_ammt: any = [];
  tax_detail: any;
  current_amount: any;
  total_percentage: any;
  total_tax_amount: any;
  total_amount: any
  AdvertiseForm: FormGroup;
  actual_price: any;
  sales_price: any;
  product_price: any;
  tax_percent: any;
  link_url: string = 'advertisement_request';
  terms_condition_url: string = 'terms_conditions_data';
  term_condition: any = {};
  dura_type: any;
  orderstatus_url = 'constant_status';
  order_status_list: any = {};
  err_mesg:any;
  code:any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  // =====================================================================================================================================
  // VALIDATION MESSAGE
  // =========================
  validation_messages = {
    // 'category_id': [
    //   { type: 'required', message: 'Category Is Required' }
    // ],
    'available_from_time': [
      { type: 'required', message: 'Preference Contact Time Is Required' }
    ],
    'description': [
      { type: 'required', message: 'Description Is Required' }
    ],
    'duration': [
      { type: 'required', message: 'Duration Is Required' }
    ]
  };
  // ==========================================================================================================================================
  constructor(public navCtrl: NavController, public navParams: NavParams, public Fb: FormBuilder, public alertCtrl: AlertController,
    public Toastr: ToastController, private api_service: Service) {
    this.FormInit();
    let value_item = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = value_item.id;
    this.id = navParams.get('id');
    if (this.id.dicount != null) {
      this.discount_ammt = this.id.dicount.percentage;
    }
    this.add_id = this.id.id.id;
    console.log(this.add_id);
    
    this.dura_type = this.id.id.duration;
    this.current_amount = this.id.id.cost;
    this.tax_ammt = this.id.tax;
    this.calculate(1)
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  FormInit = () => {
    this.AdvertiseForm = this.Fb.group({
      category_id: new FormControl(null),
      available_from_time: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      duration: new FormControl(1, Validators.required),
    });
  }
  get exposure(): FormControl { return this.AdvertiseForm.get('duration').value; }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertiseWithUsPage');
  }
  ngOnInit() {
    this.category_list();
    this.get_terms();
    this.order_status();
    this.language_header();
    this.language_field();
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
  // =================================================================================================================
  // CATEGORY LIST
  // ==========================
  category_list() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;
    this.api_service.post_data(this.categorylist_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        if (res == 'success') {
          this.api_service.stopLoader();
          this.categories = result.categories;
        } else {
          this.api_service.stopLoader();
        }
      }, (error) => {
        this.api_service.create(error, "top", "error");

        this.api_service.stopLoader();
      });
  }
  // =================================================================================================================
  // status LIST 
  // ==========================
  order_status() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.api_service.post_data(this.orderstatus_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        if (res == 'success') {
          this.api_service.stopLoader();
          this.order_status_list = result.data.banner_category;
          console.log(this.order_status_list);
         
        } else {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
        this.api_service.create(error, "top", "error");

          this.api_service.stopLoader();
        });
  }
  // =========================================================================================================================
  // GET TERMS
  // ======================
  get_terms() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.tc_type = 'advertisement';
    this.api_service.post_data(this.terms_condition_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        this.api_service.stopLoader();
        if (res == 'success') {
          // if (result.data != null) {
            this.term_condition = result.data;
            console.log(this.term_condition);
        }
            
          // }
        // } else {
        //   console.log(this.term_condition);
        // }
      }, (error) => {
        this.api_service.create(error, "top", "error");

        this.api_service.stopLoader();
      });
  }
  // ==============================================================================================================================
  submit()
  {
    console.log('submit');
    
    if (this.AdvertiseForm.valid) {
      this.data = {};
      this.data = this.AdvertiseForm.value
      this.data.api_token = this.api_service.api_token;
      this.data.banner_id = this.add_id;
      this.data.user_id = this.customer_id;
      this.data.duration_type = this.dura_type;
      this.data.tax_details = JSON.stringify(this.id.tax);
      this.data.percentage = JSON.stringify(this.id.tax);
      this.data.discount_details = JSON.stringify(this.id.dicount);
      this.data.discount = this.discount;
      this.data.tax = this.total_tax_amount;
      this.data.total = this.actual_price;
      this.data.ad_cost = this.amount;
      this.api_service.post_data(this.link_url, this.data)
        .subscribe((result: any) => {
          let res = result.status
          if (res == 'success') {
            this.api_service.stopLoader();
            this.api_service.create(result.message, 'top', 'success');
            this.navCtrl.setRoot('AdvertisePostPage');
          } else {
            this.api_service.stopLoader();
            this.api_service.create(result.message, 'top', 'error');
            this.err_mesg = result.errors.category_id;
            console.log(this.err_mesg);
            

          }
        }, (error) => {
        this.api_service.create(error, "top", "error");

          this.api_service.stopLoader();
        });
    } else {
      this.validateAllFormFields(this.AdvertiseForm);
    }
  }
  PostAd() {
    const confirm = this.alertCtrl.create({
      title: 'Terms and Conditions',
      message: this.term_condition.content,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('post');
            if (this.AdvertiseForm.valid) {
              this.data = {};
              this.data = this.AdvertiseForm.value
              this.data.api_token = this.api_service.api_token;
              this.data.banner_id = this.add_id;
              this.data.user_id = this.customer_id;
              this.data.duration_type = this.dura_type;
              this.data.tax_details = JSON.stringify(this.id.tax);
              this.data.percentage = JSON.stringify(this.id.tax);
              this.data.discount_details = JSON.stringify(this.id.dicount);
              this.data.discount = this.discount;
              this.data.tax = this.total_tax_amount;
              this.data.total = this.actual_price;
              this.data.ad_cost = this.amount;
              this.api_service.post_data(this.link_url, this.data)
                .subscribe((result: any) => {
                  let res = result.status
                  if (res == 'success') {
                    this.api_service.stopLoader();
                    this.api_service.create(result.message, 'top', 'success');
                    this.navCtrl.setRoot('AdvertisePostPage');
                  } else {
                    this.api_service.stopLoader();
                    this.api_service.create(result.message, 'top', 'error');
                    this.err_mesg = result.errors.category_id;
                  }
                }, (error) => {
                  this.api_service.create(error, "top", "error");

                  this.api_service.stopLoader();
                });
            } else {
              this.validateAllFormFields(this.AdvertiseForm);
            }
          }
        }
      ]
    });
    confirm.present();
  }
  // ================================================================================================================================
  // CALCULATE
  // =================
  calculate(number) {
    this.amount = this.current_amount * this.AdvertiseForm.value.duration;
    this.total_percentage = 0;
    this.total_tax_amount = 0;
    this.id.tax.forEach((element) => {
      console.log(element);      
      this.total_percentage = this.total_percentage + Number(element.percentage);
      console.log(this.total_percentage);
    });
   
    console.log(this.total_percentage);

    this.product_price = this.amount / ((this.total_percentage / 100) + 1);
    if (this.discount_ammt != 0 && this.discount_ammt != null) {
      this.discount = (this.discount_ammt / 100) * this.product_price;
      this.sales_price = this.product_price - this.discount;
    } else {
      this.sales_price = this.product_price;
    }
    console.log(this.discount);

    
    this.total_percentage = 0;
    this.total_tax_amount = 0;
    this.id.tax.forEach((element) => {
      element.percentage_amount = this.sales_price * (element.percentage / 100);
      this.total_percentage = this.total_percentage + Number(element.percentage);
      console.log(element.percentage_amount);
      
    });
    this.tax_percent = this.total_percentage / 100;
    this.actual_price = (this.tax_percent * this.sales_price) + this.sales_price;
    this.id.tax.forEach((element) => {
      this.total_tax_amount = this.total_tax_amount + element.percentage_amount;
    });
  }
  // ==========================================================================================================================================
  // VALIDATION METHOD
  // =============================
  validateAllFormFields(AdvertiseForm: FormGroup) {
    Object.keys(AdvertiseForm.controls).forEach(field => {
      const control = AdvertiseForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  // ==============================================================================================================================================

}
