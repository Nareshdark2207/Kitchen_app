webpackJsonp([26],{

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionPageModule", function() { return DescriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__description__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DescriptionPageModule = /** @class */ (function () {
    function DescriptionPageModule() {
    }
    DescriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__description__["a" /* DescriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__description__["a" /* DescriptionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], DescriptionPageModule);
    return DescriptionPageModule;
}());

//# sourceMappingURL=description.module.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DescriptionPage = /** @class */ (function () {
    function DescriptionPage(navCtrl, navParams, service, datePipe, renderer, myElement, events, modalCtrl, platform, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.datePipe = datePipe;
        this.renderer = renderer;
        this.myElement = myElement;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.start = 0;
        this.threshold = 150;
        this.slideHeaderPrevious = 0;
        this.languageheader_url = 'language_settings_header';
        this.languageheader = {};
        this.category_count = 6;
        this.postDetail = new Post();
        this.imageUrl = this.service.API_URL_IMG;
        this.relatedPostList = [];
        this.subImages = [];
        // ====================================================================================================================================
        // GET DETAILS
        // ======================
        this.getDetails = function () {
            _this.postDetailUrl = 'post_detail';
            var obj = {
                'api_token': _this.service.api_token,
                'post_id': _this.postId
            };
            _this.service.post_data(_this.postDetailUrl, obj)
                .subscribe(function (result) {
                _this.service.stopLoader();
                if (result.status == 'success') {
                    _this.postDetail = result.data;
                    _this.mainImage = result.data.post_primary_image;
                    // console.log(result.data.post_primary_image,result.data.post_sub_images);
                    // if (result.data.post_sub_images[0] != null) {
                    //   const obj = { 'main_image': result.data.post_primary_image };
                    //   result.data.post_sub_images.unshift(obj)
                    //   this.subImages = result.data.post_sub_images;
                    // }
                    if (result.data.post_sub_images != undefined) {
                        if (result.data.post_sub_images.length > 0) {
                            console.log(result.data.post_sub_images);
                            var obj_1 = { 'main_image': result.data.post_primary_image };
                            result.data.post_sub_images.push(obj_1);
                            console.log(result.data.post_sub_images);
                            _this.subImages = result.data.post_sub_images;
                        }
                    }
                    else {
                        var obj_2 = { 'main_image': result.data.post_primary_image };
                        _this.subImages.push(obj_2);
                    }
                    console.log(_this.subImages.length);
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
        // ==========================================================================================================================================================
        // SWAP IMAGES
        // ==========================
        this.swapImage = function (image) {
            _this.mainImage = image;
        };
        // ==========================================================================================================================================================
        // RELATED POST
        // =======================
        this.getList = function () {
            var obj = {
                'api_token': _this.service.api_token,
                'category': _this.postDetail.category_id,
                'cutomer': _this.postDetail.customer_id,
                'lang_code': _this.code,
                'page': 1,
                'limit': 10,
                'date': _this.datePipe.transform(new Date(), 'yyyy/MM/dd')
            };
            _this.relatedPostListUrl = 'post_list';
            _this.service.post_data(_this.relatedPostListUrl, obj)
                .subscribe(function (result) {
                _this.service.stopLoader();
                if (result.status == 'success') {
                    _this.relatedPostList = result.data;
                }
                else {
                    _this.service.create(result.message, 'top', 'error');
                }
            }, function (error) {
                _this.service.stopLoader();
                _this.service.create(error, 'top', 'error');
            });
        };
        if (localStorage.getItem('eastern_deals')) {
            this.data = JSON.parse(localStorage.getItem('eastern_deals'));
            this.customer_id = this.data.id;
        }
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
        this.postId = navParams.get('id');
        this.getDetails();
        this.getList();
        this.showheader = true;
        this.hideheader = false;
    }
    DescriptionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.language_header();
        this.ionScroll = this.myElement.nativeElement.getElementsByClassName('scroll-content')[0];
        // On scroll function
        this.ionScroll.addEventListener('scroll', function () {
            if (_this.ionScroll.scrollTop - _this.start < _this.threshold) {
                _this.showheader = true;
                _this.hideheader = false;
            }
            else {
                _this.showheader = false;
                _this.hideheader = true;
            }
            if (0 > _this.ionScroll.scrollTop - _this.start) {
                _this.showheader = false;
                _this.hideheader = true;
            }
            _this.slideHeaderPrevious = _this.ionScroll.scrollTop - _this.start;
        });
        this.showEndPage = false;
    };
    DescriptionPage.prototype.ionViewDidLoad = function () {
    };
    // ===============================================================================================================================
    // BACK TO CATEGORY
    // =============================
    DescriptionPage.prototype.back_category = function () {
        this.navCtrl.pop();
    };
    DescriptionPage.prototype.shareapp = function (data) {
        // alert(data);
        // console.log(data);
        var message = data.description;
        // let image  = "assets/imgs/home_logo.png";
        var image = this.service.API_URL_IMG + data.post_primary_image;
        //  alert(image);
        if (this.platform.is('ios')) {
            this.url = "https://itunes.apple.com/app/eastern-deals/id1477294880?mt=8";
        }
        else {
            this.url = "https://play.google.com/store/apps/details?id=com.acestranetworks.easterndeals";
        }
        this.socialSharing.share(message, null, image, this.url).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    // ==================================================================================================================================================
    // DESCRIPTION PAGE
    // =============================
    DescriptionPage.prototype.description = function (id) {
        this.navCtrl.push('DescriptionPage', { id: id });
    };
    // ======================================================================================================================================================
    // FABS
    // ============
    DescriptionPage.prototype.ionViewWillEnter = function () {
        this.events.publish('fabhide:created', true);
    };
    DescriptionPage.prototype.ionViewWillLeave = function () {
        this.events.publish('fabhide:created', false);
    };
    // ======================================================================================================================================================
    // IMAGE VIEW PAGE
    // ==========================
    // imageView(img_data, cust_name) {
    //   console.log(img_data);
    //   const modal = this.modalCtrl.create('ImageviewerPage', { img_data: img_data, name: cust_name });
    //   modal.present();
    // }
    //  imageView(Imagedata) {
    //    console.log(Imagedata);
    //    const modal = this.modalCtrl.create('ImageviewerPage', Imagedata);
    //   modal.present();
    // }
    DescriptionPage.prototype.imageView = function (Imagedata, type, sliderid, title) {
        var _this = this;
        console.log(Imagedata);
        var photos = [];
        if (type == 'multiple-image') {
            Imagedata.forEach(function (element) {
                photos.push({ url: _this.imageUrl + element['main_image'], type: 'jpg', title: title });
            });
        }
        else if (type == 'single-image') {
            photos.push({ url: Imagedata, type: 'jpg', title: title });
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: photos,
            initialSlide: sliderid
        });
        modal.present();
    };
    DescriptionPage.prototype.language_header = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.service.api_token;
        this.data.api_token = this.api_token;
        this.data.lang_code = this.code;
        this.data.user_id = this.customer_id;
        this.service.post_data(this.languageheader_url, this.data)
            .subscribe(function (result) {
            _this.service.stopLoader();
            if (result.status == 'success') {
                _this.service.stopLoader();
                _this.languageheader = result.header_list;
                console.log(_this.languageheader);
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
    DescriptionPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.relatedPostList.length <= this.category_count) {
            this.category_count = this.relatedPostList.length;
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
    // =======================================================================================================================================================
    // PULL TO REFRESH
    // ============================
    DescriptionPage.prototype.doRefresh = function (refresher) {
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
    DescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-description',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/description/description.html"*/'<ion-header no-border [ngClass]="{\'hide-header\':showheader,\'show-header\':hideheader}">\n    <ion-navbar>\n        <ion-title>{{postDetail.title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-icon back_funct name="arrow-back" tappable (click)="back_category()"></ion-icon>\n    <!-- <img class="img_size" src="{{imageUrl}}{{mainImage}}" alt="image not found" *ngIf="mainImage != null" tappable (click)="imageView(imageUrl+mainImage, postDetail.title)">\n    <img class="img_size" src="assets/imgs/no_image_placeholder.jpg" alt="image not found" *ngIf="mainImage == null" tappable> -->\n    <div class="image-container">\n    <ion-slides pager="true" *ngIf="subImages.length > 0 && subImages.length != undefined" paginationType="fraction" #slider>\n        <ion-slide *ngFor="let postImg of subImages">\n            <img class="img_icon" src="{{imageUrl}}{{postImg.main_image}}" *ngIf="postImg.main_image != null" alt="image not found" tappable (click)="imageView(subImages, \'multiple-image\',slider.getActiveIndex(), postDetail.title)">\n            <img class="img_icon" src="assets/imgs/no_image_placeholder.jpg" *ngIf="postImg.main_image == null" alt="image not found">\n        </ion-slide>\n    </ion-slides>\n\n    <div *ngIf=" mainImage != null && subImages.length == 0 || subImages.length == undefined">\n            <img class="img_size" src="{{imageUrl}}{{mainImage}}" alt="image not found" *ngIf="mainImage != null"  tappable (click)="imageView(imageUrl+mainImage, \'single-image\',null, postDetail.title)" />\n            <img class="img_size" src="assets/imgs/no_image_placeholder.jpg" alt="image not found" *ngIf="mainImage == null">\n    </div>\n    </div>\n    <div bag_clr>\n        <!-- <ion-row *ngIf="subImages.length != 0">\n            <ion-col col-6 *ngFor="let postImg of subImages">\n                <img class="img_icon" src="{{imageUrl}}{{postImg.main_image}}" *ngIf="postImg.main_image != null" alt="image not found" tappable (click)="swapImage(postImg.main_image)">\n                <img class="img_icon" src="assets/imgs/no_image_placeholder.jpg" alt="image not found" *ngIf="postImg.main_image == null" tappable (click)="swapImage(postImg.main_image)">\n\n            </ion-col>\n        </ion-row> -->\n        <h3>{{postDetail.title}}</h3>\n        <p>{{postDetail.description}}</p>\n        <ion-row no-padding>\n            <ion-col col-12 no-padding>\n                <h6 *ngIf="postDetail.post_price != null && postDetail.post_price != undefined && postDetail.post_price != \'0.00\'">{{postDetail.post_price | currency:\'රු \':\'symbol\':\'1.0-2\'}}</h6>\n            </ion-col>\n            <ion-col col-10 no-padding>\n                <h6>Posted on {{postDetail.created_at | moment:\'MMM D YYYY\'}}</h6>\n            </ion-col>\n            <ion-col col-2 no-padding>\n                <button share_color ion-button icon-only clear (click)="shareapp(postDetail)"><ion-icon name="share"></ion-icon></button>\n            </ion-col>\n\n            <ion-col text-right no-padding>\n                <button class=\'flashit\' text-right ion-button icon-start call_butn>\n          <a contact_color href="tel:{{postDetail.mobile_number}}">\n            <ion-icon name=\'call\'></ion-icon>\n            Contact Seller\n          </a>\n        </button>\n            </ion-col>\n        </ion-row>\n\n    </div>\n\n    <ion-grid>\n        <div class="recent_deals" *ngIf="relatedPostList.length != 0">\n            <div class="recent" text-left>\n                {{languageheader.related_post}}\n            </div>\n            <ion-row>\n                <div tappable (click)="description(relatedPost.id)" *ngFor="let relatedPost of relatedPostList |  slice: 0:category_count; let i=index;" [ngClass]="relatedPost.length == 0 ? \'--\': \'crd\'">\n                    <img class="deals_1" src="{{imageUrl}}{{relatedPost.primary_image}}" *ngIf="relatedPost.length != 0 && relatedPost.primary_image != null" />\n                    <img class="deals_1" *ngIf="relatedPost.length != 0 && relatedPost.primary_image == null" src="assets/imgs/no_image_placeholder.jpg" />\n\n                    <p *ngIf="relatedPost.length != 0" class="cap"><b>{{relatedPost.title}}</b></p>\n                    <p class="price_tag" *ngIf="relatedPost.post_price != null && relatedPost.post_price != undefined && relatedPost.post_price != \'0.00\'">{{relatedPost.post_price | currency:\'රු \':\'symbol\':\'1.0-2\'}}</p>\n                    <p class="location" *ngIf="relatedPost.length != 0" text-capitalize>\n                        <ion-icon name="pin"></ion-icon> {{relatedPost.area_name}}\n                    </p>\n                    <p *ngIf="relatedPost.length != 0" class="posted_date">{{relatedPost.poster_date}}</p>\n\n                </div>\n            </ion-row>\n        </div>\n    </ion-grid>\n    <ion-card *ngIf="showEndPage">\n        <h3 padding text-center>\n            No More to Load\n        </h3>\n    </ion-card>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="crescent"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/description/description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], DescriptionPage);
    return DescriptionPage;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());
//# sourceMappingURL=description.js.map

/***/ })

});
//# sourceMappingURL=26.js.map