webpackJsonp([28],{

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
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




var ChangePasswordPage = /** @class */ (function () {
    // ================================================================================================================================================
    function ChangePasswordPage(navCtrl, navParams, api_service, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api_service = api_service;
        this.formBuilder = formBuilder;
        this.input_password = 'password';
        this.change_password_url = 'change_password';
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // ==============================================================================================================================================
        // VALIDATION MESSAGES
        // ==============================
        this.validation_messages = {
            'old_password': [
                { type: 'required', message: 'Old Password is required.' },
            ],
            'new_password': [
                { type: 'required', message: 'New Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' },
            ],
            'confirm_password': [
                { type: 'passwordNotMatch', message: 'Confirm Password Not Matching.' },
            ],
        };
        var customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = customer_data.id;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
    };
    ChangePasswordPage.prototype.ngOnInit = function () {
        this.change_password_init();
        this.language_header();
        this.language_field();
    };
    // ==================================================================================================================================================
    // CHANGE PASSWORD INITIATE
    // ===================================
    ChangePasswordPage.prototype.change_password_init = function () {
        this.change_password_form = this.formBuilder.group({
            old_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            new_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            ])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, this.passwordMatcher.bind(this)]),
        });
    };
    // confirm new password validator
    ChangePasswordPage.prototype.passwordMatcher = function (control) {
        if (this.change_password_form &&
            (control.value !== this.change_password_form.controls.new_password.value)) {
            return { passwordNotMatch: true };
        }
        return null;
    };
    // =====================================================================================================================================================
    // SHOW PASSWORD
    // ====================
    ChangePasswordPage.prototype.showpassword = function () {
        this.input_password = 'text';
    };
    // HIDE PASSWORD
    // =====================
    ChangePasswordPage.prototype.hidepassword = function (event) {
        console.log(event.checked);
        if (event.checked == true) {
            this.input_password = 'text';
        }
        else {
            this.input_password = 'password';
        }
    };
    // =====================================================================================================================================================
    // SUBMIT CHANGE PASSWORD 
    // ===============================
    ChangePasswordPage.prototype.sub_form = function () {
        var _this = this;
        if (this.change_password_form.valid) {
            var updated_password = {};
            updated_password.api_token = this.api_service.api_token;
            updated_password.user_id = this.customer_id;
            updated_password.old_password = this.change_password_form.value.old_password;
            updated_password.password = this.change_password_form.value.new_password;
            updated_password.confirm_password = this.change_password_form.value.confirm_password;
            this.api_service.post_data(this.change_password_url, updated_password).subscribe(function (result) {
                if (result.status == 'success') {
                    _this.api_service.stopLoader();
                    _this.api_service.create(result.message, 'top', 'success');
                    _this.reset_form();
                }
                else {
                    _this.api_service.create(result.message, 'top', 'error');
                    _this.api_service.stopLoader();
                    _this.err_messg = result.errors.confirm_password[0];
                    console.log(_this.err_messg);
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
            });
        }
        else {
            this.validateAllFormFields(this.change_password_form);
        }
    };
    // ==========================================================================================================================================
    // RESET FORM
    // =====================
    ChangePasswordPage.prototype.reset_form = function () {
        this.change_password_form.reset();
    };
    // =============================================================================================================================================
    // VALIDATION METHOD
    // ================================
    ChangePasswordPage.prototype.validateAllFormFields = function (form) {
        var _this = this;
        Object.keys(form.controls).forEach(function (field) {
            var control = form.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ChangePasswordPage.prototype.language_header = function () {
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
    ChangePasswordPage.prototype.language_field = function () {
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
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/change-password/change-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{languageheader.change_password}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <form [formGroup]="change_password_form">\n    <ion-list mode="ios" inset>\n      <ion-item mode="ios">\n        <ion-input class="lock text-input palce_sizee" clearOnEdit="false" type="{{input_password}}" mode="md" placeholder={{languagefield.current_pwd}}\n          formControlName="old_password"></ion-input>\n        <!-- <ion-icon name="eye-off" item-right tappable *ngIf="input_password == \'password\'" (click)="showpassword()">\n        </ion-icon>\n        <ion-icon name="eye" item-right tappable *ngIf="input_password == \'text\'" (click)="hidepassword()"></ion-icon> -->\n      </ion-item>\n      <div class="validation-errors" >\n        <div *ngFor="let validation of validation_messages.old_password">\n          <ion-item class="error-message" err_msg\n            *ngIf="change_password_form.get(\'old_password\').hasError(validation.type) && (change_password_form.get(\'old_password\').dirty || change_password_form.get(\'old_password\').touched)">\n            {{ validation.message }}\n          </ion-item>\n        </div>\n      </div>\n    </ion-list>\n    <ion-list mode="ios" inset>\n      <ion-item mode="ios">\n        <ion-input class="lock text-input palce_sizee" clearOnEdit="false" type="{{input_password}}" mode="md" placeholder={{languagefield.new_pwd}}\n          formControlName="new_password"></ion-input>\n        <!-- <ion-icon name="eye-off" item-right tappable *ngIf="input_password == \'password\'" (click)="showpassword()">\n        </ion-icon> -->\n        <!-- <ion-icon name="eye" item-right tappable *ngIf="input_password == \'text\'" (click)="hidepassword()"></ion-icon> -->\n      </ion-item>\n      <div class="validation-errors"  text-wrap>\n        <div *ngFor="let validation of validation_messages.new_password">\n          <ion-item class="error-message" err_msg\n            *ngIf="change_password_form.get(\'new_password\').hasError(validation.type) && (change_password_form.get(\'new_password\').dirty || change_password_form.get(\'new_password\').touched)">\n            {{ validation.message }}\n          </ion-item>\n        </div>\n      </div>\n    </ion-list>\n    <ion-list mode="ios" inset>\n      <ion-item mode="ios">\n        <ion-input class="lock text-input palce_sizee" clearOnEdit="false" type="{{input_password}}" mode="md" placeholder={{languagefield.confirm_pwd}}\n          formControlName="confirm_password"></ion-input>\n        <!-- <ion-icon name="eye-off" item-right tappable *ngIf="input_password == \'password\'" (click)="showpassword()">\n        </ion-icon> -->\n        <!-- <ion-icon name="eye" item-right tappable *ngIf="input_password == \'text\'" (click)="hidepassword()"></ion-icon> -->\n      </ion-item>\n      <div class="validation-errors" >\n        <div *ngFor="let validation of validation_messages.confirm_password" text>\n          <ion-item class="error-message"err_msg\n            *ngIf="change_password_form.get(\'confirm_password\').hasError(validation.type) && (change_password_form.get(\'confirm_password\').dirty || change_password_form.get(\'confirm_password\').touched)">\n            {{ validation.message }}\n          </ion-item>\n        </div>\n      </div>\n    </ion-list>\n    <p err_msg>{{err_messg}}</p>\n      <div class="center" text-center>\n          <ion-item padding checkbox no-line>\n              <ion-label *ngIf="input_password ==  \'password\'" [ngClass]="{\'font_family_1_ta\':code == \'ta\'}">{{languagefield.show_password}}</ion-label>\n              <ion-label *ngIf="input_password ==  \'text\'" [ngClass]="{\'font_family_1_ta\':code == \'ta\'}">{{languagefield.hide_pwd}}</ion-label>\n              <ion-checkbox checked="false" (ionChange)="hidepassword($event)"></ion-checkbox>\n            </ion-item>\n    <!-- <ion-buttons start text-center> -->\n      <button ion-button icon-end tappable class="login_button" (click)="sub_form()">{{languagefield.submit}}</button>\n      <button ion-button icon-end tappable clear class="reset_button" (click)="reset_form()">{{languagefield.reset}}</button>\n    <!-- </ion-buttons> -->\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=28.js.map