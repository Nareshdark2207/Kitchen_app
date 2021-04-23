webpackJsonp([13],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    // ======================================================================================================================================================
    function ProfilePage(transfer, navCtrl, navParams, api_service, formBuilder, actionsheetCtrl, camera, events) {
        this.transfer = transfer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api_service = api_service;
        this.formBuilder = formBuilder;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.events = events;
        this.profile_url = 'user_profile';
        this.update_profile_url = 'update_user_profile';
        this.change_profile_image = 'change_profile_image';
        this.profile_data = {};
        this.disabled = true;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // ================================================================================================================================
        // VALIDATION MESSAGES
        // ==============================
        this.validation_messages = {
            'customer_first_name': [
                { type: 'required', message: 'Name is required' }
            ],
            'customer_email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Email is not valid' }
            ],
            'customer_mobile_number': [
                { type: 'required', message: 'Mobile number is required.' }
            ],
            'customer_alternate_mobile_number': [
                { type: 'required', message: 'Alternate Mobile number is required.' }
            ]
        };
        var customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
        // this.customer_id = customer_data.id;
        // this.cus_id = customer_data.customer_id;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.ionViewDidLeave = function () {
        this.events.publish('backpage');
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.customer_profile();
        this.get_profile();
        this.language_header();
        this.language_field();
    };
    // =================================================================================================================================
    // CUSTOMER PROFILE FORMINITIATE
    // =======================================
    ProfilePage.prototype.customer_profile = function () {
        this.customer_profile_form = this.formBuilder.group({
            customer_first_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            // customer_email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}]*')]),
            customer_mobile_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            customer_alternate_mobile_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null),
        });
    };
    ProfilePage.prototype.language_header = function () {
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
    ProfilePage.prototype.language_field = function () {
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
    // ==================================================================================================================================
    // GET PROFILE DETAILS
    // ============================
    ProfilePage.prototype.get_profile = function () {
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
                    customer_first_name: _this.profile_data.first_name,
                    // customer_email: this.profile_data.email,
                    customer_mobile_number: _this.profile_data.mobile_number,
                    customer_alternate_mobile_number: _this.profile_data.alternate_number
                });
                _this.customer_profile_form.valueChanges
                    .subscribe(function (selectedValue) {
                    console.log(selectedValue);
                    if (selectedValue.customer_first_name == _this.profile_data.first_name && selectedValue.customer_mobile_number == _this.profile_data.mobile_number) {
                        _this.disabled = true;
                    }
                    else {
                        if (selectedValue.customer_alternate_mobile_number != '' && selectedValue.customer_alternate_mobile_number == _this.profile_data.customer_alternate_mobile_number) {
                            _this.disabled = true;
                        }
                        else {
                            _this.disabled = false;
                        }
                    }
                });
            }
        }, function (error) {
            _this.api_service.stopLoader();
            console.log(error);
        });
    };
    // ==========================================================================================================================================================
    // UPDATE PROFILE
    // ==========================
    ProfilePage.prototype.updated_profile = function () {
        var _this = this;
        if (this.customer_profile_form.valid) {
            var updated_data = {};
            updated_data.api_token = this.api_service.api_token;
            updated_data.user_id = this.customer_id;
            updated_data.first_name = this.customer_profile_form.value.customer_first_name;
            // updated_data.email = this.customer_profile_form.value.customer_email;
            updated_data.mobile_number = this.customer_profile_form.value.customer_mobile_number;
            updated_data.alternate_number = this.customer_profile_form.value.customer_alternate_mobile_number;
            this.api_service.post_data(this.update_profile_url, updated_data).subscribe(function (result) {
                _this.api_service.stopLoader();
                if (result.status == 'Success') {
                    _this.api_service.create(result.message, 'top', 'success');
                }
                else if (result.status == 'Error') {
                    _this.api_service.create(result.errors.email[0], 'top', 'error');
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
                console.log(error);
            });
        }
        else {
            this.validateAllFormFields(this.customer_profile_form);
        }
    };
    // =========================================================================================================================================
    // UPDATE IMAGE
    // ======================
    ProfilePage.prototype.upload_image = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: '',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Take photo',
                    role: 'destructive',
                    icon: 'camera',
                    handler: function () {
                        _this.captureImage('camera');
                    }
                },
                {
                    text: 'Choose photo from Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.captureImage('gallery');
                    }
                },
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.captureImage = function (data) {
        var _this = this;
        var options = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        if (data == 'camera') {
            options.sourceType = this.camera.PictureSourceType.CAMERA;
            this.camera.getPicture(options).then(function (imageData) {
                _this.uploadFile(imageData);
            }, function (err) {
                // Handle error
            });
        }
        else {
            if (data == 'gallery') {
                options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
                this.camera.getPicture(options).then(function (imageData) {
                    _this.uploadFile(imageData);
                }, function (err) {
                    // Handle error
                });
            }
        }
    };
    ProfilePage.prototype.uploadFile = function (image_uri) {
        var _this = this;
        this.api_service.startLoader();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'profile_image',
            fileName: 'profile_image',
            chunkedMode: false,
            mimeType: 'image/jpeg'
        };
        var params = {
            'api_token': this.api_service.api_token,
            'user_id': this.customer_id,
            'profile_image': image_uri
        };
        options.httpMethod = 'POST';
        options.params = params;
        fileTransfer.upload(image_uri, this.api_service.API_URL_IMG + 'api/' + this.change_profile_image, options).then(function (data) {
            _this.api_service.stopLoader();
            _this.api_service.create('Profile Photo Updated Successfully', 'top', 'success');
            _this.get_profile();
        }, function (err) {
            _this.api_service.create(err, 'top', 'error');
            _this.api_service.stopLoader();
        });
    };
    // ===================================================================================================================================
    // VALIDATION METHODS
    // =========================
    ProfilePage.prototype.validateAllFormFields = function (form) {
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <ion-buttons left>\n      <button ion-button navPop icon-only>\n       <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n     </button>\n     </ion-buttons> -->\n    <ion-title [ngClass]="{\'font_family_ta\':code == \'ta\'}">{{languageheader.edit_profile}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-avatar profile_img>\n    <img src="assets/imgs/empty_dp.png" *ngIf="profile_data.main_image == null" alt="image not found">\n    <img src="{{img_path}}{{profile_data.main_image}}" *ngIf="profile_data.main_image !=null">\n    <!-- <h4 [ngClass]="{\'font_family_ta\':code == \'ta\'}">Upload Image</h4> -->\n    <ion-icon name="camera" icon item-right tappable (click)="upload_image()"></ion-icon>\n  </ion-avatar>\n  <ion-card class="profile_card">\n    <ion-card-content>\n      <form [formGroup]="customer_profile_form">\n        <ion-list>\n          <ion-item class="mt-00">\n            <ion-label stacked>{{languagefield.name}}</ion-label>\n            <ion-input class="form-input" formControlName="customer_first_name" type="text" placeholder=" Enter your name" clearInput>\n            </ion-input>\n          </ion-item>\n          <!-- <div class="validation-errors">\n            <div *ngFor="let validation of validation_messages.customer_first_name">\n              <ion-item class="error-message"\n                *ngIf="customer_profile_form.get(\'customer_first_name\').hasError(validation.type)">\n                {{ validation.message }}\n              </ion-item>\n            </div>\n          </div> -->\n          <ion-item class="mt-00">\n            <ion-label stacked>{{languagefield.email}}</ion-label>\n            <ion-input class="form-input" type="email" placeholder="Enter your email" required clearInput>\n            </ion-input>\n          </ion-item>\n          <ion-item class="mt-00"> \n            <ion-label stacked>{{languagefield.contact_number}}</ion-label>\n            <ion-input class="form-input" formControlName="customer_mobile_number" type="text"\n              placeholder="Enter your mobile number" clearInput></ion-input>\n          </ion-item>\n          <div class="validation-errors">\n            <div *ngFor="let validation of validation_messages.customer_mobile_number">\n              <ion-item class="error-message"\n                *ngIf="customer_profile_form.get(\'customer_mobile_number\').hasError(validation.type)  && (customer_profile_form.get(\'customer_mobile_number\').dirty || customer_profile_form.get(\'customer_mobile_number\').touched)">\n                {{ validation.message }}\n              </ion-item>\n            </div>\n          </div>\n          <ion-item class="mt-00">\n            <ion-label stacked>Alternate Mobile number</ion-label>\n            <ion-input class="form-input" formControlName="customer_alternate_mobile_number" type="text" placeholder="Enter your alternate number" clearInput></ion-input>\n          </ion-item>\n          <div class="validation-errors">\n            <div *ngFor="let validation of validation_messages.customer_alternate_mobile_number">\n              <ion-item class="error-message"\n                *ngIf="customer_profile_form.get(\'customer_alternate_mobile_number\').hasError(validation.type)  && (customer_profile_form.get(\'customer_alternate_mobile_number\').dirty || customer_profile_form.get(\'customer_alternate_mobile_number\').touched)">\n                {{ validation.message }}\n              </ion-item>\n            </div>\n          </div>\n        </ion-list>\n        <div class="center">\n        <button ion-button block tappable class="login_button" (click)="updated_profile()" [disabled]="disabled">{{languagefield.upd_profile}}</button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=13.js.map