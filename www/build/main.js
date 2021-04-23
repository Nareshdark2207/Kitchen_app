webpackJsonp([34],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpClient } from '@angular/common/http';



// import { Vibration } from '@ionic-native/vibration';




var Service = /** @class */ (function () {
    function Service(http, toastCtrl, loadingCtrl, _sanitizer, events) {
        var _this = this;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._sanitizer = _sanitizer;
        this.events = events;
        this.API_URL_IMG = "https://easterndeals.lk/";
        this.api_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodHRwczovL2VkZWFscy5teWxhcG9yZXRvZGF5LmluIiwibmFtZSI6IkVhc3Rlcm4gRGVhbHMiLCJpYXQiOjE1MTYyMzkwMjJ9.b5IdVItcKeKUovImwQjlrrKx5IZUZatSsutFXsQ5p00";
        this.list = [];
        // public api_token = "123456";
        this.edit_data = {};
        this.exist = false;
        this.refresher = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append("Content-Type", "application/json");
        this.events.subscribe("refresher:enabled", function (data) {
            console.log(data);
            _this.refresher = data;
        });
    }
    Service_1 = Service;
    Service.prototype.create = function (message, position, custom_class) {
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: false ? null : 5000,
            position: position,
            showCloseButton: false,
            closeButtonText: "OK",
            cssClass: custom_class
        });
        if (custom_class == "error") {
            // this.vibration.vibrate(1000);
        }
        this.toast.present();
    };
    //loader start
    Service.prototype.startLoader = function () {
        if (this.refresher != true) {
            console.log(this.refresher);
            this.loader();
            this.loading.present();
        }
        else {
            this.refresher = false;
        }
    };
    Service.prototype.stopLoader = function () {
        var _this = this;
        if (this.loading) {
            setTimeout(function () {
                _this.loading.dismiss().then(function () { return console.log('dismissed'); });
            }, 3000);
        }
    };
    // ============================================================
    Service.prototype.loader = function () {
        // if(!this.loading){
        var componentDefinition = "customclass";
        var html = "<div class=\"" + componentDefinition + "__container\">\n          <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"lds-square\"><g transform=\"translate(20 20)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#ffb900\" transform=\"scale(0.543883 0.543883)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.4s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(50 20)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#f7721c\" transform=\"scale(0.822633 0.822633)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.3s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(80 20)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#ffb900\" transform=\"scale(1 1)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.2s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(20 50)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#f7721c\" transform=\"scale(0.822633 0.822633)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.3s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(50 50)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#ffb900\" transform=\"scale(1 1)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.2s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(80 50)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#F7721C\" transform=\"scale(1 1)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.1s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(20 80)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#ffb900\" transform=\"scale(1 1)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.2s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(50 80)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#F7721C\" transform=\"scale(1 1)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"-0.1s\" repeatCount=\"indefinite\"></animateTransform></rect></g><g transform=\"translate(80 80)\"><rect x=\"-15\" y=\"-15\" width=\"30\" height=\"30\" fill=\"#ffb900\" transform=\"scale(1 1)\"><animateTransform attributeName=\"transform\" type=\"scale\" calcMode=\"spline\" values=\"1;1;0.2;1;1\" keyTimes=\"0;0.2;0.5;0.8;1\" dur=\"1s\" keySplines=\"0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5\" begin=\"0s\" repeatCount=\"indefinite\"></animateTransform></rect></g></svg>\n        </div>";
        var safeHtml = this._sanitizer.bypassSecurityTrustHtml(html);
        if (this.loading && this.loading.instance) {
            this.stopLoader();
        }
        this.loading = this.loadingCtrl.create({
            spinner: "hide",
            dismissOnPageChange: true, duration: 5000,
            cssClass: componentDefinition,
            content: safeHtml
        });
        // }
    };
    // =======================================================
    //loader stop
    // =================================================================
    Service.prototype.post_data = function (particle_url, obj) {
        try {
            this.startLoader();
            return this.http
                .post(Service_1.API_URL + particle_url, obj)
                .map(this.extract_post_result)
                .catch(this.handle_post_error);
        }
        catch (error) {
            console.log(error);
        }
    };
    // ======================================================================
    Service.prototype.notification = function (obj) {
        try {
            return this.http
                .post(Service_1.API_URL2, obj)
                .map(this.extract_post_result2)
                .catch(this.handle_post_error2);
        }
        catch (error) {
            console.log(error);
        }
    };
    Service.prototype.extract_post_result = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    Service.prototype.handle_post_error = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + " - " + error.statusText
                : "cannot connect to server, please check the internet connectivity";
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    Service.prototype.extract_post_result2 = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    Service.prototype.handle_post_error2 = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    Service.prototype.get_list = function (particle_url) {
        console.log(particle_url);
        try {
            // this.startLoader();
            return this.http
                .get(Service_1.API_URL + particle_url)
                .map(this.extract_get_list)
                .catch(this.handle_get_list_error);
        }
        catch (error) {
            console.log(error);
        }
    };
    Service.prototype.extract_get_list = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    Service.prototype.handle_get_list_error = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + " - " + error.statusText
                : "cannot connect to server, please check the internet connectivity";
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    // public static API_URL = "https://easterndeals.lk/api/";
    // public API_URL_IMG = "https://easterndeals.lk/";
    // public static API_URL = "http://edeals.lk/api/";
    // public API_URL_IMG = "http://edeals.lk/";
    // public static API_URL = "https://edeals.mylaporetoday.in/api/";
    // public API_URL_IMG = "https://edeals.mylaporetoday.in/";
    Service.API_URL = "https://easterndeals.lk/api/";
    Service.API_URL2 = "https://push.mylaporetoday.in/device_register";
    Service = Service_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], Service);
    return Service;
    var Service_1;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		814,
		33
	],
	"../pages/advertise-post/advertise-post.module": [
		815,
		32
	],
	"../pages/advertise-with-us/advertise-with-us.module": [
		839,
		31
	],
	"../pages/breakfast/breakfast.module": [
		817,
		7
	],
	"../pages/cart-modal/cart-modal.module": [
		816,
		30
	],
	"../pages/category/category.module": [
		818,
		29
	],
	"../pages/change-password/change-password.module": [
		820,
		28
	],
	"../pages/contact/contact.module": [
		819,
		27
	],
	"../pages/cuisine-viewall/cuisine-viewall.module": [
		822,
		6
	],
	"../pages/description/description.module": [
		840,
		26
	],
	"../pages/dinner/dinner.module": [
		825,
		5
	],
	"../pages/dish-viewall/dish-viewall.module": [
		823,
		4
	],
	"../pages/edit-email/edit-email.module": [
		821,
		25
	],
	"../pages/email-otp/email-otp.module": [
		824,
		24
	],
	"../pages/forget/forget.module": [
		842,
		23
	],
	"../pages/healthy/healthy.module": [
		829,
		3
	],
	"../pages/homepage/homepage.module": [
		845,
		2
	],
	"../pages/imageviewer/imageviewer.module": [
		826,
		22
	],
	"../pages/login/login.module": [
		841,
		21
	],
	"../pages/lunch/lunch.module": [
		835,
		1
	],
	"../pages/my-account/my-account.module": [
		827,
		20
	],
	"../pages/my-orders/my-orders.module": [
		828,
		19
	],
	"../pages/mywallet/mywallet.module": [
		831,
		18
	],
	"../pages/notification/notification.module": [
		830,
		17
	],
	"../pages/order-description/order-description.module": [
		846,
		16
	],
	"../pages/payment/payment.module": [
		832,
		15
	],
	"../pages/post-with-us/post-with-us.module": [
		847,
		14
	],
	"../pages/profile/profile.module": [
		843,
		13
	],
	"../pages/renewal/renewal.module": [
		833,
		12
	],
	"../pages/review/review.module": [
		837,
		11
	],
	"../pages/search/search.module": [
		834,
		10
	],
	"../pages/snacks/snacks.module": [
		838,
		0
	],
	"../pages/tabs/tabs.module": [
		844,
		9
	],
	"../pages/terms-condition/terms-condition.module": [
		836,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(488);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_gallery_modal__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_selectable__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_16_ionic_gallery_modal__["c" /* GalleryModalModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false, preloadModules: true }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advertise-post/advertise-post.module#AdvertisePostPageModule', name: 'AdvertisePostPage', segment: 'advertise-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart-modal/cart-modal.module#CartModalPageModule', name: 'CartModalPage', segment: 'cart-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/breakfast/breakfast.module#BreakfastPageModule', name: 'BreakfastPage', segment: 'breakfast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-email/edit-email.module#EditEmailPageModule', name: 'EditEmailPage', segment: 'edit-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuisine-viewall/cuisine-viewall.module#CuisineViewallPageModule', name: 'CuisineViewallPage', segment: 'cuisine-viewall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dish-viewall/dish-viewall.module#DishViewallPageModule', name: 'DishViewallPage', segment: 'dish-viewall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-otp/email-otp.module#EmailOtpPageModule', name: 'EmailOtpPage', segment: 'email-otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dinner/dinner.module#DinnerPageModule', name: 'DinnerPage', segment: 'dinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imageviewer/imageviewer.module#ImageviewerPageModule', name: 'ImageviewerPage', segment: 'imageviewer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-account/my-account.module#MyAccountPageModule', name: 'MyAccountPage', segment: 'my-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-orders/my-orders.module#MyOrdersPageModule', name: 'MyOrdersPage', segment: 'my-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/healthy/healthy.module#HealthyPageModule', name: 'HealthyPage', segment: 'healthy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mywallet/mywallet.module#MywalletPageModule', name: 'MywalletPage', segment: 'mywallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renewal/renewal.module#RenewalPageModule', name: 'RenewalPage', segment: 'renewal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lunch/lunch.module#LunchPageModule', name: 'LunchPage', segment: 'lunch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-condition/terms-condition.module#TermsConditionPageModule', name: 'TermsConditionPage', segment: 'terms-condition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/snacks/snacks.module#SnacksPageModule', name: 'SnacksPage', segment: 'snacks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advertise-with-us/advertise-with-us.module#AdvertiseWithUsPageModule', name: 'AdvertiseWithUsPage', segment: 'advertise-with-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/description/description.module#DescriptionPageModule', name: 'DescriptionPage', segment: 'description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homepage/homepage.module#HomepagePageModule', name: 'HomepagePage', segment: 'homepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-description/order-description.module#OrderDescriptionPageModule', name: 'OrderDescriptionPage', segment: 'order-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-with-us/post-with-us.module#PostWithUsPageModule', name: 'PostWithUsPage', segment: 'post-with-us', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_17_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_13__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: __WEBPACK_IMPORTED_MODULE_16_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    MomentPipe.prototype.transform = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).format(format);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'moment',
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 305,
	"./af.js": 305,
	"./ar": 306,
	"./ar-dz": 307,
	"./ar-dz.js": 307,
	"./ar-kw": 308,
	"./ar-kw.js": 308,
	"./ar-ly": 309,
	"./ar-ly.js": 309,
	"./ar-ma": 310,
	"./ar-ma.js": 310,
	"./ar-sa": 311,
	"./ar-sa.js": 311,
	"./ar-tn": 312,
	"./ar-tn.js": 312,
	"./ar.js": 306,
	"./az": 313,
	"./az.js": 313,
	"./be": 314,
	"./be.js": 314,
	"./bg": 315,
	"./bg.js": 315,
	"./bm": 316,
	"./bm.js": 316,
	"./bn": 317,
	"./bn.js": 317,
	"./bo": 318,
	"./bo.js": 318,
	"./br": 319,
	"./br.js": 319,
	"./bs": 320,
	"./bs.js": 320,
	"./ca": 321,
	"./ca.js": 321,
	"./cs": 322,
	"./cs.js": 322,
	"./cv": 323,
	"./cv.js": 323,
	"./cy": 324,
	"./cy.js": 324,
	"./da": 325,
	"./da.js": 325,
	"./de": 326,
	"./de-at": 327,
	"./de-at.js": 327,
	"./de-ch": 328,
	"./de-ch.js": 328,
	"./de.js": 326,
	"./dv": 329,
	"./dv.js": 329,
	"./el": 330,
	"./el.js": 330,
	"./en-SG": 331,
	"./en-SG.js": 331,
	"./en-au": 332,
	"./en-au.js": 332,
	"./en-ca": 333,
	"./en-ca.js": 333,
	"./en-gb": 334,
	"./en-gb.js": 334,
	"./en-ie": 335,
	"./en-ie.js": 335,
	"./en-il": 336,
	"./en-il.js": 336,
	"./en-nz": 337,
	"./en-nz.js": 337,
	"./eo": 338,
	"./eo.js": 338,
	"./es": 339,
	"./es-do": 340,
	"./es-do.js": 340,
	"./es-us": 341,
	"./es-us.js": 341,
	"./es.js": 339,
	"./et": 342,
	"./et.js": 342,
	"./eu": 343,
	"./eu.js": 343,
	"./fa": 344,
	"./fa.js": 344,
	"./fi": 345,
	"./fi.js": 345,
	"./fo": 346,
	"./fo.js": 346,
	"./fr": 347,
	"./fr-ca": 348,
	"./fr-ca.js": 348,
	"./fr-ch": 349,
	"./fr-ch.js": 349,
	"./fr.js": 347,
	"./fy": 350,
	"./fy.js": 350,
	"./ga": 351,
	"./ga.js": 351,
	"./gd": 352,
	"./gd.js": 352,
	"./gl": 353,
	"./gl.js": 353,
	"./gom-latn": 354,
	"./gom-latn.js": 354,
	"./gu": 355,
	"./gu.js": 355,
	"./he": 356,
	"./he.js": 356,
	"./hi": 357,
	"./hi.js": 357,
	"./hr": 358,
	"./hr.js": 358,
	"./hu": 359,
	"./hu.js": 359,
	"./hy-am": 360,
	"./hy-am.js": 360,
	"./id": 361,
	"./id.js": 361,
	"./is": 362,
	"./is.js": 362,
	"./it": 363,
	"./it-ch": 364,
	"./it-ch.js": 364,
	"./it.js": 363,
	"./ja": 365,
	"./ja.js": 365,
	"./jv": 366,
	"./jv.js": 366,
	"./ka": 367,
	"./ka.js": 367,
	"./kk": 368,
	"./kk.js": 368,
	"./km": 369,
	"./km.js": 369,
	"./kn": 370,
	"./kn.js": 370,
	"./ko": 371,
	"./ko.js": 371,
	"./ku": 372,
	"./ku.js": 372,
	"./ky": 373,
	"./ky.js": 373,
	"./lb": 374,
	"./lb.js": 374,
	"./lo": 375,
	"./lo.js": 375,
	"./lt": 376,
	"./lt.js": 376,
	"./lv": 377,
	"./lv.js": 377,
	"./me": 378,
	"./me.js": 378,
	"./mi": 379,
	"./mi.js": 379,
	"./mk": 380,
	"./mk.js": 380,
	"./ml": 381,
	"./ml.js": 381,
	"./mn": 382,
	"./mn.js": 382,
	"./mr": 383,
	"./mr.js": 383,
	"./ms": 384,
	"./ms-my": 385,
	"./ms-my.js": 385,
	"./ms.js": 384,
	"./mt": 386,
	"./mt.js": 386,
	"./my": 387,
	"./my.js": 387,
	"./nb": 388,
	"./nb.js": 388,
	"./ne": 389,
	"./ne.js": 389,
	"./nl": 390,
	"./nl-be": 391,
	"./nl-be.js": 391,
	"./nl.js": 390,
	"./nn": 392,
	"./nn.js": 392,
	"./pa-in": 393,
	"./pa-in.js": 393,
	"./pl": 394,
	"./pl.js": 394,
	"./pt": 395,
	"./pt-br": 396,
	"./pt-br.js": 396,
	"./pt.js": 395,
	"./ro": 397,
	"./ro.js": 397,
	"./ru": 398,
	"./ru.js": 398,
	"./sd": 399,
	"./sd.js": 399,
	"./se": 400,
	"./se.js": 400,
	"./si": 401,
	"./si.js": 401,
	"./sk": 402,
	"./sk.js": 402,
	"./sl": 403,
	"./sl.js": 403,
	"./sq": 404,
	"./sq.js": 404,
	"./sr": 405,
	"./sr-cyrl": 406,
	"./sr-cyrl.js": 406,
	"./sr.js": 405,
	"./ss": 407,
	"./ss.js": 407,
	"./sv": 408,
	"./sv.js": 408,
	"./sw": 409,
	"./sw.js": 409,
	"./ta": 410,
	"./ta.js": 410,
	"./te": 411,
	"./te.js": 411,
	"./tet": 412,
	"./tet.js": 412,
	"./tg": 413,
	"./tg.js": 413,
	"./th": 414,
	"./th.js": 414,
	"./tl-ph": 415,
	"./tl-ph.js": 415,
	"./tlh": 416,
	"./tlh.js": 416,
	"./tr": 417,
	"./tr.js": 417,
	"./tzl": 418,
	"./tzl.js": 418,
	"./tzm": 419,
	"./tzm-latn": 420,
	"./tzm-latn.js": 420,
	"./tzm.js": 419,
	"./ug-cn": 421,
	"./ug-cn.js": 421,
	"./uk": 422,
	"./uk.js": 422,
	"./ur": 423,
	"./ur.js": 423,
	"./uz": 424,
	"./uz-latn": 425,
	"./uz-latn.js": 425,
	"./uz.js": 424,
	"./vi": 426,
	"./vi.js": 426,
	"./x-pseudo": 427,
	"./x-pseudo.js": 427,
	"./yo": 428,
	"./yo.js": 428,
	"./zh-cn": 429,
	"./zh-cn.js": 429,
	"./zh-hk": 430,
	"./zh-hk.js": 430,
	"./zh-tw": 431,
	"./zh-tw.js": 431
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 791;

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard, events, api_service, device, push, appVersion, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.events = events;
        this.api_service = api_service;
        this.device = device;
        this.push = push;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.logout_url = 'logout';
        this.rootPage = 'TabsPage';
        this.app_id = 'WoAbL2F4EJetSnABlEHplScaU';
        this.categorylist_url = 'language_settings_menus';
        this.categories = [];
        this.languageheader_url = 'language_settings_header';
        this.appversion_url = 'playstore';
        this.languageheader = {};
        this.hidefab = true;
        this.languagelist_url = 'language_list';
        this.blur = false;
        this.events.subscribe('visitors:count', function (count) {
            console.log('Get data from child page' + count);
            if (count) {
                _this.usercount = count;
            }
        });
        this.viewersCountList();
        if (localStorage.getItem('eastern_deals')) {
            var value_item = JSON.parse(localStorage.getItem('eastern_deals'));
            this.customer_id = value_item.id;
        }
        else {
            this.customer_id = null;
        }
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        this.data = {};
        // this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_service.api_token;
        this.data.lang_code = this.code;
        this.data.user_id = this.customer_id;
        console.log(this.data);
        this.api_service.post_data(this.categorylist_url, this.data)
            .subscribe(function (result) {
            if (result.status == 'success') {
                console.log(result.menu);
                _this.api_service.stopLoader();
                if (localStorage.getItem('eastern_deals')) {
                    _this.data = JSON.parse(localStorage.getItem('eastern_deals'));
                    _this.customer_id = _this.data.id;
                    console.log(_this.customer_id);
                    if (_this.customer_id) {
                        _this.pages = result.menu;
                        _this.categories = result.menu;
                    }
                }
                else {
                    _this.customer_id = null;
                    _this.pages = result.menu;
                    _this.categories = result.menu;
                }
            }
            else {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
        });
        this.initializeApp();
        this.language_header();
        // this.logout();
        events.subscribe('menu:created', function (result) {
            console.log(result);
            // const url_data={};
            var user_id = null;
            var lang_code = null;
            // if (result.data) {
            if (localStorage.getItem('eastern_deals')) {
                _this.eastern_deals = JSON.parse(localStorage.getItem('eastern_deals'));
                user_id = _this.eastern_deals.id;
            }
            console.log(localStorage.getItem('lang_code'));
            lang_code = localStorage.getItem('lang_code');
            // } else {
            //   this.eastern_deals = JSON.parse(localStorage.getItem('eastern_deals'));
            //   user_id = this.eastern_deals.id;
            //   lang_code = localStorage.getItem('lang_code');
            // }
            var url_data = {
                'lang_code': lang_code,
                'user_id': user_id,
                'api_token': _this.api_service.api_token,
            };
            console.log(url_data);
            _this.api_service.post_data(_this.categorylist_url, url_data)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    console.log(result.menu);
                    _this.api_service.stopLoader();
                    if (localStorage.getItem('eastern_deals')) {
                        var local_storage = JSON.parse(localStorage.getItem('eastern_deals'));
                        _this.customer_id = local_storage.role_id;
                        console.log(_this.customer_id);
                        if (_this.customer_id) {
                            _this.pages = result.menu;
                            _this.categories = result.menu;
                            console.log(_this.pages);
                        }
                    }
                    else {
                        _this.customer_id = null;
                        _this.pages = result.menu;
                        _this.categories = result.menu;
                    }
                }
                else {
                    _this.api_service.stopLoader();
                    _this.api_service.create(result.message, 'top', 'error');
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
            });
            _this.language_header();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is('android')) {
                _this.statusBar.styleBlackTranslucent();
            }
            else {
                _this.statusBar.hide();
            }
            _this.splashScreen.hide();
            _this.initPushNotification();
            if (_this.platform.is('cordova')) {
                _this.keyboard.hide;
            }
            _this.events.subscribe('fabhide:created', function (result) {
                _this.hidefab = result;
            });
            _this.appVersion.getVersionNumber().then(function (val) {
                console.log(val);
                _this.appversionno = val;
            });
            _this.appVersion.getPackageName().then(function (val) {
                console.log(val);
                _this.apppakagename = val;
            });
            _this.versioncheck();
            _this.language();
        });
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We don\'t have permission to send push notifications');
            }
        });
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
        }
        var options = {
            android: { senderID: '230790685724', sound: true, vibrate: true },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true',
                clearBadge: 'true'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (data) {
            console.log('message -> ' + data.message);
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
                _this.api_service.create(data.message, 'top', 'success');
            }
            else {
                console.log('Push notification clicked');
            }
        });
        pushObject.on('registration').
            subscribe(function (registration) {
            var AppToken = registration.registrationId;
            var obj = { 'app_id': _this.app_id, 'device_token': AppToken, 'model': _this.device.model, 'platform': _this.device.platform, 'status': true };
            localStorage.setItem('appPushToken', JSON.stringify(AppToken));
            // this.api_service.presentAlert('message', JSON.stringify(obj));
            _this.api_service.notification(obj)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    // this.api_service.presentAlert(result.status , result.message );
                }
                else if (result.status == 'error') {
                    _this.api_service.create(result.message, 'top', 'error');
                }
            }, function (error) {
                console.log(error);
            });
        });
        pushObject.on('error').
            subscribe(function (error) {
            return console.error('Error with Push plugin', error);
        });
    };
    MyApp.prototype.versioncheck = function () {
        var _this = this;
        var url = this.appversion_url + '?api_token=' + this.api_service.api_token;
        this.api_service.get_list(url).subscribe(function (result) {
            console.log(result.data.playstore);
            if (_this.platform.is('android')) {
                if (result.data.playstore != _this.appversionno && result.data.playstore != undefined) {
                    var label = '(Current:' + _this.appversionno + ' Latest:' + result.data.playstore + ')';
                    var alert_1 = _this.alertCtrl.create({
                        title: 'App Update',
                        subTitle: 'A new version is available. Please update to latest version!\n' + label,
                        buttons: [{
                                text: 'Cancel',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                    _this.platform.exitApp();
                                }
                            },
                            {
                                text: 'Update',
                                handler: function (data) {
                                    window.open('https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=' + _this.apppakagename, "_system", "location=yes");
                                    console.log('Saved clicked');
                                    _this.platform.exitApp();
                                }
                            }],
                        enableBackdropDismiss: false
                    });
                    alert_1.present();
                }
            }
            else if (_this.platform.is('ios')) {
                if (result.data.appstore != _this.appversionno && result.data.appstore != undefined) {
                    var label = '(Current:' + _this.appversionno + ' Latest:' + result.data.appstore + ')';
                    var alert_2 = _this.alertCtrl.create({
                        title: 'App Update',
                        subTitle: 'A new version is available. Please update to latest version!\n' + label,
                        buttons: [{
                                text: 'Cancel',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                }
                            },
                            {
                                text: 'Update',
                                handler: function (data) {
                                    window.open('itms-apps://itunes.apple.com/app/eastern-deals/id1477294880?mt=8', "_system", "location=yes");
                                    console.log('Saved clicked');
                                }
                            }],
                        enableBackdropDismiss: false
                    });
                    alert_2.present();
                }
            }
            else {
                console.log('platform not available');
            }
        }, function (error) {
            _this.api_service.create(error, "top", "error");
        });
    };
    MyApp.prototype.language_header = function () {
        var _this = this;
        var language_header_api = this.languageheader_url + '?api_token=' + this.api_service.api_token;
        language_header_api += '&lang_code=' + localStorage.getItem('lang_code');
        language_header_api += '&user_id=' + this.customer_id;
        this.api_service.get_list(language_header_api)
            .subscribe(function (result) {
            if (result.status == 'success') {
                _this.languageheader = result.header_list;
            }
            else {
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.create(error, 'top', 'error');
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.data = {};
        // this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_service.api_token;
        this.data.user_id = this.customer_id;
        console.log(this.data);
        this.api_service.post_data(this.logout_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            console.log(result);
            _this.api_service.stopLoader();
            if (res == 'success') {
                localStorage.removeItem('eastern_deals');
                _this.nav.setRoot('HomepagePage');
                _this.customer_id == null;
                _this.show = false;
                _this.events.publish('menu:created', result);
            }
            else {
                console.log('error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            console.log(error);
        });
        // this.events.publish('menu:created', localStorage.getItem('lang_code'));
    };
    MyApp.prototype.category_list = function () {
    };
    MyApp.prototype.open_modal = function () {
        this.show_overlay = true;
    };
    MyApp.prototype.close_modal = function () {
        this.show_overlay = false;
    };
    MyApp.prototype.language = function () {
        var _this = this;
        this.api_service.get_list(this.languagelist_url + '?api_token=' + this.api_service.api_token + '&slider_name= 1').subscribe(function (result) {
            if (result.status == 'success') {
                _this.languagelist = result.data;
                console.log(_this.languagelist);
            }
            else {
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.create(error, 'top', 'error');
        });
    };
    MyApp.prototype.language_code = function (code) {
        localStorage.setItem('lang_code', code);
        this.splashScreen.hide();
        location.reload();
    };
    MyApp.prototype.popover = function () {
        this.blur = true;
        __WEBPACK_IMPORTED_MODULE_9_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_9_jquery__(".share-btn").click(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__(".share-btn").toggleClass("active");
                __WEBPACK_IMPORTED_MODULE_9_jquery__("ul").toggleClass("active");
                __WEBPACK_IMPORTED_MODULE_9_jquery__("blur-bg").toggleClass("active");
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == 'AdvertisePostPage') {
            if (this.customer_id != null || this.customer_id != undefined) {
                this.nav.setRoot(page.component);
            }
            else {
                this.nav.setRoot('LoginPage', { type: 'addpost' });
            }
        }
        else {
            if (page.component === 'HomepagePage') {
                this.nav.setRoot('TabsPage');
            }
            else {
                this.nav.setRoot(page.component);
            }
        }
    };
    MyApp.prototype.check_role_present = function (fab) {
        fab.close();
        if (this.customer_id != null || this.customer_id != undefined) {
            this.nav.setRoot('AdvertisePostPage');
        }
        else {
            this.nav.setRoot('LoginPage', { type: 'addpost' });
        }
    };
    MyApp.prototype.call_support = function (fab) {
        var _this = this;
        fab.close();
        var contact_url = 'contact_info';
        var url = contact_url + '?api_token=' + this.api_service.api_token;
        this.api_service.get_list(url)
            .subscribe(function (result) {
            if (result.status == "success") {
                window.open("tel:" + result.data.landline_number + "", '_system', 'location=yes');
            }
        }, function (error) {
            _this.api_service.create(error, "top", "error");
        });
    };
    MyApp.prototype.viewersCountList = function () {
        var _this = this;
        var api = 'viewcount' + '?api_token=' + this.api_service.api_token;
        this.api_service.get_list(api)
            .subscribe(function (result) {
            localStorage.setItem('countViewers', String(result.slug_value));
            _this.usercount = result.slug_value;
            console.log('initial view count' + _this.usercount);
        }, function (error) {
            _this.api_service.create(error, 'top', 'error');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/app/app.html"*/'<ion-menu [content]="Nav" type="overlay">\n    <ion-header no-border>\n        <ion-toolbar logo>\n          <ion-title>Sowmyas Kitchen</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list no-lines>\n            <button menuClose ion-item *ngFor="let p of pages" tappable (click)="openPage(p)" [hidden]="p.title == \'Enquiry\'">\n        <ion-icon name="{{p.icon}}" item-start ></ion-icon>\n        <b class="font_size" >{{p.title}}</b>\n      </button>\n            <button menuClose ion-item tappable (click)="logout()" *ngIf="customer_id != null">\n        <ion-icon name="log-out" item-start></ion-icon>\n        <b class="font_size">{{languageheader.logout}}</b>\n      </button>\n        </ion-list>\n    </ion-content>\n    <ion-footer no-border>\n        <ion-toolbar>\n            <ion-buttons start>\n                <button ion-button icon-only clear (click)="open_modal()">\n                      <ion-icon name="globe"></ion-icon>\n                    </button>\n                <!-- <button ion-button icon-only clear (click)="socialSharing_()"><ion-icon name="share"></ion-icon></button> -->\n            </ion-buttons>\n\n\n            <p>version {{appversionno}}</p>\n        </ion-toolbar>\n    </ion-footer>\n</ion-menu>\n<div *ngIf="show_overlay" class="modal_overlay">\n    <div class="header">\n        <div class="title">\n            <!-- Language Setting -->\n        </div>\n        <div class="close_button">\n            <button ion-button icon-only (click)="close_modal()">\n                        <ion-icon name="close"></ion-icon>\n                      </button>\n        </div>\n    </div>\n    <div class="body">\n\n        <button ion-button block (click)="language_code(list.code)" *ngFor="let list of languagelist">{{list.name}}</button>\n\n    </div>\n</div>\n\n<!-- <ion-tabs tabsPlacement=\'bottom\' [selectedIndex]="0">\n\n    <ion-tab [root]="tab1Root" tabsHideOnSubPages="false" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabsHideOnSubPages="false" tabTitle="My Order" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="tab3Root" tabsHideOnSubPages="false" tabTitle="OrderDescriptionPage" tabIcon="headset"></ion-tab>\n    <ion-tab [root]="tab4Root" tabsHideOnSubPages="false" tabTitle="ProfilePage" tabIcon="contact"></ion-tab>\n  \n  </ion-tabs> -->\n<!-- <div class="blur-bg" *ngIf="blur"></div>\n<ion-fab class="ion-fab-primary" bottom right *ngIf="hidefab" #fab class="section-wrapper"(click)="popover()">\n    <div class="floating-action-button">\n        <div class="fab-backdrop"></div>\n      <div class="share-btn">\n        <ion-icon id="share-icon" ios="md-share" md="md-share"></ion-icon>\n        <ion-icon id="close-icon" name="close"></ion-icon>\n      </div>\n      <ul>\n        <li fab_label tappable (click)="call_support(fab)">\n            <ion-icon name="call"></ion-icon>\n        </li>\n        <li fab_label tappable>\n            <ion-icon name="eye"></ion-icon>\n        </li>       \n        <li fab_label tappable (click)="check_role_present(fab)">\n          <ion-icon name="create"></ion-icon>\n        </li>\n      </ul>  \n    </div>\n  </ion-fab> -->\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #Nav swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[483]);
//# sourceMappingURL=main.js.map