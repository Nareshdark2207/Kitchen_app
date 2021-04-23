import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Gesture, ViewController } from 'ionic-angular';
import { Service } from '../../app/service';
/**
 * Generated class for the ImageviewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imageviewer',
  templateUrl: 'imageviewer.html',
})
export class ImageviewerPage {
  @ViewChild('image') element;
  @ViewChild('imageParent') elementParent;
  image = null;
  container = null;
  transforms = [];
  adjustScale = 1;
  adjustDeltaX = 0;
  adjustDeltaY = 0;
  imageUrl: string = this.service.API_URL_IMG;
  currentScale = null;
  currentDeltaX = null;
  currentDeltaY = null;
  private gesture: Gesture;
  customer_profile_img=[];
  customer_profile_name:any;
  state:any = 3;

  constructor(public navCtrl: NavController, public service: Service,public navParams: NavParams,public viewCtrl : ViewController) {

    // console.log('UserId', navParams.get('img_data'));
  //  this.customer_profile_img =  navParams.get('img_data');
  //  this.customer_profile_name =  navParams.get('name');
    // let evilResponse= navParams.data;
    // this.customer_profile_img = evilResponse.img_data;

  }

  ionViewDidLoad() {
    console.log(this.element);
    let evilResponse = this.navParams.data;
    this.customer_profile_img = evilResponse.img_data;
    alert(this.customer_profile_img);
    this.image = this.element.nativeElement;
    this.container = this.elementParent.nativeElement;
    console.log('ionViewDidLoad ImageviewerPage');
    this.container.addEventListener('touchstart', function(e) {
      e.preventDefault();
    });
  
    this.init();
  
  }
  
   /* 
Initialize listeners for gestures
*/
init = () => {
  //create gesture obj w/ ref to DOM element
  this.gesture = new Gesture(this.element.nativeElement);

  //listen for the gesture
  this.gesture.listen();
  this.gesture.on('doubletap', (ev) => {
    this.transforms = [];
    this.adjustScale += 1;
    if (this.adjustScale >= 4) this.adjustScale = 1;
    this.transforms.push('scale(' + this.adjustScale + ')');
    this.container.style.transform = this.transforms.join(' ');
  });

  this.gesture.on("pan", (ev) => {
    this.transforms = [];
    // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
    this.currentScale = this.adjustScale * ev.scale;
    this.currentDeltaX = this.adjustDeltaX + (ev.deltaX / this.currentScale);
    this.currentDeltaY = this.adjustDeltaY + (ev.deltaY / this.currentScale);
    if (this.currentScale < 1) {
    this.currentScale = 1;
    this.currentDeltaX = 0;
    this.currentDeltaY = 0;
    }
    this.transforms.push('scale(' + this.currentScale + ')');
    this.transforms.push('translate(' + this.currentDeltaX + 'px,' + this.currentDeltaY + 'px)');
    this.container.style.transform = this.transforms.join(' ');
    });

  this.gesture.on("pinch", (ev) => {
    this.transforms = [];
    // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
    this.currentScale = this.adjustScale * ev.scale;
    this.currentDeltaX = this.adjustDeltaX + (ev.deltaX / this.currentScale);
    this.currentDeltaY = this.adjustDeltaY + (ev.deltaY / this.currentScale);
    // Concatinating and applying parameters.
    if (this.currentScale < 1) {
      this.currentScale = 1;
      this.currentDeltaX = 0;
      this.currentDeltaY = 0;
    }
    this.transforms.push('scale(' + this.currentScale + ')');
    this.transforms.push('translate(' + this.currentDeltaX + 'px,' + this.currentDeltaY + 'px)');
    this.container.style.transform = this.transforms.join(' ');

  });


  this.gesture.on("pinchend", (ev) => {
    // Saving the final transforms for adjustment next time the user interacts.
    this.adjustScale = this.currentScale;
    this.adjustDeltaX = this.currentDeltaX;
    this.adjustDeltaY = this.currentDeltaY;

  });

  this.gesture.on("panend", (ev) => {
    // Saving the final transforms for adjustment next time the user interacts.
    this.adjustScale = this.currentScale;
    this.adjustDeltaX = this.currentDeltaX;
    this.adjustDeltaY = this.currentDeltaY;

  });

}
 public closeModal(){
    this.viewCtrl.dismiss();
}
}
