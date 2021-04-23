import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, FabContainer, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { AppVersion } from '@ionic-native/app-version';
import { Keyboard } from '@ionic-native/keyboard';
import { Service } from '../app/service';
import * as $ from 'jquery';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  api_token: any;
  logout_url: string = 'logout';
  rootPage: any = 'TabsPage';
  app_id: string = 'WoAbL2F4EJetSnABlEHplScaU';
  categorylist_url: string = 'language_settings_menus';
  categories: any = [];
  languageheader_url: string = 'language_settings_header';
  appversion_url: string = 'playstore';
  languageheader: any = {};
  hidefab: boolean = true;
  customer_id: any;
  data: any;
  show: boolean;
  pages: any;
  appversionno: any;
  apppakagename: any;
  eastern_deals: any;
  appname: any;
  id: any;
  show_overlay: boolean;
  code: any;
  languagelist_url: string = 'language_list';
  languagelist: any;
  url: any;
  usercount;
  blur= false;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private keyboard: Keyboard, public events: Events, private api_service: Service, private device: Device, private push: Push, private appVersion: AppVersion, public alertCtrl: AlertController) {
     this.events.subscribe('visitors:count', (count) => {
      console.log('Get data from child page' + count);
      if(count){
        this.usercount = count;
      }

    });
     this.viewersCountList();
    if (localStorage.getItem('eastern_deals')) {
      let value_item = JSON.parse(localStorage.getItem('eastern_deals'));
      this.customer_id = value_item.id;
    }
    else {
      this.customer_id = null
    }
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
    this.data = {};
    // this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_service.api_token;
    this.data.lang_code = this.code;
    this.data.user_id = this.customer_id;
    console.log(this.data);
    this.api_service.post_data(this.categorylist_url, this.data)
      .subscribe((result: any) => {

        if (result.status == 'success') {
          console.log(result.menu);
          this.api_service.stopLoader();
          if (localStorage.getItem('eastern_deals')) {
            this.data = JSON.parse(localStorage.getItem('eastern_deals'));
            this.customer_id = this.data.id;
            console.log(this.customer_id);
            if (this.customer_id) {
              this.pages = result.menu;
              this.categories = result.menu;
            }
          } else {
            this.customer_id = null;
            this.pages = result.menu;
            this.categories = result.menu;
          }
        }
        else {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
        });
    this.initializeApp();
    this.language_header();
    // this.logout();
    events.subscribe('menu:created', (result) => {
      console.log(result)
      // const url_data={};
      let user_id = null;
      let lang_code = null;
      // if (result.data) {
      if (localStorage.getItem('eastern_deals')) {
        this.eastern_deals = JSON.parse(localStorage.getItem('eastern_deals'));
        user_id = this.eastern_deals.id;
      }
      console.log(localStorage.getItem('lang_code'));

      lang_code = localStorage.getItem('lang_code');
      // } else {
      //   this.eastern_deals = JSON.parse(localStorage.getItem('eastern_deals'));
      //   user_id = this.eastern_deals.id;
      //   lang_code = localStorage.getItem('lang_code');
      // }
      const url_data = {
        'lang_code': lang_code,
        'user_id': user_id,
        'api_token': this.api_service.api_token,
      };

      console.log(url_data);
      this.api_service.post_data(this.categorylist_url, url_data)
        .subscribe((result: any) => {
          if (result.status == 'success') {
            console.log(result.menu);
            this.api_service.stopLoader();
            if (localStorage.getItem('eastern_deals')) {
              const local_storage = JSON.parse(localStorage.getItem('eastern_deals'));
              this.customer_id = local_storage.role_id;
              console.log(this.customer_id);
              if (this.customer_id) {
                this.pages = result.menu;
                this.categories = result.menu;
                console.log(this.pages);
              }
            } else {
              this.customer_id = null;
              this.pages = result.menu;
              this.categories = result.menu;
            }
          }
          else {
            this.api_service.stopLoader();
            this.api_service.create(result.message, 'top', 'error');
          }
        },
          (error) => {
            this.api_service.stopLoader();
            this.api_service.create(error, 'top', 'error');
          });
      this.language_header();
    })
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.statusBar.styleBlackTranslucent();
      } else {
        this.statusBar.hide();
      }
      this.splashScreen.hide();
      this.initPushNotification();
      if (this.platform.is('cordova')) {
        this.keyboard.hide;
      }
      this.events.subscribe('fabhide:created', (result) => {
        this.hidefab = result
      });
      this.appVersion.getVersionNumber().then((val) => {
        console.log(val);
        this.appversionno = val;
      });
      this.appVersion.getPackageName().then((val) => {
        console.log(val);
        this.apppakagename = val;
      });
      this.versioncheck();
      this.language();
    });
  }
  initPushNotification() {
    // to check if we have permission
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We don\'t have permission to send push notifications');
        }
      });
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
    }
    const options: PushOptions = {
      android: { senderID: '230790685724', sound: true, vibrate: true },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true',
        clearBadge: 'true'
      }
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((data: any) => {
      console.log('message -> ' + data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        this.api_service.create(data.message, 'top', 'success');
      } else {
        console.log('Push notification clicked');
      }
    });
    pushObject.on('registration').
      subscribe((registration: any) => {
        let AppToken = registration.registrationId;
        let obj = { 'app_id': this.app_id, 'device_token': AppToken, 'model': this.device.model, 'platform': this.device.platform, 'status': true };
        localStorage.setItem('appPushToken', JSON.stringify(AppToken));
        // this.api_service.presentAlert('message', JSON.stringify(obj));
        this.api_service.notification(obj)
          .subscribe((result: any) => {
            if (result.status == 'success') {
              // this.api_service.presentAlert(result.status , result.message );
            } else if (result.status == 'error') {
              this.api_service.create(result.message, 'top', 'error');
            }
          },
            (error) => {
              console.log(error);
            });
      });
    pushObject.on('error').
      subscribe(error =>
        console.error('Error with Push plugin', error));
  }


  versioncheck() {
    const url = this.appversion_url + '?api_token=' + this.api_service.api_token;
    this.api_service.get_list(url).subscribe((result) => {
      console.log(result.data.playstore);
      if (this.platform.is('android')) {
        if (result.data.playstore != this.appversionno && result.data.playstore != undefined) {
          let label = '(Current:' + this.appversionno + ' Latest:' + result.data.playstore + ')';
          const alert = this.alertCtrl.create({
            title: 'App Update',
            subTitle: 'A new version is available. Please update to latest version!\n' + label,
            buttons: [{
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
                this.platform.exitApp();
              }
            },
            {
              text: 'Update',
              handler: data => {
                window.open('https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=' + this.apppakagename, "_system", "location=yes");
                console.log('Saved clicked');
                this.platform.exitApp();
              }
            }],
            enableBackdropDismiss: false
          });
          alert.present();
        }
      } else if (this.platform.is('ios')) {
        if (result.data.appstore != this.appversionno && result.data.appstore != undefined) {
          let label = '(Current:' + this.appversionno + ' Latest:' + result.data.appstore + ')';
          const alert = this.alertCtrl.create({
            title: 'App Update',
            subTitle: 'A new version is available. Please update to latest version!\n' + label,
            buttons: [{
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Update',
              handler: data => {
                window.open('itms-apps://itunes.apple.com/app/eastern-deals/id1477294880?mt=8', "_system", "location=yes");
                console.log('Saved clicked');
              }
            }],
            enableBackdropDismiss: false
          });
          alert.present();
        }
      } else {
        console.log('platform not available');

      }

    }, (error) => {
      this.api_service.create(error, "top", "error");
    })
  }


  language_header() {

    let language_header_api = this.languageheader_url + '?api_token=' + this.api_service.api_token;
    language_header_api += '&lang_code=' + localStorage.getItem('lang_code');
    language_header_api += '&user_id=' + this.customer_id;
    this.api_service.get_list(language_header_api)
      .subscribe((result: any) => {

        if (result.status == 'success') {
          this.languageheader = result.header_list;
        }
        else {
          this.api_service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.api_service.create(error, 'top', 'error');
        });
  }
  logout() {
    this.data = {};
    // this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_service.api_token;
    this.data.user_id = this.customer_id;
    console.log(this.data);
    this.api_service.post_data(this.logout_url, this.data)
      .subscribe((result: any) => {
        let res = result.status
        console.log(result);
        this.api_service.stopLoader();
        if (res == 'success') {
          localStorage.removeItem('eastern_deals');
          this.nav.setRoot('HomepagePage');
          this.customer_id == null;
          this.show = false;
          this.events.publish('menu:created', result);
        }
        else {
          console.log('error');
        }
      },
        (error) => {
          this.api_service.stopLoader();
          console.log(error);
        });
    // this.events.publish('menu:created', localStorage.getItem('lang_code'));
  }
  category_list() {
  }

  open_modal() {
    this.show_overlay = true;
  }
  close_modal() {
    this.show_overlay = false;

  }

  language() {

    this.api_service.get_list(this.languagelist_url + '?api_token=' + this.api_service.api_token + '&slider_name= 1').subscribe((result: any) => {
      if (result.status == 'success') {
        this.languagelist = result.data;
        console.log(this.languagelist);
      }
      else {
        this.api_service.create(result.message, 'top', 'error');
      }
    },
      (error) => {
        this.api_service.create(error, 'top', 'error');
      });
  }

  language_code(code) {
    localStorage.setItem('lang_code', code);
    this.splashScreen.hide();
    location.reload();

  }
  popover(){
    this.blur=true;
    $(document).ready(function() {
      $(".share-btn").click(function(){
        $(".share-btn").toggleClass("active")
        $("ul").toggleClass("active")
         $("blur-bg").toggleClass("active")
       })
    })
  }
  openPage(page) {
  
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component == 'AdvertisePostPage') {
      if (this.customer_id != null || this.customer_id != undefined) {
        this.nav.setRoot(page.component);
      } else {
        this.nav.setRoot('LoginPage', { type: 'addpost' });
      }
    } else {
      if (page.component === 'HomepagePage') {
        this.nav.setRoot('TabsPage')
      } else {
        this.nav.setRoot(page.component);
      }
    }
  }
  check_role_present(fab: FabContainer) {
    fab.close();
    if (this.customer_id != null || this.customer_id != undefined) {
      this.nav.setRoot('AdvertisePostPage');
    } else {
      this.nav.setRoot('LoginPage', { type: 'addpost' });
    }
  }
  call_support(fab: FabContainer) {
    fab.close();
    let contact_url = 'contact_info';
    const url = contact_url + '?api_token=' + this.api_service.api_token;
    this.api_service.get_list(url)
      .subscribe((result) => {
        if (result.status == "success") {
          window.open("tel:" + result.data.landline_number + "", '_system', 'location=yes')
        }
      }, (error) => {
        this.api_service.create(error, "top", "error");
      })
  }

  viewersCountList() {
    let api = 'viewcount' + '?api_token=' + this.api_service.api_token;
    this.api_service.get_list(api)
      .subscribe((result: any) => {
        localStorage.setItem('countViewers', String(result.slug_value));
        this.usercount = result.slug_value; 
        console.log('initial view count' + this.usercount);
      },
        (error) => {
          this.api_service.create(error, 'top', 'error');
        });
  }
}