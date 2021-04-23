webpackJsonp([21],{

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, Fb, keyboard, api_service, Toastr, menuCtrl, events, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Fb = Fb;
        this.keyboard = keyboard;
        this.api_service = api_service;
        this.Toastr = Toastr;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.platform = platform;
        this.link_url = 'login';
        this.otp_url = 'verify_otp';
        this.sign_link_url = 'customer_creation';
        this.data = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        this.OTP = '';
        // ===========================================================================================================
        // FORM INITIATE
        // ========================
        this.FormInit = function () {
            _this.LoginForm = _this.Fb.group({
                username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
                password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
            });
            _this.SignUpForm = _this.Fb.group({
                first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
                mobile_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
                // email: new FormControl(null, Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
                new_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                ])),
                confirm_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, _this.passwordMatcher.bind(_this)]),
            });
            _this.Otpfrom = _this.Fb.group({
                otp: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
            });
        };
        // =========================================================================================================================
        // VALIDATION MESSAGES
        // ===========================
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Mobile Number Is Required' }
            ],
            'password': [
                { type: 'required', message: 'Password Is Required' }
            ],
            'first_name': [
                { type: 'required', message: 'Name Is Required' }
            ],
            'mobilenumber': [
                { type: 'required', message: 'Mobile Number Is Required' },
                { type: 'pattern', message: 'Mobile Number is Invalid' }
            ],
            'email': [
                { type: 'required', message: 'Email Is Required' },
                { type: 'pattern', message: 'Invalid Email' }
            ],
            'otp': [
                { type: 'required', message: 'OTP Is Required ' },
                { type: 'minlength', message: 'Enter The 6 Digit Number' },
                { type: 'maxlength', message: 'Enter The 6 Digit Number Only' },
            ],
            'new_password': [
                { type: 'required', message: 'New Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' },
            ],
            'confirm_password': [
                { type: 'passwordNotMatch', message: 'Confirm Password Not Matching.' },
            ],
        };
        // ==========================================================================================================================
        // FORGET PASSWORD PAGE
        // ==========================
        this.Forgot = function () {
            _this.navCtrl.push('ForgetPage');
        };
        this.menuCtrl.swipeEnable(false);
        if (localStorage.getItem('appPushToken')) {
            this.device_token = JSON.parse(localStorage.getItem('appPushToken'));
        }
        this.type = navParams.get('type');
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.loginpage = 'login';
        this.login_form = true;
        this.basic_detail = true;
    };
    LoginPage.prototype.ngOnInit = function () {
        this.FormInit();
        this.input_password = 'password';
        this.language_field();
    };
    // confirm new password validator
    LoginPage.prototype.passwordMatcher = function (control) {
        if (this.SignUpForm &&
            (control.value !== this.SignUpForm.controls.new_password.value)) {
            return { passwordNotMatch: true };
        }
        return null;
    };
    // =========================================================================================================
    // LOGIN
    // ======================
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.LoginForm.valid) {
            this.data = {};
            this.data = this.LoginForm.value;
            this.data.api_token = this.api_service.api_token;
            this.data.device_token = this.device_token;
            this.api_service.post_data(this.link_url, this.data)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    _this.api_service.stopLoader();
                    if (_this.type == 'addpost') {
                        _this.navCtrl.setRoot('AdvertisePostPage');
                    }
                    else {
                        _this.navCtrl.setRoot('HomepagePage');
                    }
                    localStorage.setItem('eastern_deals', JSON.stringify(result.data));
                    _this.events.publish('menu:created', result);
                    console.log(result);
                }
                else {
                    _this.api_service.stopLoader();
                    // this.api_service.create(result.message, 'top', 'error');
                    // console.log(result.errors['username']);
                    if (result.errors) {
                        if (result.errors['username']) {
                            _this.api_service.create(result.errors['username'], 'top', 'error');
                        }
                        else {
                            _this.api_service.create(result.message, 'top', 'error');
                        }
                    }
                    else {
                        _this.api_service.create(result.message, 'top', 'error');
                    }
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
                console.log(error);
            });
        }
        else {
            this.validateAllFormFields(this.LoginForm);
        }
    };
    LoginPage.prototype.details = function () {
        this.basic_detail = false;
        this.password_detail = true;
    };
    LoginPage.prototype.back1 = function () {
        this.basic_detail = true;
        this.password_detail = false;
        this.input_password = 'password';
    };
    LoginPage.prototype.language_field = function () {
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
    LoginPage.prototype.start = function () {
        var _this = this;
        var otp_message = "OTP Will Be Recieved Within 5 minutes";
        this.api_service.create(otp_message, 'top', 'success');
        SMSRetriever.startWatch(function (result) {
            console.log(result);
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
    LoginPage.prototype.processSMS = function (data) {
        // Check SMS for a specific string sequence to identify it is you SMS
        // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
        // In this case, I am keeping the first 6 letters as OTP
        var message = data.message;
        if (message != '') {
            var matches = message.match(/(\d+)/);
            if (matches) {
                this.OTP = matches[0];
                this.Otpfrom.get('otp').patchValue(this.OTP);
                this.otp_verify();
            }
            // this.stop();
        }
    };
    LoginPage.prototype.showpassword = function () {
        console.log(this.input_password);
        this.input_password = 'text';
    };
    LoginPage.prototype.hidepassword = function () {
        this.input_password = 'password';
    };
    // HIDE PASSWORD
    // =====================
    LoginPage.prototype.hidepassword2 = function (event) {
        console.log(event.checked);
        if (event.checked == true) {
            this.input_password = 'text';
        }
        else {
            this.input_password = 'password';
        }
    };
    LoginPage.prototype.reset_login = function () {
        this.SignUpForm.reset();
    };
    LoginPage.prototype.reset_signup = function () {
        this.LoginForm.reset();
    };
    LoginPage.prototype.keyboardCheck = function () {
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
    // =================================================================================================================================================
    // SIGNUP
    // =======================
    LoginPage.prototype.verify = function () {
        var _this = this;
        if (this.SignUpForm.get('first_name').valid || this.SignUpForm.get('mobile_number').valid || this.SignUpForm.get('email').valid || this.SignUpForm.get('new_password').valid || this.SignUpForm.get('confirm_password').valid) {
            this.api_token = this.api_service.api_token;
            this.data = this.SignUpForm.value;
            this.data.api_token = this.api_token;
            this.api_service.post_data(this.sign_link_url, this.data)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    _this.api_service.stopLoader();
                    _this.basic_detail = false;
                    _this.otp_details = true;
                    _this.password_detail = false;
                    if (_this.platform.is('android')) {
                        _this.start();
                    }
                    _this.id = result.data.id;
                }
                else {
                    console.log(result.errors['mobile_number']);
                    _this.api_service.stopLoader();
                    if (result.errors['mobile_number']) {
                        _this.api_service.create(result.errors['mobile_number'], 'top', 'error');
                    }
                    else if (result.errors['email']) {
                        _this.api_service.create(result.errors['email'], 'top', 'error');
                    }
                    else if (result.errors['confirm_password']) {
                        _this.api_service.create(result.errors['confirm_password'], 'top', 'error');
                    }
                    else {
                        _this.api_service.create(result.message, 'top', 'error');
                    }
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
            });
        }
        else {
            this.validateAllFormFields(this.SignUpForm);
        }
    };
    // ===========================================================================================================================
    // OTP VERIFY
    // ======================
    LoginPage.prototype.otp_verify = function () {
        var _this = this;
        if (this.Otpfrom.valid) {
            this.api_token = this.api_service.api_token;
            this.data = this.Otpfrom.value;
            this.data.api_token = this.api_token;
            this.data.user_id = this.id;
            this.api_service.post_data(this.otp_url, this.data)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    _this.api_service.stopLoader();
                    if (result.verified_from == 'signup') {
                        _this.otp_details = false;
                        _this.navCtrl.push('LoginPage');
                    }
                    else {
                        _this.otp_details_1 = false;
                        _this.navCtrl.setRoot('LoginPage');
                        _this.api_service.create('Your registration process has been completed and you will get login credentials to your register Email ID', 'top', 'success');
                        localStorage.setItem('eastern_deals', JSON.stringify(result.data));
                        _this.events.publish('menu:created', result);
                    }
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
        else {
            this.validateAllFormFields(this.Otpfrom);
        }
    };
    // =============================================================================================================================
    LoginPage.prototype.validateAllFormFields = function (SignUpForm) {
        var _this = this;
        Object.keys(SignUpForm.controls).forEach(function (field) {
            var control = SignUpForm.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    // ==================================================================================================================================== 
    LoginPage.prototype.login_verify = function () {
        this.navCtrl.push('EmailOtpPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], LoginPage.prototype, "content", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/login/login.html"*/'<!-- <ion-content padding class="sift">\n    <ion-grid>\n        <ion-row>\n            <button ion-button menuToggle clear start button_top>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n            <ion-col col-12 logo>\n                <h5>LOGO</h5>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div class="text-center">\n        <h1 class="logo">LOGO</h1>\n    </div>\n    <div [ngSwitch]="loginpage">\n        <ion-list *ngSwitchCase="\'login\'">\n\n            <form [formGroup]="LoginForm" *ngIf="login_form">\n                <div class="equal_height">\n                    <div class="structure input-effect">\n                        <input class="effect-20" type="number" formControlName="mo" placeholder="">\n                        <label>Mobile Number</label>\n                        <span class="focus-border">\n                            <i></i>\n                        </span>\n                    </div>\n\n                    <div class="validation-errors">\n                        <div *ngFor="let validation of validation_messages.username">\n                            <ion-item class="error-message" err_mesg *ngIf="LoginForm.get(\'mobile\').hasError(validation.type) && (LoginForm.get(\'username\').dirty || LoginForm.get(\'username\').touched)">\n                                {{ validation.message }}\n                            </ion-item>\n                        </div>\n                    </div>\n                </div>\n\n\n                    <div padding>\n                        <button ion-button class="dark" block (click)="login_verify()">SIGN IN</button>\n                    </div>\n                \n            </form>\n            \n          \n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>\n -->\n\n <ion-content class="sift">\n    <ion-grid>\n        <ion-row>\n            <button ion-button menuToggle clear start button_top>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n            <ion-col col-12 logo>\n                <!-- <img class="img_logo" src="assets/imgs/logo-01.png" alt="Eastern Deals"> -->\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div >\n        <ion-list >\n            <h2 class="logotxt">  Sowmiyas Kitchen </h2>\n            <form [formGroup]="LoginForm" *ngIf="login_form">\n                <div class="log_form">\n                    <ion-list >\n                        <div class="equal_height">\n                            <ion-item class="log_form_item">\n                                <ion-label stacked [ngClass]="{\'font_family_ta\':code == \'ta\'}">{{languagefield.contact_number}} </ion-label>\n                                <ion-input type="text" class="form_input" formControlName="username"></ion-input>\n                            </ion-item>\n\n                            <div class="validation-errors">\n                                <div *ngFor="let validation of validation_messages.username">\n                                    <ion-item class="error-message" err_mesg *ngIf="LoginForm.get(\'username\').hasError(validation.type) && (LoginForm.get(\'username\').dirty || LoginForm.get(\'username\').touched)">\n                                        {{ validation.message }}\n                                    </ion-item>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class="equal_height">\n                            <ion-item class="log_form_item">\n                                <ion-label stacked [ngClass]="{\'font_family_ta\':code == \'ta\'}">{{languagefield.password}}</ion-label>\n                                <ion-input type="{{input_password}}" clearOnEdit="false" class="form_input password" formControlName="password"></ion-input>\n                            </ion-item>\n                            <div text-right>\n                                <ion-icon name="eye-off" icon_position item-right tappable *ngIf="input_password == \'password\'" (click)="showpassword()"></ion-icon>\n                                <ion-icon name="eye" icon_position item-right tappable *ngIf="input_password == \'text\'" (click)="hidepassword2()">\n                                </ion-icon>\n                            </div>\n                            <div class="validation-errors">\n                                <div *ngFor="let validation of validation_messages.password">\n                                    <ion-item class="error-message" err_mesg *ngIf="LoginForm.get(\'password\').hasError(validation.type) && (LoginForm.get(\'password\').dirty || LoginForm.get(\'password\').touched)">\n                                        {{ validation.message }}\n                                    </ion-item>\n                                </div>\n                            </div>\n                        </div>  -->\n\n                        <span class="err_mesg_degn">{{error_mesg}}</span>\n                    </ion-list>\n                    <div class="center">\n                        <button ion-button  class="dark" tappable (click)="login_verify()" > Send </button>\n                    </div>\n        </div>\n            </form>\n        </ion-list>\n    </div>\n</ion-content>\n<!-- [disabled]="LoginForm.invalid" login() -->'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=21.js.map