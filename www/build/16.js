webpackJsonp([16],{

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDescriptionPageModule", function() { return OrderDescriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_description__ = __webpack_require__(880);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDescriptionPageModule = /** @class */ (function () {
    function OrderDescriptionPageModule() {
    }
    OrderDescriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_description__["a" /* OrderDescriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_description__["a" /* OrderDescriptionPage */]),
            ],
        })
    ], OrderDescriptionPageModule);
    return OrderDescriptionPageModule;
}());

//# sourceMappingURL=order-description.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDescriptionPage; });
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



var OrderDescriptionPage = /** @class */ (function () {
    function OrderDescriptionPage(navCtrl, navParams, api_service, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api_service = api_service;
        this.modalCtrl = modalCtrl;
        this.imageUrl = this.api_service.API_URL_IMG;
        this.orderstatus_url = 'constant_status';
        this.order_status_list = {};
        this.orderDetail = {};
        this.Satisfied_url = 'rework_status_update';
        this.renewalDetail = {};
        this.renewalrequest_url = 'renewal_request';
        this.categorylist_url = 'master_category_list';
        this.categories = [];
        this.active_url = 'status_change_orders';
        this.active_list = {};
        this.tax_ammt = [];
        // ======================
        this.language_field_url = 'language_settings_field';
        this.languagefield = {};
        // =============================================================================================================================================
        // GET DETAILS
        // ===========================
        this.getDetails = function () {
            var obj = {
                'api_token': _this.api_service.api_token,
                'order_id': _this.orderid,
                'user_id': _this.customer_id,
                'type': _this.type,
                'id': _this.primary_id,
            };
            _this.orderUrl = 'myorders_details';
            _this.api_service.post_data(_this.orderUrl, obj)
                .subscribe(function (result) {
                if (result.status == 'success') {
                    _this.api_service.stopLoader();
                    _this.orderDetail = result.data;
                    _this.payment_order_id = result.data.order_id;
                    _this.request_id = result.data.ad_request_id;
                }
                else {
                    _this.api_service.stopLoader();
                }
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
            });
        };
        // ==========================================================================
        // RENEWAL LIST
        // =========================
        this.getRenewalDetail = function () {
            _this.renewalUrl = 'renewal_list';
            var obj;
            if (_this.InnerType == 'post') {
                obj = {
                    'api_token': _this.api_service.api_token,
                    'user_id': _this.customer_id,
                    'post_id': _this.renewalData.id
                };
            }
            else {
                obj = {
                    'api_token': _this.api_service.api_token,
                    'user_id': _this.customer_id,
                    'ad_id': _this.renewalData.id
                };
            }
            _this.api_service.post_data(_this.renewalUrl, obj)
                .subscribe(function (result) {
                console.log(result);
                _this.api_service.stopLoader();
                _this.renewalDetail = result.data.data;
                _this.actual_total = result.data.data.current_details.actual_total;
                _this.table_name = result.data.data.table_name;
                _this.primaryid = result.data.data.id;
                _this.renewal_type = result.data.data.type;
                _this.current_amount = result.data.data.cost;
                if (result.data.data.new_tax_list) {
                    _this.tax_ammt = result.data.data.new_tax_list;
                }
                else {
                    _this.tax_ammt = result.data.data.tax_details;
                }
                if (result.data.data.new_discount_list != null) {
                    _this.discount_ammt = result.data.data.new_discount_list.percentage;
                    _this.discounnt = result.data.data.new_discount_list;
                }
                _this.calculate(1);
                _this.add_duraction = 1;
            }, function (error) {
                _this.api_service.stopLoader();
                _this.api_service.create(error, 'top', 'error');
                console.log(error);
            });
        };
        // =====================================================================================
        // GET PAYMENT DETAIL FOR REQUEST
        // ====================================
        this.getData = function () {
            _this.costUrl = 'post_form';
            var obj = {
                'api_token': _this.api_service.api_token,
                'company_id': _this.data.current_branch,
                'user_id': _this.data.id,
            };
            _this.api_service.post_data(_this.costUrl, obj)
                .subscribe(function (result) {
                _this.api_service.stopLoader();
                _this.cost = result.data;
            }, function (error) { console.log(error); _this.api_service.stopLoader(); });
        };
        // =====================================================================================
        // SENT TO PAYMENT PAGE
        // ===============================
        this.paymentRenewal = function (id, orid, total_amount, due_amount) {
            var details = { id: id, types: 'renewal', Order_id: orid, total: total_amount, due_amt: due_amount };
            _this.navCtrl.push('PaymentPage', { order_details: details });
        };
        var value_item = JSON.parse(localStorage.getItem('eastern_deals'));
        this.customer_id = value_item.id;
        this.pathType = navParams.get('type');
        if (this.pathType == 'order') {
            this.orderId = navParams.get('id');
        }
        else {
            this.renewalData = navParams.get('renewal');
            this.InnerType = navParams.get('postAd');
        }
        if (this.orderId != undefined) {
            this.orderid = this.orderId.order_id;
            this.type = this.orderId.type;
            this.primary_id = this.orderId.id;
            this.getDetails();
        }
        else {
            this.getRenewalDetail();
        }
        if (localStorage.getItem('lang_code')) {
            var value = localStorage.getItem('lang_code');
            this.code = value;
            console.log(this.code);
        }
    }
    OrderDescriptionPage.prototype.ionViewDidLoad = function () {
    };
    OrderDescriptionPage.prototype.back_category = function () {
        this.navCtrl.pop();
    };
    OrderDescriptionPage.prototype.ngOnInit = function () {
        this.order_status();
        this.language_field();
    };
    // ===================================================================================================================================================
    // PAGE NAVIGATIONS
    // ==============================
    OrderDescriptionPage.prototype.imageView = function (img_data, cust_name) {
        var modal = this.modalCtrl.create('ImageviewerPage', { img_data: img_data, name: cust_name });
        modal.present();
    };
    OrderDescriptionPage.prototype.Primary_image = function (image) {
        this.primaryImages = image;
    };
    OrderDescriptionPage.prototype.second_image = function (image) {
        this.primaryImages = image;
    };
    OrderDescriptionPage.prototype.renewal_primary_image = function (image) {
        this.renewalprimaryImages = image;
    };
    OrderDescriptionPage.prototype.renewal_second_image = function (image) {
        this.renewalprimaryImages = image;
    };
    // ========================================================================================================================
    // SATTISFIED
    // ====================
    OrderDescriptionPage.prototype.Satisfied = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.ad_status = 'published';
        this.data.ad_request_id = this.request_id;
        this.data.user_id = this.customer_id;
        this.api_service.post_data(this.Satisfied_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            if (res == 'success') {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'success');
                _this.navCtrl.setRoot('MyOrdersPage');
            }
            else {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
            console.log(error);
        });
    };
    // =================================================================================================================================
    // REWORK
    // ===================
    OrderDescriptionPage.prototype.Rework = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.ad_status = 'rework';
        this.data.ad_request_id = this.request_id;
        this.data.user_id = this.customer_id;
        this.api_service.post_data(this.Satisfied_url, this.data)
            .subscribe(function (result) {
            if (result.status == 'success') {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'success');
                _this.navCtrl.setRoot('MyOrdersPage');
            }
            else {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
            console.log(error);
        });
    };
    OrderDescriptionPage.prototype.payment = function (id, type, total_amount, due_amount) {
        var details = { id: id, types: type, Order_id: this.payment_order_id, total: total_amount, due_amt: due_amount };
        this.navCtrl.push('PaymentPage', { order_details: details });
    };
    // ========================================================================================================================================
    // CALCULATE
    // ===================
    OrderDescriptionPage.prototype.calculate = function (number) {
        var _this = this;
        this.add_duraction = number;
        this.amount = this.current_amount * number;
        this.total_percentage = 0;
        this.total_tax_amount = 0;
        this.tax_ammt.forEach(function (element) {
            _this.total_percentage = _this.total_percentage + Number(element.percentage);
        });
        this.product_price = this.amount / ((this.total_percentage / 100) + 1);
        if (this.discount_ammt != 0 && this.discount_ammt != null) {
            this.discount = (this.discount_ammt / 100) * this.product_price;
            this.sales_price = this.product_price - ((this.discount_ammt / 100) * this.product_price);
        }
        else {
            this.sales_price = this.product_price;
        }
        this.total_percentage = 0;
        this.total_tax_amount = 0;
        this.tax_ammt.forEach(function (element) {
            element.percentage_amount = _this.sales_price * (element.percentage / 100);
            _this.total_percentage = _this.total_percentage + Number(element.percentage);
        });
        this.tax_percent = this.total_percentage / 100;
        this.actual_price = (this.tax_percent * this.sales_price) + this.sales_price;
        this.tax_ammt.forEach(function (element) {
            _this.total_tax_amount = _this.total_tax_amount + element.percentage_amount;
        });
    };
    // ===================================================================================
    //  category list
    // ===========================
    OrderDescriptionPage.prototype.category_list = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.api_service.post_data(this.categorylist_url, this.data)
            .subscribe(function (result) {
            _this.api_service.stopLoader();
            var res = result.status;
            if (res == 'success') {
                _this.categories = result.data;
            }
            else {
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
            console.log(error);
        });
    };
    // ===================================================================================
    // APPROVE FOR Renewal Request
    // ================================
    OrderDescriptionPage.prototype.RenewalRequest = function (duration_type, id, type, duration) {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.user_id = this.customer_id;
        this.data.type = this.renewal_type;
        if (type == 'post') {
            this.data.duration = duration;
        }
        else {
            this.data.duration = this.add_duraction;
        }
        this.data.duration_type = duration_type;
        this.data.order_id = id;
        this.data.tax_list = JSON.stringify(this.tax_ammt);
        this.data.discount_details = this.discounnt;
        this.data.discount = this.discount;
        this.data.total = this.actual_total;
        this.data.basic_cost = this.current_amount;
        this.data.table_name = this.table_name;
        this.data.tax = this.total_tax_amount;
        this.data.id = this.primaryid;
        this.api_service.post_data(this.renewalrequest_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            if (res == 'success') {
                _this.api_service.stopLoader();
                _this.navCtrl.push('RenewalPage');
            }
            else {
                _this.api_service.stopLoader();
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
            console.log(error);
        });
    };
    // ======================================================================================
    // ACTIVE IN ACTIVE BUTTON STATUS
    // ======================================
    OrderDescriptionPage.prototype.active_button = function (number, type, id) {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.data.user_id = this.customer_id;
        this.data.type = type;
        this.data.id = id;
        this.data.status = number;
        this.api_service.post_data(this.active_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            if (res == 'success') {
                _this.api_service.stopLoader();
                _this.active_list = result.data;
            }
            else {
                _this.api_service.stopLoader();
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
            console.log(error);
        });
    };
    // ======================================================================================
    // SENT TO order status change
    // =========================================
    OrderDescriptionPage.prototype.order_status = function () {
        var _this = this;
        this.data = {};
        this.api_token = this.api_service.api_token;
        this.data.api_token = this.api_token;
        this.api_service.post_data(this.orderstatus_url, this.data)
            .subscribe(function (result) {
            var res = result.status;
            if (res == 'success') {
                _this.api_service.stopLoader();
                _this.order_status_list = result.data;
                console.log(_this.order_status_list);
                _this.post_status = _this.order_status_list.post_request_status.payment_pending;
                _this.ad_status = _this.order_status_list.ad_request_status.payment_pending;
                _this.ad_incorrect_reffernumber = _this.order_status_list.ad_request_status.payment_refno_invalid;
                _this.ad_payment_incorrect = _this.order_status_list.ad_request_status.payment_in_due;
                _this.ad_rework = _this.order_status_list.ad_request_status.rework;
                _this.ad_satisfied = _this.order_status_list.ad_request_status.published;
                _this.post_status_due = _this.order_status_list.post_request_status.payment_in_due;
                _this.post_incorrect_reffernumber = _this.order_status_list.post_request_status.payment_refno_invalid;
                _this.publish = _this.order_status_list.post_request_status.published;
                _this.renewal_status_payment = _this.order_status_list.renewal_status.payment_pending;
                _this.renewal_status_due = _this.order_status_list.renewal_status.payment_in_due;
                _this.renewal_status_reff_incorrect = _this.order_status_list.renewal_status.payment_refno_invalid;
            }
            else {
                _this.api_service.stopLoader();
                _this.api_service.create(result.message, 'top', 'error');
            }
        }, function (error) {
            _this.api_service.stopLoader();
            _this.api_service.create(error, 'top', 'error');
            console.log(error);
        });
    };
    // =====================================================================================
    OrderDescriptionPage.prototype.language_field = function () {
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
    OrderDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-order-description',template:/*ion-inline-start:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/order-description/order-description.html"*/'<ion-header no-border>\n</ion-header>\n<ion-content *ngIf="pathType == \'order\'">\n    <div *ngIf="type == \'post\'">\n        <ion-icon back_funct name="arrow-back" tappable (click)="back_category()"></ion-icon>\n        <img *ngIf="!primaryImages" class="img_size" src="{{imageUrl}}{{orderDetail.post_primary_image}}" alt="image not found" (click)="imageView(imageUrl+orderDetail.post_primary_image, orderDetail.title)">\n        <img *ngIf="primaryImages " class="img_size" src="{{primaryImages}}" alt="image not found" (click)="imageView(primaryImages, orderDetail.title)">\n        <div bag_clr>\n            <ion-row>\n                <ion-col col-4>\n                    <img class="img_icon_2" src="{{imageUrl}}{{orderDetail.post_primary_image}}" alt="image not found" tappable (click)="Primary_image(imageUrl+orderDetail.post_primary_image)">\n                </ion-col>\n                <ion-col col-4 *ngFor="let item of orderDetail.post_sub_images">\n                    <img *ngIf="item != null" class="img_icon_2" src="{{imageUrl}}{{item.main_image}}" alt="image not found" tappable (click)="second_image(imageUrl+item.main_image)">\n                    <img *ngIf="item == null" class="img_icon_2" src="assets/imgs/empty_dp.png" alt="image not found" tappable (click)="second_image(\'assets/imgs/empty_dp.png\')">\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Title</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.title}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Cost</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.total | currency:\'රු \':\'symbol\':\'1.0-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Type</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.type}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Content</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.description}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="orderDetail.post_price" bg_desgn>\n                <ion-col col-4>\n                    <h3>Selling Price</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.post_price}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Posted date</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.effective_date}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Expiry date</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.expire_date}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Status</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.type_status}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="orderDetail.due_amount">\n                <ion-col col-4>\n                    <h3>Due Amount</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.due_amount}}</h3>\n                </ion-col>\n            </ion-row>\n            <div text-center>\n                <button *ngIf="orderDetail.type_status == post_status || orderDetail.type_status == post_status_due || orderDetail.type_status == post_incorrect_reffernumber" ion-button icon-end class="add_click" tappable (click)="payment(orderDetail.id,orderDetail.type,orderDetail.total,orderDetail.due_amount)">{{languagefield.payment}}</button>\n                <button ion-button icon-end tappable *ngIf="orderDetail.type_status == publish && orderDetail.status == 1 " class="add_click_1" (click)="active_button(0,orderDetail.type,orderDetail.id)">Active</button>\n                <button ion-button icon-end tappable *ngIf="orderDetail.type_status == publish && orderDetail.status == 0 " class="add_click_1" (click)="active_button(1,orderDetail.type,orderDetail.id)">Inactive</button>\n            </div>\n        </div>\n    </div>\n    <div *ngIf="type == \'ad_request\'">\n        <div bag_clr_1>\n            <ion-icon back_funct name="arrow-back" (click)="back_category()"></ion-icon>\n            <img *ngIf="orderDetail.main_image == null" class="img_icon_1" src="assets/imgs/empty_dp.png" alt="image not found">\n            <img *ngIf="orderDetail.main_image != null" class="img_icon_1" src="{{imageUrl}}{{orderDetail.main_image}}" alt="image not found" (click)="imageView(imageUrl+orderDetail.main_image, orderDetail.title)">\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Price</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.total | currency:\'රු \':\'symbol\':\'1.0-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Type</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>Advertisement</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Content</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.description}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Order Id</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.order_id}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Mobile Number</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.mobile_number}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Duration</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.duration}} {{orderDetail.duration_type}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Category</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.category}} - {{orderDetail.banner_name}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Status</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.ad_status}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="orderDetail.due_amount">\n                <ion-col col-4>\n                    <h3>Due amount</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.due_amount}}</h3>\n                </ion-col>\n            </ion-row>\n            <div text-center *ngIf="orderDetail.ad_status == ad_status || orderDetail.ad_status == ad_incorrect_reffernumber || orderDetail.ad_status == ad_payment_incorrect">\n                <button ion-button icon-end class="add_click" tappable (click)="payment(orderDetail.id,orderDetail.type,orderDetail.total,orderDetail.due_amount)">{{languagefield.payment}}</button>\n            </div>\n            <div text-center *ngIf="orderDetail.ad_status != ad_status && orderDetail.main_image != null && orderDetail.ad_status != ad_rework && orderDetail.ad_status != ad_satisfied ">\n                <button ion-button icon-end class="add_click" tappable (click)="Satisfied()">Publish</button>\n                <button ion-button icon-end class="add_click" tappable (click)="Rework()">Rework</button>\n            </div>\n            <div text-center *ngIf="orderDetail.ad_status == ad_rework && orderDetail.main_image != null">\n                <button ion-button icon-end class="add_click">\n          <ion-icon name="information-circle" padding-right></ion-icon> This image will be reworked\n        </button>\n            </div>\n            <div text-center *ngIf="orderDetail.ad_status == ad_satisfied && orderDetail.main_image != null">\n                <button ion-button icon-end class="add_click">\n          <ion-icon name="information-circle" padding-right></ion-icon> successfully Published\n        </button>\n            </div>\n        </div>\n    </div>\n    <div *ngIf="type == \'home_post\'">\n        <ion-icon back_funct name="arrow-back" tappable (click)="back_category()"></ion-icon>\n        <!-- </button> -->\n        <img *ngIf="!primaryImages" class="img_size" src="{{imageUrl}}{{orderDetail.post_primary_image}}" alt="image not found" (click)="imageView(imageUrl+orderDetail.post_primary_image, orderDetail.title)">\n        <img *ngIf="primaryImages " class="img_size" src="{{primaryImages}}" alt="image not found" (click)="imageView(primaryImages, orderDetail.title)">\n        <!-- <img *ngIf="secondImages" class="img_size" src="{{imageUrl}}{{secondImages}}" alt="image not found"> -->\n        <div bag_clr>\n            <ion-row>\n                <ion-col col-4>\n                    <img class="img_icon_2" tappable src="{{imageUrl}}{{orderDetail.post_primary_image}}" alt="image not found" (click)="Primary_image(imageUrl+orderDetail.post_primary_image)">\n                </ion-col>\n                <ion-col col-4 *ngFor="let item of orderDetail.post_sub_images">\n                    <img *ngIf="item != null" class="img_icon_2" tappable src="{{imageUrl}}{{item.main_image}}" alt="image not found" (click)="second_image(imageUrl+item.main_image)">\n                    <img *ngIf="item == null" class="img_icon_2" tappable src="assets/imgs/empty_dp.png" alt="image not found" (click)="second_image(\'assets/imgs/empty_dp.png\')">\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Title</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.title}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Cost</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.total | currency:\'රු \':\'symbol\':\'1.0-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Type</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>Home Post</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Content</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.description}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf="orderDetail.post_price" bg_desgn>\n                <ion-col col-4>\n                    <h3>Selling Price</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.post_price}}\n                    </h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Posted date</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.effective_date}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="orderDetail.expire_date">\n                <ion-col col-4>\n                    <h3>Expiry date</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.expire_date}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-4>\n                    <h3>Status</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{orderDetail.type_status}}</h3>\n                </ion-col>\n            </ion-row>\n            <div text-center *ngIf="orderDetail.type_status == post_status || orderDetail.type_status == post_status_due || orderDetail.type_status == post_incorrect_reffernumber">\n                <button ion-button icon-end class="add_click" tappable (click)="payment(orderDetail.id,orderDetail.type,orderDetail.total)">{{languagefield.payment}}</button>\n            </div>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf="pathType == \'renewal\'">\n    <ion-icon back_funct name="arrow-back" tappable (click)="back_category()"></ion-icon>\n    <img *ngIf="!renewalprimaryImages && renewalDetail.type== \'post\'" class="img_size" src="{{imageUrl}}{{renewalDetail.primary_image}}" alt="image not found" (click)="imageView(imageUrl+renewalDetail.primary_image, renewalDetail.title)">\n    <img *ngIf="renewalprimaryImages  && renewalDetail.type== \'post\'" class="img_size" src="{{imageUrl}}{{renewalprimaryImages}}" alt="image not found" (click)="imageView(imageUrl+renewalprimaryImages, renewalDetail.title)">\n    <img *ngIf="renewalDetail.type== \'ad_request\'" class="img_icon_1" src="{{imageUrl}}{{renewalDetail.main_image}}" alt="image not found" (click)="imageView(imageUrl+renewalDetail.main_image, renewalDetail.title)">\n    <div bag_clr margin-top>\n        <ion-row *ngIf="renewalDetail.type== \'post\'">\n            <ion-col col-4>\n                <img class="img_icon_2" tappable src="{{imageUrl}}{{renewalDetail.primary_image}}" alt="image not found" (click)="renewal_primary_image(renewalDetail.primary_image)">\n            </ion-col>\n            <ion-col col-4 *ngFor="let image of renewalDetail.multiimage">\n                <img class="img_icon_2" src="{{imageUrl}}{{image.main_image}}" alt="Post Images" tappable (click)="renewal_second_image(image.main_image)">\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn *ngIf="InnerType != \'ad\'">\n            <ion-col col-4>\n                <h3>Title</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3>{{renewalDetail.title}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn>\n            <ion-col col-4>\n                <h3>Price</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3>{{renewalDetail.total | currency:\'රු \':\'symbol\':\'1.0-2\'}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn>\n            <ion-col col-4>\n                <h3>Type</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3 *ngIf="renewalDetail.type==\'ad_request\'">Advertisement</h3>\n                <h3 *ngIf="renewalDetail.type==\'post\'">Post</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn>\n            <ion-col col-4>\n                <h3>Order Id</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3>{{renewalDetail.order_id}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn *ngIf="InnerType != \'ad\'">\n            <ion-col col-4>\n                <h3>Content</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3>{{renewalDetail.description}}\n                </h3>\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn>\n            <ion-col col-4>\n                <h3>Duration</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3>{{renewalDetail.duration}} {{renewalDetail.duration_type}}s</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn>\n            <ion-col col-4>\n                <h3>Posted date</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3>{{renewalDetail.effective_date}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row bg_desgn>\n            <ion-col col-4>\n                <h3>Expiry date</h3>\n            </ion-col>\n            <ion-col col-8>\n                <h3>{{renewalDetail.expire_date}}</h3>\n            </ion-col>\n        </ion-row>\n        <div *ngIf="renewalDetail.type == \'post\' && renewalDetail.renewal_details == null">\n            <h4>Current Amount</h4>\n            <ion-row bg_desgn>\n                <ion-col col-6>\n                    <h3>Current Amount</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{renewalDetail.current_details.actual_total}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-6>\n                    <h3>Duration</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{renewalDetail.current_details.duration}} {{renewalDetail.current_details.duration_type}}s</h3>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div *ngIf="renewalDetail.type == \'ad_request\' && renewalDetail.renewal_details == null">\n            <h4>Current Amount</h4>\n            <!-- <ion-row bg_desgn>\n        <ion-col col-8>\n          <h3>Enter Duration in ({{renewalDetail.duration_type}})</h3>\n        </ion-col>\n        <ion-col col-4>\n          <ion-input class="form-input" type="number" (keyup)="calculate($event.target.value)" placeholder="1">\n          </ion-input>\n        </ion-col>\n      </ion-row> -->\n            <ion-row bg_desgn *ngIf="renewalDetail.duration_type == \'month\'">\n                <ion-col col-12>\n                    <h3>Enter Duration in ({{renewalDetail.duration_type}})\n                        <ion-badge color="primary">{{add_duraction}}</ion-badge>\n                    </h3>\n                </ion-col>\n                <ion-col col-12>\n                    <ion-range min="1" max="12" color="secondary" pin="true" [(ngModel)]="value" (ionChange)="calculate(value)">\n                        <ion-label range-left>1</ion-label>\n                        <ion-label range-right>12</ion-label>\n                    </ion-range>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="renewalDetail.duration_type == \'day\'">\n                <ion-col col-12>\n                    <h3>Enter Duration in ({{renewalDetail.duration_type}})\n                        <ion-badge color="primary">{{add_duraction}}</ion-badge>\n                    </h3>\n                </ion-col>\n                <ion-col col-12>\n                    <ion-range min="1" max="365" color="secondary" pin="true" [(ngModel)]="value" (ionChange)="calculate(value)">\n                        <ion-label range-left>1</ion-label>\n                        <ion-label range-right>365</ion-label>\n                    </ion-range>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="renewalDetail.duration_type == \'week\'">\n                <ion-col col-12>\n                    <h3>Enter Duration in ({{renewalDetail.duration_type}})\n                        <ion-badge color="primary">{{add_duraction}}</ion-badge>\n                    </h3>\n                </ion-col>\n                <ion-col col-12>\n                    <ion-range min="1" max="52" color="secondary" pin="true" [(ngModel)]="value" (ionChange)="calculate(value)">\n                        <ion-label range-left>1</ion-label>\n                        <ion-label range-right>52</ion-label>\n                    </ion-range>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="amount != actual_price">\n                <ion-col col-6>\n                    <h3>Original Price</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{amount| number : \'1.2-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="amount != product_price">\n                <ion-col col-6>\n                    <h3>Cost</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{product_price | number : \'1.2-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="discount_ammt">\n                <ion-col col-6>\n                    <h3>Discount - {{discount_ammt}} %</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{discount | number : \'1.2-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="discount_ammt">\n                <ion-col col-6>\n                    <h3>Price with discount</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{sales_price | number : \'1.2-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngFor="let tax of tax_ammt">\n                <ion-col col-6>\n                    <h3>Tax - {{tax.tax}}- {{tax.percentage}} %</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{tax.percentage_amount | number : \'1.2-2\'}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-6>\n                    <h3>Total Price</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{actual_price | number : \'1.0-0\'}}.00</h3>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div *ngIf="renewalDetail.renewal_details != null">\n            <h4>Renewal details</h4>\n            <ion-row bg_desgn>\n                <ion-col col-6>\n                    <h3>Duration</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{renewalDetail.renewal_details.duration}} {{renewalDetail.renewal_details.duration_type}}s</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-6>\n                    <h3>Renewal status</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{renewalDetail.renewal_details.renewal_status}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-6>\n                    <h3>Order Id</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{renewalDetail.renewal_details.order_id}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn>\n                <ion-col col-6>\n                    <h3>Total amount</h3>\n                </ion-col>\n                <ion-col col-6>\n                    <h3>{{renewalDetail.renewal_details.total_amount}}</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row bg_desgn *ngIf="renewalDetail.renewal_details.due_amount && renewalDetail.renewal_details.due_amount != 0.00">\n                <ion-col col-4>\n                    <h3>Due amount</h3>\n                </ion-col>\n                <ion-col col-8>\n                    <h3>{{renewalDetail.renewal_details.due_amount}}</h3>\n                </ion-col>\n            </ion-row>\n            <div text-center>\n                <button *ngIf="renewalDetail.renewal_details.renewal_status == renewal_status_payment ||  renewalDetail.renewal_details.renewal_status == renewal_status_due ||  renewalDetail.renewal_details.renewal_status == renewal_status_reff_incorrect" ion-button\n                    icon-end class="add_click" tappable (click)="paymentRenewal(renewalDetail.renewal_details.id,renewalDetail.renewal_details.order_id,renewalDetail.renewal_details.total_amount,renewalDetail.renewal_details.due_amount)">{{languagefield.payment}}\n          </button>\n            </div>\n        </div>\n        <div text-center>\n            <button *ngIf="renewalDetail.renewal_details == null " ion-button icon-end class="add_click" tappable (click)="RenewalRequest(renewalDetail.duration_type,renewalDetail.order_id,renewalDetail.type,renewalDetail.duration)">\n        Request for Payment</button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/acestranetworks/Naresh/Sowmya's_Kitchen/src/pages/order-description/order-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], OrderDescriptionPage);
    return OrderDescriptionPage;
}());

//# sourceMappingURL=order-description.js.map

/***/ })

});
//# sourceMappingURL=16.js.map