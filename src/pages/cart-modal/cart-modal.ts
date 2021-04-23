import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';



/**
 * Generated class for the CartModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart-modal',
  templateUrl: 'cart-modal.html',
})
export class CartModalPage {
  cart=[];
  amountlist: any[];
  addfoods = [];
  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  PaymentAlertOpts: { title: string; };
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
      // setTimeout(() => {
        this.cart = this.navParams.get('data');
        console.log('CartModalPage', this.cart);
      // }, 500);
      this.PaymentAlertOpts = {
        title: 'Select Payment Method',
      };
  }
  ngOnInit(){
    this.cart.forEach(element => {
      this.totalAmount.next(this.totalAmount.value + element.amount);
    });
    this.getTotal();
    console.log("getTotal",this.getTotal())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartModalPage');
  }
  dismiss() {
    this.navCtrl.pop();
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  public getTotal() {
    return this.totalAmount;
  }
  // special dishes starts

  addFood(selectFood) {
    this.cart.forEach(d => {
      if (selectFood.id === d.id) {
        d.quantity = d.quantity + 1
        if (d.quantity === 1) {
          this.addfoods.push(selectFood);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
        this.totalAmount.next(this.totalAmount.value + d.amount)

        this.addfoods.forEach(element => {
        });
      }
    });
  }
  removeFood(removeFood) {
    this.cart.forEach((r, i) => {
      if (removeFood.id === r.id) {
        r.quantity = r.quantity - 1;
        if (r.quantity === 0) {
          this.addfoods.forEach(el => {
            if (r._id === el._id) {
              this.addfoods.splice(i, 1);
            }
          });
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
        this.totalAmount.next(this.totalAmount.value - r.amount)
      }
    });
  }

// special dishes starts
}

