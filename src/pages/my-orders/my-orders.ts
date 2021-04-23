import { Component , ViewChild} from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, Events ,Content} from 'ionic-angular';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrdersPage {
  @ViewChild(Content) content: Content; 
  public show: boolean = false;
  public buttonName: any = 'Show';
  customer_id: any;
  api_token: any;
  data: any;
  order_list_url: string = 'myorders_list';
  order_list: any = [];
  icon_img: any;
  imageUrl: string = this.api_service.API_URL_IMG;
  fromdate: any;
  todate: any;
  limit: any;
  page: any;
  showEndPage: any;
  reActiveInfinite: any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  code:any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_service: Service, private datePipe: DatePipe, private events: Events) {
    let value_item = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = value_item.id;
    this.page = 1;
    this.limit = 7;
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  ionViewDidLoad() {
  }
  // ORDER DESCRIPTION PAGE
  // ====================================
  order_description(list: any) {
    if (list.order_id) {
      this.navCtrl.push('OrderDescriptionPage', { id: list, type: 'order' });
    }
  }
  // =============================================================================================================================================================
  // SEARCH
  // =================
  search() {
    this.show = !this.show;
    this.fromdate = undefined;
    this.todate = undefined;

    setTimeout(() => {
      this.content.resize();
  }, 80);

  }
  // ================================================================================================================================================================
  ngOnInit() {
    this.showEndPage = false;
    this.myorder_list(null, null);
    this.language_header();
    this.language_field();
  }
  // ================================================================================================================================================================
  // FROM DATE CHANGES
  // =======================
  onChange(from_date: any) {
    if (from_date) {
      this.fromdate = this.datePipe.transform(from_date, 'yyyy-MM-dd');
    }
  }
  // ================================================================================================================================================================
  // TO DATE CHANGES
  // =============================
  onChange2(to_date: any) {
    if (to_date) {
      this.todate = this.datePipe.transform(to_date, 'yyyy-MM-dd');
    }
  }
  // ==================================================================================================================================================================
  // FILTER
  // ==============
  filter() {
    if (this.fromdate != undefined && this.todate != undefined) {
      this.myorder_list(this.fromdate, this.todate);
    } else {
      this.api_service.create('Please Select the Valid Date', 'bottom', 'error');
    }
  }
  // =========================================================================================================================================
  // DO REFRESH
  // =====================
  doRefresh(refresher) {
    this.page = 1;
    this.limit = 7;
    if(this.reActiveInfinite){
      this.reActiveInfinite.enable(true);

    }
    this.events.publish("refresher:enabled", true);
    this.showEndPage = false;
    this.myorder_list(null, null);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  // ============================================================================================================================================
  // MY ORDER LIST
  // ===========================
  myorder_list(fromdate: any, todate: any) {
    this.showEndPage = false;
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.user_id = this.customer_id;
    this.data.page = this.page;
    this.data.limit = this.limit;
    if (fromdate != null) {
      this.data.from_date = fromdate;
    }
    if (todate != null) {
      this.data.to_date = todate;
    }
    this.api_service.post_data(this.order_list_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        this.api_service.stopLoader();
        if (res == 'success') {
          this.order_list = result.data;
          this.icon_img = this.api_service.API_URL_IMG;
        } else {
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');
      });
  }
  // ====================================================================================================================================
  // INFINITE SCROLL
  // =========================
  doInfinite(infiniteScroll) {
    this.reActiveInfinite = infiniteScroll;
    this.events.publish('refresher:enabled', true);
    this.page += 1;
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.user_id = this.customer_id;
    this.data.page = this.page;
    this.data.limit = this.limit;
    this.api_service.post_data(this.order_list_url, this.data)
      .subscribe((result: any) => {
        setTimeout(() => {
          if (result.status == 'success') {
            this.api_service.stopLoader();
            let posts = result.data;
            this.order_list = this.order_list.concat(posts);
            this.icon_img = this.api_service.API_URL_IMG;
            infiniteScroll.complete();
            if (result.data.length == 0) {
              this.showEndPage = true;
              infiniteScroll.enable(false);
            } else {
              this.showEndPage = false;
            }
          } else {
            this.api_service.stopLoader();
          }
        }, 500);
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');
      });
  }
  //  =================================================================================================================
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
          console.log(this.languageheader.my_orders);

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
