webpackJsonp([24],{

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailOtpPageModule", function() { return EmailOtpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_otp__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailOtpPageModule = /** @class */ (function () {
    function EmailOtpPageModule() {
    }
    EmailOtpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_otp__["a" /* EmailOtpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_otp__["a" /* EmailOtpPage */]),
            ],
        })
    ], EmailOtpPageModule);
    return EmailOtpPageModule;
}());

//# sourceMappingURL=email-otp.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailOtpPage; });
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




// declare var SMSReceive: any;
/**
 * Generated class for the EmailOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailOtpPage = /** @class */ (function () {
    // ==========================================================================================================================
    function EmailOtpPage(navCtrl, navParams, formBuilder, api_service, viewCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api_service = api_service;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.verifyUrl = 'user_mail';
        this.OTP = '';
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // VALIDATION MESSAGES
        // ===============================
        this.validation_messages = {
            'otp': [
                { type: 'max', message: 'Maximium 6 Letters Only Allowed' },
                { type: 'min', message: 'Maximium 6 Letters Only Allowed' }
            ]
        };
        // ===============================================================================================================================
        // OTP VERIFICATION
        // =================================
        this.otp_verify = function () {
            if (_this.verifyForm.valid) {
                _this.data.otp = _this.verifyForm.value.otp;
                _this.api_service.post_data(_this.verifyUrl, _this.data)
                    .subscribe(function (result) {
                    if (result.status == 'Success') {
                        _this.api_service.stopLoader();
                        _this.api_service.create(result.message, 'top', 'success');
                        _this.navCtrl.setRoot('MyAccountPage');
                    }
                    else {
                        _this.api_service.stopLoader();
                        _this.api_service.create(result.message, 'top', 'error');
                    }
                }, function (error) {
                    _this.api_service.stopLoader();
                    _this.api_service.create(error, 'top', 'error');
                    console.log(error);
                });
            }
        };
        this.data = this.navParams.data.data;
        this.verifyForm = this.formBuilder.group({
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].max(999999), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].min(100000)]),
        });
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.lang_code = value;
        }
    }
    // ==============================================================================================================================
    EmailOtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailOtpPage');
        this.language_field();
        if (this.platform.is('android')) {
            // this.start();
        }
    };
    EmailOtpPage.prototype.start = function () {
        var _this = this;
        var otp_message = "OTP Will Be Recieved Within 5 minutes";
        this.api_service.create(otp_message, 'top', 'success');
        SMSRetriever.startWatch(function (result) {
            console.info(result);
            document.addEventListener('onSMSArrive', function (args) {
                // SMS arrived, get its contents
                console.info(args.message);
                if (args) {
                    var IncomingSMS = args;
                    _this.processSMS(IncomingSMS);
                }
                // To Do: Extract the received one-time code and verify it on your server
            });
        }, function (error) {
            _this.api_service.create(error, 'bottom', 'success');
        });
    };
    EmailOtpPage.prototype.processSMS = function (data) {
        // Check SMS for a specific string sequence to identify it is you SMS
        // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
        // In this case, I am keeping the first 6 letters as OTP
        var message = data.message;
        if (message != '') {
            var matches = message.match(/(\d+)/);
            if (matches) {
                this.OTP = matches[0];
                this.verifyForm.get('otp').patchValue(this.OTP);
                this.otp_verify();
            }
            // this.stop();
        }
    };
    EmailOtpPage.prototype.mobile_verify = function () {
        this.navCtrl.pop();
    };
    // ======================================================================================================================================
    EmailOtpPage.prototype.language_field = function () {
        var _this = this;
        this.api_service.get_list(this.language_field_url + '?api_token=' + this.api_service.api_token + '&lang_code=' + this.lang_code).subscribe(function (result) {
            _this.api_service.stopLoader();
            if (result.status == 'success') {
                _this.api_service.stopLoader();
                _this.languagefield = result.field_list;
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
    EmailOtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-email-otp',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/email-otp/email-otp.html"*/'<!--\n  Generated template for the EmailOtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="sift">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 logo>\n        <h2 class="logotxt">  Sowmiyas Kitchen </h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <!-- ======================================================= OTP VERIFICATION STARTS HERE ================================================ -->\n    <form [formGroup]="verifyForm"   class="otpcard" relative>\n      <div class="log_form">\n        <ion-card-content>\n          <div class="details">\n            <ion-label  *ngIf="!isClick" >OTP has been sent to your<br> Mobile Number </ion-label>\n            <ion-label  *ngIf="isClick">Your OTP Timer has been <br> expired</ion-label>\n          </div>\n          <ion-list>					\n            <div class="equal_height">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-input type="text" class="form_input" formControlName="otp" minlength="1" maxlength="1"  min="0" max="9" pattern="[0-9]{1}" autocomplete="one-time-code"></ion-input>\n                  </ion-col>\n                  <ion-col>\n                    <ion-input type="text" class="form_input" formControlName="otp" minlength="1" maxlength="1"  min="0" max="9" pattern="[0-9]{1}" autocomplete="one-time-code"></ion-input>\n                  </ion-col>\n                  <ion-col>\n                    <ion-input type="text" class="form_input" formControlName="otp" minlength="1" maxlength="1"  min="0" max="9" pattern="[0-9]{1}" autocomplete="one-time-code"></ion-input>\n                  </ion-col>\n                  <ion-col>\n                    <ion-input type="text" class="form_input" formControlName="otp" minlength="1" maxlength="1"  min="0" max="9" pattern="[0-9]{1}" autocomplete="one-time-code"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              \n            </div>\n          </ion-list>\n          <ion-row>\n            <ion-col size="4" offset="4">\n              <div class="size" text-center>\n                <!-- <ion-button *ngIf="isClick" color="btn-yellow" size="medium" (click)="rsendOTP(mobileno)" btn-yellow\n                  class="mt-10 btn-height1">Resend\n                </ion-button> -->\n                <button ion-button *ngIf="isClick"  class="dark" tappable (click)="otp_verify()">Resend </button>\n              </div>\n              <div class="size" text-center>\n                <!-- <ion-button (click)="validateOTP(mobileno,enteredOTP)" size="medium"  *ngIf="!isClick" color="btn-yellow" \n                  btn-yellow class="mt-10 btn-height1">Verify\n                </ion-button> -->\n                <button ion-button *ngIf="!isClick"  class="dark" tappable (click)="otp_verify()">Verify </button>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class="center">\n              <!-- <button ion-button icon-end class="login_button" tappable (click)="mobile_verify()">\n              </button> -->\n              <!-- <button ion-button  class="dark" tappable (click)="otp_verify()" >{{languagefield.submit}} </button> -->\n            <!-- <button ion-button icon-end class="login_button" tappable (click)="otp_verify()"\n              [disabled]="verifyForm.invalid">{{languagefield.submit}} </button> -->\n          </div>\n        </ion-card-content>\n      </div>\n    </form>\n    <!-- ======================================================= OTP VERIFICATION ENDS HERE ================================================ -->\n</ion-content>\n\n\n<!-- <ion-content style="overflow-y: hidden;">\n  <div class="inner-div">\n    <ion-grid>\n      <ion-row>\n        <ion-col size="1"></ion-col>\n        <ion-col align-self-center>\n          <ion-img src="../../assets/image/logo-removebg.png" class="mx-auto mt-3 w-45"></ion-img>\n          <div class="details ion-text-center">\n            <ion-label *ngIf="!isClick">OTP has been sent to your<br> Mobile Number and Email ID</ion-label>\n            <ion-label *ngIf="isClick">Your OTP Timer has been <br> expired</ion-label>\n          </div>\n          <div class="detail" align-self-center>\n            <p *ngIf="!isClick" #countdown [config]="config" (event)="handleEvent($event)"></p>\n          </div>\n        </ion-col>\n        <ion-col size="1"></ion-col>\n      </ion-row>\n      <ion-row class="mt-5">\n        <ion-col>\n          <div class="row otp-div">\n            <ion-input class="otp-input" type="tel" #otp1 required="true" maxLength="1" [disabled]="otpDisabled"\n              [(ngModel)]="OTP.first" (keyup)="otpController($event,otp2,\'\')">\n            </ion-input>\n            <ion-input class="otp-input" type="tel" #otp2 required="true" maxLength="1" [disabled]="otpDisabled"\n              [(ngModel)]="OTP.second" (keyup)="otpController($event,otp3,otp1)">\n            </ion-input>\n            <ion-input class="otp-input" type="tel" #otp3 required="true" maxLength="1" [disabled]="otpDisabled"\n              [(ngModel)]="OTP.third" (keyup)="otpController($event,otp4,otp2)">\n            </ion-input>\n            <ion-input class="otp-input" type="tel" #otp4 required="true" maxLength="1" [disabled]="otpDisabled"\n              [(ngModel)]="OTP.fourth" (keyup)="otpController($event,otp5,otp3)">\n            </ion-input>\n            <ion-input class="otp-input" type="tel" #otp5 required="true" maxLength="1" [disabled]="otpDisabled"\n              [(ngModel)]="OTP.fifth" (keyup)="otpController($event,null,otp4)">\n            </ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size="4" offset="4">\n          <div class="size" text-center>\n            <button *ngIf="isClick" color="btn-yellow" size="medium" (click)="rsendOTP(mobileno)" btn-yellow\n              class="mt-10 btn-height1">Resend\n            </button>\n          </div>\n          <div class="size" text-center>\n            <button (click)="validateOTP(mobileno,enteredOTP)" size="medium"  *ngIf="!isClick" color="btn-yellow" \n              btn-yellow class="mt-10 btn-height1">Verify\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content> -->'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/email-otp/email-otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */]])
    ], EmailOtpPage);
    return EmailOtpPage;
}());

//# sourceMappingURL=email-otp.js.map

/***/ })

});
//# sourceMappingURL=24.js.map