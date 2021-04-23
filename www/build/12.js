webpackJsonp([12],{

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalPageModule", function() { return RenewalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__renewal__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RenewalPageModule = /** @class */ (function () {
    function RenewalPageModule() {
    }
    RenewalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__renewal__["a" /* RenewalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__renewal__["a" /* RenewalPage */]),
            ],
        })
    ], RenewalPageModule);
    return RenewalPageModule;
}());

//# sourceMappingURL=renewal.module.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenewalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RenewalPage = /** @class */ (function () {
    function RenewalPage(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.renewalAdList = [];
        this.renewalPostList = [];
        this.imgUrl = this.service.API_URL_IMG;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // ====================================================================================================================
        // GET RENEWAL LIST
        // ==========================
        this.getRenewalList = function () {
            _this.renewalUrl = 'renewal_list';
            var obj = {
                'api_token': _this.service.api_token,
                'user_id': _this.data.id
            };
            _this.service.post_data(_this.renewalUrl, obj)
                .subscribe(function (result) {
                _this.service.stopLoader();
                _this.renewalAdList = result.data.ad_data;
                _this.renewalPostList = result.data.post_data;
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
                console.log(error);
            });
        };
        this.data = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = this.data.id;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        this.getRenewalList();
    }
    RenewalPage.prototype.ionViewDidLoad = function () {
        this.language_header();
        this.language_field();
    };
    // ======================================================================================================================
    // PULL TO REFRESH
    // ============================
    //   doRefresh(refresher: any) {
    //     console.log('Begin async operation', refresher);
    //   this.page = Number(this.page) + Number(1);
    //  this.getRenewalList();
    //     setTimeout(() => {
    //       console.log('Async operation has ended');
    //       refresher.complete();
    //     }, 2000);
    //   }
    // ======================================================================================================================
    // RENEWAL DETAIL
    // ======================
    RenewalPage.prototype.order_description = function (data, type) {
        this.navCtrl.push('OrderDescriptionPage', { renewal: data, type: 'renewal', postAd: type });
    };
    RenewalPage.prototype.language_header = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.service.api_token;
        this.data.api_token = this.api_token;
        this.data.lang_code = this.code;
        this.data.user_id = this.customer_id;
        this.service.post_data(this.languageheader_url, this.data)
            .subscribe(function (result) {
            _this.service.stopLoader();
            if (result.status == 'success') {
                _this.service.stopLoader();
                _this.languageheader = result.header_list;
            }
            else {
                _this.service.stopLoader();
                _this.service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.service.stopLoader();
            _this.service.create(error, 'top', 'error');
        });
    };
    RenewalPage.prototype.language_field = function () {
        var _this = this;
        this.service.get_list(this.language_field_url + '?api_token=' + this.service.api_token + '&lang_code=' + this.code).subscribe(function (result) {
            _this.service.stopLoader();
            if (result.status == 'success') {
                _this.languagefield = result.field_list;
            }
            else {
                _this.service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.service.create(error, 'top', 'error');
        });
    };
    RenewalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-renewal',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/renewal/renewal.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle start>\n      <ion-icon name="ios-menu-outline"></ion-icon>\n    </button>\n    <ion-title>{{languageheader.renew}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div *ngIf="renewalPostList.length != 0" >\n  <ion-card card_desgn tappable (click)="order_description(renewalPost, \'post\')" *ngFor="let renewalPost of renewalPostList">\n    <ion-card-header header_clr text-center *ngIf="renewalPost.renewal_status">\n    {{renewalPost.renewal_status}}\n    </ion-card-header>\n    <ion-card-header header_clr text-center *ngIf="!renewalPost.renewal_status">\n      Do you want to renewal this ?\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-4 padding-top overflow_img>\n          <img class="img_size" src="{{imgUrl}}{{renewalPost.primary_image}}" alt="image not found">\n        </ion-col>\n        <ion-col col-8 padding-top>\n          <ion-row>\n            <ion-col col-6>\n              <h4>Order Expiry date</h4>\n            </ion-col>\n            <ion-col col-6>\n              <p>{{renewalPost.expire_date}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <h4>Type</h4>\n            </ion-col>\n            <ion-col col-6>\n              <p>Post</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  </div>\n  <div *ngIf="renewalAdList.length != 0">\n  <ion-card card_desgn tappable (click)="order_description(renewalAd, \'ad\')" *ngFor="let renewalAd of renewalAdList" >\n  <ion-card-header header_clr text-center *ngIf="renewalAd.renewal_status">\n    {{renewalAd.renewal_status}}\n  </ion-card-header>\n  <ion-card-header header_clr text-center *ngIf="!renewalAd.renewal_status">\n    Do you want to renewal this ?\n  </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-4 padding-top overflow_img>\n          <img class="img_size" src="{{imgUrl}}{{renewalAd.main_image}}" alt="image not found">\n        </ion-col>\n        <ion-col col-8 padding-top>\n          <ion-row>\n            <ion-col col-6>\n              <h4>Order Expiry date</h4>\n            </ion-col>\n            <ion-col col-6>\n              <p>{{renewalAd.expiry_date}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>\n              <h4>Type</h4>\n            </ion-col>\n            <ion-col col-6>\n              <p>Advertisement</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  </div>\n  <ion-card *ngIf="renewalAdList.length == 0 && renewalPostList.length== 0" class="no_record_found"> \n      <p class="no_record">{{languagefield.no_records_found}}</p></ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/renewal/renewal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
    ], RenewalPage);
    return RenewalPage;
}());

//# sourceMappingURL=renewal.js.map

/***/ })

});
//# sourceMappingURL=12.js.map