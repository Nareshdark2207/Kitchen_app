webpackJsonp([8],{

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionPageModule", function() { return TermsConditionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_condition__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsConditionPageModule = /** @class */ (function () {
    function TermsConditionPageModule() {
    }
    TermsConditionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms_condition__["a" /* TermsConditionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_condition__["a" /* TermsConditionPage */]),
            ],
        })
    ], TermsConditionPageModule);
    return TermsConditionPageModule;
}());

//# sourceMappingURL=terms-condition.module.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionPage; });
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



var TermsConditionPage = /** @class */ (function () {
    function TermsConditionPage(navCtrl, navParams, api_service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api_service = api_service;
        this.terms_condition_url = 'terms_conditions_data';
        this.term_condition = {};
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
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
    TermsConditionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsConditionPage');
    };
    TermsConditionPage.prototype.ngOnInit = function () {
        this.get_terms();
        this.language_header();
        this.language_field();
    };
    // GET TERMS
    // =====================
    TermsConditionPage.prototype.get_terms = function () {
        var _this = this;
        var tc_type = "general";
        this.api_service.get_list(this.terms_condition_url + '?api_token=' + this.api_service.api_token + '&tc_type=' + tc_type).subscribe(function (result) {
            var res = result.status;
            if (res == 'success') {
                _this.term_condition = result.data;
            }
            else {
                _this.api_service.create(result, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.create(error, 'top', 'error');
        });
    };
    // ======================================================================================================================
    TermsConditionPage.prototype.language_header = function () {
        var _this = this;
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
    TermsConditionPage.prototype.language_field = function () {
        var _this = this;
        this.api_service.get_list(this.language_field_url + '?api_token=' + this.api_service.api_token + '&lang_code=' + this.code).subscribe(function (result) {
            _this.api_service.stopLoader();
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
    TermsConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terms-condition',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/terms-condition/terms-condition.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle start>\n      <ion-icon name="ios-menu-outline"></ion-icon>\n    </button>\n    <ion-title [ngClass]="{\'font_family_1_ta\':code == \'ta\'}">{{languageheader.terms_conditions}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12 *ngIf="term_condition != null && term_condition != undefined">\n      <div [innerHTML]="term_condition.content"></div>\n    </ion-col>\n    <ion-col col-12 *ngIf="term_condition == null || term_condition == undefined">\n      <ion-card class="no_record_found">\n        <h3 padding text-center  [ngClass]="{\'font_family_1_ta\':code == \'ta\'}"> {{languagefield.no_records_found}}</h3>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/terms-condition/terms-condition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
    ], TermsConditionPage);
    return TermsConditionPage;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ })

});
//# sourceMappingURL=8.js.map