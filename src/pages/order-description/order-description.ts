import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-order-description',
  templateUrl: 'order-description.html',
})
export class OrderDescriptionPage {
  orderId: any;
  customer_id: any
  orderid: any;
  type: any;
  imageUrl: string = this.api_service.API_URL_IMG;
  orderUrl: string;
  orderstatus_url = 'constant_status';
  order_status_list: any = {};
  orderDetail: object = {};
  img: any;
  primaryImages: any;
  secondImages: any;
  api_token: any;
  data: any;
  request_id: any;
  Satisfied_url: string = 'rework_status_update';
  pathType: string;
  renewalData: any;
  renewalUrl: string;
  InnerType: string;
  id: any;
  renewalDetail: object = {};
  costUrl: string;
  cost: any;
  payment_order_id: any;
  renewalprimaryImages: any;
  renewalrequest_url: string = 'renewal_request';
  renewal_type: any;
  categorylist_url: string = 'master_category_list';
  categories: any = [];
  table_name: any;
  active_url: string = 'status_change_orders';
  active_list: any = {};
  // *********************************
  post_status: any;
  ad_status: any;
  ad_incorrect_reffernumber: any;
  ad_payment_incorrect: any;
  ad_rework: any;
  ad_satisfied: any;
  post_status_due: any;
  post_incorrect_reffernumber: any;
  publish: any;
  renewal_status_payment: any;
  renewal_status_due: any;
  renewal_status_reff_incorrect: any;
  // *******************************************
  amount: any;
  actual_price: any;
  sales_price: any;
  discount: any;
  total_dis_amt: any;
  discount_ammt: any;
  tax_ammt: any = [];
  tax_detail: any;
  current_amount: any;
  total_percentage: any;
  total_tax_amount: any;
  total_amount: any;
  primaryid: any;
  discounnt: any;
  add_duraction: any;
  primary_id: any;
  product_price: any;
  tax_percent: any;
  actual_total:any;
  // ======================
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  code: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api_service: Service, public modalCtrl: ModalController) {
    let value_item = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = value_item.id;
    this.pathType = navParams.get('type');
    if (this.pathType == 'order') {
      this.orderId = navParams.get('id');
    } else {
      this.renewalData = navParams.get('renewal');
      this.InnerType = navParams.get('postAd');
    }
    if (this.orderId != undefined) {
      this.orderid = this.orderId.order_id;
      this.type = this.orderId.type;
      this.primary_id = this.orderId.id;
      this.getDetails();
    } else {
      this.getRenewalDetail();
    }
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  ionViewDidLoad() {
  }
  back_category() {
    this.navCtrl.pop();
  }
  ngOnInit() {
    this.order_status();
    this.language_field();
  }
// =============================================================================================================================================
// GET DETAILS
// ===========================
  getDetails = () => {
    const obj = {
      'api_token': this.api_service.api_token,
      'order_id': this.orderid,
      'user_id': this.customer_id,
      'type': this.type,
      'id': this.primary_id,
    }
    this.orderUrl = 'myorders_details';
    this.api_service.post_data(this.orderUrl, obj)
      .subscribe((result) => {
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.orderDetail = result.data;
          this.payment_order_id = result.data.order_id;
          this.request_id = result.data.ad_request_id;
        } else {
          this.api_service.stopLoader();
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');
      })
  }
  // ===================================================================================================================================================
  // PAGE NAVIGATIONS
  // ==============================
  imageView(img_data, cust_name) {
    const modal = this.modalCtrl.create('ImageviewerPage', { img_data: img_data, name: cust_name });
    modal.present();
  }
  Primary_image(image) {
    this.primaryImages = image;
  }
  second_image(image) {
    this.primaryImages = image;
  }
  renewal_primary_image(image) {
    this.renewalprimaryImages = image;
  }
  renewal_second_image(image) {
    this.renewalprimaryImages = image;
  }
  // ========================================================================================================================
  // SATTISFIED
  // ====================
  Satisfied() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.ad_status = 'published';
    this.data.ad_request_id = this.request_id;
    this.data.user_id = this.customer_id;
    this.api_service.post_data(this.Satisfied_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        if (res == 'success') {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'success');
          this.navCtrl.setRoot('MyOrdersPage');
        } else {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'error');
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
  }
  // =================================================================================================================================
  // REWORK
  // ===================
  Rework() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.ad_status = 'rework';
    this.data.ad_request_id = this.request_id;
    this.data.user_id = this.customer_id;
    this.api_service.post_data(this.Satisfied_url, this.data)
      .subscribe((result: any) => {
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'success');
          this.navCtrl.setRoot('MyOrdersPage');
        }  else {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'error');
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
  }
  payment(id, type, total_amount, due_amount) {
    let details = { id: id, types: type, Order_id: this.payment_order_id, total: total_amount, due_amt: due_amount }
    this.navCtrl.push('PaymentPage', { order_details: details });
  }
  // ==========================================================================
  // RENEWAL LIST
  // =========================
  getRenewalDetail = () => {
    this.renewalUrl = 'renewal_list'
    let obj: any;
    if (this.InnerType == 'post') {
      obj = {
        'api_token': this.api_service.api_token,
        'user_id': this.customer_id,
        'post_id': this.renewalData.id
      };
    } else {
      obj = {
        'api_token': this.api_service.api_token,
        'user_id': this.customer_id,
        'ad_id': this.renewalData.id
      };
    }
    this.api_service.post_data(this.renewalUrl, obj)
      .subscribe(result => {
        console.log(result);
        this.api_service.stopLoader();
        this.renewalDetail = result.data.data;
        this.actual_total = result.data.data.current_details.actual_total;
        this.table_name = result.data.data.table_name;
        this.primaryid = result.data.data.id;
        this.renewal_type = result.data.data.type;
        this.current_amount = result.data.data.cost;
        if (result.data.data.new_tax_list) {
          this.tax_ammt = result.data.data.new_tax_list;
        }
        else {
          this.tax_ammt = result.data.data.tax_details;
        }
        if (result.data.data.new_discount_list != null) {
          this.discount_ammt = result.data.data.new_discount_list.percentage;
          this.discounnt = result.data.data.new_discount_list;
        }
        this.calculate(1);
        this.add_duraction = 1;
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      })
  }
  // ========================================================================================================================================
  // CALCULATE
  // ===================
  calculate(number) {
    this.add_duraction = number;
    this.amount = this.current_amount * number;
    this.total_percentage = 0;
    this.total_tax_amount = 0;
    this.tax_ammt.forEach((element) => {
      this.total_percentage = this.total_percentage + Number(element.percentage);
    });
    this.product_price = this.amount / ((this.total_percentage / 100) + 1);
    if (this.discount_ammt != 0 && this.discount_ammt != null) {
      this.discount = (this.discount_ammt / 100) * this.product_price;
      this.sales_price = this.product_price - ((this.discount_ammt / 100) * this.product_price);
    } else {
      this.sales_price = this.product_price;
    }
    this.total_percentage = 0;
    this.total_tax_amount = 0;
    this.tax_ammt.forEach((element) => {
      element.percentage_amount = this.sales_price * (element.percentage / 100);
      this.total_percentage = this.total_percentage + Number(element.percentage);
    });
    this.tax_percent = this.total_percentage / 100;
    this.actual_price = (this.tax_percent * this.sales_price) + this.sales_price;
    this.tax_ammt.forEach((element) => {
      this.total_tax_amount = this.total_tax_amount + element.percentage_amount;
    });
  }
  // =====================================================================================
  // GET PAYMENT DETAIL FOR REQUEST
  // ====================================
  getData = () => {
    this.costUrl = 'post_form'
    const obj = {
      'api_token': this.api_service.api_token,
      'company_id': this.data.current_branch,
      'user_id': this.data.id,
    }
    this.api_service.post_data(this.costUrl, obj)
      .subscribe((result) => {
        this.api_service.stopLoader();
        this.cost = result.data
      }, error => { console.log(error); this.api_service.stopLoader(); })
  }
  // ===================================================================================
  //  category list
  // ===========================
  category_list() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.api_service.post_data(this.categorylist_url, this.data)
      .subscribe((result: any) => {
        this.api_service.stopLoader();
        let res = result.status
        if (res == 'success') {
          this.categories = result.data;
        }
        else {
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
  }
  // ===================================================================================
  // APPROVE FOR Renewal Request
  // ================================
  RenewalRequest(duration_type, id, type, duration) {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.user_id = this.customer_id;
    this.data.type = this.renewal_type;
    if (type == 'post') {
      this.data.duration = duration;
    }
    else {
      this.data.duration = this.add_duraction;
    }
    this.data.duration_type = duration_type;
    this.data.order_id = id;
    this.data.tax_list = JSON.stringify(this.tax_ammt);
    this.data.discount_details = this.discounnt;
    this.data.discount = this.discount;
    this.data.total =  this.actual_total;
    this.data.basic_cost = this.current_amount;
    this.data.table_name = this.table_name;
    this.data.tax = this.total_tax_amount;
    this.data.id = this.primaryid;
    this.api_service.post_data(this.renewalrequest_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        if (res == 'success') {
          this.api_service.stopLoader();
          this.navCtrl.push('RenewalPage');
        }
        else {
          this.api_service.stopLoader();
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
  }
  // ======================================================================================
  // ACTIVE IN ACTIVE BUTTON STATUS
  // ======================================
  active_button(number, type, id) {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.user_id = this.customer_id;
    this.data.type = type;
    this.data.id = id;
    this.data.status = number;
    this.api_service.post_data(this.active_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        if (res == 'success') {
          this.api_service.stopLoader();
          this.active_list = result.data;
        }
        else {
          this.api_service.stopLoader();
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
  }
  // =====================================================================================
  // SENT TO PAYMENT PAGE
  // ===============================
  paymentRenewal = (id, orid, total_amount, due_amount) => {
    let details = { id: id, types: 'renewal', Order_id: orid, total: total_amount, due_amt: due_amount }
    this.navCtrl.push('PaymentPage', { order_details: details });
  }
  // ======================================================================================
  // SENT TO order status change
  // =========================================
  order_status() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.api_service.post_data(this.orderstatus_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        if (res == 'success') {
          this.api_service.stopLoader();
          this.order_status_list = result.data;
          console.log(this.order_status_list);
          this.post_status = this.order_status_list.post_request_status.payment_pending;
          this.ad_status = this.order_status_list.ad_request_status.payment_pending;
          this.ad_incorrect_reffernumber = this.order_status_list.ad_request_status.payment_refno_invalid;
          this.ad_payment_incorrect = this.order_status_list.ad_request_status.payment_in_due;
          this.ad_rework = this.order_status_list.ad_request_status.rework;
          this.ad_satisfied = this.order_status_list.ad_request_status.published;
          this.post_status_due = this.order_status_list.post_request_status.payment_in_due;
          this.post_incorrect_reffernumber = this.order_status_list.post_request_status.payment_refno_invalid;
          this.publish = this.order_status_list.post_request_status.published;
          this.renewal_status_payment = this.order_status_list.renewal_status.payment_pending;
          this.renewal_status_due = this.order_status_list.renewal_status.payment_in_due;
          this.renewal_status_reff_incorrect = this.order_status_list.renewal_status.payment_refno_invalid;
        } else {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'error');
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
  }
  // =====================================================================================
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
