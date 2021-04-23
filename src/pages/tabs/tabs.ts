import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomepagePage } from '../homepage/homepage';
// import { MyOrdersPage } from '../my-orders/my-orders';
// import { NotificationPage } from '../notification/notification';
// import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  homeRoot = 'HomepagePage';
  profilePageRoot='ProfilePage';
  mywalletPageRoot='MywalletPage';
  myaccountPageRoot='LoginPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
