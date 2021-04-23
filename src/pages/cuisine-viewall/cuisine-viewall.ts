import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal';

/**
 * Generated class for the CuisineViewallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuisine-viewall',
  templateUrl: 'cuisine-viewall.html',
})
export class CuisineViewallPage {
  cuisine =[];
  addfoods= [];
  
  private cartItemCount = new BehaviorSubject(0);
  private totalAmount = new BehaviorSubject(0);
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuisineViewallPage');
  }
  ngOnInit() {
    this.cartItemCount = this.getCartItemCount();
    this.cuisine = [
      {
        foodImage: '/assets/imgs/green-peas-chapatti.jpg',
        foodName: ' Green Peas Chapatti ',
        foodSubName: 'In Cusine, Chapatti',
        amount: 120,
        reviewPoints: '4',
        id: '1',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Masala Dosa.png',
        foodName: ' Masala Dosa ',
        foodSubName: 'In Cusine, Dosa',
        amount: 180,
        reviewPoints: '4',
        quantity: 0,
        id: '2'
      },
      {
        foodImage: '/assets/imgs/Kuzhi-Paniyaram.jpg',
        foodName: ' Kuzhi-Paniyaram ',
        foodSubName: 'In Cusine, Paniyaram',
        amount: 200,
        reviewPoints: '4',
        id: '3',
        quantity: 0
      }, {
        foodImage: '/assets/imgs/Chappati.jpg',
        foodName: ' Chappati ',
        foodSubName: 'In Cusine, Chappati',
        amount: 80.42,
        reviewPoints: '4',
        id: '4',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Poori.jpg',
        foodName: ' Poori ',
        foodSubName: 'In Cusine, Poori',
        amount: 130.42,
        reviewPoints: '4',
        id: '5',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/Idly.jpg',
        foodName: ' Idly ',
        foodSubName: 'In Cusine, Idly',
        amount: 90.42,
        reviewPoints: '4',
        id: '6',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/phodi dosa.png',
        foodName: ' Phodi Dosa ',
        foodSubName: 'In Cusine, Dosa',
        amount: 150.42,
        reviewPoints: '4',
        id: '7',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/parrota.png',
        foodName: ' Parrota ',
        foodSubName: 'In Cusine, Parrota',
        amount: 150.42,
        reviewPoints: '4',
        id: '8',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/onion-rava.png',
        foodName: ' Onion Rava Dosa ',
        foodSubName: 'In Cusine, Dosa',
        amount: 150.42,
        reviewPoints: '4',
        id: '9',
        quantity: 0
      },
      {
        foodImage: '/assets/imgs/wheat-parotta.jpg',
        foodName: ' Wheat Parotta ',
        foodSubName: 'In Cusine, Parotta',
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
    this.cuisine.forEach(d => {
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
    this.cuisine.forEach((r, i) => {
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
