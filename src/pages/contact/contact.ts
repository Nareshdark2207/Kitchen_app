import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';
import { } from 'google__maps';
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  contactUrl: string;
  contactDetail: any = {};
  imageUrl: string = this.service.API_URL_IMG;
  data: any;
  customer_id: any;
code:any;
  api_token: any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
  if (localStorage.getItem('eastern_deals')) {
    this.data = JSON.parse(localStorage.getItem('eastern_deals'))
    this.customer_id = this.data.id;
  }
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
    this.getContactDetail();
  }

  ionViewDidLoad() {
    this.language_header();
  }
  
  // LOAD MAP
  // =====================
  loadMap(latitude, longitude) {
    let latLng = new google.maps.LatLng(latitude, longitude);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let content = 'Eastern Deals';
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      title: content,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let infoWindow = new google.maps.InfoWindow({
      content: 'Eastern Deals'
    });
    this.marker.addListener('click', () => {
      infoWindow.open(this.map, this.marker);
    });
  }
  // =========================================================================================================================================
  // GET CONATACT DETAILS 
  // ===================================
  getContactDetail = () => {
    this.contactUrl = 'contact_info';
    const url = this.contactUrl + '?api_token=' +  this.service.api_token;
    this.service.get_list(url)
      .subscribe((result) => {
        this.service.stopLoader();
        this.contactDetail = result.data;
        this.loadMap(this.contactDetail.lattitude, this.contactDetail.longitude);
      }, (error) => {
        this.service.stopLoader();
        this.service.create(error, "top", "error");
      })
  }
  // ============================================================================================================================================
  language_header() {
    this.data = {};
    this.api_token = this.service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;
    this.data.user_id = this.customer_id;
    this.service.post_data(this.languageheader_url, this.data)
      .subscribe((result: any) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          this.service.stopLoader();
          this.languageheader = result.header_list;
        }
        else {
          this.service.stopLoader();
          this.service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.service.stopLoader();
          this.service.create(error, 'top', 'error');
        });
  }
}
