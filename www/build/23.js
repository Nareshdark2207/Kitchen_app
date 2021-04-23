webpackJsonp([23],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function() { return ForgetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget__ = __webpack_require__(876);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetPageModule = /** @class */ (function () {
    function ForgetPageModule() {
    }
    ForgetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forget__["a" /* ForgetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forget__["a" /* ForgetPage */]),
            ],
        })
    ], ForgetPageModule);
    return ForgetPageModule;
}());

//# sourceMappingURL=forget.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetPage = /** @class */ (function () {
    // ==================================================================================================================================================
    function ForgetPage(navCtrl, navParams, menuCtrl, keyboard, formBuilder, api_service, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.keyboard = keyboard;
        this.formBuilder = formBuilder;
        this.api_service = api_service;
        this.platform = platform;
        this.verify_user_url = 'verify_user';
        this.otp_verfication = 'otp_verification';
        this.reset_password_url = 'reset_password';
        this.input_password = 'password';
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // ==========================================================================================================================================
        // VALIDATION MESSAGES
        // ===============================
        this.validation_messages = {
            'email_id': [
                { type: 'required', message: 'Mobile Number | Email ID Is Required ' },
                { type: 'pattern', message: 'Email ID Is Invalid' }
            ],
            'password': [
                { type: 'required', message: 'Password Is Required.' },
                { type: 'minlength', message: 'Password Must Be At Least 6 Characters Long.' },
            ],
            'confirm_password': [
                { type: 'passwordNotMatch', message: 'Confirm Password Not Matching.' }
            ],
            'otp': [
                { type: 'required', message: 'OTP Is Required ' },
                { type: 'minlength', message: 'Enter The 6 Digit Number' },
                { type: 'maxlength', message: 'Enter The 6 Digit Number Only' },
            ]
        };
        this.menuCtrl.swipeEnable(false);
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    ForgetPage.prototype.updatesowpass = function (data) {
        if (data.value == true) {
            this.input_password = 'text';
            this.show_password = true;
        }
        else if (data.value == false) {
            this.input_password = 'password';
            this.show_password = false;
        }
    };
    ForgetPage.prototype.ngOnInit = function () {
        this.show_password = false;
        this.login_form_init();
        this.language_field();
    };
    ForgetPage.prototype.ionViewDidLoad = function () {
        this.mobile_detail = true;
    };
    ForgetPage.prototype.keyboardCheck = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.resize();
        }, 80);
        if (this.platform.is('cordova')) {
            return !this.keyboard.isVisible;
        }
        else {
            return true;
        }
    };
    // ====================================================================================================================================
    // FORM INITIATE
    // =========================
    ForgetPage.prototype.login_form_init = function () {
        this.forgotForm = this.formBuilder.group({
            email_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
        });
        this.verifyForm = this.formBuilder.group({
            otp: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
        });
        this.passwordForm = this.formBuilder.group({
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
            ])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, this.passwordMatcher.bind(this)]),
            show_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    };
    // confirm new password validator
    ForgetPage.prototype.passwordMatcher = function (control) {
        if (this.passwordForm &&
            (control.value !== this.passwordForm.controls.password.value)) {
            return { passwordNotMatch: true };
        }
        return null;
    };
    // =====================================================================================================================================
    // GET OTP
    // =================
    ForgetPage.prototype.mobile_verify = function () {
        var _this = this;
        if (this.forgotForm.valid) {
            var data = {};
            data.api_token = this.api_service.api_token;
            data.email = this.forgotForm.value.email_id;
            this.api_service.post_data(this.verify_user_url, data)
                .subscribe(function (result) {
                var res = result.status;
                _this.api_service.stopLoader();
                if (res == 'success' || res == 'Success') {
                    _this.mobile_detail = false;
                    _this.OTP_detail = true;
                }
                else {
                    _this.api_service.create(result.message, 'top', 'error');
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
            });
        }
        else {
            this.validateAllFormFields(this.forgotForm);
        }
    };
    // =============================================================================================================================================
    // VERIFY OTP
    // ===================
    ForgetPage.prototype.otp_verify = function () {
        var _this = this;
        if (this.verifyForm.valid) {
            var data = {};
            data.api_token = this.api_service.api_token;
            data.email = this.forgotForm.value.email_id;
            data.otp = this.verifyForm.value.otp;
            this.api_service.post_data(this.otp_verfication, data)
                .subscribe(function (result) {
                if (result.status == 'success' || result.status == 'Success') {
                    _this.api_service.stopLoader();
                    _this.OTP_detail = false;
                    _this.password_detail = true;
                    _this.user_id = result.user_id;
                }
                else {
                    _this.api_service.stopLoader();
                    _this.api_service.create(result.message, 'top', 'error');
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
            });
        }
        else {
            this.validateAllFormFields(this.verifyForm);
        }
    };
    // ==============================================================================================================================================
    // RESET THE PASSWORD
    // ===============================
    ForgetPage.prototype.password_verify = function () {
        var _this = this;
        if (this.passwordForm.value.password == this.passwordForm.value.confirm_password) {
            if (this.passwordForm.valid) {
                var data = {};
                data.api_token = this.api_service.api_token;
                data.password = this.passwordForm.value.password;
                data.password_confirmation = this.passwordForm.value.confirm_password;
                data.user_id = this.user_id;
                this.api_service.post_data(this.reset_password_url, data)
                    .subscribe(function (result) {
                    var res = result.status;
                    if (res == 'success' || res == 'Success') {
                        _this.api_service.stopLoader();
                        _this.navCtrl.setRoot('LoginPage');
                    }
                    else {
                        _this.api_service.create(result.message, 'top', 'error');
                        _this.api_service.stopLoader();
                    }
                }, function (error) {
                    _this.api_service.stopLoader();
                    _this.api_service.create(error, 'top', 'error');
                });
            }
            else {
                this.validateAllFormFields(this.passwordForm);
            }
        }
        else {
            this.api_service.create('Confirm Password Is Not Matched', 'top', 'error');
        }
    };
    // ===========================================================================================================================================
    // NAVIGATE TO LOGIN PAGE
    // ===================================
    ForgetPage.prototype.toLogin = function () {
        this.navCtrl.pop();
    };
    // =============================================================================================================================================
    // VALIDATION METHODS
    // =============================
    ForgetPage.prototype.validateAllFormFields = function (forgotForm) {
        var _this = this;
        Object.keys(forgotForm.controls).forEach(function (field) {
            var control = forgotForm.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    // ================================================================================================================================================
    ForgetPage.prototype.language_field = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.lang_code = this.code;
        this.api_service.post_data(this.language_field_url, this.data)
            .subscribe(function (result) {
            _this.api_service.stopLoader();
            if (result.status == 'success') {
                _this.languagefield = result.field_list;
            }
            else {
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], ForgetPage.prototype, "content", void 0);
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/forget/forget.html"*/'\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 logo>\n        <img class="img_logo" src="assets/imgs/logo-01.png" alt="Eastern Deals">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- ======================================================= FORGOT PASSWORD STARTS HERE===================================================-->\n  <form [formGroup]="forgotForm" *ngIf="mobile_detail" relative>\n    <ion-card class="card_back">\n      <ion-card-content>\n        <ion-card-title [ngClass]="{\'font_family_ta\':code == \'ta\'}">{{languagefield.forgot_pwd}}</ion-card-title>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="log_form">\n      <ion-card-content>\n        <ion-list>\n          <div class="equal_height">\n            <ion-item class="log_form_item">\n              <ion-label stacked>{{languagefield.contact_number}} / {{languagefield.email}}</ion-label>\n              <ion-input type="text" class="form_input" formControlName="email_id"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <div *ngFor="let validation of validation_messages.email_id">\n                <ion-item class="error-message" err_mesg\n                  *ngIf="forgotForm.get(\'email_id\').hasError(validation.type) && (forgotForm.get(\'email_id\').dirty || forgotForm.get(\'email_id\').touched)">\n                  {{ validation.message }}\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </ion-list>\n        <div class="center">\n          <button ion-button icon-end class="login_button" tappable (click)="mobile_verify()"\n            [disabled]="forgotForm.invalid">{{languagefield.submit}} </button></div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n  <!-- ======================================================= FORGOT PASSWORD ENDS HERE ===================================================-->\n  <!-- ======================================================= OTP VERIFICATION STARTS HERE ================================================-->\n  <form [formGroup]="verifyForm" *ngIf="OTP_detail" relative>\n    <ion-card class="card_back">\n      <ion-card-content>\n        <ion-card-title [ngClass]="{\'font_family_ta\':code == \'ta\'}">{{languagefield.forgot_pwd}}</ion-card-title>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="log_form">\n      <ion-card-content>\n        <p> You will get OTP to your registered MObile Number or email ID.Enter the OTP below.</p>\n        <ion-list>\n          <div class="equal_height">\n            <ion-item class="log_form_item">\n              <ion-label stacked>{{languagefield.otp}}</ion-label>\n              <ion-input type="number" class="form_input" formControlName="otp"  minlength="6" maxlength="6"></ion-input>\n            </ion-item>\n          </div>\n        </ion-list>\n        <div class="center">\n          <button ion-button icon-end class="login_button" tappable (click)="otp_verify()"\n            [disabled]="verifyForm.invalid">{{languagefield.submit}} </button></div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n  <!-- ======================================================= OTP VERIFICATION ENDS HERE ================================================-->\n  <!-- ======================================================= RESET PASSWORD STARTS HERE ================================================-->\n  <form [formGroup]="passwordForm" *ngIf="password_detail" relative>\n    <ion-card class="card_back">\n      <ion-card-content>\n        <ion-card-title [ngClass]="{\'font_family_ta\':code == \'ta\'}">{{languagefield.forgot_pwd}}</ion-card-title>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="log_form">\n      <ion-card-content>\n        <ion-list>\n          <div class="equal_height">\n            <ion-item class="log_form_item">\n              <ion-label stacked>{{languagefield.new_pwd}}</ion-label>\n              <ion-input type="{{input_password}}" class="form_input" formControlName="password"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <div *ngFor="let validation of validation_messages.password">\n                <ion-item class="error-message" err_mesg\n                  *ngIf="passwordForm.get(\'password\').hasError(validation.type) && (passwordForm.get(\'password\').dirty || passwordForm.get(\'password\').touched)">\n                  {{ validation.message }}\n                </ion-item>\n              </div>\n            </div>\n          </div>\n          <div class="equal_height">\n            <ion-item class="log_form_item">\n              <ion-label stacked>{{languagefield.confirm_pwd}}</ion-label>\n              <ion-input type="{{input_password}}" class="form_input" formControlName="confirm_password"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <div *ngFor="let validation of validation_messages.confirm_password" >\n                <ion-item class="error-message" err_mesg\n                  *ngIf="passwordForm.get(\'confirm_password\').hasError(validation.type) && (passwordForm.get(\'confirm_password\').dirty || passwordForm.get(\'confirm_password\').touched)">\n                  {{ validation.message }}\n                </ion-item>\n              </div>\n            </div>\n          </div>\n          <ion-item show_password class="val">\n            <ion-label *ngIf="!show_password">{{languagefield.show_password}}</ion-label>\n            <ion-label *ngIf="show_password">{{languagefield.hide_pwd}}</ion-label>\n            <ion-checkbox  [(ngModel)]="show_password" (ionChange)="updatesowpass($event)"\n              formControlName="show_password"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <div class="center">\n          <button ion-button icon-end class="login_button" tappable (click)="password_verify()"\n            [disabled]="passwordForm.invalid">{{languagefield.submit}} </button></div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n  <!-- ======================================================= RESET PASSWORD ENDS HERE ================================================-->\n</ion-content>\n<ion-footer no-border *ngIf="keyboardCheck()">\n  <div class="forgot" tappable (click)="toLogin()">{{languagefield.login}}</div>\n</ion-footer>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/forget/forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Platform */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ })

});
//# sourceMappingURL=23.js.map