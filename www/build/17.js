webpackJsonp([17],{

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
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



var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, service, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.events = events;
        this.notificationList = [];
        this.show = [];
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // ==========================================================================================================================================
        // NOTIFICATION DETAIL
        // =================================
        this.Detail = function (id, status, i, val) {
            _this.show = [];
            if (val != true) {
                // alert(val);
                if (status == 0 || status == undefined) {
                    _this.notificationDetailUrl = 'notification_read';
                    var obj = {
                        'id': id,
                        'api_token': _this.service.api_token,
                        'user_id': _this.data.id
                    };
                    _this.service.post_data(_this.notificationDetailUrl, obj)
                        .subscribe(function (result) {
                        _this.service.stopLoader();
                        if (result.status == 'success') {
                            _this.getNotification();
                            _this.show[i] = true;
                            _this.events.publish('created');
                        }
                    }, function (error) {
                        _this.service.stopLoader();
                        _this.service.create(error, "top", "error");
                    });
                }
                else {
                    _this.show[i] = true;
                }
            }
            else if (val == undefined) {
                _this.show[i] = false;
            }
            else {
                _this.show[i] = false;
            }
        };
        this.data = JSON.parse(localStorage.getItem('eastern_deals'));
        this.user_id = this.data.id;
        // console.log(this.data);
        this.getNotification();
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        console.log(this.data);
        this.language_header();
        this.language_field();
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
    };
    // ==============================================================================================================================================
    // NOTIFICATION LIST
    // ============================
    NotificationPage.prototype.getNotification = function () {
        var _this = this;
        this.notificationUrl = 'notification_list';
        console.log(this.data, this.user_id);
        var obj = {
            'api_token': this.service.api_token,
            'user_id': this.user_id
        };
        console.log(obj);
        this.service.post_data(this.notificationUrl, obj)
            .subscribe(function (result) {
            if (result.status == 'success') {
                _this.service.stopLoader();
                // result.data.reverse();
                if (result.data.length > 0) {
                    console.log(result.data);
                    _this.notificationList = result.data;
                    _this.notification_id = result.id;
                    var i = 0;
                    for (var _i = 0, _a = _this.notificationList; _i < _a.length; _i++) {
                        var val = _a[_i];
                        if (val) {
                            val.show[i] = false;
                        }
                    }
                    _this.show_no_notify = false;
                }
                else {
                    _this.show_no_notify = true;
                }
            }
            else {
                _this.service.stopLoader();
                _this.service.create(result.message, "top", "error");
            }
        }, function (error) {
            _this.service.stopLoader();
            _this.service.create(error, "top", "error");
        });
    };
    // =============================================================================================================================
    NotificationPage.prototype.language_header = function () {
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
    NotificationPage.prototype.language_field = function () {
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
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/notification/notification.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{languageheader.notification}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card card_desgn *ngFor="let notification of notificationList; let i=index">\n\n        <ion-card-header tappable (click)="Detail(notification.id,notification.read_status, i, show[i])" [ngClass]="notification.read_status != 1   ? \'card_des\': \'card_des1\'">\n            <!-- <ion-icon name="arrow-round-forward"></ion-icon>  -->\n            <ion-row>\n                <ion-col col-9>\n                    <p text-wrap><b>{{notification.title}}</b></p>\n\n                </ion-col>\n                <ion-col col-3>\n                    <small>{{notification.created_at  | moment:\'MMM D YYYY\'}}</small>\n\n                </ion-col>\n\n            </ion-row>\n        </ion-card-header>\n        <ion-card-content *ngIf="notification.read_status == 1 && show[i] == true ">\n            {{notification.description}}\n        </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="show_no_notify" class="no_record_found">\n        <h3 padding text-center>{{languagefield.no_records_found}}</h3>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=17.js.map