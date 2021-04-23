webpackJsonp([29],{

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
            ],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, service, datePipe, alertCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.datePipe = datePipe;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.show = false;
        this.buttonName = 'Show';
        this.postList = [];
        this.area = 0;
        this.cat_slider = 'home_slider';
        this.imageUrl = this.service.API_URL_IMG;
        this.home_slider = 'home_slider';
        this.areaList = [];
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // ======================================================================================================================
        // GET BASIC DATA
        // ==========================
        this.getBasicData = function () {
            // AREA LIST
            // ===============
            _this.areaUrl = 'area_list';
            _this.service.get_list(_this.areaUrl + '?api_token=' + _this.service.api_token + '&lang_code=' + _this.code)
                .subscribe(function (result) {
                _this.service.stopLoader();
                result.data.unshift({ id: 0, 'area_name': 'All' });
                _this.areaList = result.data;
            }, function (error) {
                _this.service.create(error, 'top', 'error');
                _this.service.stopLoader();
            });
        };
        // ===========================================================================================================================
        // AREA SELECTED
        // =====================
        this.areaSelect = function (event) {
            if (event != 0) {
                _this.area = event;
            }
            _this.postList = [];
            _this.getCategoryList(_this.current_page_no);
        };
        this.current_page_no = 1;
        this.getCategoryList = function (page_no) {
            _this.postListUrl = 'post_list';
            var postListapi = _this.postListUrl + '?api_token=' + _this.service.api_token;
            postListapi += '&category=' + _this.catId;
            postListapi += '&date=' + _this.datePipe.transform(new Date(), 'yyyy/MM/dd');
            postListapi += '&lang_code=' + _this.code;
            postListapi += '&page=' + page_no;
            postListapi += '&limit=' + 6;
            if (_this.area != null && _this.area != 0) {
                // obj.area = this.area;
                postListapi += '&area=' + _this.area;
            }
            _this.service.get_list(postListapi)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    // this.service.stopLoader();
                    _this.postdata = result.data;
                    if (_this.postdata && _this.postdata.length == 0) {
                        _this.showEndPage = true;
                    }
                    else {
                        _this.showEndPage = false;
                    }
                    _this.postList = _this.postList.concat(_this.postdata);
                }
                else {
                    _this.service.create(JSON.stringify(result), 'top', 'error');
                    // this.service.stopLoader();
                }
            }, function (error) {
                // this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
            });
        };
        this.selectOptions = {
            title: 'Select Area',
        };
        if (localStorage.getItem('eastern_deals') != null && localStorage.getItem('eastern_deals') != undefined) {
            this.data = JSON.parse(localStorage.getItem('eastern_deals'));
        }
        this.cat = navParams.get('categoty_details');
        this.catId = this.cat.id;
        this.img = this.service.API_URL_IMG;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        this.getBasicData();
        this.getCategoryList(this.current_page_no);
        this.homeslider();
        this.language_field();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
    };
    CategoryPage.prototype.ionViewDidEnter = function () {
        this.events.publish('fabhide:created', true);
    };
    CategoryPage.prototype.ionViewWillLeave = function () {
        this.events.publish('fabhide:created', false);
    };
    CategoryPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.postdata && this.postdata.length == 0) {
            this.showEndPage = true;
            infiniteScroll.enable(false);
        }
        else {
            setTimeout(function () {
                _this.current_page_no = _this.current_page_no + 1;
                _this.showEndPage = false;
                _this.getCategoryList(_this.current_page_no);
                infiniteScroll.complete();
                _this.reActiveInfinite = infiniteScroll;
            }, 1000);
        }
    };
    CategoryPage.prototype.doRefresh = function (refresher) {
        this.current_page_no = 1;
        if (this.reActiveInfinite) {
            this.reActiveInfinite.enable(true);
        }
        this.postList = [];
        this.getCategoryList(this.current_page_no);
        this.events.publish('refresher:enabled', true);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    // =====================================================================================================================
    CategoryPage.prototype.toggle = function () {
        this.show = !this.show;
    };
    CategoryPage.prototype.description = function (id) {
        this.navCtrl.push('DescriptionPage', { id: id });
    };
    // =======================================================================================================================
    // HOME SLIDER
    // ======================
    CategoryPage.prototype.homeslider = function () {
        var _this = this;
        this.service.get_list(this.cat_slider + '?api_token=' + this.service.api_token + '&slider_name=5&category_id=' + this.catId).subscribe(function (result) {
            _this.service.stopLoader();
            _this.slider = result.data;
            console.log(_this.slider);
            _this.speed = result.speed;
        }, function (error) {
            _this.service.create(error, 'top', 'error');
            _this.service.stopLoader();
        });
    };
    CategoryPage.prototype.language_field = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.service.api_token;
        this.data.api_token = this.api_token;
        this.data.lang_code = this.code;
        this.service.post_data(this.language_field_url, this.data)
            .subscribe(function (result) {
            _this.service.stopLoader();
            if (result.status == 'success') {
                _this.service.stopLoader();
                _this.languagefield = result.field_list;
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
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/category/category.html"*/'<ion-header no-border>\n    <ion-navbar>\n        <ion-title [ngClass]="{\'font_family_ta\':code == \'ta\'}">{{cat.category_name}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-start outline filter_butn>\n        <ion-icon name="funnel" style="padding-left:5px;"></ion-icon>\n      </button>\n            <ion-select no-padding [selectOptions]="selectOptions" [(ngModel)]="area" (ngModelChange)="areaSelect($event)">\n                <ion-option [value]=\'area.id\' *ngFor="let area of areaList">{{area.area_name}}</ion-option>\n            </ion-select>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <span *ngIf="slider && slider.length > 1">\n    <ion-slides class="slide_size" autoplay="1000" loop="true" speed="{{speed}}" pager="true">\n      <ion-slide *ngFor="let slide of slider">\n        <img [src]="img+slide.main_image" class="slide-image" />\n      </ion-slide>\n    </ion-slides>\n  </span>\n    <div *ngIf="slider && slider.length == 1">\n        <div *ngFor="let slide of slider">\n            <img [src]="img+slide.main_image" single_slider class="slide-image" />\n        </div>\n    </div>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="crescent" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class="recent_deals">\n        <ion-card *ngIf="!postList && postList.length == 0" class="no_record_found">\n            <h3 padding text-center [ngClass]="{\'font_family_1_ta\':code == \'ta\'}">{{languagefield.no_records_found}}</h3>\n        </ion-card>\n        <ion-grid>\n            <ion-row>\n                <div *ngFor="let homePage of postList" [ngStyle]="{\'width\':homePage.banner_name == \'Category Center Horizontal\' ? \'100%\' : (homePage.banner_name == \'Category Center Portrait\') ? \'100%\' : \'47%\' }" [ngClass]="{\'crd\':homePage.type == \'post\'}">\n                    <!-- [ngClass]="homePage != 0 ? \'crd\': \'\'" -->\n                    <div tappable (click)="description(homePage.id)" *ngIf=" homePage.type == \'post\'">\n                        <img class="deals_1" src="{{imageUrl+homePage.primary_image}}" />\n                        <p class="cap"><b>{{homePage.title}}</b></p>\n                        <p class="location">\n                            <ion-icon name="pin"></ion-icon> {{homePage.area_name}}\n                        </p>\n                        <p class="posted_date">{{homePage.poster_date}}</p>\n                    </div>\n                    <div *ngIf="homePage.banner_name == \'Category Center Horizontal\' && homePage.type == \'ad\'">\n                        <div single_img>\n                            <img src="{{imageUrl}}{{homePage.primary_image}}" alt="image not found" />\n                        </div>\n                    </div>\n                    <div *ngIf="homePage.banner_name == \'Category Center Portrait\' && homePage.type == \'ad\'">\n                        <div *ngIf="homePage.data.length == 1">\n                            <span *ngFor="let portrait of homePage.data" text-center>\n                <img src="{{imageUrl}}{{portrait.primary_image}}" class="portrait_image_1" alt="image not found"\n                  width="50%" height="200px" />\n              </span>\n                        </div>\n                        <span *ngIf="homePage.data.length > 1">\n\n              <ion-row>\n                <ion-col col-6 *ngFor="let portrait of homePage.data">\n\n                  <img src="{{imageUrl}}{{portrait.primary_image}}" alt="image not found" width="100%" height="200px" />\n                </ion-col>\n              </ion-row>\n\n            </span>\n                    </div>\n                </div>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-card *ngIf="showEndPage">\n        <h3 padding text-center>\n            No More to Load\n        </h3>\n    </ion-card>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="crescent"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], CategoryPage);
    return CategoryPage;
}());

// class Category {
//   api_token: any;
//   category: any;
//   area?: any;
//   date: any;
//   customer?: any;
//   lang_code: any;
//   page:any;
//   limit:any;
// } 
//# sourceMappingURL=category.js.map

/***/ })

});
//# sourceMappingURL=29.js.map