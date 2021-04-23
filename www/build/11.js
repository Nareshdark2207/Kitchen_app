webpackJsonp([11],{

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review__ = __webpack_require__(871);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewPageModule = /** @class */ (function () {
    function ReviewPageModule() {
    }
    ReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */]),
            ],
        })
    ], ReviewPageModule);
    return ReviewPageModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPage');
    };
    ReviewPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n    <!-- <button (click)="goBack()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>  -->\n  review</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="row">\n  <div class="col-8">\n    <div id="full-stars-example-two">\n      <div class="rating-group">\n          <input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio">\n          <label aria-label="1 star" class="rating__label" for="rating3-1"><ion-icon class="rating__icon rating__icon--star" name="star"></ion-icon></label>\n          <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio">\n          <label aria-label="2 stars" class="rating__label" for="rating3-2"><ion-icon class="rating__icon rating__icon--star" name="star"></ion-icon></label>\n          <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio">\n          <label aria-label="3 stars" class="rating__label" for="rating3-3"><ion-icon class="rating__icon rating__icon--star" name="star"></ion-icon></label>\n          <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio">\n          <label aria-label="4 stars" class="rating__label" for="rating3-4"><ion-icon class="rating__icon rating__icon--star" name="star"></ion-icon></label>\n          <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio">\n          <label aria-label="5 stars" class="rating__label" for="rating3-5"><ion-icon class="rating__icon rating__icon--star" name="star"></ion-icon></label>\n          <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio">\n      </div>\n    </div> \n  </div>\n  <div class="col-4">\n    <p class="tr">Good</p>\n  </div>\n</div>\n\n\n\n<div class="wistom">\n  <div class="wrapper">\n    <h6 class="title">Add photos & reviews</h6>\n  </div>\n  <p class="sub-title">Add photos of you unboxing and plating experience</p>\n  <ion-grid>\n    <ion-row justify-content-start>\n      <ion-col col-5 >\n        <div class="icon-wrapper">\n          <ion-icon class="custom-icon" name="ios-camera-outline">\n          <span class="fix-editor">Camera</span>\n        </ion-icon>\n      </div>\n      </ion-col>\n      <ion-col col-5>\n        <div class="icon-wrapper">\n          <ion-icon class="custom-icon" name="ios-image-outline">\n          <span class="fix-editor">Gallery</span>\n        </ion-icon>\n      </div>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n<div class="text-center">\n  <p class="sub-title">Review about your food and ordering experience</p>\n  <textarea type="text" class="input" placeholder="Write a comment"></textarea>\n</div>\n<button ion-button block type="submit" class="mt-0">Submit Review</button>\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/review/review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ })

});
//# sourceMappingURL=11.js.map