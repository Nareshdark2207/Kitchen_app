webpackJsonp([22],{

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerPageModule", function() { return ImageviewerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageviewer__ = __webpack_require__(860);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageviewerPageModule = /** @class */ (function () {
    function ImageviewerPageModule() {
    }
    ImageviewerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__imageviewer__["a" /* ImageviewerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imageviewer__["a" /* ImageviewerPage */]),
            ],
        })
    ], ImageviewerPageModule);
    return ImageviewerPageModule;
}());

//# sourceMappingURL=imageviewer.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageviewerPage; });
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



/**
 * Generated class for the ImageviewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageviewerPage = /** @class */ (function () {
    function ImageviewerPage(navCtrl, service, navParams, viewCtrl) {
        // console.log('UserId', navParams.get('img_data'));
        //  this.customer_profile_img =  navParams.get('img_data');
        //  this.customer_profile_name =  navParams.get('name');
        // let evilResponse= navParams.data;
        // this.customer_profile_img = evilResponse.img_data;
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.image = null;
        this.container = null;
        this.transforms = [];
        this.adjustScale = 1;
        this.adjustDeltaX = 0;
        this.adjustDeltaY = 0;
        this.imageUrl = this.service.API_URL_IMG;
        this.currentScale = null;
        this.currentDeltaX = null;
        this.currentDeltaY = null;
        this.customer_profile_img = [];
        this.state = 3;
        /*
     Initialize listeners for gestures
     */
        this.init = function () {
            //create gesture obj w/ ref to DOM element
            _this.gesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Gesture */](_this.element.nativeElement);
            //listen for the gesture
            _this.gesture.listen();
            _this.gesture.on('doubletap', function (ev) {
                _this.transforms = [];
                _this.adjustScale += 1;
                if (_this.adjustScale >= 4)
                    _this.adjustScale = 1;
                _this.transforms.push('scale(' + _this.adjustScale + ')');
                _this.container.style.transform = _this.transforms.join(' ');
            });
            _this.gesture.on("pan", function (ev) {
                _this.transforms = [];
                // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
                _this.currentScale = _this.adjustScale * ev.scale;
                _this.currentDeltaX = _this.adjustDeltaX + (ev.deltaX / _this.currentScale);
                _this.currentDeltaY = _this.adjustDeltaY + (ev.deltaY / _this.currentScale);
                if (_this.currentScale < 1) {
                    _this.currentScale = 1;
                    _this.currentDeltaX = 0;
                    _this.currentDeltaY = 0;
                }
                _this.transforms.push('scale(' + _this.currentScale + ')');
                _this.transforms.push('translate(' + _this.currentDeltaX + 'px,' + _this.currentDeltaY + 'px)');
                _this.container.style.transform = _this.transforms.join(' ');
            });
            _this.gesture.on("pinch", function (ev) {
                _this.transforms = [];
                // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
                _this.currentScale = _this.adjustScale * ev.scale;
                _this.currentDeltaX = _this.adjustDeltaX + (ev.deltaX / _this.currentScale);
                _this.currentDeltaY = _this.adjustDeltaY + (ev.deltaY / _this.currentScale);
                // Concatinating and applying parameters.
                if (_this.currentScale < 1) {
                    _this.currentScale = 1;
                    _this.currentDeltaX = 0;
                    _this.currentDeltaY = 0;
                }
                _this.transforms.push('scale(' + _this.currentScale + ')');
                _this.transforms.push('translate(' + _this.currentDeltaX + 'px,' + _this.currentDeltaY + 'px)');
                _this.container.style.transform = _this.transforms.join(' ');
            });
            _this.gesture.on("pinchend", function (ev) {
                // Saving the final transforms for adjustment next time the user interacts.
                _this.adjustScale = _this.currentScale;
                _this.adjustDeltaX = _this.currentDeltaX;
                _this.adjustDeltaY = _this.currentDeltaY;
            });
            _this.gesture.on("panend", function (ev) {
                // Saving the final transforms for adjustment next time the user interacts.
                _this.adjustScale = _this.currentScale;
                _this.adjustDeltaX = _this.currentDeltaX;
                _this.adjustDeltaY = _this.currentDeltaY;
            });
        };
    }
    ImageviewerPage.prototype.ionViewDidLoad = function () {
        console.log(this.element);
        var evilResponse = this.navParams.data;
        this.customer_profile_img = evilResponse.img_data;
        alert(this.customer_profile_img);
        this.image = this.element.nativeElement;
        this.container = this.elementParent.nativeElement;
        console.log('ionViewDidLoad ImageviewerPage');
        this.container.addEventListener('touchstart', function (e) {
            e.preventDefault();
        });
        this.init();
    };
    ImageviewerPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('image'),
        __metadata("design:type", Object)
    ], ImageviewerPage.prototype, "element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageParent'),
        __metadata("design:type", Object)
    ], ImageviewerPage.prototype, "elementParent", void 0);
    ImageviewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-imageviewer',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/imageviewer/imageviewer.html"*/'<!--\n  Generated template for the ImageviewerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-navbar>\n        <!-- <ion-title>{{customer_profile_name}}</ion-title> -->\n        <ion-buttons end>\n\n            <button ion-button icon-only tappable (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div #imageParent class="pinch-zoom-container"> -->\n        <img src="{{customer_profile_img}}" #image dimg="medium" class="pinch-zoom-image" alt="loading.." />\n        <!-- <ion-slides pager="true" paginationType="fraction">\n        <ion-slide *ngFor="let postImg of customer_profile_img">\n            <div #imageParent class="pinch-zoom-container">\n                <img src="{{imageUrl}}{{postImg.main_image}}" #image dimg="medium" class="pinch-zoom-image" alt="loading.." />\n            </div>\n           \n        </ion-slide>\n    </ion-slides> -->\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/imageviewer/imageviewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ImageviewerPage);
    return ImageviewerPage;
}());

//# sourceMappingURL=imageviewer.js.map

/***/ })

});
//# sourceMappingURL=22.js.map