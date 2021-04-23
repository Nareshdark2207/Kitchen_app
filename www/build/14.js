webpackJsonp([14],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostWithUsPageModule", function() { return PostWithUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_with_us__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostWithUsPageModule = /** @class */ (function () {
    function PostWithUsPageModule() {
    }
    PostWithUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_with_us__["a" /* PostWithUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_with_us__["a" /* PostWithUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], PostWithUsPageModule);
    return PostWithUsPageModule;
}());

//# sourceMappingURL=post-with-us.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostWithUsPage; });
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






// import { IonicSelectableComponent } from 'ionic-selectable';
var PostWithUsPage = /** @class */ (function () {
    function PostWithUsPage(transfer, navCtrl, navParams, Fb, Toastr, camera, service, actionSheetCtrl, alertCtrl) {
        var _this = this;
        this.transfer = transfer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Fb = Fb;
        this.Toastr = Toastr;
        this.camera = camera;
        this.service = service;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.LinkUrl = 'submit_post';
        this.data = new Data();
        this.imageUrl = this.service.API_URL_IMG;
        this.Images = [];
        this.minDate = new Date().toISOString();
        this.categoryList = [];
        this.areaList = [];
        this.imgUrl = 'img_upload';
        this.subImg = [];
        this.subImgPath = [];
        this.cost = {};
        this.tax_ammt = [];
        this.discount_ammt = [];
        this.diff = [];
        this.terms_condition_url = 'terms_conditions_data';
        this.term_condition = {};
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // =======================================================================================
        // VALIDATION MESSAGES
        // ==============================
        this.validation_messages = {
            'category_id': [
                { type: 'required', message: 'Category Is Required' }
            ],
            'area': [
                { type: 'required', message: 'Area Is Required' }
            ],
            'title': [
                { type: 'required', message: 'Title Is Required' }
            ],
            'description': [
                { type: 'required', message: 'Description Is Required' }
            ],
            'selling_price': [
                { type: 'required', message: 'Selling Price Is Required' }
            ],
            'main_image': [
                { type: 'required', message: 'Image Is Required' },
            ],
            'effective_date': [
                { type: 'required', message: 'Effective Date Is Required' }
            ]
        };
        // ================================================================================================================
        // FORM INITIATE
        // ======================
        this.FormInit = function () {
            _this.PostForm = _this.Fb.group({
                category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                area: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                selling_price: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                main_image: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                sub_imgs: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null),
                effective_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
            });
        };
        // ======================================================================================================================
        // GET BASIC DATA
        // ==========================
        this.getBasicData = function () {
            // CATEGORY LIST
            // ================
            _this.categoryUrl = 'master_category_list';
            console.log(_this.code);
            _this.service.get_list(_this.categoryUrl + '?api_token=' + _this.service.api_token + '&lang_code=' + _this.code)
                .subscribe(function (result) {
                _this.service.stopLoader();
                _this.categoryList = result.categories;
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
            });
            // AREA LIST
            // ===============
            _this.areaUrl = 'area_list';
            _this.service.get_list(_this.areaUrl + '?api_token=' + _this.service.api_token + '&lang_code=' + _this.code)
                .subscribe(function (result) {
                _this.service.stopLoader();
                _this.areaList = result.data;
            }, function (error) {
                _this.service.create(error, 'top', 'error');
                _this.service.stopLoader();
            });
            // GET COST
            // ====================
            _this.costUrl = 'post_form';
            var obj = {
                'api_token': _this.service.api_token,
                'company_id': _this.data.current_branch,
                'user_id': _this.data.id,
            };
            _this.service.post_data(_this.costUrl, obj)
                .subscribe(function (result) {
                _this.service.stopLoader();
                _this.cost = result.data;
                _this.tax_ammt = result.data.tax_details;
                _this.discount_ammt = result.data.discount_details;
                if (_this.discount_ammt != 0 && _this.discount_ammt != null) {
                    _this.sales_price = (_this.cost.cost) - (_this.cost.discount);
                }
                else {
                    _this.sales_price = 'null';
                }
                console.log(_this.cost);
                console.log(_this.cost.total);
                console.log(_this.tax_ammt);
                console.log(_this.sales_price);
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
            });
        };
        // ===================================================================================================
        // IMAGE DELETE
        this.delete = function (id, i, back) {
            var obj = {
                'image_id': id.avatar_id,
                'api_token': _this.service.api_token
            };
            _this.imgDeleteUrl = 'img_delete';
            _this.service.post_data(_this.imgDeleteUrl, obj)
                .subscribe(function (result) {
                _this.service.stopLoader();
                if (result.status == 'success') {
                    if (back != true) {
                        _this.service.create(result.message, 'top', 'success');
                    }
                    else {
                    }
                    if (i == 0) {
                        _this.subImgPath.splice(i, 1, 0);
                        _this.subImg.splice(i, 1, 0);
                        _this.Images.splice(i, 1, 0);
                    }
                    else {
                        _this.subImgPath.splice(i, 1);
                        _this.subImg.splice(i, 1);
                        _this.Images.splice(i, 1);
                    }
                }
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
            });
        };
        // ==================================================================================================================
        // CHANGE MAIN IMAGE
        // =============================
        this.changeMainImage = function (val, i) {
            _this.diff = [];
            _this.subImgPath.splice(i, 1);
            _this.subImg.splice(i, 1);
            _this.subImg.unshift(val.avatar_id);
            _this.subImgPath.unshift(val);
            // this.diff[i] = true;
        };
        this.data = JSON.parse(localStorage.getItem('eastern_deals'));
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        this.getBasicData();
        this.FormInit();
    }
    // =====================================================================================================================
    PostWithUsPage.prototype.ionViewDidLoad = function () {
    };
    PostWithUsPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        if (this.subImgPath.length != 0) {
            this.subImgPath.forEach(function (element, i) {
                var back = true;
                _this.delete(element, i, back);
            });
        }
    };
    PostWithUsPage.prototype.ngOnInit = function () {
        this.get_terms();
        this.language_header();
        this.language_field();
    };
    PostWithUsPage.prototype.language_header = function () {
        var _this = this;
        this.data_2 = {};
        this.api_token = this.service.api_token;
        this.data_2.api_token = this.api_token;
        this.data_2.lang_code = this.code;
        // this.data.user_id = this.customer_id;
        this.service.post_data(this.languageheader_url, this.data_2)
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
    PostWithUsPage.prototype.language_field = function () {
        var _this = this;
        this.service.get_list(this.language_field_url + '?api_token=' + this.service.api_token + '&lang_code=' + this.code).subscribe(function (result) {
            _this.service.stopLoader();
            if (result.status == 'success') {
                _this.languagefield = result.field_list;
            }
            else {
                _this.service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.service.create(error, 'top', 'error');
        });
    };
    // ===================================================================================================================
    // UPLOAD IMAGE
    // ========================
    PostWithUsPage.prototype.uploadImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Option',
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
    // ==============================================================================================
    // CAPTURE IMAGE
    // ==========================
    PostWithUsPage.prototype.captureImage = function (data) {
        var _this = this;
        var options = {
            quality: 50,
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
                if (_this.Images.length < 5 || _this.Images[0] == 0) {
                    _this.Images.push(imageData);
                    _this.uploadFile(imageData);
                }
                else {
                    _this.service.create('5 Images Only Acceptable', 'top', 'error');
                }
            }, function (err) {
                _this.service.create(err, 'top', 'error');
                // Handle error
            });
        }
        else {
            if (data == 'gallery') {
                options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
                this.camera.getPicture(options).then(function (imageData) {
                    if (_this.Images.length < 5 || _this.Images[0] == 0) {
                        _this.Images.push(imageData);
                        _this.uploadFile(imageData);
                    }
                    else {
                        _this.service.create('5 Images Only Acceptable', 'top', 'error');
                    }
                }, function (err) {
                    // Handle error
                    _this.service.create(err, 'top', 'error');
                });
            }
        }
    };
    // ==========================================================================================================
    // UPLOAD IMAGE
    // ====================
    PostWithUsPage.prototype.uploadFile = function (data) {
        var _this = this;
        this.PostForm.get('main_image').patchValue(data);
        this.LinkUrl = 'submit_post';
        this.service.startLoader();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'image',
            fileName: 'image',
            chunkedMode: false,
            mimeType: 'image/jpeg'
        };
        var params = {
            'api_token': this.service.api_token,
            'image': data,
            'path': 'post',
            'table_name': 'posts',
        };
        options.httpMethod = 'POST';
        options.params = params;
        fileTransfer.upload(data, this.service.API_URL_IMG + 'api/' + this.imgUrl, options)
            .then(function (data) {
            _this.service.stopLoader();
            var val = JSON.parse(data.response);
            if (_this.subImg[0] == 0) {
                _this.subImgPath.splice(0, 1);
                _this.subImg.splice(0, 1);
                _this.subImg.unshift(val.avatar_id);
                _this.subImgPath.unshift(val);
                _this.Images.splice(0, 1);
                _this.Images.unshift(val.image_path);
            }
            else {
                _this.subImg.push(val.avatar_id);
                _this.subImgPath.push(val);
            }
        }, function (err) {
            _this.service.stopLoader();
            _this.service.create(err, 'top', 'error');
        });
        // });
    };
    // ===================================================================================================================
    // terms and conditions
    // ===================
    PostWithUsPage.prototype.get_terms = function () {
        var _this = this;
        this.data_1 = {};
        this.api_token = this.service.api_token;
        this.data_1.api_token = this.api_token;
        this.data_1.tc_type = 'post';
        this.service.get_list(this.terms_condition_url + '?api_token=' + this.service.api_token + '&tc_type=post')
            .subscribe(function (result) {
            var res = result.status;
            _this.service.stopLoader();
            if (res == 'success') {
                // if (result.data != null) {
                _this.term_condition = result.data;
                // }
            }
            else {
            }
        }, function (error) {
            _this.service.create(error, 'top', 'error');
            _this.service.stopLoader();
        });
    };
    // ===================================================================================================================
    // SUBMIT
    // ===================
    PostWithUsPage.prototype.submit_1 = function () {
        var _this = this;
        // console.log(this.PostForm.value.area.id);
        this.PostForm.value.main_image = this.subImg[0];
        var params = {
            'api_token': this.service.api_token,
            'main_image': this.subImg[0],
            'company_id': this.data.current_branch,
            'user_id': this.data.id,
            'post_type': 'paid',
            'area': this.PostForm.value.area.id,
            'category_id': this.PostForm.value.category_id,
            'title': this.PostForm.value.title,
            'description': this.PostForm.value.description,
            'effective_date': this.PostForm.value.effective_date,
            'post_price': this.PostForm.value.selling_price,
            'sub_imgs': [this.subImg[1], this.subImg[2]],
            'cost': this.cost.cost,
            'discount': this.cost.discount,
            'tax': this.cost.tax,
            'duration': this.cost.duration,
            'duration_type': this.cost.duration_type,
            'total': this.cost.total
        };
        console.log(params);
        if (this.PostForm.valid) {
            this.service.post_data(this.LinkUrl, params)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    _this.service.stopLoader();
                    _this.PostForm.reset();
                    _this.subImgPath = [];
                    _this.subImg = [];
                    _this.Images = [];
                    _this.service.create(result.message, 'top', 'success');
                }
                else {
                    _this.service.create(result.message, 'top', 'error');
                    _this.service.stopLoader();
                }
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
            });
        }
        else {
            this.validateAllFormFields(this.PostForm);
        }
    };
    PostWithUsPage.prototype.submit = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: ' Terms and Conditions',
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
                        _this.PostForm.value.main_image = _this.subImg[0];
                        var params = {
                            'api_token': _this.service.api_token,
                            'main_image': _this.subImg[0],
                            'company_id': _this.data.current_branch,
                            'user_id': _this.data.id,
                            'post_type': 'paid',
                            'area': _this.PostForm.value.area,
                            'category_id': _this.PostForm.value.category_id,
                            'title': _this.PostForm.value.title,
                            'description': _this.PostForm.value.description,
                            'effective_date': _this.PostForm.value.effective_date,
                            'sub_imgs': [_this.subImg[1], _this.subImg[2]],
                            'cost': _this.cost.cost,
                            'discount': _this.cost.discount,
                            'tax': _this.cost.tax,
                            'duration': _this.cost.duration,
                            'duration_type': _this.cost.duration_type,
                            'total': _this.cost.total
                        };
                        if (_this.PostForm.valid) {
                            _this.service.post_data(_this.LinkUrl, params)
                                .subscribe(function (result) {
                                if (result.status == 'success') {
                                    _this.service.stopLoader();
                                    _this.PostForm.reset();
                                    _this.subImgPath = [];
                                    _this.subImg = [];
                                    _this.Images = [];
                                    _this.service.create(result.message, 'top', 'success');
                                }
                                else {
                                    _this.service.create(result.message, 'top', 'error');
                                    _this.service.stopLoader();
                                }
                            }, function (error) {
                                _this.service.stopLoader();
                                _this.service.create(error, 'top', 'error');
                            });
                        }
                        else {
                            _this.validateAllFormFields(_this.PostForm);
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    // ====================================================================================
    // VALIDATION FUNCTION
    // ===============================
    PostWithUsPage.prototype.validateAllFormFields = function (form) {
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
    PostWithUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-post-with-us',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/post-with-us/post-with-us.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{languageheader.post_with_us}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n    <form [formGroup]="PostForm">\n        <ion-list>\n            <ion-item>\n                <ion-label stacked>{{languagefield.select_category}}</ion-label>\n                <ion-select formControlName="category_id" class="form-input">\n                    <ion-option [value]=\'category.id\' *ngFor="let category of categoryList">{{category.category}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <div class="validation-errors">\n                <div *ngFor="let validation of validation_messages.category_id">\n                    <p class="error-message" err_mesg *ngIf="PostForm.get(\'category_id\').hasError(validation.type) && (PostForm.get(\'category_id\').dirty || PostForm.get(\'category_id\').touched)">\n                        {{ validation.message }}\n                    </p>\n                </div>\n            </div>\n\n            <ion-item>\n                <ion-label stacked>{{languagefield.select_area}}</ion-label>\n                <ionic-selectable item-content formControlName="area" itemValueField="id" itemTextField="area_name" [items]="areaList" [canSearch]="true">\n                </ionic-selectable>\n            </ion-item>\n            <!-- <ion-item>\n                <ion-label stacked>{{languagefield.select_area}}</ion-label>\n                <ion-select formControlName="area" class="form-input">\n                    <ion-option [value]=\'area.id\' *ngFor="let area of areaList">{{area.area_name}}</ion-option>\n                </ion-select>\n            </ion-item> -->\n            <div class="validation-errors">\n                <div *ngFor="let validation of validation_messages.area">\n                    <p class="error-message" err_mesg *ngIf="PostForm.get(\'area\').hasError(validation.type) && (PostForm.get(\'area\').dirty || PostForm.get(\'area\').touched)">\n                        {{ validation.message }}\n                    </p>\n                </div>\n            </div>\n            <ion-item>\n                <ion-label stacked>{{languagefield.title}}</ion-label>\n                <ion-input type="text" formControlName="title"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n                <div *ngFor="let validation of validation_messages.title">\n                    <p class="error-message" err_mesg *ngIf="PostForm.get(\'title\').hasError(validation.type) && (PostForm.get(\'title\').dirty || PostForm.get(\'title\').touched)">\n                        {{ validation.message }}\n                    </p>\n                </div>\n            </div>\n            <ion-item>\n                <ion-label stacked>{{languagefield.description}}</ion-label>\n                <ion-textarea maxLength="500" class="form-input" formControlName="description"> </ion-textarea>\n            </ion-item>\n            <div class="validation-errors">\n                <div *ngFor="let validation of validation_messages.description">\n                    <p class="error-message" err_mesg *ngIf="PostForm.get(\'description\').hasError(validation.type) && (PostForm.get(\'description\').dirty || PostForm.get(\'description\').touched)">\n                        {{ validation.message }}\n                    </p>\n                </div>\n            </div>\n            <ion-item>\n                <ion-label stacked>{{languagefield.selling_price}}</ion-label>\n                <ion-input type="number" formControlName="selling_price"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n                <div *ngFor="let validation of validation_messages.selling_price">\n                    <p class="error-message" err_mesg *ngIf="PostForm.get(\'selling_price\').hasError(validation.type) && (PostForm.get(\'selling_price\').dirty || PostForm.get(\'selling_price\').touched)">\n                        {{ validation.message }}\n                    </p>\n                </div>\n            </div>\n            <ion-item>\n                <ion-label stacked>{{languagefield.effective_date}}</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" formControlName="effective_date" [min]="minDate"></ion-datetime>\n            </ion-item>\n            <div class="validation-errors">\n                <div *ngFor="let validation of validation_messages.effective_date">\n                    <p class="error-message" err_mesg *ngIf="PostForm.get(\'effective_date\').hasError(validation.type) && (PostForm.get(\'effective_date\').dirty || PostForm.get(\'effective_date\').touched)">\n                        {{ validation.message }}\n                    </p>\n                </div>\n            </div>\n            <ion-item>\n                <p>{{languagefield.add_photo}} <br *ngIf="code != \'en\'">( max 5 image ):\n                    <button ion-button icon-end class="btn_cam" tappable (click)="uploadImage()">\n                <ion-icon name="camera"></ion-icon>\n              </button>\n                </p>\n            </ion-item>\n            <div class="validation-errors">\n                <div *ngFor="let validation of validation_messages.main_image">\n                    <p class="error-message" err_mesg *ngIf="PostForm.get(\'main_image\').hasError(validation.type) && (PostForm.get(\'main_image\').dirty || PostForm.get(\'main_image\').touched)">\n                        {{ validation.message }}\n                    </p>\n                </div>\n            </div>\n        </ion-list>\n        <ion-row>\n            <ion-col *ngFor="let value of subImgPath; let i=index" col-4 class="right">\n                <!--  [ngClass]="i == 0 ? \'diff\': \'--\'"-->\n                <h6 *ngIf="i == 0 && value[0] != 0">{{languagefield.pri_image}}</h6>\n                <h6 *ngIf="i != 0 ">{{languagefield.sub_image}} ({{i}})</h6>\n                <img src="{{imageUrl}}{{value.image_path}}" *ngIf="value.image_path != undefined" width="100px" height="100px" tappable (click)="changeMainImage(value, i)">\n                <p><button ion-button class="btn_cam1" tappable (click)="delete(value, i, null)" *ngIf="value.image_path != undefined">\n            <ion-icon name="trash"></ion-icon>\n          </button></p>\n            </ion-col>\n        </ion-row>\n        <!-- -->\n        <p *ngIf="subImgPath.length>1">Note: If you want to change the main image please select the image.</p>\n    </form>\n    <div class="back_clr">\n        <h5 padding-top>{{languagefield.bill}}</h5>\n        <!-- <ion-row *ngIf="cost.actual_total != cost.total"> -->\n        <ion-row>\n            <ion-col col-8 padding-left>\n                <p>{{languagefield.original_price}}</p>\n            </ion-col>\n            <ion-col col-4 padding-right>\n                <p text-right>{{cost.actual_total| number : \'1.2-2\'}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="cost.cost != cost.actual_total">\n            <ion-col col-8 padding-left>\n                <p>{{languagefield.cost}}</p>\n            </ion-col>\n            <ion-col col-4 padding-right>\n                <p text-right>{{cost.cost | number : \'1.2-2\'}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let discount of discount_ammt">\n            <ion-col col-8 padding-left>\n                <p>{{languagefield.Discount}} - {{discount.percentage}} %</p>\n            </ion-col>\n            <ion-col col-4 padding-right>\n                <p text-right>{{discount.amount | number : \'1.2-2\'}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="sales_price!= \'null\'">\n            <ion-col col-8 padding-left>\n                <p> {{languagefield.price_with_disc}}</p>\n            </ion-col>\n            <ion-col col-4 padding-right>\n                <p text-right>{{sales_price | number : \'1.2-2\'}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let tax of tax_ammt">\n            <ion-col col-8 padding-left>\n                <p> {{languagefield.tax}} - {{tax.tax}}- {{tax.percentage}} %</p>\n            </ion-col>\n            <ion-col col-4 padding-right>\n                <p text-right>{{tax.amount | number : \'1.2-2\'}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-8 padding-left>\n                <p>{{languagefield.total_price}}</p>\n            </ion-col>\n            <ion-col col-4 padding-right>\n                <p text-right>{{cost.total | number : \'1.0-0\'}}.00</p>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="center" *ngIf="term_condition != null">\n        <button ion-button icon-end class="login_button" tappable (click)="submit()" [disabled]="PostForm.invalid">{{languagefield.submit}}</button></div>\n    <div class="center" *ngIf="term_condition == null">\n        <button ion-button icon-end class="login_button" [disabled]="PostForm.invalid" tappable (click)="submit_1()">{{languagefield.submit}}</button></div>\n</ion-content>\n<!-- [disabled]="PostForm.invalid" -->'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/post-with-us/post-with-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PostWithUsPage);
    return PostWithUsPage;
}());

var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());
//# sourceMappingURL=post-with-us.js.map

/***/ })

});
//# sourceMappingURL=14.js.map