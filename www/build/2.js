webpackJsonp([2],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function() { return HomepagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage__ = __webpack_require__(879);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomepagePageModule = /** @class */ (function () {
    function HomepagePageModule() {
    }
    HomepagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__homepage__["a" /* HomepagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homepage__["a" /* HomepagePage */]),
            ],
            entryComponents: [],
        })
    ], HomepagePageModule);
    return HomepagePageModule;
}());

//# sourceMappingURL=homepage.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CartModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartModalPage = /** @class */ (function () {
    function CartModalPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.addfoods = [];
        this.cartItemCount = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
        this.totalAmount = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
        // setTimeout(() => {
        this.cart = this.navParams.get('data');
        console.log('CartModalPage', this.cart);
        // }, 500);
        this.PaymentAlertOpts = {
            title: 'Select Payment Method',
        };
    }
    CartModalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cart.forEach(function (element) {
            _this.totalAmount.next(_this.totalAmount.value + element.amount);
        });
        this.getTotal();
        console.log("getTotal", this.getTotal());
    };
    CartModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartModalPage');
    };
    CartModalPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    CartModalPage.prototype.getCartItemCount = function () {
        return this.cartItemCount;
    };
    CartModalPage.prototype.getTotal = function () {
        return this.totalAmount;
    };
    // special dishes starts
    CartModalPage.prototype.addFood = function (selectFood) {
        var _this = this;
        this.cart.forEach(function (d) {
            if (selectFood.id === d.id) {
                d.quantity = d.quantity + 1;
                if (d.quantity === 1) {
                    _this.addfoods.push(selectFood);
                }
                _this.cartItemCount.next(_this.cartItemCount.value + 1);
                _this.totalAmount.next(_this.totalAmount.value + d.amount);
                _this.addfoods.forEach(function (element) {
                });
            }
        });
    };
    CartModalPage.prototype.removeFood = function (removeFood) {
        var _this = this;
        this.cart.forEach(function (r, i) {
            if (removeFood.id === r.id) {
                r.quantity = r.quantity - 1;
                if (r.quantity === 0) {
                    _this.addfoods.forEach(function (el) {
                        if (r._id === el._id) {
                            _this.addfoods.splice(i, 1);
                        }
                    });
                }
                _this.cartItemCount.next(_this.cartItemCount.value - 1);
                _this.totalAmount.next(_this.totalAmount.value - r.amount);
            }
        });
    };
    CartModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart-modal',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/cart-modal/cart-modal.html"*/'<!--\n  Generated template for the CartModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n <ion-header>\n  <ion-toolbar>\n    <ion-title >\n     View Cart\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close" slot="start"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n \n  <div class="ion-padding">\n\n      <!-- <div *ngFor="let c of cart; let i = index" class="cards box" style="margin-left:1rem;">\n         <img class="card-img-top slide-image" [src]="c.foodImage" alt="Card image cap">\n        <ion-row align-items-start>\n          <ion-col col-8>\n            <div class="subtitle" style="font-size: 12px; font-weight:600;"> {{c.foodName}} </div>\n            <div style="font-size: 10px; color:rgb(146 146 146); margin-right:5rem;">{{c.foodSubName}}</div>\n            <div class="subtitle" style="font-size: 12px; font-weight:600; margin-right:5.5rem;"> &#8377;{{c.amount}} </div>\n          </ion-col>\n          <ion-col col-4>\n            <div style="font-size: 12px; font-weight:600;margin-left: 2rem;" class="btn btn-add">\n              <ion-icon *ngIf="c.quantity > 0" name="remove" (click)="rmFood(c)"></ion-icon> ADD \n              <span *ngIf="c.quantity > 0">{{c.quantity}}</span>\n              <ion-icon (click)="adFood(c)" name="add"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row> -->\n\n        <div *ngFor="let c of cart; let i = index" class="card rating">\n            <ion-row justify-content-between>\n              <ion-col col-3>\n                <div>\n                  <img class="card-img" [src]="c.foodImage" alt="Card image cap" style="margin-left: 0.6rem; border-radius: 5px;">\n                </div>\n                <div class="close-btn" >\n                  <ion-icon mode="md" style="font-size: 14px; margin: 3px 6px 3px;" name="close"></ion-icon>\n                </div>\n              </ion-col>\n              <ion-col col-5>\n                  <div class="subtitle" style="font-weight: bold;">{{c.foodName}} </div>\n                  <div style="font-size: 10px; color:rgb(128, 128, 128); margin-right:2.5rem;">{{c.foodSubName}} </div>\n                  <div style="font-size: 10px; line-height: 2.2rem;">&#8377;{{c.amount}} </div>\n              </ion-col>\n              <ion-col col-4>\n                <div style="font-size: 12px; font-weight:600;margin-left: 2rem;" class="btn btn-add">\n                  <ion-icon *ngIf="c.quantity > 0" name="remove" (click)="removeFood(c)"></ion-icon> ADD \n                  <span *ngIf="c.quantity > 0">{{c.quantity}}</span>\n                  <ion-icon (click)="addFood(c)" name="add"></ion-icon>\n                </div>\n\n              </ion-col>\n            </ion-row>\n        </div>\n\n\n    <ion-grid>\n      <ion-row align-self-start>\n        <ion-col >\n          Item Total\n        </ion-col>\n        <ion-col offset-4>\n          &#8377; {{ getTotal() | async}}\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-between>\n        <ion-col >\n          Delivery Charge\n        </ion-col>\n        <ion-col offset-4>\n          &#8377; 30\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-between>\n        <ion-col>\n         Taxes & Charge\n        </ion-col>\n        <ion-col offset-4>\n          &#8377; 20.88\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-between>\n        <ion-col>\n         Grand Total\n        </ion-col>\n        <ion-col offset-4>\n          &#8377; 470.88\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n    <ion-footer no-border>\n      <ion-toolbar>\n        <div style="display: flex; width: -webkit-fill-available; align-items: center;">\n              <ion-select mode="wp" [(ngModel)]="Payment" placeholder="Select Payment Method" [selectOptions]="PaymentAlertOpts">\n                <ion-option mode="wp"value="gpay">Google Pay</ion-option>\n                <ion-option mode="wp"value="wallet">Wallet</ion-option>\n                <ion-option mode="wp" value="cod">Cash On Delivery</ion-option>\n              </ion-select>\n          <div>\n            <ion-buttons class="placeorder" end>\n              <button ion-button end icon-only  style="font-size: 12px; color:#fff; font-weight: 600; text-align:end; cursor:pointer;  font-family:\'poppins\', sans-serif;">\n                Place Order <ion-icon name="md-arrow-dropright" class="viewcart" end></ion-icon>\n              </button>\n            </ion-buttons>\n          </div>\n        </div>\n      </ion-toolbar>\n    </ion-footer>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/cart-modal/cart-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], CartModalPage);
    return CartModalPage;
}());

