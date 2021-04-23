import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal';

/**
 * Generated class for the LunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunch',
  templateUrl: 'lunch.html',
})
export class LunchPage {
  lunch =[];
  addfoods= [];

  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LunchPage');
  }
  ngOnInit() {
  this.cartItemCount = this.getCartItemCount();
  this.lunch = [
    {
      foodImage: '/assets/imgs/quick-meal.png',
      foodName: ' Quick Lunch ',
      foodSubName: 'In All Day Menu',
      foodbottom: 'Sweet+1 Chapati+Gravy+Variety Rice+Sambar Rice+Curd Rice+Rasam+ Rice+Appalam+Pickles',
      amount: 138.09,
      reviewPoints: '4',
      id: '1',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/Veg pulavo.png',
      foodName: ' Veg Pulao',
      foodSubName: 'In All Day Menu',
      amount: 190.48,
      reviewPoints: '4',
      quantity: 0,
      id: '2'
    },
    {
      foodImage: '/assets/imgs/Veg-biryani.png',
      foodName: ' Veg Biryani ',
      foodSubName: 'In All Day Menu',
      amount: 190.48,
      reviewPoints: '4',
      id: '3',
      quantity: 0
    }, {
      foodImage: '/assets/imgs/Veg-fried.png',
      foodName: ' Veg Fried Rice ',
      foodSubName: 'In All Day Menu',
      amount: 180.42,
      reviewPoints: '4',
      id: '4',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/gobi-mancurian.png',
      foodName: ' Gobi Mancurian ',
      foodSubName: 'In All Day Menu',
      amount: 219.05,
      reviewPoints: '4',
      id: '5',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/Gobi 65.png',
      foodName: ' Gobi 65 ',
      foodSubName: 'In All Day Menu',
      amount: 200.04,
      reviewPoints: '4',
      id: '6',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/Panner-tikka.png',
      foodName: ' Panner Tikka ',
      foodSubName: 'In All Day Menu',
      amount: 150.42,
      reviewPoints: '4',
      id: '7',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/Panner-biryani.png',
      foodName: ' Panner Biryani ',
      foodSubName: 'In All Day Menu',
      amount: 195.24,
      reviewPoints: '4',
      id: '8',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/mushroom-biryani.png',
      foodName: ' Mushroom Biryani',
      foodSubName: 'In All Day Menu',
      amount: 185.24,
      reviewPoints: '4',
      id: '9',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/Schezwan Fried Rice.png',
      foodName: ' Schezwan Fried Rice ',
      foodSubName: 'In All Day Menu',
      amount: 102.62 ,
      reviewPoints: '4',
      id: '10',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/Dal-fry.png',
      foodName: ' Dal Fry ',
      foodSubName: 'In All Day Menu',
      amount: 147.62,
      reviewPoints: '4',
      id: '11',
      quantity: 0
    },
    {
      foodImage: '/assets/imgs/Curd-rice.png',
      foodName: ' Curd Rice ',
      foodSubName: 'In All Day Menu',
      amount: 90.58,
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
  this.lunch.forEach(d => {
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
  this.lunch.forEach((r, i) => {
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
