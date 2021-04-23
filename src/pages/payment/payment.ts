import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  orderId: any;
  value: any;
  id: any;
  type: any;
  paymentForm: FormGroup;
  api_token: any;
  data: any;
  customer_id: any;
  payment_url: string = 'post_payment';
  order_id: any;
  total: any;
  due_amount: any;
  paid_amount: any;
  error_mesg:any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  code: any;

  /// ===================================================================================================================================
  // VALIDATION MESSAGES
  // =====================
  validation_messages = {
    'amount': [
      { type: 'required', message: 'Amount is Required' }
    ],
    'reference_number': [
      { type: 'required', message: 'Reference number time is Required' }
    ],
    'description': [
      { type: 'required', message: 'Description is Required' }
    ]

  };
  // ========================================================================================================================================
  constructor(public navCtrl: NavController, public navParams: NavParams, public Fb: FormBuilder, public api_service: Service) {
    let value_item = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = value_item.id;
    this.value = this.navParams.get('order_details');
    this.id = this.value.id;
    this.type = this.value.types;
    this.order_id = this.value.Order_id;
    this.total = this.value.total;
    this.due_amount = this.value.due_amt;
    this.paid_amount = (this.total) - (this.due_amount);
    this.FormInit();
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  ionViewDidLoad() {
  }
  ngOnInit() {
     this.language_field();
  }
  // ==============================================================================================================================
  // FORM INITIATE
  // =======================
  FormInit = () => {
    this.paymentForm = this.Fb.group({
      amount: new FormControl(null, Validators.required),
      reference_number: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    })
  }
  // =======================================================================================================================================
  // PAYMENT SUBMIT
  // ==============================
  payment_submit() {
  if (this.paymentForm.valid) {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data = this.paymentForm.value
    this.data.api_token = this.api_token;
    this.data.user_id = this.customer_id;
    this.data.id = this.id;
    this.data.type = this.type;
    if(this.paymentForm.value.amount <= this.total){
    this.api_service.post_data(this.payment_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        if (res == "success") {
          this.api_service.stopLoader();
          if (this.data.type == 'post' || this.data.type == 'ad_request' || this.data.type == 'home_post')
          {
            this.navCtrl.setRoot('MyOrdersPage');

          }
          else{
            this.navCtrl.setRoot('RenewalPage');
          }
         }
        else {
          this.api_service.stopLoader();
          this.error_mesg = result.errors.reference_number[0];
          // this.error_mesg = result.status;
          console.log(this.error_mesg);
          
        }
      },(error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
    }
    else{
      this.api_service.create("Price Amount Should Not Be Greater Than Total Price", 'top', 'error');

    }
    } else {
      this.validateAllFormFields(this.paymentForm);
    }
  }
  // ==============================================================================================================================================
  // VALIDATION METHOD
  // =============================
  validateAllFormFields(paymentForm: FormGroup) {
    Object.keys(paymentForm.controls).forEach(field => {
      const control = paymentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  // ==================================================================================================================================
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
