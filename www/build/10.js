webpackJsonp([10],{

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, service, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.events = events;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        this.imageUrl = this.service.API_URL_IMG;
        this.postList = [];
        this.category_count = 6;
        // ============================================================================================================================
        // GET LIST
        // ============================
        this.getList = function () {
            var obj;
            obj = {
                'api_token': _this.service.api_token,
                'search': _this.master_search,
                'lang_code': _this.code
            };
            _this.postListUrl = 'post_list';
            _this.service.post_data(_this.postListUrl, obj)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    _this.service.stopLoader();
                    _this.postList = result.data;
                }
                else {
                    _this.service.create(JSON.stringify(result), 'top', 'error');
                    _this.service.stopLoader();
                }
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
            });
        };
        if (localStorage.getItem('eastern_deals') != null && localStorage.getItem('eastern_deals') != undefined) {
            this.data = JSON.parse(localStorage.getItem('eastern_deals'));
        }
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        // this.getList();
        this.language_header();
        this.language_field();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.postList.length <= this.category_count) {
            this.category_count = this.postList.length;
            this.showEndPage = true;
            infiniteScroll.enable(false);
        }
        else {
            setTimeout(function () {
                _this.category_count = _this.category_count + 6;
                _this.showEndPage = false;
                infiniteScroll.complete();
                _this.reActiveInfinite = infiniteScroll;
            }, 1000);
        }
    };
    // =====================================================================================================================
    // PULL TO REFRESH
    // ============================
    SearchPage.prototype.doRefresh = function (refresher) {
        this.category_count = 6;
        if (this.reActiveInfinite) {
            this.reActiveInfinite.enable(true);
        }
        this.events.publish('refresher:enabled', true);
        this.getList();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    // =====================================================================================================================
    SearchPage.prototype.toggle = function () {
        this.show = !this.show;
    };
    SearchPage.prototype.description = function (id) {
        // alert(id);
        if (id != undefined) {
            this.navCtrl.push('DescriptionPage', { id: id });
        }
    };
    // =============================================================================================================================
    SearchPage.prototype.language_header = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.service.api_token;
        this.data.api_token = this.api_token;
        this.data.lang_code = this.code;
        this.service.post_data(this.languageheader_url, this.data)
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
    SearchPage.prototype.language_field = function () {
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
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{languagefield.search}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar padding [(ngModel)]="master_search" placeholder="Find food, category, area, post.." (change)="getList(lang_code_1)">\n    </ion-searchbar>\n    <div class="recent_deals" *ngIf="postList">\n        <h3 class="result"padding>{{languagefield.search_results}}</h3>\n\n        <ion-card *ngIf="postList.length == 0" padding class="no_record_found">\n            <h3 text-center [ngClass]="{\'font_family_1_ta\':code == \'ta\'}">{{languagefield.no_records_found}}</h3>\n        </ion-card>\n        <ion-grid nopadding>\n            <ion-row>\n                <div *ngFor="let homePage of postList | slice: 0:category_count" [ngStyle]="{\'width\':homePage.banner_name == \'Category Center Horizontal\' ? \'100%\' : (homePage.banner_name == \'Category Center Portrait\') ? \'100%\' : \'47%\' }" [ngClass]="{\'crd\':homePage.type == \'post\'}">\n                    <!-- [ngClass]="homePage != 0 ? \'crd\': \'\'" -->\n                    <div tappable (click)="description(homePage.id)" *ngIf=" homePage.type == \'post\'">\n                        <img class="deals_1" *ngIf="homePage.primary_image != null" src="{{imageUrl+homePage.primary_image}}" />\n                        <img class="deals_1" *ngIf="homePage.primary_image == null" src="assets/imgs/no_image_placeholder.jpg" />\n\n                        <p class="cap"><b>{{homePage.title}}</b></p>\n                        <p class="price_tag" *ngIf="homePage.post_price != null && homePage.post_price != \'0.00\' && homePage.post_price != undefined">\n                            {{homePage.post_price | currency:\'රු \':\'symbol\':\'1.0-2\'}}</p>\n                        <p class="location">\n                            <ion-icon name="pin"></ion-icon> {{homePage.area_name}}\n                        </p>\n                        <p class="posted_date">{{homePage.poster_date}}</p>\n                    </div>\n                </div>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-card *ngIf="showEndPage">\n        <h3 padding text-center>\n            No More to Load\n        </h3>\n    </ion-card>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="crescent"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=10.js.map