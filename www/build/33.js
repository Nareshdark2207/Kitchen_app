webpackJsonp([33],{

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(849);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        if (localStorage.getItem('eastern_deals')) {
            this.data = JSON.parse(localStorage.getItem('eastern_deals'));
            this.customer_id = this.data.id;
        }
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.language_header();
    };
    AboutPage.prototype.language_header = function () {
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
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle start>\n      <ion-icon name="ios-menu-outline"></ion-icon>\n    </button>\n    <ion-title>{{languageheader.about_us}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col col-1>\n      <ion-icon style="padding-top: 14px;" name="md-arrow-dropright"></ion-icon>\n    </ion-col>\n    <ion-col col-11>\n      <p>Eastern Deals today is one of the best serving classified site, which caters to the need of all kind of people.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-1>\n      <ion-icon style="padding-top: 14px;" name="md-arrow-dropright"></ion-icon>\n    </ion-col>\n    <ion-col col-11>\n      <p>One can easily seek what they want in the Eastern Province through website and mobile app via ads and posts.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-1>\n      <ion-icon style="padding-top: 14px;" name="md-arrow-dropright"></ion-icon>\n    </ion-col>\n    <ion-col col-11>\n      <p>Anyone can read the latest posts and ads and share and spread the news via social media.</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-1>\n      <ion-icon style="padding-top: 14px;" name="md-arrow-dropright"></ion-icon>\n    </ion-col>\n    <ion-col col-11>\n      <p>We welcome you all to be a part of our \'Eastern Deals\' and enjoy the amazing discount for each advertisement\n        and avail\n        its advantages in many ways.</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-1>\n      <ion-icon style="padding-top: 14px;" name="md-arrow-dropright"></ion-icon>\n    </ion-col>\n    <ion-col col-11>\n      <p>we can post classifieds ,ads using mobile app or website.(like olx and quikr)\n        each customer has an login they can manage their orders what they post and that post\'s status and details.</p>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=33.js.map