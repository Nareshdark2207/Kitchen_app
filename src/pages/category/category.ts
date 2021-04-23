import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, Events } from 'ionic-angular';
import { Service } from '../../app/service';
import { DatePipe } from '@angular/common';
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  public show: boolean = false;
  public buttonName: any = 'Show';
  selectOptions: any;
  postListUrl: string;
  postList: any = [];
  area: any = 0;
  data: any;
  api_token: any;
  catId: any;
  cat: any;
  cat_slider: string = 'home_slider';
  img: any;
  imageUrl: string = this.service.API_URL_IMG;
  home_slider: string = 'home_slider';
  slider: any;
  speed: any;
  singleImage: any;
  // AREA LIST
  areaUrl: string;
  areaList: any = [];
  code: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service, public datePipe: DatePipe,
    public alertCtrl: AlertController, public events: Events) {
    this.selectOptions = {
      title: 'Select Area',
    };
    if (localStorage.getItem('eastern_deals') != null && localStorage.getItem('eastern_deals') != undefined) {
      this.data = JSON.parse(localStorage.getItem('eastern_deals'))
    }
    this.cat = navParams.get('categoty_details');
    this.catId = this.cat.id;
    this.img = this.service.API_URL_IMG;
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
    this.getBasicData();
    this.getCategoryList(this.current_page_no);
    this.homeslider();
    this.language_field();
  }
  ionViewDidLoad() {
  }
  ionViewDidEnter() {
    this.events.publish('fabhide:created', true);
  }
  ionViewWillLeave() {
    this.events.publish('fabhide:created', false);
  }
  // ======================================================================================================================
  // GET BASIC DATA
  // ==========================
  getBasicData = () => {
    // AREA LIST
    // ===============
    this.areaUrl = 'area_list';
    this.service.get_list(this.areaUrl + '?api_token=' + this.service.api_token + '&lang_code=' + this.code)
      .subscribe((result: any) => {
        this.service.stopLoader();
        result.data.unshift({ id: 0, 'area_name': 'All' })
        this.areaList = result.data;
      }, (error: any) => {
        this.service.create(error, 'top', 'error');
        this.service.stopLoader();
      })
  }
  // ===========================================================================================================================
  // AREA SELECTED
  // =====================
  areaSelect = (event: any) => {
    if (event != 0) {
      this.area = event;
    }
    this.postList = [];
    this.getCategoryList(this.current_page_no);
  }
  // ============================================================================================================================
  // GET CATEGORY LIST
  // ============================
  showEndPage;
  current_page_no: any = 1;
  postdata:any;
  getCategoryList = (page_no) => {
     
    this.postListUrl = 'post_list';
    let postListapi = this.postListUrl + '?api_token=' + this.service.api_token;
    postListapi += '&category=' + this.catId;
    postListapi += '&date=' + this.datePipe.transform(new Date(), 'yyyy/MM/dd');
    postListapi += '&lang_code=' + this.code;
    postListapi += '&page=' + page_no;
    postListapi += '&limit=' + 6;
    if (this.area != null && this.area != 0) {
      // obj.area = this.area;
      postListapi += '&area=' + this.area;
    }
    this.service.get_list(postListapi)
      .subscribe((result) => {
        if (result.status == 'success') {
          // this.service.stopLoader();
          this.postdata = result.data;
          if (this.postdata && this.postdata.length == 0) {
            this.showEndPage = true;
          } else {
            this.showEndPage = false;
          }
          this.postList = this.postList.concat(this.postdata);
        } else {
          this.service.create(JSON.stringify(result), 'top', 'error');
          // this.service.stopLoader();
        }
      }, (error) => {
        // this.service.stopLoader();
        this.service.create(error, 'top', 'error');
      })
  }
  // =====================================================================================================================
  // PULL TO REFRESH
  // ============================
  // doRefresh(refresher) {
  //   this.current_page_no = 1;
  //   this.events.publish('refresher:enabled', true);
  //   this.postList = [];
  //   this.getCategoryList(this.current_page_no);
  //   setTimeout(() => {
  //     refresher.complete();
  //   }, 2000);
  // }
  reActiveInfinite: any;
  doInfinite(infiniteScroll) {
    if (this.postdata && this.postdata.length == 0) {
      this.showEndPage = true;
      infiniteScroll.enable(false);
    } else {
      setTimeout(() => {
        this.current_page_no = this.current_page_no + 1;
        this.showEndPage = false;
        this.getCategoryList(this.current_page_no);
        infiniteScroll.complete();
        this.reActiveInfinite = infiniteScroll;
      }, 1000);
    }
  }
  doRefresh(refresher) {
    this.current_page_no = 1;
    if (this.reActiveInfinite) {
      this.reActiveInfinite.enable(true);
    }
    this.postList = [];
    this.getCategoryList(this.current_page_no);
    this.events.publish('refresher:enabled', true);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  // =====================================================================================================================
  toggle() {
    this.show = !this.show;
  }
  description(id: any) {
    this.navCtrl.push('DescriptionPage', { id: id });
  }
  // =======================================================================================================================
  // HOME SLIDER
  // ======================
  homeslider() {
    this.service.get_list(this.cat_slider + '?api_token=' + this.service.api_token + '&slider_name=5&category_id=' + this.catId).subscribe((result: any) => {
      this.service.stopLoader();
      this.slider = result.data;
      console.log(this.slider);
      this.speed = result.speed;
    }, (error) => {
      this.service.create(error, 'top', 'error');
      this.service.stopLoader();
    });
  }
  language_field() {
    this.data = {};
    this.api_token = this.service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;

    this.service.post_data(this.language_field_url, this.data)
      .subscribe((result: any) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          this.service.stopLoader();
          this.languagefield = result.field_list;
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
}
// class Category {
//   api_token: any;
//   category: any;
//   area?: any;
//   date: any;
//   customer?: any;
//   lang_code: any;
//   page:any;
//   limit:any;
// }