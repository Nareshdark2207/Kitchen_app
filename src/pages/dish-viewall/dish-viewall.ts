import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal';

/**
 * Generated class for the DishViewallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dish-viewall',
  templateUrl: 'dish-viewall.html',
})
export class DishViewallPage {
  dishes =[];
  addfoods= [];
  
  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishViewallPage');
  }
  ngOnInit() {
    this.cartItemCount = this.getCartItemCount();
    this.dishes = [
      {
        foodImage: '/assets/imgs/1.jpeg',
        foodName: ' Panner Butter Masala ',
        foodSubName: 'In Gravy, Panner',
        amount: 120,
        reviewPoints: '4',
        id: '1',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/2.jpeg',
        foodName: ' Gobi Manchurian',
        foodSubName: 'In Gravy, Dry',
        amount: 180,
        reviewPoints: '4',
        quantity: 0,
        id: '2'
      },
      {
        foodImage: '/assets/imgs/3.jpeg',
        foodName: ' Cheese Pasta ',
        foodSubName: 'In Cheese, Pasta',
        amount: 200,
        reviewPoints: '4',
        id: '3',
        quantity: 0
      }, {
        foodImage: '/assets/imgs/Veg-biryani.png',
        foodName: ' Veg Biryani ',
        foodSubName: 'In Rice, Biryani',
        amount: 80.42,
        reviewPoints: '4',
        id: '4',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Veg-fried.png',
        foodName: ' Veg Fried Rice ',
        foodSubName: 'In Rice, Fried Rice',
        amount: 130.42,
        reviewPoints: '4',
        id: '5',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Schezwan Fried Rice.png',
        foodName: ' Schezwan Fried Rice ',
        foodSubName: 'In Rice, Fried Rice',
        amount: 90.42,
        reviewPoints: '4',
        id: '6',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/mushroom-biryani.png',
        foodName: ' Mushroom Biryani ',
        foodSubName: 'In Rice, Biryani',
        amount: 150.42,
        reviewPoints: '4',
        id: '7',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Panner-biryani.png',
        foodName: ' Panner Biryani ',
        foodSubName: 'In Rice, Biryani',
        amount: 150.42,
        reviewPoints: '4',
        id: '8',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Veg pulavo.png',
        foodName: ' Veg pulavo ',
        foodSubName: 'In Rice, Biryani',
        amount: 150.42,
        reviewPoints: '4',
        id: '9',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/noodles.jpg',
        foodName: ' Schezwan Veg Noodles ',
        foodSubName: 'In Noodles, Schezwan',
        amount: 150.42,
        reviewPoints: '4',
        id: '10',
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
    this.dishes.forEach(d => {
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
    this.dishes.forEach((r, i) => {
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
