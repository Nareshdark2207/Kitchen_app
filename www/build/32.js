webpackJsonp([32],{

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisePostPageModule", function() { return AdvertisePostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advertise_post__ = __webpack_require__(850);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdvertisePostPageModule = /** @class */ (function () {
    function AdvertisePostPageModule() {
    }
    AdvertisePostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advertise_post__["a" /* AdvertisePostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advertise_post__["a" /* AdvertisePostPage */]),
            ],
        })
    ], AdvertisePostPageModule);
    return AdvertisePostPageModule;
}());

//# sourceMappingURL=advertise-post.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisePostPage; });
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



var AdvertisePostPage = /** @class */ (function () {
    function AdvertisePostPage(navCtrl, navParams, api_service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api_service = api_service;
        this.advertise_list_url = 'advertise_post_details';
        this.addvertise = [];
        this.addvertise_discount = {};
        this.addvertise_tax = [];
        this.posted = {};
        this.posted_discount = {};
        this.details = {};
        this.shownGroup = null;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        // **************** page navigation**********************
        this.Advertise = function (field, detail, tax_percentage) {
            _this.details = { id: field, dicount: detail, tax: tax_percentage };
            _this.navCtrl.push('AdvertiseWithUsPage', { id: _this.details });
        };
        this.PostPage = function () {
            _this.navCtrl.push('PostWithUsPage');
        };
        var value_item = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = value_item.id;
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    AdvertisePostPage.prototype.ionViewDidLoad = function () {
        // this.with_us = 'advertise';
        this.with_us = 'Post';
    };
    // ****************************************************************
    AdvertisePostPage.prototype.ngOnInit = function () {
        this.language_header();
        var data = 'advertise';
        console.log(data);
        this.tab_vlaue(data);
        this.type_advertise = true;
        console.log(this.type_advertise);
    };
    // =======================================================================================================================================
    // TAB VALUE
    // ====================
    AdvertisePostPage.prototype.tab_vlaue = function (data) {
        console.log(data);
        if (data == 'Post') {
            this.type_Post = true;
            this.type_advertise = false;
        }
        else {
            this.type_advertise = true;
            this.type_Post = false;
        }
        this.advertise(data);
    };
    // ========================================================================================================================================
    // ADVERTISE
    // ====================
    AdvertisePostPage.prototype.advertise = function (data) {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        // if (data == 'advertise') {
        //   this.data.type = 'ad';
        // } else {
        //   this.data.type = 'post';
        // }
        this.data.type = 'post';
        this.api_service.post_data(this.advertise_list_url, this.data)
            .subscribe(function (result) {
            if (result.status == 'success') {
                _this.api_service.stopLoader();
                if (_this.data.type == 'ad') {
                    _this.addvertise = result.data;
                    console.log(_this.addvertise);
                    _this.addvertise_discount = result.discount.data;
                    _this.addvertise_tax = result.taxes;
                }
                else {
                    _this.posted = result.data;
                    _this.posted_discount = result.discount.data;
                    console.log(_this.posted);
                }
            }
            else {
                _this.api_service.stopLoader();
            }
        }, function (error) {
            _this.api_service.create(error, "top", "error");
            _this.api_service.stopLoader();
        });
    };
    // ==============================================================================================================================
    // TOGGLE GROUP
    AdvertisePostPage.prototype.toggleGroup = function (group, id) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    // GROUP SHOWN
    AdvertisePostPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    // TOGGLE ITEM
    AdvertisePostPage.prototype.toggleItem = function (i, j) {
        this.addvertise[i].list[j].open = !this.addvertise[i].list[j].open;
    };
    AdvertisePostPage.prototype.language_header = function () {
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
                console.log(_this.languageheader.advertise);
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
    AdvertisePostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-advertise-post',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/advertise-post/advertise-post.html"*/'<ion-header no-border mode="ios">\n    <ion-navbar hideBackButton="true" mode="ios">\n        <button ion-button menuToggle start>\n      <ion-icon name="ios-menu-outline"></ion-icon>\n    </button>\n        <ion-title>{{languageheader.post}}</ion-title>\n        <div class="segm">\n            <ion-segment [(ngModel)]="with_us" mode="ios">\n                <!-- <ion-segment-button mode="ios" value="advertise" class="seg-button" tappable (click)="tab_vlaue(\'advertise\')"\n          [disabled]="type_advertise">\n          {{languageheader.advertise}}\n        </ion-segment-button> -->\n                <ion-segment-button mode="ios" value="Post" class="seg-button" tappable (click)="tab_vlaue(\'Post\')" [disabled]="type_Post">\n                    <!-- {{languageheader.post}} -->\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div [ngSwitch]="with_us">\n        <ion-list *ngSwitchCase="\'advertise\'">\n            <ion-item *ngFor="let add of addvertise; let i=index" (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n                <div class="addvertise">\n                    <div class="icon_circle">\n                        <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'ios-arrow-down\' : \'ios-arrow-forward\'">\n                        </ion-icon>\n                    </div>\n                    <div class="add" *ngIf="add.banner_item ==\'item 0\'">\n                        <p>{{add.ad_size}} px</p>\n                        <div class="center" *ngIf="addvertise_discount">\n                            <button ion-button class="login_button">Discount- {{addvertise_discount.percentage}}%</button></div>\n                    </div>\n                    <ion-row *ngIf="add.banner_item ==\'item 1\'">\n                        <ion-col col-6>\n                            <div class="add_1">\n                                <p>{{add.ad_size}} px</p>\n                            </div>\n                            <div class="center" *ngIf="addvertise_discount">\n                                <button ion-button class="login_button_1">Discount- {{addvertise_discount.percentage}}%</button></div>\n                        </ion-col>\n                        <ion-col col-6>\n                            <div class="add_1">\n                                <p>{{add.ad_size}} px</p>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <div *ngIf="isGroupShown(i)">\n                        <!-- <h2 text-left padding *ngIf="!addvertise_discount" text-wrap>\n              <ion-badge>Note :</ion-badge> Our prices includes all taxes\n            </h2>\n            <h2 text-left padding text-wrap *ngIf="addvertise_discount">\n              <ion-badge>Note :</ion-badge> Our prices includes all taxes. If there is any discount, it will be reduce\n              in this amount itself\n            </h2> -->\n                        <h2 text-left padding text-wrap>\n                            <ion-badge>Note :</ion-badge> <span *ngIf="addvertise_tax.length">Prices includes all the taxes </span>\n                            <!-- <span *ngIf="addvertise_discount">and with discount</span> -->\n                        </h2>\n                        <ion-card card_desn *ngFor="let field of add.list; let j = index">\n                            <ion-row>\n                                <ion-col col-8 text-left>\n                                    <h3>{{field.banner_name}}</h3>\n                                    <p text-wrap>For per {{field.duration}} - <span *ngIf="addvertise_tax.length">Inclusive of all taxes Rs</span> {{field.cost | currency:\'රු \':\'symbol\':\'1.0-2\'}} </p>\n                                </ion-col>\n                                <ion-col col-4 text-right>\n                                    <button ion-button icon-end class="add_click" tappable (click)="Advertise(field,addvertise_discount,addvertise_tax)"> <ion-icon\n                      name="arrow-round-forward">\n                    </ion-icon></button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-card>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'Post\'">\n            <ion-item>\n                <div class="addvertise">\n                    <ion-row>\n                        <ion-col col-6 offset-3 no-padding>\n                            <div class="add_2">\n                                <p>{{posted.post_size}}</p>\n                            </div>\n                            <div class="center" *ngIf="posted_discount">\n                                <button ion-button class="login_button_2 ">Discount- {{posted_discount.percentage}}%</button></div>\n                        </ion-col>\n                    </ion-row>\n                    <h2 text-left text-wrap padding>\n                        <ion-badge>Note :</ion-badge> We can post Max 5 images. This post image appears only for {{posted.post_duration}} {{posted.post_duration_unit}}s.\n                    </h2>\n                    <ion-card card_desn>\n                        <ion-row>\n                            <ion-col col-8 text-left>\n                                <h3>Post Image</h3>\n                                <p text-wrap>For {{posted.post_duration}} {{posted.post_duration_unit}}s - <span *ngIf="addvertise_tax.length">Inclusive of all taxes Rs</span> {{posted.post_cost | currency:\'රු \':\'symbol\':\'1.0-2\'}} </p>\n                            </ion-col>\n                            <ion-col col-4 text-right>\n                                <button ion-button icon-end class="add_click" tappable (click)="PostPage()"> <ion-icon\n                    name="arrow-round-forward">\n                  </ion-icon></button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/advertise-post/advertise-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
    ], AdvertisePostPage);
    return AdvertisePostPage;
}());

//# sourceMappingURL=advertise-post.js.map

/***/ })

});
//# sourceMappingURL=32.js.map