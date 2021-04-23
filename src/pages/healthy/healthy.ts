import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal';

/**
 * Generated class for the HealthyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-healthy',
  templateUrl: 'healthy.html',
})
export class HealthyPage {
  healthy =[];
  addfoods= [];
  
  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthyPage');
  }

  ngOnInit() {
    this.cartItemCount = this.getCartItemCount();
    this.healthy = [
      {
        foodImage: '/assets/imgs/Monster Energy.png',
        foodName: ' Monster Energy ',
        foodSubName: 'In All Day Menu',
        amount: 114.29,
        reviewPoints: '4',
        id: '1',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Veg Sun Blushed.png',
        foodName: ' Veg Sun Blushed',
        foodSubName: 'In All Day Menu',
        amount: 120.42,
        reviewPoints: '4',
        quantity: 0,
        id: '2'
      },
      {
        foodImage: '/assets/imgs/Shades of Green Combo.png',
        foodName: ' Shades of Green Combo ',
        foodSubName: 'In All Day Menu',
        amount: 90.19,
        reviewPoints: '4',
        id: '3',
        quantity: 0
      }, {
        foodImage: '/assets/imgs/Veg Shades of Green.png',
        foodName: ' Veg Shades of Green ',
        foodSubName: 'In All Day Menu',
        amount: 80.42,
        reviewPoints: '4',
        id: '4',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Veg Asian Sesame.png',
        foodName: ' Veg Asian Sesame ',
        foodSubName: 'In All Day Menu',
        amount: 130.42,
        reviewPoints: '4',
        id: '5',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Veg Guac N Roll.png',
        foodName: ' Veg Guac N Roll ',
        foodSubName: 'In All Day Menu',
        amount: 90.42,
        reviewPoints: '4',
        id: '6',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/green-peas-chapatti.jpg',
        foodName: ' Green Peas Chapatti ',
        foodSubName: 'In All Day Menu',
        amount: 150.42,
        reviewPoints: '4',
        id: '7',
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
    this.healthy.forEach(d => {
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
    this.healthy.forEach((r, i) => {
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
