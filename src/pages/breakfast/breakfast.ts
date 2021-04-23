import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal';
// import { CartModalPage } from '../cart-modal/cart-modal';

/**
 * Generated class for the BreakfastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html',
})
export class BreakfastPage {
  breakfast =[];
  addfoods= [];
  data:any;

  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakfastPage');
  }
  ngOnInit() {
    this.cartItemCount = this.getCartItemCount();
    this.breakfast = [
      {
        foodImage: '/assets/imgs/ghee.png',
        foodName: ' Ghee Dosa ',
        foodSubName: 'In All Day Menu',
        amount: 114.29,
        reviewPoints: '4',
        id: '1',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/phodi dosa.png',
        foodName: ' Ghee Podi Dosa',
        foodSubName: 'In All Day Menu',
        amount: 120.42,
        reviewPoints: '4',
        quantity: 0,
        id: '2'
      },
      {
        foodImage: '/assets/imgs/onion-rava.png',
        foodName: ' Onion Rava Dosa ',
        foodSubName: 'In All Day Menu',
        amount: 90.19,
        reviewPoints: '4',
        id: '3',
        quantity: 0
      }, {
        foodImage: '/assets/imgs/plain-uttapam.png',
        foodName: ' Plain Uttapam ',
        foodSubName: 'In All Day Menu',
        amount: 80.42,
        reviewPoints: '4',
        id: '4',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Ghee-masala.png',
        foodName: ' Ghee Masala Dosa ',
        foodSubName: 'In All Day Menu',
        amount: 130.42,
        reviewPoints: '4',
        id: '5',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/onion-uttapam.png',
        foodName: ' Onion Uttapam ',
        foodSubName: 'In All Day Menu',
        amount: 90.42,
        reviewPoints: '4',
        id: '6',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/parrota.png',
        foodName: ' Parrota with Side Dish ',
        foodSubName: 'In All Day Menu',
        amount: 150.42,
        reviewPoints: '4',
        id: '7',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/sambar-vada.png',
        foodName: ' Sambar Vada ',
        foodSubName: 'In All Day Menu',
        amount: 40.92,
        reviewPoints: '4',
        id: '8',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Curd-vada.png',
        foodName: ' Curd Vada ',
        foodSubName: 'In All Day Menu',
        amount: 50.12,
        reviewPoints: '4',
        id: '9',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/pongal.jpg',
        foodName: ' Pongal ',
        foodSubName: 'In All Day Menu',
        amount: 102.62,
        reviewPoints: '4',
        id: '10',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/coffee.png',
        foodName: ' Special Coffee ',
        foodSubName: 'In All Day Menu',
        amount: 40.19,
        reviewPoints: '4',
        id: '11',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/tea.png',
        foodName: ' Special Tea ',
        foodSubName: 'In All Day Menu',
        amount: 30.28,
        reviewPoints: '4',
        id: '12',
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
    this.breakfast.forEach(d => {
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
    this.breakfast.forEach((r, i) => {
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

    const modal = this.modalCtrl.create(CartModalPage,{data:this.addfoods});
    modal.present();
    console.log('addfoods',this.addfoods);
  }
  dismiss() {
    this.navCtrl.pop();

  }
}