//# sourceMappingURL=cart-modal.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_modal_cart_modal__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomepagePage = /** @class */ (function () {
    function HomepagePage(navCtrl, navParams, menuCtrl, api_service, events, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.api_service = api_service;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.products = [];
        this.show_1 = false;
        this.buttonName = 'Show_1';
        this.category_count = 6;
        this.current_page_no = 1;
        this.categorylist_url = 'master_category_list';
        this.homePostUrl1 = 'gethomejson';
        this.home_slider = 'home_slider';
        this.categories = [];
        this.languagelist_url = 'language_list';
        this.homePagePostAndAd = [];
        this.slider = [];
        this.horizontal = [];
        this.vertical = [];
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // Category Types
        this.specialdishes = [];
        this.todayspecial = [];
        this.offers = [];
        this.cuisine = [];
        this.happyeats = [];
        this.addfoods = [];
        this.cartItemCount = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
        this.totalAmount = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
        // ========================================================================================================================================================
        // POST DATA
        // ==================
        this.getList = function (code, page_no) {
            var homepageapi = _this.homePostUrl1 + '?api_token=' + _this.api_service.api_token;
            homepageapi += '&user_id=' + _this.userId1;
            homepageapi += '&lang_code=' + code;
            homepageapi += '&items_per_page=' + _this.category_count;
            homepageapi += '&current_page_no=' + page_no;
            _this.api_service.get_list(homepageapi)
                .subscribe(function (result) {
                console.log(result);
                if (result.status == 'success') {
                    _this.img = _this.api_service.API_URL_IMG;
                    _this.home_data = result.data;
                    if (_this.home_data.length == 0) {
                        _this.showEndPage = true;
                    }
                    else {
                        _this.showEndPage = false;
                    }
                    _this.homePost = _this.homePost.concat(_this.home_data);
                    if (result.home_header != null) {
                        _this.homeTitle = result.home_header;
                    }
                    else {
                        _this.homeTitle = { home_category: "Recent Post" };
                        console.log('home header is null');
                    }
                    _this.count = result.notiification_count;
                }
                else {
                    _this.api_service.create(JSON.stringify(result), 'top', 'error');
                }
            }, function (error) {
                _this.api_service.create(error, 'top', 'error');
            });
        };
        // CATEGORY
        this.category = function (id, category) {
            var details = { id: id, category_name: category };
            _this.navCtrl.push('CategoryPage', { categoty_details: details });
        };
        if (localStorage.getItem('eastern_deals')) {
            var value_item = JSON.parse(localStorage.getItem('eastern_deals'));
            this.userId1 = value_item.id;
            console.log(this.userId1);
        }
        else {
            this.value = 0;
        }
        this.events.publish('fabhide:created', true);
        // let code = localStorage.getItem('lang_code');
        if (localStorage.getItem('lang_code') == 'null' || localStorage.getItem('lang_code') == null || localStorage.getItem('lang_code') == undefined) {
            localStorage.setItem('lang_code', 'en');
            this.lang_code_1 = localStorage.getItem('lang_code');
            console.log(this.lang_code_1);
        }
        else {
            this.events.subscribe('menu:created', function (data) {
                console.log(data);
                _this.lang_code_1 = data;
            });
            this.lang_code_1 = localStorage.getItem('lang_code');
            console.log(this.lang_code_1);
        }
        this.selectOptions = {
            title: 'Select Area',
        };
        events.subscribe('created', function () {
            // this.homead();
            _this.ngOnInit();
        });
    }
    HomepagePage.prototype.ionViewDidLoad = function () {
        this.show = true;
    };
    HomepagePage.prototype.ionViewWillEnter = function () {
        this.events.publish('fabhide:created', true);
    };
    HomepagePage.prototype.ionViewWillLeave = function () {
        this.events.publish('fabhide:created', false);
    };
    HomepagePage.prototype.search = function () {
        this.show_1 = !this.show_1;
    };
    HomepagePage.prototype.ngOnInit = function () {
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
                    id: 1,
                    url: 'BreakfastPage'
                },
                {
                    foodImage: '/assets/imgs/meal.png',
                    foodName: ' Lunch ',
                    id: 2,
                    url: 'LunchPage'
                },
                {
                    foodImage: '/assets/imgs/snacks.png',
                    foodName: ' Snacks ',
                    id: 3,
                    url: 'SnacksPage'
                },
                {
                    foodImage: '/assets/imgs/dinner.png',
                    foodName: ' Dinner ',
                    id: 4,
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
                    ImageName: 'Healthy'
                },
                {
                    circleImage: '/assets/imgs/rolls.png',
                    ImageName: 'Rolls'
                },
                {
                    circleImage: '/assets/imgs/sweets.png',
                    ImageName: 'Sweets'
                },
                {
                    circleImage: '/assets/imgs/chats.png',
                    ImageName: 'Chaats'
                },
                {
                    circleImage: '/assets/imgs/Cakes.png',
                    ImageName: 'Cakes'
                },
                {
                    circleImage: '/assets/imgs/pizza.png',
                    ImageName: 'Pizzas'
                },
                {
                    circleImage: '/assets/imgs/shakes.png',
                    ImageName: 'Shakes'
                },
                {
                    circleImage: '/assets/imgs/pasta.png',
                    ImageName: 'Pasta'
                },
            ];
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
    };
    HomepagePage.prototype.getCartItemCount = function () {
        return this.cartItemCount;
    };
    HomepagePage.prototype.getTotal = function () {
        return this.totalAmount;
    };
    // special dishes starts
    HomepagePage.prototype.addFood = function (selectFood) {
        var _this = this;
        this.specialdishes.forEach(function (d) {
            if (selectFood.id === d.id) {
                d.quantity = d.quantity + 1;
                if (d.quantity === 1) {
                    _this.addfoods.push(selectFood);
                }
                _this.cartItemCount.next(_this.cartItemCount.value + 1);
                _this.totalAmount.next(_this.totalAmount.value + d.amount);
                _this.addfoods.forEach(function (element) {
                });
            }
        });
    };
    HomepagePage.prototype.removeFood = function (removeFood) {
        var _this = this;
        this.specialdishes.forEach(function (r, i) {
            if (removeFood.id === r.id) {
                r.quantity = r.quantity - 1;
                if (r.quantity === 0) {
                    _this.addfoods.forEach(function (el) {
                        if (r._id === el._id) {
                            _this.addfoods.splice(i, 1);
                        }
                    });
                }
                _this.cartItemCount.next(_this.cartItemCount.value - 1);
                _this.totalAmount.next(_this.totalAmount.value - r.amount);
            }
        });
    };
    // special dishes starts
    // Best Cusine starts
    HomepagePage.prototype.IncreaseFood = function (selectFood) {
        var _this = this;
        this.cuisine.forEach(function (d) {
            if (selectFood.id === d.id) {
                d.quantity = d.quantity + 1;
                if (d.quantity === 1) {
                    _this.addfoods.push(selectFood);
                }
                _this.cartItemCount.next(_this.cartItemCount.value + 1);
                _this.totalAmount.next(_this.totalAmount.value + d.amount);
                _this.addfoods.forEach(function (element) {
                });
            }
        });
    };
    HomepagePage.prototype.DecreaseFood = function (removeFood) {
        var _this = this;
        this.cuisine.forEach(function (r, i) {
            if (removeFood.id === r.id) {
                r.quantity = r.quantity - 1;
                if (r.quantity === 0) {
                    _this.addfoods.forEach(function (el) {
                        if (r._id === el._id) {
                            _this.addfoods.splice(i, 1);
                        }
                    });
                }
                _this.cartItemCount.next(_this.cartItemCount.value - 1);
                _this.totalAmount.next(_this.totalAmount.value - r.amount);
            }
        });
    };
    // Best Cusine ends
    HomepagePage.prototype.open_cart = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_modal_cart_modal__["a" /* CartModalPage */], { data: this.addfoods, total: this.getTotal() });
        modal.present();
        console.log('addfoods', this.addfoods);
    };
    HomepagePage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    HomepagePage.prototype.navigatedishes = function (t) {
        console.log('t', t);
        // this.navCtrl.push('BreakfastPage');
        this.navCtrl.push(t.url);
    };
    HomepagePage.prototype.language_code = function (code) {
        console.log(code);
        localStorage.setItem('lang_code', code);
        this.events.publish('menu:created', code);
        this.ngOnInit();
    };
    // ===================================================================================================================
    // GET CATEGORY LIST
    // ===========================
    HomepagePage.prototype.category_list = function (inital_list_count, code) {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        if (inital_list_count != undefined) {
            this.data.inital_list_count = inital_list_count;
        }
        this.data.lang_code = code;
        this.api_service.post_data(this.categorylist_url, this.data)
            .subscribe(function (result) {
            if (result.status == 'success') {
                _this.api_service.stopLoader();
                _this.categories = result.data;
                _this.totalcount = 4;
                _this.icon_img = _this.api_service.API_URL_IMG;
            }
            else {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
        });
    };
    // ======================================================================================================
    // ===================================================================================================================
    // GET language LIST
    // ===========================
    HomepagePage.prototype.language_field = function () {
        var _this = this;
        this.api_service.get_list(this.language_field_url + '?api_token=' + this.api_service.api_token + '&lang_code=' + this.lang_code_1).subscribe(function (result) {
            if (result.status == 'success') {
                _this.languagefield = result.field_list;
            }
            else {
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.create(error, 'top', 'error');
        });
    };
    // ======================================================================================================
    HomepagePage.prototype.more_category = function () {
        this.show = false;
        this.more = true;
        this.totalcount = 100;
    };
    HomepagePage.prototype.more_category_1 = function () {
        this.show = true;
        this.more = false;
        this.totalcount = 7;
    };
    // ==================================================================================================================================
    // NAVIGATION FUNCTIONS
    // =========================
    // NOTIFICATION
    HomepagePage.prototype.notification = function () {
        this.navCtrl.push('NotificationPage');
    };
    // onclick(){
    //   this.navCtrl.push('ReviewPage');
    // }
    //SEARCHBAR
    HomepagePage.prototype.seachbar = function () {
        this.navCtrl.push('SearchPage');
    };
    //BREAKFAST
    HomepagePage.prototype.onBreakfast = function () {
        this.navCtrl.push('BreakfastPage');
    };
    //LUNCH
    HomepagePage.prototype.onLunch = function () {
        this.navCtrl.push('LunchPage');
    };
    //HEALTHY
    HomepagePage.prototype.onHealthy = function () {
        this.navCtrl.push('HealthyPage');
    };
    //Special dishes view all
    HomepagePage.prototype.dishesview = function () {
        this.navCtrl.push('DishViewallPage');
    };
    //Best Cusine View all
    HomepagePage.prototype.cuisineview = function () {
        this.navCtrl.push('CuisineViewallPage');
    };
    // DESCRIPTION
    HomepagePage.prototype.description = function (id) {
        this.navCtrl.push('DescriptionPage', { id: id });
    };
    // ================================================================================================================================================================
    // HOME SLIDER
    // ======================
    HomepagePage.prototype.homeslider = function () {
        var _this = this;
        this.api_service.get_list(this.home_slider + '?api_token=' + this.api_service.api_token + '&slider_name= 1').subscribe(function (result) {
            if (result) {
                _this.slider = result.data;
                _this.speed = result.speed;
                _this.img = _this.api_service.API_URL_IMG;
            }
        }, function (error) {
            _this.api_service.create(error, 'top', 'error');
        });
    };
    HomepagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.home_data.length == 0) {
            // this.category_count = this.home_data.length;
            this.showEndPage = true;
            infiniteScroll.enable(false);
        }
        else {
            setTimeout(function () {
                _this.current_page_no = _this.current_page_no + 1;
                _this.showEndPage = false;
                _this.getList(_this.lang_code_1, _this.current_page_no);
                infiniteScroll.complete();
                _this.reActiveInfinite = infiniteScroll;
            }, 1000);
        }
    };
    // ===============================================================================================================================================
    // DO REFRESH
    // ===================
    HomepagePage.prototype.doRefresh = function (refresher) {
        this.current_page_no = 1;
        if (this.reActiveInfinite) {
            this.reActiveInfinite.enable(true);
        }
        this.events.publish('refresher:enabled', true);
        this.homePagePostAndAd = [];
        console.log(this.homePagePostAndAd);
        this.ngOnInit();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    // ====================================================================================================================================================
    HomepagePage.prototype.viewersCountAdd = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.count = 1;
        var api = 'add_viewcount' + '?api_token=' + this.api_service.api_token;
        this.api_service.post_data(api, this.data)
            .subscribe(function (result) {
            console.log('updated view count' + result.data.slug_value);
            _this.events.publish('visitors:count', result.data.slug_value);
        }, function (error) {
            _this.api_service.create(error, 'top', 'error');
        });
    };
    HomepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-homepage',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/homepage/homepage.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle start>\n      <ion-icon name="md-menu"></ion-icon>\n    </button>\n    <ion-title>Sowmyas Kitchen</ion-title>\n\n    <ion-buttons end>\n      <button ion-button end icon-only (click)="seachbar()">\n        <ion-icon name="ios-search-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button end icon-only (click)="notification()">\n        <ion-icon name="ios-notifications-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- <div class="form-wrapper">\n           \n            <ion-searchbar [(ngModel)]="master_search">\n            </ion-searchbar>\n            <button (click)="getList(lang_code_1)">\n              <ion-icon name="search" ></ion-icon>\n            </button>\n        </div> -->\n\n    <!-- {{master_search}} -->\n    <ion-buttons end *ngIf="value != 0">\n      <!-- \'  -->\n      <button ion-button icon-only tappable (click)="notification()">\n        <ion-icon name="notifications"></ion-icon>\n        <!-- <ion-badge id="cart-badge" ></ion-badge> -->\n        <span *ngIf="count != 0" class="badge">{{count}}</span>\n        <!--  -->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="crescent"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- ================================= Categories ========================================= -->\n\n  <ion-row text-center class="padd_catg">\n    <ion-col class="icon-list" col-3 tappable *ngFor="let list of categories | slice:0:totalcount"\n      (click)="category(list.id,list.category)">\n      <ion-card class="card">\n        <img class="img_icon" src="{{icon_img+list.main_image}}" alt="image not found">\n        <p [ngClass]="{\'caps_1\':lang_code_1 == \'en\' ,\'font_family_ta_1\':lang_code_1 == \'ta\'}">{{list.category}}</p>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n  <!-- ================================= slider ========================================= -->\n  <ion-slides class="slide_size" *ngIf="slider.length > 1 && slider.length != undefined" autoplay="3000" loop="true"\n    speed="{{speed}}">\n    <ion-slide *ngFor="let slide of slider">\n      <img [src]="img+slide.main_image" class="slide-image" />\n    </ion-slide>\n  </ion-slides>\n  <div *ngIf="slider.length != undefined && slider.length == 1">\n    <div *ngFor="let slide of slider">\n      <img [src]="img+slide.main_image" single_slider class="slide-image" />\n    </div>\n  </div>\n  <div class="swiper-pagination hide swiper-pagination-clickable swiper-pagination-bullets">\n    <button class="swiper-pagination-bullet" aria-label="Go to slide 1" data-slide-index="0"></button>\n    <button class="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 2"\n      data-slide-index="1"></button>\n  </div>\n\n\n  <!-- ================================= Special Dishes ========================================= -->\n  <div class="testing" style="width:100%">\n    <ion-grid>\n      <ion-row justify-content-between>\n        <ion-col col-9>\n          <div class="subtitle" style="font-weight: bold; padding-left: 4px;">Special Dishes </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="subhead" style="font-weight: 600; padding-left: 1rem; cursor:pointer;" (click)="dishesview()">View all <ion-icon\n              name="ios-arrow-forward"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="suggesstions">\n      <div *ngFor="let s of specialdishes; let i = index" class="cards box" style="margin-left:1rem;"> <img\n          class="card-img-top slide-image" [src]="s.foodImage" alt="Card image cap">\n        <ion-row align-items-start>\n          <ion-col col-8>\n            <div class="subtitle" style="font-size: 12px; font-weight:600;"> {{s.foodName}} </div>\n            <div style="font-size: 10px; color:rgb(146 146 146); margin-right:5rem;">{{s.foodSubName}}</div>\n            <div style="font-size: 10px; line-height: 2.2rem;">\n              <ion-icon name="pin"></ion-icon> {{s.location}}\n            </div>\n          </ion-col>\n          <ion-col col-4>\n            <div style="font-size: 9px; font-weight:600; color:#f57921; margin-left: -6px; margin-top: 4px;">\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star"></ion-icon>\n              <ion-icon name="star-half"></ion-icon> 4.5\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row align-items-start class="rating">\n          <ion-col>\n            <div class="subtitle" style="font-size: 12px; font-weight:600; margin-right:5.5rem;"> &#8377;{{s.amount}} </div>\n          </ion-col>\n          <ion-col>\n            <div style="font-size: 12px; font-weight:600;margin-left: 2rem;" class="btn btn-add">\n              <ion-icon *ngIf="s.quantity > 0" name="remove" (click)="removeFood(s)"></ion-icon> ADD \n              <span *ngIf="s.quantity > 0">{{s.quantity}}</span>\n              <ion-icon (click)="addFood(s)" name="add"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- <div class="suggesstions-main" *ngFor="let s of specialdishes; let i = index"\n              (click)="viewTopic(s, colors[i % colors.length])">\n              <div class="close-btn" (click)="removeTopic(s, $event, i)">\n                <ion-icon mode="md" style="font-size: 22px;margin: 3px;" name="close"></ion-icon>\n              </div>\n              <img [src]="s.foodImage" *ngIf="s.foodImage">\n              <div class="name">SDJKSHDJ</div>\n              <div class="followers">SDJKSHVJKS</div>\n              <div matRipple (click)="followTopic(s, $event, i)" class="follow-btn">\n                Follow\n              </div>\n            </div> -->\n      </div>\n    </div>\n</div>\n\n  <!-- ================================= Today Specials ========================================= -->\n\n  <div class="testing" style="width:100%">\n      <ion-grid>\n        <ion-row justify-content-between>\n          <ion-col col-9>\n            <div class="subtitle" style="font-weight: bold; padding-left: 4px;">Today Specials </div>\n          </ion-col>\n          <ion-col col-3>\n            <div class="subhead" style="font-weight: 600; padding-left: 1rem;">View all <ion-icon\n                name="ios-arrow-forward"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class="suggesstions"> \n          <div *ngFor="let t of todayspecial; let i = index"  class="carder box" style="margin-left:1rem; cursor: pointer;"> \n            <img class="card-img-top slide-image" [src]="t.foodImage" alt="Card image cap" style="margin-top: -0.5rem;" (click) ="navigatedishes(t)">\n            <div class="subtitle" style="font-size: 12px; font-weight:600; text-align:center"> {{t.foodName}}</div>\n          </div>\n      </div>\n  </div>\n\n  <!-- ================================= Best cuisine ========================================= -->\n  <div class="testing" style="width:100%">\n        <ion-grid>\n          <ion-row justify-content-between>\n            <ion-col col-9>\n              <div class="subtitle" style="font-weight: bold; padding-left: 4px;">Best Cuisine </div>\n            </ion-col>\n            <ion-col col-3>\n              <div class="subhead" style="font-weight: 600; padding-left: 1rem; cursor: pointer;" (click)="cuisineview()">View all <ion-icon\n                  name="ios-arrow-forward"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <div class="suggesstions">\n          <div *ngFor="let c of cuisine; let i = index" class="cards box" style="margin-left:1rem;"> <img\n              class="card-img-top slide-image" [src]="c.foodImage" alt="Card image cap">\n            <ion-row align-items-start>\n              <ion-col col-8>\n                <div class="subtitle" style="font-size: 12px; font-weight:600;"> {{c.foodName}} </div>\n                <div style="font-size: 10px; color:rgb(146 146 146); margin-right:5rem;">{{c.foodSubName}}</div>\n                <div style="font-size: 10px; line-height: 2.2rem;">\n                  <ion-icon name="pin"></ion-icon> {{c.location}}\n                </div>\n              </ion-col>\n              <ion-col col-4>\n                <div style="font-size: 9px; font-weight:600; color:#f57921; margin-left: -6px; margin-top: 4px;">\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star"></ion-icon>\n                  <ion-icon name="star-half"></ion-icon> 4.5\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start class="rating">\n              <ion-col>\n                <div class="subtitle" style="font-size: 12px; font-weight:600; margin-right:5.5rem;"> &#8377;{{c.amount}} </div>\n              </ion-col>\n              <ion-col>\n                <div style="font-size: 12px; font-weight:600;margin-left: 2rem;" class="btn btn-add">\n                  <ion-icon *ngIf="c.quantity > 0" name="remove" (click)="DecreaseFood(c)"></ion-icon> ADD \n                  <span *ngIf="c.quantity > 0">{{c.quantity}}</span>\n                  <ion-icon (click)="IncreaseFood(c)" name="add"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n  </div>\n\n  <!-- ================================= Offer Sliders ========================================= -->\n\n  <div class="testing" style="width:100%">\n    <div class="suggesstions">\n      <div *ngFor="let o of offers; let i = index"  class="carding box" style="margin-left:1rem;"> \n        <img class="card-img-top img-fluid" [src]="o.slideImage" alt="Card image cap" style="border-radius: 10px;">\n      </div>\n    </div>\n  </div>\n\n  <!-- ================================= Eats makes happy ========================================= -->\n\n  <div class="testing" style="width:100%">\n        <ion-grid>\n          <ion-row justify-content-between>\n            <ion-col col-9>\n              <div class="subtitle" style="font-weight: bold; padding-left: 4px;">Eats what makes you happy </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class="row" style="padding:6px;">\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/Healthy.jpeg" (click)="onHealthy()"alt="img">\n            <div class="caption">Healthy</div>\n          </div>\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/rolls.png" alt="img">\n            <div class="caption">Rolls</div>\n          </div>\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/sweets.png" alt="img">\n            <div class="caption">Sweets</div>\n          </div>\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/chats.png" alt="img">\n            <div class="caption">Chaats</div>\n          </div>\n        </div>\n        <div class="row" style="padding:6px;">\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/Cakes.png" alt="img">\n            <div class="caption">Cakes</div>\n          </div>\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/pizza.png" alt="img">\n            <div class="caption">Pizza</div>\n          </div>\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/shakes.png" alt="img">\n            <div class="caption">Shakes</div>\n          </div>\n          <div class="col">\n            <img class="circle img-fluid" src="/assets/imgs/pasta.png" alt="img">\n            <div class="caption">Pasta</div>\n          </div>\n        </div>\n\n</div>\n\n  <ion-card *ngIf="showEndPage">\n    <h3 padding text-center>\n      No More to Load\n    </h3>\n  </ion-card>\n  <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="crescent"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar *ngIf="addfoods.length > 0">\n    <div style="display: flex; width: -webkit-fill-available; align-items: center;">\n      <div style="margin-left: 2rem; width: -webkit-fill-available;">\n       <a> <span style="font-size: 12px; color: rgb(255, 255, 255); font-weight: 600;letter-spacing: 2px;font-family:\'poppins\', sans-serif;">{{cartItemCount | async}} ITEM</span><br>\n           <span style="font-size: 12px; color:#fff; font-weight: 600;">&#8377; {{ getTotal() | async}}</span> \n       </a>\n      </div>\n      <div>\n        <ion-buttons (click)="open_cart()">\n          <button ion-button end icon-only  style="font-size: 12px; font-weight: 600; letter-spacing: 1px; cursor:pointer;  font-family:\'poppins\', sans-serif;">\n            View Cart <ion-icon name="md-arrow-dropright" class="viewcart" end></ion-icon>\n          </button>\n        </ion-buttons>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/homepage/homepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], HomepagePage);
    return HomepagePage;
}());

//# sourceMappingURL=homepage.js.map

/***/ })

});
//# sourceMappingURL=2.js.map