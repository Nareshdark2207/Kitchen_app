import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events, ModalController } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { Service } from '../../app/service';
import { CartModalPage } from '../cart-modal/cart-modal';

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {
  cart = [];
  products = [];
  public show_1: boolean = false;
  public buttonName: any = 'Show_1';
  show: any;
  more: any;
  list: any;
  category_count: any = 6;
  current_page_no: any = 1;
  showEndPage: any;
  api_token: any;
  data: any;
  categorylist_url: string = 'master_category_list';
  homePost: any;
  homePostUrl1: string = 'gethomejson';
  home_data: any;
  home_slider: string = 'home_slider';
  categories: any = [];
  languagelist_url: string = 'language_list';
  languagelist: any;
  homePagePostAndAd: any = [];
  icon_img: any;
  inital_list_count: any;
  selectOptions: any;
  slider: any = [];
  speed: any;
  horizontal: any = [];
  vertical: any = [];
  img: string;
  count: number;
  value: any;
  userId1: any;
  totalcount: any;
  horI: number;
  verI: number;
  adCount: number;
  lastupdate: string;
  reActiveInfinite: any;
  catId: any;
  // homeTitle:AudioNode;
  homeTitle: any;
  lang_code_1: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};

// Category Types
  specialdishes = [];
  todayspecial = [];
  offers = [];
  cuisine = [];
  happyeats = [];
  addfoods = [];
  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  show_cartlist: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private api_service: Service, public events: Events,  public modalCtrl: ModalController) {
    if (localStorage.getItem('eastern_deals')) {
      let value_item = JSON.parse(localStorage.getItem('eastern_deals'));
      this.userId1 = value_item.id;
      console.log(this.userId1);

    } else {
      this.value = 0;
    }
    this.events.publish('fabhide:created', true);
    // let code = localStorage.getItem('lang_code');
    if (localStorage.getItem('lang_code') == 'null' || localStorage.getItem('lang_code') == null || localStorage.getItem('lang_code') == undefined) {
      localStorage.setItem('lang_code', 'en');
      this.lang_code_1 = localStorage.getItem('lang_code');
      console.log(this.lang_code_1);

    } else {
      this.events.subscribe('menu:created', (data) => {
        console.log(data);
        this.lang_code_1 = data;

      })
      this.lang_code_1 = localStorage.getItem('lang_code');
      console.log(this.lang_code_1);
    }


    this.selectOptions = {
      title: 'Select Area',
    };
    events.subscribe('created', () => {
      // this.homead();
      this.ngOnInit();
    });
  }
  ionViewDidLoad() {
    this.show = true;
  }
  ionViewWillEnter() {
    this.events.publish('fabhide:created', true);
  }
  ionViewWillLeave() {
    this.events.publish('fabhide:created', false);
  }
  search() {
    this.show_1 = !this.show_1;
  }
  ngOnInit() {
    this.cartItemCount = this.getCartItemCount();
    //special dishes
    this.specialdishes = [
      {
        foodImage: '/assets/imgs/1.jpeg',
        foodName: ' Panner Butter Masala ',
        foodSubName: 'In Gravy, Panner',
        location: ' Vetri Restaurant',
        amount: 120,
        reviewPoints: '4',
        id: '1',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/2.jpeg',
        foodName: ' Gobi Manchurian',
        foodSubName: 'In Gravy, Dry',
        location: ' Samco Restaurant',
        amount: 180,
        reviewPoints: '4',
        quantity: 0,
        id: '2'
      },
      {
        foodImage: '/assets/imgs/3.jpeg',
        foodName: ' Cheese Pasta ',
        foodSubName: 'In Gravy, Pasta',
        location: ' Sowmyas Restaurant',
        amount: 200,
        reviewPoints: '4',
        id: '3',
        quantity: 0
      }, {
        foodImage: '/assets/imgs/2.jpeg',
        foodName: ' Gobi Manchurian ',
        foodSubName: 'In Gravy, Dry',
        location: ' Vetri Restaurant',
        amount: 180,
        reviewPoints: '4',
        id: '4',
        quantity: 0
      }
    ],
     //cuisines
    this.cuisine = [
      {
        foodImage: '/assets/imgs/green-peas-chapatti.jpg',
        foodName: ' Green Peas Chappati ',
        foodSubName: 'Chappati, Masala',
        location: ' Sowmiyas Restaurant',
        amount: 120,
        reviewPoints: '4',
        id: '1',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Masala Dosa.png',
        foodName: ' Masala Dosa',
        foodSubName: 'In Cusine, Dosa',
        location: ' Samco Restaurant',
        amount: 180,
        reviewPoints: '4',
        quantity: 0,
        id: '2'
      },
      {
        foodImage: '/assets/imgs/Kuzhi-Paniyaram.jpg',
        foodName: ' Kuzhi-Paniyaram',
        foodSubName: 'In Cusine, Dry',
        location: ' Sowmyas Restaurant',
        amount: 200,
        reviewPoints: '4',
        id: '3',
        quantity: 0
      }, {
        foodImage: '/assets/imgs/Chappati.jpg',
        foodName: ' Chappati ',
        foodSubName: 'In Cusine, Dry',
        location: ' Vetri Restaurant',
        amount: 180,
        reviewPoints: '4',
        id: '4',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Poori.jpg',
        foodName: ' Potato Curry With Poori ',
        foodSubName: 'In Cusine, Poori',
        location: ' Vetri Restaurant',
        amount: 180,
        reviewPoints: '4',
        id: '5',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Idly.jpg',
        foodName: ' Idly ',
        foodSubName: 'In Cusine, Idly',
        location: ' Vetri Restaurant',
        amount: 180,
        reviewPoints: '4',
        id: '6',
        quantity: 0
      }
    ],
    //todayspecial
    this.todayspecial = [
      {
        foodImage: '/assets/imgs/breakfast.png',
        foodName: ' Breakfast ',
        id:1,
        url: 'BreakfastPage'

      },
      {
        foodImage: '/assets/imgs/meal.png',
        foodName: ' Lunch ',
        id:2,
        url: 'LunchPage'
      },
      {
        foodImage: '/assets/imgs/snacks.png',
        foodName: ' Snacks ',
        id:3,
        url: 'SnacksPage'
      },
      {
        foodImage: '/assets/imgs/dinner.png',
        foodName: ' Dinner ',
        id:4,
        url: 'DinnerPage'
      }
    ],
     //offers
    this.offers = [
      {
        slideImage: '/assets/imgs/s1.jpeg',
      },
      {
        slideImage: '/assets/imgs/s2.jpeg',
      },
      {
        slideImage: '/assets/imgs/s3.jpeg',
      },
      {
        slideImage: '/assets/imgs/s4.jpeg',
      }
    ],
     //Eats what makes you happy
     this.happyeats = [
      {
        circleImage: '/assets/imgs/healthy.jpeg',
        ImageName:  'Healthy'
      },
      {
        circleImage: '/assets/imgs/rolls.png',
        ImageName:  'Rolls'
      },
      {
        circleImage: '/assets/imgs/sweets.png',
        ImageName:  'Sweets'
      },
      {
        circleImage: '/assets/imgs/chats.png',
        ImageName:  'Chaats'
      },
      {
        circleImage: '/assets/imgs/Cakes.png',
        ImageName:  'Cakes'
      },
      {
        circleImage: '/assets/imgs/pizza.png',
        ImageName:  'Pizzas'
      },
      {
        circleImage: '/assets/imgs/shakes.png',
        ImageName:  'Shakes'
      },
      {
        circleImage: '/assets/imgs/pasta.png',
        ImageName:  'Pasta'
      },
    ]

    // this.inital_list_count = '7';
    this.homePost = [];
    this.horI = 0;
    this.verI = 0;
    this.adCount = 0;
    this.lastupdate = 'hor';
    // this.homead();
    this.category_list(this.inital_list_count, this.lang_code_1);
    this.getList(this.lang_code_1, this.current_page_no);
    this.homeslider();
    this.language_field();
    this.showEndPage = false;
    this.viewersCountAdd();
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  public getTotal() {
    return this.totalAmount;
  }

// special dishes starts

  addFood(selectFood) {
    this.specialdishes.forEach(d => {
      if (selectFood.id === d.id) {
        d.quantity = d.quantity + 1
        if (d.quantity === 1) {
          this.addfoods.push(selectFood);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
        this.totalAmount.next(this.totalAmount.value + d.amount)

        this.addfoods.forEach(element => {
        });
      }
    });
  }
  removeFood(removeFood) {
    this.specialdishes.forEach((r, i) => {
      if (removeFood.id === r.id) {
        r.quantity = r.quantity - 1;
        if (r.quantity === 0) {
          this.addfoods.forEach(el => {
            if (r._id === el._id) {
              this.addfoods.splice(i, 1);
            }
          });
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
        this.totalAmount.next(this.totalAmount.value - r.amount)
      }
    });
  }

// special dishes starts

// Best Cusine starts

  IncreaseFood(selectFood) {
    this.cuisine.forEach(d => {
      if (selectFood.id === d.id) {
        d.quantity = d.quantity + 1
        if (d.quantity === 1) {
          this.addfoods.push(selectFood);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
        this.totalAmount.next(this.totalAmount.value + d.amount)

        this.addfoods.forEach(element => {
        });
      }
    });
  }
  DecreaseFood(removeFood) {
    this.cuisine.forEach((r, i) => {
      if (removeFood.id === r.id) {
        r.quantity = r.quantity - 1;
        if (r.quantity === 0) {
          this.addfoods.forEach(el => {
            if (r._id === el._id) {
              this.addfoods.splice(i, 1);
            }
          });
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
        this.totalAmount.next(this.totalAmount.value - r.amount)
      }
    });
  }

  // Best Cusine ends

  open_cart() {

    const modal = this.modalCtrl.create(CartModalPage,{data:this.addfoods,total:this.getTotal()});
    modal.present();
    console.log('addfoods',this.addfoods);
  }
  dismiss() {
    this.navCtrl.pop();

  }

navigatedishes(t){
  console.log('t', t);
  // this.navCtrl.push('BreakfastPage');

      this.navCtrl.push(t.url);
    
}
  language_code(code) {
    console.log(code);

    localStorage.setItem('lang_code', code);
    this.events.publish('menu:created', code);
    this.ngOnInit();

  }
  // ===================================================================================================================
  // GET CATEGORY LIST
  // ===========================
  category_list(inital_list_count: any, code) {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    if (inital_list_count != undefined) {
      this.data.inital_list_count = inital_list_count;
    }
    this.data.lang_code = code;
    this.api_service.post_data(this.categorylist_url, this.data)
      .subscribe((result: any) => {
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.categories = result.data;
          this.totalcount = 4;
          this.icon_img = this.api_service.API_URL_IMG;
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
  // ======================================================================================================
  // ===================================================================================================================
  // GET language LIST
  // ===========================
  language_field() {

    this.api_service.get_list(this.language_field_url + '?api_token=' + this.api_service.api_token + '&lang_code=' + this.lang_code_1).subscribe((result: any) => {
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

  // ======================================================================================================
  more_category() {
    this.show = false;
    this.more = true;
    this.totalcount = 100;
  }
  more_category_1() {
    this.show = true;
    this.more = false;
    this.totalcount = 7;
  }
  // ========================================================================================================================================================
  // POST DATA
  // ==================
  getList = (code, page_no) => {


    let homepageapi = this.homePostUrl1 + '?api_token=' + this.api_service.api_token;
    homepageapi += '&user_id=' + this.userId1;
    homepageapi += '&lang_code=' + code;
    homepageapi += '&items_per_page=' + this.category_count;
    homepageapi += '&current_page_no=' + page_no;
    this.api_service.get_list(homepageapi)
      .subscribe((result) => {
        console.log(result);
        if (result.status == 'success') {
          this.img = this.api_service.API_URL_IMG;
          this.home_data = result.data;
          if (this.home_data.length == 0) {
            this.showEndPage = true;
          } else {
            this.showEndPage = false;
          }
          this.homePost = this.homePost.concat(this.home_data);

          if (result.home_header != null) {
            this.homeTitle = result.home_header;
          } else {
            this.homeTitle = { home_category: "Recent Post" }
            console.log('home header is null');
          }
          this.count = result.notiification_count;

        } else {
          this.api_service.create(JSON.stringify(result), 'top', 'error');

        }
      }, (error) => {

        this.api_service.create(error, 'top', 'error');
      })
  }

  index: any
  length: any

  // ==================================================================================================================================
  // NAVIGATION FUNCTIONS
  // =========================
  // NOTIFICATION
  notification() {
    this.navCtrl.push('NotificationPage');
  }
  // onclick(){
  //   this.navCtrl.push('ReviewPage');
  // }

  //SEARCHBAR
  seachbar() {
    this.navCtrl.push('SearchPage');
  }

  //BREAKFAST
  onBreakfast() {
    this.navCtrl.push('BreakfastPage');
  }
  //LUNCH
  onLunch() {
    this.navCtrl.push('LunchPage');
  }
  //HEALTHY
  onHealthy() {
    this.navCtrl.push('HealthyPage');
  }
  //Special dishes view all
  dishesview(){
    this.navCtrl.push('DishViewallPage');
  }
  //Best Cusine View all
  cuisineview(){
    this.navCtrl.push('CuisineViewallPage');
  }


  // DESCRIPTION
  description(id: any) {
    this.navCtrl.push('DescriptionPage', { id: id });
  }
  // CATEGORY
  category = (id, category) => {
    let details = { id: id, category_name: category };
    this.navCtrl.push('CategoryPage', { categoty_details: details });
  }
  // ================================================================================================================================================================
  // HOME SLIDER
  // ======================
  homeslider() {
    this.api_service.get_list(this.home_slider + '?api_token=' + this.api_service.api_token + '&slider_name= 1').subscribe((result: any) => {
      if (result) {
        this.slider = result.data;
        this.speed = result.speed;
        this.img = this.api_service.API_URL_IMG;
      }
    }, (error) => {
      this.api_service.create(error, 'top', 'error');
    });
  }
  doInfinite(infiniteScroll) {
    if (this.home_data.length == 0) {
      // this.category_count = this.home_data.length;
      this.showEndPage = true;
      infiniteScroll.enable(false);
    } else {
      setTimeout(() => {
        this.current_page_no = this.current_page_no + 1;
        this.showEndPage = false;
        this.getList(this.lang_code_1, this.current_page_no);
        infiniteScroll.complete();
        this.reActiveInfinite = infiniteScroll;
      }, 1000);
    }

  }
  // ===============================================================================================================================================
  // DO REFRESH
  // ===================
  doRefresh(refresher) {
    this.current_page_no = 1;
    if (this.reActiveInfinite) {
      this.reActiveInfinite.enable(true);
    }
    this.events.publish('refresher:enabled', true);
    this.homePagePostAndAd = [];
    console.log(this.homePagePostAndAd);
    this.ngOnInit();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  // ====================================================================================================================================================

  viewersCountAdd() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.count = 1;
    let api = 'add_viewcount' + '?api_token=' + this.api_service.api_token;
    this.api_service.post_data(api, this.data)
      .subscribe((result: any) => {
        console.log('updated view count' + result.data.slug_value)
        this.events.publish('visitors:count', result.data.slug_value);
      },
        (error) => {
          this.api_service.create(error, 'top', 'error');
        });
  }
}


