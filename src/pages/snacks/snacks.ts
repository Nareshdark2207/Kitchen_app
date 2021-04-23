import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal';

/**
 * Generated class for the SnacksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-snacks',
  templateUrl: 'snacks.html',
})
export class SnacksPage {
  snacks= [];
  addfoods= [];

  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SnacksPage');
  }
  ngOnInit() {
    this.cartItemCount = this.getCartItemCount();
    this.snacks = [
      {
        foodImage: '/assets/imgs/Bhel Puri.jpg',
        foodName: ' Bhel Puri ',
        foodSubName: 'In All Day Menu',
        amount: 114.29,
        reviewPoints: '4',
        id: '1',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Bhujiya Sandwich.jpg',
        foodName: ' Bhujiya Sandwich',
        foodSubName: 'In All Day Menu',
        amount: 120.42,
        reviewPoints: '4',
        quantity: 0,
        id: '2'
      },
      {
        foodImage: '/assets/imgs/cheese-sev-puri.jpg',
        foodName: ' Cheese Sev Puri ',
        foodSubName: 'In All Day Menu',
        amount: 90.19,
        reviewPoints: '4',
        id: '3',
        quantity: 0
      }, {
        foodImage: '/assets/imgs/dahi-puri.jpg',
        foodName: ' Dahi Puri ',
        foodSubName: 'In All Day Menu',
        amount: 80.42,
        reviewPoints: '4',
        id: '4',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/hot dog.jpg',
        foodName: ' Hot Dog ',
        foodSubName: 'In All Day Menu',
        amount: 130.42,
        reviewPoints: '4',
        id: '5',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/vegetable-grill-sandwich.png',
        foodName: ' Veg Grill Sandwich ',
        foodSubName: 'In All Day Menu',
        amount: 90.42,
        reviewPoints: '4',
        id: '6',
        quantity: 0
      },
    
    ]
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  public getTotal() {
    return this.totalAmount;
  }

  addFood(selectFood) {
    this.snacks.forEach(d => {
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
    this.snacks.forEach((r, i) => {
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

  open_cart() {

    const modal = this.modalCtrl.create(CartModalPage,{data:this.addfoods,total:this.getTotal()});
    modal.present();
    console.log('addfoods',this.addfoods);
  }
  dismiss() {
    this.navCtrl.pop();

  }


}
