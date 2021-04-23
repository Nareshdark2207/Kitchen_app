webpackJsonp([19],{

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders__ = __webpack_require__(862);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyOrdersPageModule = /** @class */ (function () {
    function MyOrdersPageModule() {
    }
    MyOrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_orders__["a" /* MyOrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_orders__["a" /* MyOrdersPage */]),
            ],
        })
    ], MyOrdersPageModule);
    return MyOrdersPageModule;
}());

//# sourceMappingURL=my-orders.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
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




var MyOrdersPage = /** @class */ (function () {
    function MyOrdersPage(navCtrl, navParams, api_service, datePipe, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api_service = api_service;
        this.datePipe = datePipe;
        this.events = events;
        this.show = false;
        this.buttonName = 'Show';
        this.order_list_url = 'myorders_list';
        this.order_list = [];
        this.imageUrl = this.api_service.API_URL_IMG;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        var value_item = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = value_item.id;
        this.page = 1;
        this.limit = 7;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    MyOrdersPage.prototype.ionViewDidLoad = function () {
    };
    // ORDER DESCRIPTION PAGE
    // ====================================
    MyOrdersPage.prototype.order_description = function (list) {
        if (list.order_id) {
            this.navCtrl.push('OrderDescriptionPage', { id: list, type: 'order' });
        }
    };
    // =============================================================================================================================================================
    // SEARCH
    // =================
    MyOrdersPage.prototype.search = function () {
        var _this = this;
        this.show = !this.show;
        this.fromdate = undefined;
        this.todate = undefined;
        setTimeout(function () {
            _this.content.resize();
        }, 80);
    };
    // ================================================================================================================================================================
    MyOrdersPage.prototype.ngOnInit = function () {
        this.showEndPage = false;
        this.myorder_list(null, null);
        this.language_header();
        this.language_field();
    };
    // ================================================================================================================================================================
    // FROM DATE CHANGES
    // =======================
    MyOrdersPage.prototype.onChange = function (from_date) {
        if (from_date) {
            this.fromdate = this.datePipe.transform(from_date, 'yyyy-MM-dd');
        }
    };
    // ================================================================================================================================================================
    // TO DATE CHANGES
    // =============================
    MyOrdersPage.prototype.onChange2 = function (to_date) {
        if (to_date) {
            this.todate = this.datePipe.transform(to_date, 'yyyy-MM-dd');
        }
    };
    // ==================================================================================================================================================================
    // FILTER
    // ==============
    MyOrdersPage.prototype.filter = function () {
        if (this.fromdate != undefined && this.todate != undefined) {
            this.myorder_list(this.fromdate, this.todate);
        }
        else {
            this.api_service.create('Please Select the Valid Date', 'bottom', 'error');
        }
    };
    // =========================================================================================================================================
    // DO REFRESH
    // =====================
    MyOrdersPage.prototype.doRefresh = function (refresher) {
        this.page = 1;
        this.limit = 7;
        if (this.reActiveInfinite) {
            this.reActiveInfinite.enable(true);
        }
        this.events.publish("refresher:enabled", true);
        this.showEndPage = false;
        this.myorder_list(null, null);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    // ============================================================================================================================================
    // MY ORDER LIST
    // ===========================
    MyOrdersPage.prototype.myorder_list = function (fromdate, todate) {
        var _this = this;
        this.showEndPage = false;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.user_id = this.customer_id;
        this.data.page = this.page;
        this.data.limit = this.limit;
        if (fromdate != null) {
            this.data.from_date = fromdate;
        }
        if (todate != null) {
            this.data.to_date = todate;
        }
        this.api_service.post_data(this.order_list_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            _this.api_service.stopLoader();
            if (res == 'success') {
                _this.order_list = result.data;
                _this.icon_img = _this.api_service.API_URL_IMG;
            }
            else {
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
        });
    };
    // ====================================================================================================================================
    // INFINITE SCROLL
    // =========================
    MyOrdersPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.reActiveInfinite = infiniteScroll;
        this.events.publish('refresher:enabled', true);
        this.page += 1;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.user_id = this.customer_id;
        this.data.page = this.page;
        this.data.limit = this.limit;
        this.api_service.post_data(this.order_list_url, this.data)
            .subscribe(function (result) {
            setTimeout(function () {
                if (result.status == 'success') {
                    _this.api_service.stopLoader();
                    var posts = result.data;
                    _this.order_list = _this.order_list.concat(posts);
                    _this.icon_img = _this.api_service.API_URL_IMG;
                    infiniteScroll.complete();
                    if (result.data.length == 0) {
                        _this.showEndPage = true;
                        infiniteScroll.enable(false);
                    }
                    else {
                        _this.showEndPage = false;
                    }
                }
                else {
                    _this.api_service.stopLoader();
                }
            }, 500);
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
        });
    };
    //  =================================================================================================================
    MyOrdersPage.prototype.language_header = function () {
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
                console.log(_this.languageheader);
                console.log(_this.languageheader.my_orders);
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
    MyOrdersPage.prototype.language_field = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], MyOrdersPage.prototype, "content", void 0);
    MyOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-orders',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/my-orders/my-orders.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle start>\n      <ion-icon name="ios-menu-outline"></ion-icon>\n    </button>\n        <ion-title>{{languageheader.my_orders}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only tappable (click)="search()">\n        <ion-icon *ngIf="!show" name="search"></ion-icon>\n        <ion-icon *ngIf="show" name="close-circle" style="color: white" tappable (click)="search()"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-padding mode="md" *ngIf="show">\n        <ion-row bg_colr align-items-center no-padding>\n            <ion-col col-5>\n                <ion-item>\n                    <ion-datetime placeholder="From date" displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" [(ngModel)]="fromdate" (ngModelChange)="onChange(from_date)"></ion-datetime>\n                </ion-item>\n            </ion-col>\n            <ion-col col-5>\n                <ion-item>\n                    <ion-datetime placeholder="To date" displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" [(ngModel)]="todate" (ngModelChange)="onChange2(to_date)"></ion-datetime>\n                </ion-item>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only (click)="filter()">\n          <ion-icon name=\'md-arrow-round-forward\'></ion-icon>\n        </button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-card card_desgn *ngFor="let list of order_list" tappable (click)="order_description(list)">\n        <ion-card-header header_clr text-center>\n            {{list.type_status}}\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-row *ngIf="list.order_id">\n                        <ion-col col-5>\n                            <h4>Order Id</h4>\n                        </ion-col>\n                        <ion-col col-7>\n                            <p>{{list.order_id}} </p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h4>Price</h4>\n                        </ion-col>\n                        <ion-col col-7>\n                            <p *ngIf="list.total">{{list.total | currency:\'රු \':\'symbol\':\'1.0-2\'}} </p>\n                            <p *ngIf="!list.total">{{ 0 | currency:\'රු \':\'symbol\':\'1.0-2\'}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="list.category != null">\n                        <ion-col col-5>\n                            <h4>Category</h4>\n                        </ion-col>\n                        <ion-col col-7>\n                            <p>{{list.category}} </p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h4>Type</h4>\n                        </ion-col>\n                        <ion-col col-7>\n                            <p *ngIf="list.type == \'ad_request\'">Advertisement</p>\n                            <p *ngIf="list.type == \'post\'">Post</p>\n                            <p *ngIf="list.type == \'home_post\'">Home page post</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n                <ion-col col-4 padding-top *ngIf="list.type == \'post\' || list.type == \'home_post\'">\n                    <img class="img_size" src="{{imageUrl}}{{list.post_primary_image}}" alt="image not found">\n                </ion-col>\n\n                <ion-col col-4 padding-top *ngIf="list.type == \'ad_request\'">\n                    <!-- <img\n            *ngIf="list.type_status == \'Payment for ad is successful.Ad published soon\' || list.type_status == \'Advertisement is successfully published\'|| list.type_status == \'Under Rework\'"\n            class="img_size" src="{{imageUrl}}{{list.main_image}}" alt="image not found"> -->\n                    <img *ngIf="list.main_image == null" class="img_size" src="assets/imgs/empty_dp.png" alt="image not found">\n                    <img *ngIf="list.main_image != null" class="img_size" src="{{imageUrl}}{{list.main_image}}" alt="image not found">\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="!order_list" class="no_record_found">\n        <h3 padding text-center>\n            {{languagefield.no_records_found}}\n        </h3>\n    </ion-card>\n    <ion-card *ngIf="showEndPage">\n        <h3 padding text-center>\n            No More to Load\n        </h3>\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/my-orders/my-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], MyOrdersPage);
    return MyOrdersPage;
}());

//# sourceMappingURL=my-orders.js.map

/***/ })

});
//# sourceMappingURL=19.js.map