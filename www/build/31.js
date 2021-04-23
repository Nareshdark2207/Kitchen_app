webpackJsonp([31],{

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertiseWithUsPageModule", function() { return AdvertiseWithUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advertise_with_us__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdvertiseWithUsPageModule = /** @class */ (function () {
    function AdvertiseWithUsPageModule() {
    }
    AdvertiseWithUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advertise_with_us__["a" /* AdvertiseWithUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advertise_with_us__["a" /* AdvertiseWithUsPage */]),
            ],
        })
    ], AdvertiseWithUsPageModule);
    return AdvertiseWithUsPageModule;
}());

//# sourceMappingURL=advertise-with-us.module.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertiseWithUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdvertiseWithUsPage = /** @class */ (function () {
    // ==========================================================================================================================================
    function AdvertiseWithUsPage(navCtrl, navParams, Fb, alertCtrl, Toastr, api_service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Fb = Fb;
        this.alertCtrl = alertCtrl;
        this.Toastr = Toastr;
        this.api_service = api_service;
        this.categorylist_url = 'master_category_list';
        this.categories = [];
        this.tax_ammt = [];
        this.link_url = 'advertisement_request';
        this.terms_condition_url = 'terms_conditions_data';
        this.term_condition = {};
        this.orderstatus_url = 'constant_status';
        this.order_status_list = {};
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // =====================================================================================================================================
        // VALIDATION MESSAGE
        // =========================
        this.validation_messages = {
            // 'category_id': [
            //   { type: 'required', message: 'Category Is Required' }
            // ],
            'available_from_time': [
                { type: 'required', message: 'Preference Contact Time Is Required' }
            ],
            'description': [
                { type: 'required', message: 'Description Is Required' }
            ],
            'duration': [
                { type: 'required', message: 'Duration Is Required' }
            ]
        };
        this.FormInit = function () {
            _this.AdvertiseForm = _this.Fb.group({
                category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null),
                available_from_time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                duration: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            });
        };
        this.FormInit();
        var value_item = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = value_item.id;
        this.id = navParams.get('id');
        if (this.id.dicount != null) {
            this.discount_ammt = this.id.dicount.percentage;
        }
        this.add_id = this.id.id.id;
        console.log(this.add_id);
        this.dura_type = this.id.id.duration;
        this.current_amount = this.id.id.cost;
        this.tax_ammt = this.id.tax;
        this.calculate(1);
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    Object.defineProperty(AdvertiseWithUsPage.prototype, "exposure", {
        get: function () { return this.AdvertiseForm.get('duration').value; },
        enumerable: true,
        configurable: true
    });
    AdvertiseWithUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdvertiseWithUsPage');
    };
    AdvertiseWithUsPage.prototype.ngOnInit = function () {
        this.category_list();
        this.get_terms();
        this.order_status();
        this.language_header();
        this.language_field();
    };
    AdvertiseWithUsPage.prototype.language_header = function () {
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
    AdvertiseWithUsPage.prototype.language_field = function () {
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
    // =================================================================================================================
    // CATEGORY LIST
    // ==========================
    AdvertiseWithUsPage.prototype.category_list = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.lang_code = this.code;
        this.api_service.post_data(this.categorylist_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            if (res == 'success') {
                _this.api_service.stopLoader();
                _this.categories = result.categories;
            }
            else {
                _this.api_service.stopLoader();
            }
        }, function (error) {
            _this.api_service.create(error, "top", "error");
            _this.api_service.stopLoader();
        });
    };
    // =================================================================================================================
    // status LIST 
    // ==========================
    AdvertiseWithUsPage.prototype.order_status = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.api_service.post_data(this.orderstatus_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            if (res == 'success') {
                _this.api_service.stopLoader();
                _this.order_status_list = result.data.banner_category;
                console.log(_this.order_status_list);
            }
            else {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.create(error, "top", "error");
            _this.api_service.stopLoader();
        });
    };
    // =========================================================================================================================
    // GET TERMS
    // ======================
    AdvertiseWithUsPage.prototype.get_terms = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.tc_type = 'advertisement';
        this.api_service.post_data(this.terms_condition_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            _this.api_service.stopLoader();
            if (res == 'success') {
                // if (result.data != null) {
                _this.term_condition = result.data;
                console.log(_this.term_condition);
            }
            // }
            // } else {
            //   console.log(this.term_condition);
            // }
        }, function (error) {
            _this.api_service.create(error, "top", "error");
            _this.api_service.stopLoader();
        });
    };
    // ==============================================================================================================================
    AdvertiseWithUsPage.prototype.submit = function () {
        var _this = this;
        console.log('submit');
        if (this.AdvertiseForm.valid) {
            this.data = {};
            this.data = this.AdvertiseForm.value;
            this.data.api_token = this.api_service.api_token;
            this.data.banner_id = this.add_id;
            this.data.user_id = this.customer_id;
            this.data.duration_type = this.dura_type;
            this.data.tax_details = JSON.stringify(this.id.tax);
            this.data.percentage = JSON.stringify(this.id.tax);
            this.data.discount_details = JSON.stringify(this.id.dicount);
            this.data.discount = this.discount;
            this.data.tax = this.total_tax_amount;
            this.data.total = this.actual_price;
            this.data.ad_cost = this.amount;
            this.api_service.post_data(this.link_url, this.data)
                .subscribe(function (result) {
                var res = result.status;
                if (res == 'success') {
                    _this.api_service.stopLoader();
                    _this.api_service.create(result.message, 'top', 'success');
                    _this.navCtrl.setRoot('AdvertisePostPage');
                }
                else {
                    _this.api_service.stopLoader();
                    _this.api_service.create(result.message, 'top', 'error');
                    _this.err_mesg = result.errors.category_id;
                    console.log(_this.err_mesg);
                }
            }, function (error) {
                _this.api_service.create(error, "top", "error");
                _this.api_service.stopLoader();
            });
        }
        else {
            this.validateAllFormFields(this.AdvertiseForm);
        }
    };
    AdvertiseWithUsPage.prototype.PostAd = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Terms and Conditions',
            message: this.term_condition.content,
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('post');
                        if (_this.AdvertiseForm.valid) {
                            _this.data = {};
                            _this.data = _this.AdvertiseForm.value;
                            _this.data.api_token = _this.api_service.api_token;
                            _this.data.banner_id = _this.add_id;
                            _this.data.user_id = _this.customer_id;
                            _this.data.duration_type = _this.dura_type;
                            _this.data.tax_details = JSON.stringify(_this.id.tax);
                            _this.data.percentage = JSON.stringify(_this.id.tax);
                            _this.data.discount_details = JSON.stringify(_this.id.dicount);
                            _this.data.discount = _this.discount;
                            _this.data.tax = _this.total_tax_amount;
                            _this.data.total = _this.actual_price;
                            _this.data.ad_cost = _this.amount;
                            _this.api_service.post_data(_this.link_url, _this.data)
                                .subscribe(function (result) {
                                var res = result.status;
                                if (res == 'success') {
                                    _this.api_service.stopLoader();
                                    _this.api_service.create(result.message, 'top', 'success');
                                    _this.navCtrl.setRoot('AdvertisePostPage');
                                }
                                else {
                                    _this.api_service.stopLoader();
                                    _this.api_service.create(result.message, 'top', 'error');
                                    _this.err_mesg = result.errors.category_id;
                                }
                            }, function (error) {
                                _this.api_service.create(error, "top", "error");
                                _this.api_service.stopLoader();
                            });
                        }
                        else {
                            _this.validateAllFormFields(_this.AdvertiseForm);
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    // ================================================================================================================================
    // CALCULATE
    // =================
    AdvertiseWithUsPage.prototype.calculate = function (number) {
        var _this = this;
        this.amount = this.current_amount * this.AdvertiseForm.value.duration;
        this.total_percentage = 0;
        this.total_tax_amount = 0;
        this.id.tax.forEach(function (element) {
            console.log(element);
            _this.total_percentage = _this.total_percentage + Number(element.percentage);
            console.log(_this.total_percentage);
        });
        console.log(this.total_percentage);
        this.product_price = this.amount / ((this.total_percentage / 100) + 1);
        if (this.discount_ammt != 0 && this.discount_ammt != null) {
            this.discount = (this.discount_ammt / 100) * this.product_price;
            this.sales_price = this.product_price - this.discount;
        }
        else {
            this.sales_price = this.product_price;
        }
        console.log(this.discount);
        this.total_percentage = 0;
        this.total_tax_amount = 0;
        this.id.tax.forEach(function (element) {
            element.percentage_amount = _this.sales_price * (element.percentage / 100);
            _this.total_percentage = _this.total_percentage + Number(element.percentage);
            console.log(element.percentage_amount);
        });
        this.tax_percent = this.total_percentage / 100;
        this.actual_price = (this.tax_percent * this.sales_price) + this.sales_price;
        this.id.tax.forEach(function (element) {
            _this.total_tax_amount = _this.total_tax_amount + element.percentage_amount;
        });
    };
    // ==========================================================================================================================================
    // VALIDATION METHOD
    // =============================
    AdvertiseWithUsPage.prototype.validateAllFormFields = function (AdvertiseForm) {
        var _this = this;
        Object.keys(AdvertiseForm.controls).forEach(function (field) {
            var control = AdvertiseForm.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    AdvertiseWithUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-advertise-with-us',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/advertise-with-us/advertise-with-us.html"*/'<!--\n  Generated template for the AdvertiseWithUsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{languageheader.advertise_with_us}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="AdvertiseForm">\n    <ion-list>\n      <ion-item *ngIf="order_status_list.category_center_horizontal == add_id || order_status_list.category_center_portrait == add_id || order_status_list.category_slider == add_id ">\n      <!-- <ion-item > -->\n\n        <ion-label stacked>{{languagefield.select_category}}</ion-label>\n        <ion-select no-padding id="category" formControlName="category_id">\n          <ion-option [value]="category.id" *ngFor="let category of categories"> {{category.category}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <p err_mg>{{err_mesg}}</p>\n      <ion-item>\n        <ion-label stacked>{{languagefield.preference_contact_time}}</ion-label>\n        <ion-datetime displayFormat=" HH:mm" formControlName="available_from_time" class="form-input">\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{languagefield.requirement_details}}</ion-label>\n        <ion-textarea formControlName="description">\n        </ion-textarea>\n      </ion-item>\n      <ion-item *ngIf="dura_type == \'month\'">\n        <ion-label stacked>{{languagefield.duration}}  ({{dura_type}}) <ion-badge color="primary">{{exposure}}</ion-badge>\n        </ion-label>\n        <ion-range min="1" max="12" color="secondary" pin="true" (ionChange)="calculate($event)"\n          formControlName="duration">\n          <ion-label range-left>1</ion-label>\n          <ion-label range-right>12</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item *ngIf="dura_type == \'day\'">\n        <ion-label stacked>{{languagefield.duration}}  ({{dura_type}}) <ion-badge color="primary">{{exposure}}</ion-badge>\n        </ion-label>\n        <ion-range min="1" max="365" color="secondary" pin="true" (ionChange)="calculate($event)"\n          formControlName="duration">\n          <ion-label range-left>1</ion-label>\n          <ion-label range-right>365</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item *ngIf="dura_type == \'week\'">\n        <ion-label stacked>{{languagefield.duration}}  ({{dura_type}}) <ion-badge color="primary">{{exposure}}</ion-badge>\n        </ion-label>\n        <ion-range min="1" max="52" color="secondary" pin="true" (ionChange)="calculate($event)"\n          formControlName="duration">\n          <ion-label range-left>1</ion-label>\n          <ion-label range-right>52</ion-label>\n        </ion-range>\n      </ion-item>\n      <div class="back_clr">\n        <h5 padding-top>{{languagefield.bill}}</h5>\n        <!-- <ion-row *ngIf="amount != actual_price"> -->\n            <ion-row>\n          <ion-col col-8 padding-left>\n            <p>{{languagefield.original_price}}</p>\n          </ion-col>\n          <ion-col col-4 padding-right>\n            <p text-right>{{amount| number : \'1.2-2\'}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="amount != product_price">\n          <ion-col col-8 padding-left>\n            <p>{{languagefield.cost}}</p>\n          </ion-col>\n          <ion-col col-4 padding-right>\n            <p text-right>{{product_price | number : \'1.2-2\'}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="discount_ammt">\n          <ion-col col-8 padding-left>\n            <p>{{languagefield.Discount}} - {{discount_ammt}} %</p>\n          </ion-col>\n          <ion-col col-4 padding-right>\n            <p text-right>{{discount | number : \'1.2-2\'}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="discount_ammt">\n          <ion-col col-8 padding-left >\n            <p>{{languagefield.price_with_disc}}</p>\n          </ion-col>\n          <ion-col col-4 padding-right>\n            <p text-right>{{sales_price | number : \'1.2-2\'}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let tax of tax_ammt">\n          <ion-col col-8 padding-left>\n            <p> {{languagefield.tax}} - {{tax.tax}}- {{tax.percentage}} %</p>\n          </ion-col>\n          <ion-col col-4 padding-right>\n            <p text-right>{{tax.percentage_amount | number : \'1.2-2\'}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-8 padding-left>\n            <p>{{languagefield.total_price}}</p>\n          </ion-col>\n          <ion-col col-4 padding-right>\n            <p text-right>{{actual_price | number : \'1.0-0\'}}.00</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n  </form>\n  <div class="center" *ngIf="term_condition != null">\n    <button ion-button icon-end class="login_button" tappable (click)="PostAd()" [disabled]="AdvertiseForm.invalid">\n    {{languagefield.send_request}}</button>\n  </div>\n  <div class="center" *ngIf="term_condition == null">\n    <button ion-button icon-end class="login_button" tappable (click)="submit()" [disabled]="AdvertiseForm.invalid">\n      {{languagefield.send_request}}</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/advertise-with-us/advertise-with-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */]])
    ], AdvertiseWithUsPage);
    return AdvertiseWithUsPage;
}());

//# sourceMappingURL=advertise-with-us.js.map

/***/ })

});
//# sourceMappingURL=31.js.map