webpackJsonp([18],{

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletPageModule", function() { return MywalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mywallet__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MywalletPageModule = /** @class */ (function () {
    function MywalletPageModule() {
    }
    MywalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mywallet__["a" /* MywalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mywallet__["a" /* MywalletPage */]),
            ],
        })
    ], MywalletPageModule);
    return MywalletPageModule;
}());

//# sourceMappingURL=mywallet.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MywalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the MywalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MywalletPage = /** @class */ (function () {
    function MywalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MywalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MywalletPage');
    };
    MywalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mywallet',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/mywallet/mywallet.html"*/'<!--\n  Generated template for the MywalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>mywallet</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="bg">\n  <div id="shoes">\n    <h1 class="totalwallet">&#8377;&nbsp;<span >3245</span></h1>\n    <p class="wallettext">Wallet Balance</p>\n  </div>\n</div>\n<ion-card class="mt-15">\n<div class="tabs">\n  <div class="tab">\n    <label class="tab-label" for="rd1" (click)="Orders()"> My Cash <br> <p class="unrestrict">Use Unrestricted</p> </label>\n    <div class="ml-auto p-2">&#8377;&nbsp;<span >3245</span> <br> <p class="catlog">How to use?</p> </div>\n  </div>\n  <div class="tab">\n    <label class="tab-label" for="rd2" (click)="Help()">Reward Bonus <br> <p class="restrict">Use With Restricted</p></label>\n    <div class="ml-auto p-2">&#8377;&nbsp;<span >0</span> <br> <p class="catlog">How to earn?</p></div>\n  </div>\n  <div class="tab">\n    <label class="tab-label" for="rd3" (click)="Help()">My Credits <p class="unrestrict">Use Unrestricted</p> </label>\n    <div class="ml-auto p-2">&#8377;&nbsp;<span >250</span></div>\n  </div> \n</div>\n</ion-card>\n\n\n<div class="testing" style="width:100%">\n    <ion-row justify-content-between>\n      <ion-col col-9>\n        <div class="subtitle" style="font-weight: 700; font-size: 16px; padding-left: 4px;">Wallet Transactions </div>\n      </ion-col>\n      <ion-col col-3>\n        <div class="subhead" style="font-weight: 500; margin-top: 3px; color:#067aff; cursor: pointer;" (click)="cuisineview()">View all <ion-icon\n            name="ios-arrow-forward"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n</div>\n\n<ion-list>\n  <p class="historydate">06 Feb 2021</p>\n  <ion-item class="setitem">\n      <h6 class="title">Breakfast</h6>\n      <p class="success"><ion-icon name="checkmark" class="checkmark"></ion-icon> My cash credited</p>\n      <ion-note item-end class="primary-color">\n        &#8377;&nbsp;<span >550</span>\n      </ion-note>\n  </ion-item>\n\n  <ion-item>\n    <h6 class="title">Dinner</h6>\n    <p class="success"><ion-icon name="checkmark" class="checkmark"></ion-icon> My cash credited</p>\n    <ion-note item-end class="primary-color">\n      &#8377;&nbsp;<span >250</span>\n    </ion-note>\n </ion-item>\n\n <p class="historydate">08 Feb 2021</p>\n  <ion-item class="setitem">\n    <h6 class="title">Lunch</h6>\n    <p class="success"><ion-icon name="checkmark" class="checkmark"></ion-icon> My cash credited</p>\n    <ion-note item-end class="primary-color">\n      &#8377;&nbsp;<span >340</span>\n    </ion-note>\n  </ion-item>\n  <ion-item class="setitem">\n    <h6 class="title">Dinner</h6>\n    <p class="success"><ion-icon name="checkmark" class="checkmark"></ion-icon> My cash credited</p>\n    <ion-note item-end class="primary-color">\n      &#8377;&nbsp;<span >470</span>\n    </ion-note>\n  </ion-item>\n  <ion-item>\n    <h6 class="title">Reward Bonus Expired</h6>\n    <p class="success">Expire Date On 04 Feb 2021</p>\n    <ion-note item-end class="warning-color">\n      &#8377;&nbsp;<span >-150</span>\n    </ion-note>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/mywallet/mywallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], MywalletPage);
    return MywalletPage;
}());

//# sourceMappingURL=mywallet.js.map

/***/ })

});
//# sourceMappingURL=18.js.map