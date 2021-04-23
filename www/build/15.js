webpackJsonp([15],{

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(866);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
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




var PaymentPage = /** @class */ (function () {
    // ========================================================================================================================================
    function PaymentPage(navCtrl, navParams, Fb, api_service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Fb = Fb;
        this.api_service = api_service;
        this.payment_url = 'post_payment';
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        /// ===================================================================================================================================
        // VALIDATION MESSAGES
        // =====================
        this.validation_messages = {
            'amount': [
                { type: 'required', message: 'Amount is Required' }
            ],
            'reference_number': [
                { type: 'required', message: 'Reference number time is Required' }
            ],
            'description': [
                { type: 'required', message: 'Description is Required' }
            ]
        };
        // ==============================================================================================================================
        // FORM INITIATE
        // =======================
        this.FormInit = function () {
            _this.paymentForm = _this.Fb.group({
                amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
                reference_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
                description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            });
        };
        var value_item = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = value_item.id;
        this.value = this.navParams.get('order_details');
        this.id = this.value.id;
        this.type = this.value.types;
        this.order_id = this.value.Order_id;
        this.total = this.value.total;
        this.due_amount = this.value.due_amt;
        this.paid_amount = (this.total) - (this.due_amount);
        this.FormInit();
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
    };
    PaymentPage.prototype.ngOnInit = function () {
        this.language_field();
    };
    // =======================================================================================================================================
    // PAYMENT SUBMIT
    // ==============================
    PaymentPage.prototype.payment_submit = function () {
        var _this = this;
        if (this.paymentForm.valid) {
            this.data = {};
            this.api_token = this.api_service.api_token;
            this.data = this.paymentForm.value;
            this.data.api_token = this.api_token;
            this.data.user_id = this.customer_id;
            this.data.id = this.id;
            this.data.type = this.type;
            if (this.paymentForm.value.amount <= this.total) {
                this.api_service.post_data(this.payment_url, this.data)
                    .subscribe(function (result) {
                    var res = result.status;
                    if (res == "success") {
                        _this.api_service.stopLoader();
                        if (_this.data.type == 'post' || _this.data.type == 'ad_request' || _this.data.type == 'home_post') {
                            _this.navCtrl.setRoot('MyOrdersPage');
                        }
                        else {
                            _this.navCtrl.setRoot('RenewalPage');
                        }
                    }
                    else {
                        _this.api_service.stopLoader();
                        _this.error_mesg = result.errors.reference_number[0];
                        // this.error_mesg = result.status;
                        console.log(_this.error_mesg);
                    }
                }, function (error) {
                    _this.api_service.stopLoader();
                    _this.api_service.create(error, 'top', 'error');
                    console.log(error);
                });
            }
            else {
                this.api_service.create("Price Amount Should Not Be Greater Than Total Price", 'top', 'error');
            }
        }
        else {
            this.validateAllFormFields(this.paymentForm);
        }
    };
    // ==============================================================================================================================================
    // VALIDATION METHOD
    // =============================
    PaymentPage.prototype.validateAllFormFields = function (paymentForm) {
        var _this = this;
        Object.keys(paymentForm.controls).forEach(function (field) {
            var control = paymentForm.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    // ==================================================================================================================================
    PaymentPage.prototype.language_field = function () {
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
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/payment/payment.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{languagefield.payment}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="paymentForm">\n  <ion-list>\n    <h5>{{languagefield.order_id}} : {{order_id}}</h5>\n      <h5>{{languagefield.total_price}} : {{total}}</h5>\n      <h5 *ngIf="due_amount">Paid Amount : {{paid_amount | number : \'1.2-2\'}}</h5>\n      <h5 *ngIf="due_amount">Due Amount : {{due_amount}}</h5>\n   <ion-item>\n      <ion-label stacked>{{languagefield.price_amount}}</ion-label>\n      <ion-input class="form_input" type="text" formControlName="amount"></ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-label stacked>{{languagefield.ref_no}}</ion-label>\n        <ion-input class="form_input" type="text" formControlName="reference_number"></ion-input>\n      </ion-item>\n      <p style="color: red;">{{error_mesg}}</p>\n      <ion-item>\n        <ion-label stacked>{{languagefield.description}}</ion-label>\n        <ion-input class="form_input" type="text" formControlName="description"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div text-center>\n      <button ion-button icon-end class="add_click" tappable (click)="payment_submit()">{{languagefield.submit}}</button>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=15.js.map