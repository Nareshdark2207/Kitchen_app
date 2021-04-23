webpackJsonp([25],{

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmailPageModule", function() { return EditEmailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_email__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditEmailPageModule = /** @class */ (function () {
    function EditEmailPageModule() {
    }
    EditEmailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_email__["a" /* EditEmailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_email__["a" /* EditEmailPage */]),
            ],
        })
    ], EditEmailPageModule);
    return EditEmailPageModule;
}());

//# sourceMappingURL=edit-email.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmailPage; });
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




/**
 * Generated class for the EditEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditEmailPage = /** @class */ (function () {
    function EditEmailPage(navCtrl, navParams, formBuilder, api_service, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api_service = api_service;
        this.modalCtrl = modalCtrl;
        this.profile_url = 'user_profile';
        this.profile_data = {};
        this.disabled = true;
        this.emailSubmitUrl = 'user_mail';
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // ================================================================================================================================
        // VALIDATION MESSAGES
        // ==============================
        this.validation_messages = {
            'customer_email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Email is not valid' }
            ],
        };
        // EMAIL EDIT
        // ========================
        this.emailSubmit = function () {
            var updated_data = {};
            updated_data.api_token = _this.api_service.api_token;
            updated_data.user_id = _this.customer_id;
            updated_data.customer_id = _this.cus_id;
            updated_data.email = _this.customer_profile_form.value.customer_email;
            _this.api_service.post_data(_this.emailSubmitUrl, updated_data)
                .subscribe(function (result) {
                if (result.status == 'Success') {
                    _this.api_service.stopLoader();
                    _this.show = true;
                    var myModal = _this.modalCtrl.create('EmailOtpPage', { data: updated_data });
                    myModal.present();
                }
                else {
                    _this.api_service.stopLoader();
                    _this.api_service.create(result.errors.email[0], 'top', 'error');
                    _this.show = false;
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
                console.log(error);
            });
        };
        // =============================================================================================================================================
        this.hide = function () {
            _this.show = false;
            _this.disabled = false;
        };
        var customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = customer_data.id;
        this.cus_id = customer_data.customer_id;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    EditEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditEmailPage');
    };
    EditEmailPage.prototype.ngOnInit = function () {
        this.customer_profile();
        this.get_profile();
        this.language_header();
        this.language_field();
    };
    // =================================================================================================================================
    // CUSTOMER PROFILE FORMINITIATE
    // =======================================
    EditEmailPage.prototype.customer_profile = function () {
        this.customer_profile_form = this.formBuilder.group({
            customer_email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}]*')]),
        });
    };
    // ==================================================================================================================================
    // GET PROFILE DETAILS
    // ============================
    EditEmailPage.prototype.get_profile = function () {
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
                _this.customer_profile_form.patchValue({
                    customer_email: _this.profile_data.email,
                });
                _this.show = true;
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
            console.log(error);
        });
    };
    EditEmailPage.prototype.language_header = function () {
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
    EditEmailPage.prototype.language_field = function () {
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
    EditEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-email',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/edit-email/edit-email.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{languageheader.edit_email}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-avatar profile_img>\n    <img src="assets/imgs/empty_dp.png" *ngIf="profile_data.main_image == null" alt="image not found">\n    <img src="{{img_path}}{{profile_data.main_image}}" *ngIf="profile_data.main_image !=null">\n    <h4>{{languagefield.upload_photo}}</h4>\n    <!-- <ion-icon name="camera" icon item-right tappable (click)="upload_image()"></ion-icon> -->\n  </ion-avatar>\n  <form [formGroup]="customer_profile_form">\n    <ion-list>\n    <ion-item>\n        <ion-label stacked>{{languagefield.email}}</ion-label>\n        <ion-input class="form-input" formControlName="customer_email" type="text" placeholder="Enter your email id" [disabled]="show">\n        </ion-input>\n      </ion-item>\n     \n      <div class="validation-errors">\n        <div *ngFor="let validation of validation_messages.customer_email">\n          <ion-item class="error-message"\n            *ngIf="customer_profile_form.get(\'customer_email\').hasError(validation.type)  && (customer_profile_form.get(\'customer_email\').dirty || customer_profile_form.get(\'customer_email\').touched)">\n            {{ validation.message }}\n          </ion-item>\n        </div>\n      </div>\n    </ion-list>\n    <div class="center">\n    <button ion-button block tappable class="login_button" (click)="hide()" [disabled]="customer_profile_form.valid" *ngIf="disabled">{{languagefield.edit}}</button>\n    <button ion-button block tappable class="login_button" (click)="emailSubmit()"  *ngIf="!disabled">{{languagefield.update}}</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/edit-email/edit-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], EditEmailPage);
    return EditEmailPage;
}());

//# sourceMappingURL=edit-email.js.map

/***/ })

});
//# sourceMappingURL=25.js.map