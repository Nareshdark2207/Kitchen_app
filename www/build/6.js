webpackJsonp([6],{

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuisineViewallPageModule", function() { return CuisineViewallPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuisine_viewall__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CuisineViewallPageModule = /** @class */ (function () {
    function CuisineViewallPageModule() {
    }
    CuisineViewallPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cuisine_viewall__["a" /* CuisineViewallPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cuisine_viewall__["a" /* CuisineViewallPage */]),
            ],
        })
    ], CuisineViewallPageModule);
    return CuisineViewallPageModule;
}());

//# sourceMappingURL=cuisine-viewall.module.js.map

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

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuisineViewallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_modal_cart_modal__ = __webpack_require__(848);
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
 * Generated class for the CuisineViewallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuisineViewallPage = /** @class */ (function () {
    function CuisineViewallPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.cuisine = [];
        this.addfoods = [];
        this.cartItemCount = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
        this.totalAmount = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
    }
    CuisineViewallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CuisineViewallPage');
    };
    CuisineViewallPage.prototype.ngOnInit = function () {
        this.cartItemCount = this.getCartItemCount();
        this.cuisine = [
            {
                foodImage: '/assets/imgs/green-peas-chapatti.jpg',
                foodName: ' Green Peas Chapatti ',
                foodSubName: 'In Cusine, Chapatti',
                amount: 120,
                reviewPoints: '4',
                id: '1',
                quantity: 0
            },
            {
                foodImage: '/assets/imgs/Masala Dosa.png',
                foodName: ' Masala Dosa ',
                foodSubName: 'In Cusine, Dosa',
                amount: 180,
                reviewPoints: '4',
                quantity: 0,
                id: '2'
            },
            {
                foodImage: '/assets/imgs/Kuzhi-Paniyaram.jpg',
                foodName: ' Kuzhi-Paniyaram ',
                foodSubName: 'In Cusine, Paniyaram',
                amount: 200,
                reviewPoints: '4',
                id: '3',
                quantity: 0
            }, {
                foodImage: '/assets/imgs/Chappati.jpg',
                foodName: ' Chappati ',
                foodSubName: 'In Cusine, Chappati',
                amount: 80.42,
                reviewPoints: '4',
                id: '4',
                quantity: 0
            },
            {
                foodImage: '/assets/imgs/Poori.jpg',
                foodName: ' Poori ',
                foodSubName: 'In Cusine, Poori',
                amount: 130.42,
                reviewPoints: '4',
                id: '5',
                quantity: 0
            },
            {
                foodImage: '/assets/imgs/Idly.jpg',
                foodName: ' Idly ',
                foodSubName: 'In Cusine, Idly',
                amount: 90.42,
                reviewPoints: '4',
                id: '6',
                quantity: 0
            },
            {
                foodImage: '/assets/imgs/phodi dosa.png',
                foodName: ' Phodi Dosa ',
                foodSubName: 'In Cusine, Dosa',
                amount: 150.42,
                reviewPoints: '4',
                id: '7',
                quantity: 0
            },
            {
                foodImage: '/assets/imgs/parrota.png',
                foodName: ' Parrota ',
                foodSubName: 'In Cusine, Parrota',
                amount: 150.42,
                reviewPoints: '4',
                id: '8',
                quantity: 0
            },
            {
                foodImage: '/assets/imgs/onion-rava.png',
                foodName: ' Onion Rava Dosa ',
                foodSubName: 'In Cusine, Dosa',
                amount: 150.42,
                reviewPoints: '4',
                id: '9',
                quantity: 0
            },
            {
                foodImage: '/assets/imgs/wheat-parotta.jpg',
                foodName: ' Wheat Parotta ',
                foodSubName: 'In Cusine, Parotta',
                amount: 150.42,
                reviewPoints: '4',
                id: '10',
                quantity: 0
            },
        ];
    };
    CuisineViewallPage.prototype.getCartItemCount = function () {
        return this.cartItemCount;
    };
    CuisineViewallPage.prototype.getTotal = function () {
        return this.totalAmount;
    };
    CuisineViewallPage.prototype.addFood = function (selectFood) {
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
    CuisineViewallPage.prototype.removeFood = function (removeFood) {
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
    CuisineViewallPage.prototype.open_cart = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_modal_cart_modal__["a" /* CartModalPage */], { data: this.addfoods, total: this.getTotal() });
        modal.present();
        console.log('addfoods', this.addfoods);
    };
    CuisineViewallPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    CuisineViewallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cuisine-viewall',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/cuisine-viewall/cuisine-viewall.html"*/'<!--\n  Generated template for the CuisineViewallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Best Cuisine</ion-title>\n    <ion-buttons end>\n      <button ion-button end icon-only (click)="seachbar()">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <div class="heads">Order Online</div>\n    <ion-row>\n      <ion-col col-6>\n        <div class="tracks"><ion-icon name="ios-compass-outline"></ion-icon>&nbsp;Live track your order&emsp;&nbsp;|</div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="tracks"><ion-icon name="ios-time-outline"></ion-icon>&nbsp;24 min</div>\n      </ion-col>\n    </ion-row>\n    \n  <ion-row>\n    <ion-col>\n      <div class="pro"> PRO extra 10% OFF Available on the App</div>\n    </ion-col>\n    <ion-col>\n      <div class="pro1">60% off up to ₹150 use code SOWMYA60</div>\n    </ion-col>\n  </ion-row>\n  <div class="pveg">Pure Veg</div>\n  </ion-grid>\n\n  <div class="card box" *ngFor="let c of cuisine; let i = index" >\n      <ion-grid>\n        <ion-row justify-content-between>\n          <ion-col col-3>\n            <div>\n              <img class="card-img img-fluid" [src]="c.foodImage" alt="Card image cap" style=" border-radius: 3px;">\n            </div>\n          </ion-col>\n          <ion-col col-5>\n              <div class="subtitle" style="font-weight: bold;">{{c.foodName}}</div>\n              <div style="font-size: 10px; color:rgb(197, 197, 197); margin-right:2.5rem;">{{c.foodSubName}}</div>\n              <div style="font-size: 10px; line-height: 2.2rem;">&#8377;{{c.amount}} </div>\n              <div style="font-size: 10px; color:#f57921; margin-right:2.5rem;"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>  <ion-icon name="star-half"></ion-icon> </div>\n          </ion-col>\n          <ion-col col-4>\n            <div style="font-size: 12px; font-weight:600;margin-left: 3rem;" class="btn btn-add">\n              <ion-icon *ngIf="c.quantity > 0" name="remove" (click)="removeFood(c)"></ion-icon> ADD \n              <span *ngIf="c.quantity > 0">{{d.quantity}}</span>\n              <ion-icon (click)="addFood(c)" name="add"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar *ngIf="addfoods.length > 1">\n    <div style="display: flex; width: -webkit-fill-available; align-items: center;">\n      <div style="margin-left: 2rem; width: -webkit-fill-available;">\n       <a> <span style="font-size: 12px; color: rgb(255, 255, 255); font-weight: 600;letter-spacing: 2px;font-family:\'poppins\', sans-serif;">{{cartItemCount | async}} ITEM</span><br>\n           <span style="font-size: 12px; color:#fff; font-weight: 600;">&#8377; {{ getTotal() | async}}</span> \n       </a>\n      </div>\n      <div>\n        <ion-buttons (click)="open_cart()">\n          <button ion-button end icon-only  style="font-size: 12px; font-weight: 600; letter-spacing: 1px; cursor:pointer; color:#fff; font-family:\'poppins\', sans-serif;">\n            View Cart <ion-icon name="md-arrow-dropright" class="viewcart" end></ion-icon>\n          </button>\n        </ion-buttons>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/cuisine-viewall/cuisine-viewall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], CuisineViewallPage);
    return CuisineViewallPage;
}());

//# sourceMappingURL=cuisine-viewall.js.map

/***/ })

});
//# sourceMappingURL=6.js.map