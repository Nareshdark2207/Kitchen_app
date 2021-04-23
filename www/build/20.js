webpackJsonp([20],{

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyAccountPageModule = /** @class */ (function () {
    function MyAccountPageModule() {
    }
    MyAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */]),
            ],
        })
    ], MyAccountPageModule);
    return MyAccountPageModule;
}());

//# sourceMappingURL=my-account.module.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
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



var MyAccountPage = /** @class */ (function () {
    // ==============================================================================================================================================================
    function MyAccountPage(navCtrl, navParams, api_service, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api_service = api_service;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.profile_url = 'user_profile';
        this.profile_data = {};
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        var customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = customer_data.id;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.lang_code = this.code;
        this.data.user_id = this.customer_id;
        this.api_service.post_data(this.languageheader_url, this.data)
            .subscribe(function (result) {
            _this.api_service.stopLoader();
            if (result.status == 'success') {
                _this.api_service.stopLoader();
                _this.languageheader = result.header_list;
                _this.account_items = [
                    { title: _this.languageheader.edit_profile, component: 'ProfilePage' },
                    { title: _this.languageheader.edit_email, component: 'EditEmailPage' },
                    { title: _this.languageheader.change_password, component: 'ChangePasswordPage' },
                    { title: _this.languageheader.my_orders, component: 'MyOrdersPage' }
                ];
            }
            else {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
        });
        this.events.subscribe('backpage', function () {
            _this.get_profile();
        });
    }
    MyAccountPage.prototype.ionViewDidLoad = function () {
        this.get_profile();
    };
    // ==============================================================================================================================================================
    // GET PROFILE
    // =========================
    MyAccountPage.prototype.get_profile = function () {
        var _this = this;
        var user_id = this.customer_id;
        var api_token = this.api_service.api_token;
        var url = this.profile_url + '?api_token=' + api_token + '&user_id=' + user_id;
        this.api_service.get_list(url)
            .subscribe(function (result) {
            if (result.status == 'success') {
                _this.api_service.stopLoader();
                _this.profile_data = result.data;
                _this.img_path = _this.api_service.API_URL_IMG;
                _this.profile_fullname = result.data.first_name;
            }
        }, function (error) {
            _this.api_service.stopLoader();
        });
    };
    //  =============================================================================================================================================================
    // NAVIGATE THE PAGES
    // ===========================
    MyAccountPage.prototype.itemSelected = function (item) {
        this.navCtrl.push(item.component);
    };
    // IMAGE VIEW PAGE
    // =============================
    MyAccountPage.prototype.imageView = function (img_data, cust_name) {
        var modal = this.modalCtrl.create('ImageviewerPage', { img_data: img_data, name: cust_name });
        modal.present();
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-account',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/my-account/my-account.html"*/'<ion-header no-border>\n\n  <ion-navbar hideBackButton="true">\n    <!-- If you don\'t need back here -->\n    <button ion-button menuToggle start>\n      <ion-icon name="ios-menu-outline"></ion-icon>\n    </button>\n    <!-- <ion-title>My Account</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div profile_header>\n  </div>\n  <ion-avatar profile_img>\n    <h3>{{profile_fullname}}</h3>\n\n    <img src="assets/imgs/empty_dp.png" *ngIf="profile_data.main_image == null" alt="image not found">\n    <img src="{{img_path}}{{profile_data.main_image}}" *ngIf="profile_data.main_image !=null" tappable\n      (click)="imageView(img_path+profile_data.main_image, profile_fullname)">\n    <p *ngIf="profile_data.email" email>\n      <ion-icon name="md-mail"></ion-icon><a href="mailto:{{profile_data.email}}">{{profile_data.email}}</a>\n    </p>\n    <p *ngIf="profile_data.mobile_number" number>\n      <ion-icon name="call"></ion-icon><a href="tel:{{profile_data.mobile_number}}">{{profile_data.mobile_number}}</a>\n    </p>\n\n  </ion-avatar>\n\n  <ion-list padding>\n    <ion-item *ngFor="let item of account_items" tappable (click)="itemSelected(item)"  [ngClass]="{\'font_family_ta\':code == \'ta\'}">\n    {{item.title}}\n      <ion-icon name="ios-arrow-forward-outline" item-end></ion-icon>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/my-account/my-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ })

});
//# sourceMappingURL=20.js.map