webpackJsonp([27],{

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.contactDetail = {};
        this.imageUrl = this.service.API_URL_IMG;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        // =========================================================================================================================================
        // GET CONATACT DETAILS 
        // ===================================
        this.getContactDetail = function () {
            _this.contactUrl = 'contact_info';
            var url = _this.contactUrl + '?api_token=' + _this.service.api_token;
            _this.service.get_list(url)
                .subscribe(function (result) {
                _this.service.stopLoader();
                _this.contactDetail = result.data;
                _this.loadMap(_this.contactDetail.lattitude, _this.contactDetail.longitude);
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, "top", "error");
            });
        };
        if (localStorage.getItem('eastern_deals')) {
            this.data = JSON.parse(localStorage.getItem('eastern_deals'));
            this.customer_id = this.data.id;
        }
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        this.getContactDetail();
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        this.language_header();
    };
    // LOAD MAP
    // =====================
    ContactPage.prototype.loadMap = function (latitude, longitude) {
        var _this = this;
        var latLng = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var content = 'Eastern Deals';
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            title: content,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var infoWindow = new google.maps.InfoWindow({
            content: 'Eastern Deals'
        });
        this.marker.addListener('click', function () {
            infoWindow.open(_this.map, _this.marker);
        });
    };
    // ============================================================================================================================================
    ContactPage.prototype.language_header = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ContactPage.prototype, "mapElement", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle start>\n      <ion-icon name="ios-menu-outline"></ion-icon>\n    </button>\n    <ion-title>{{languageheader.contact_us}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="map_size">\n    <div #map id="map"></div>\n  </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n  <div text-center>\n    <div logo>\n      <img class="logo_size" src="{{imageUrl}}{{contactDetail.logo}}" alt="eastern deals" />\n    </div>\n    <ion-card card_design>\n      <ion-card-header card_header>\n        {{contactDetail.company_name}}\n      </ion-card-header>\n      <ion-card-content>\n        {{contactDetail.address_line1}} {{contactDetail.address_line2}},<br> {{contactDetail.area}} <br>\n        {{contactDetail.city}}-{{contactDetail.postal_code}}\n        <p>contact Number : <a href="tel:{{contactDetail.landline_number}}"> {{contactDetail.landline_number}},</a>\n      </ion-card-content>\n    </ion-card>\n  </div>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=27.js.map