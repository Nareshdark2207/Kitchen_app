import { Component, ElementRef, Renderer } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, Events, ModalController,Platform } from 'ionic-angular';
import { Service } from '../../app/service';
import { GalleryModal } from 'ionic-gallery-modal';
import { SocialSharing } from '@ionic-native/social-sharing';
@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  start = 0;
  threshold = 150;
  slideHeaderPrevious = 0;
  ionScroll: any;
  showheader: boolean;
  hideheader: boolean;
  headercontent: any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  customer_id: any;
  code: any;
  data: any;
  api_token: any;
  category_count:any = 6;
  reActiveInfinite:any;
  showEndPage:any;
  url:any;
   constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: Service, public datePipe: DatePipe, public renderer: Renderer,
    public myElement: ElementRef, public events: Events, public modalCtrl: ModalController,public platform: Platform,private socialSharing: SocialSharing) {
     if (localStorage.getItem('eastern_deals')) {
       this.data = JSON.parse(localStorage.getItem('eastern_deals'))
       this.customer_id = this.data.id;
     }
     if (localStorage.getItem('lang_code')) {
       let value = localStorage.getItem('lang_code');
       this.code = value;
       console.log(this.code);
     }
    this.postId = navParams.get('id');
    this.getDetails();
    this.getList();
    this.showheader = true;
    this.hideheader = false;
    
  }
  postDetailUrl: string;
  postDetail: Post = new Post();
  imageUrl: string = this.service.API_URL_IMG;
  postId: any;
  relatedPostListUrl: string;
  relatedPostList: any = [];
  mainImage: any;
  subImages: any = [];
  ngOnInit() {
    this.language_header();
    this.ionScroll = this.myElement.nativeElement.getElementsByClassName('scroll-content')[0];
    // On scroll function
    this.ionScroll.addEventListener('scroll', () => {
      if (this.ionScroll.scrollTop - this.start < this.threshold) {
        this.showheader = true;
        this.hideheader = false;
      } else {
        this.showheader = false;
        this.hideheader = true;
      }
      if (0 > this.ionScroll.scrollTop - this.start) {
        this.showheader = false;
        this.hideheader = true;
      }
      this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
    });
    this.showEndPage = false;
  }
  ionViewDidLoad() {
  }
  // ===============================================================================================================================
  // BACK TO CATEGORY
  // =============================
  back_category() {
    this.navCtrl.pop();
  }
  shareapp(data){
    // alert(data);
    // console.log(data);
    let message  = data.description; 
    // let image  = "assets/imgs/home_logo.png";
    let image  = this.service.API_URL_IMG + data.post_primary_image;
  //  alert(image);
    if (this.platform.is('ios')) {
      this.url  = "https://itunes.apple.com/app/eastern-deals/id1477294880?mt=8";
    }
    else{
      this.url  = "https://play.google.com/store/apps/details?id=com.acestranetworks.easterndeals";
    }
  
  this.socialSharing.share(message,null,image,this.url).then(() => {
      // Sharing via email is possible
      }).catch(() => {
      // Sharing via email is not possible
      });
  }

  // ====================================================================================================================================
  // GET DETAILS
  // ======================
  getDetails = () => {
    this.postDetailUrl = 'post_detail'
    const obj = {
      'api_token': this.service.api_token,
      'post_id': this.postId
    };
    this.service.post_data(this.postDetailUrl, obj)
      .subscribe((result) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          this.postDetail = result.data;
          this.mainImage = result.data.post_primary_image;
          // console.log(result.data.post_primary_image,result.data.post_sub_images);
          // if (result.data.post_sub_images[0] != null) {
          //   const obj = { 'main_image': result.data.post_primary_image };
          //   result.data.post_sub_images.unshift(obj)
          //   this.subImages = result.data.post_sub_images;
          // }
          if (result.data.post_sub_images != undefined) {
            if(result.data.post_sub_images.length > 0){
              console.log(result.data.post_sub_images);
              const obj = { 'main_image': result.data.post_primary_image };
              result.data.post_sub_images.push(obj);
              console.log(result.data.post_sub_images);
              this.subImages = result.data.post_sub_images;
            }
           
          }else{
            const obj = { 'main_image': result.data.post_primary_image };
            this.subImages.push(obj);
          }
          console.log(this.subImages.length);
        } else {
          this.service.stopLoader();
          this.service.create(result.message, 'top', 'error');
        }
      }, (error) => {
        this.service.stopLoader();
        this.service.create(error, 'top', 'error');
      })
  }
  // ==========================================================================================================================================================
  // SWAP IMAGES
  // ==========================
  swapImage = (image: any) => {
    this.mainImage = image;
  }
  // ==========================================================================================================================================================
  // RELATED POST
  // =======================
  getList = () => {
    const obj = {
      'api_token': this.service.api_token,
      'category': this.postDetail.category_id,
      'cutomer': this.postDetail.customer_id,
      'lang_code': this.code,
      'page': 1,
      'limit': 10,
      'date': this.datePipe.transform(new Date(), 'yyyy/MM/dd')
    };
    this.relatedPostListUrl = 'post_list';
    this.service.post_data(this.relatedPostListUrl, obj)
      .subscribe((result) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          this.relatedPostList = result.data;
        } else {
          this.service.create(result.message, 'top', 'error');
        }
      }, (error) => {
        this.service.stopLoader();

        this.service.create(error, 'top', 'error');
      })
  }
  // ==================================================================================================================================================
  // DESCRIPTION PAGE
  // =============================
  description(id: any) {
    this.navCtrl.push('DescriptionPage', { id: id });
  }
  // ======================================================================================================================================================
  // FABS
  // ============
  ionViewWillEnter() {
    this.events.publish('fabhide:created', true);
  }
  ionViewWillLeave() {
    this.events.publish('fabhide:created', false);
  }
  // ======================================================================================================================================================
  // IMAGE VIEW PAGE
  // ==========================
  // imageView(img_data, cust_name) {
  //   console.log(img_data);
  //   const modal = this.modalCtrl.create('ImageviewerPage', { img_data: img_data, name: cust_name });
  //   modal.present();
  // }
  //  imageView(Imagedata) {
  //    console.log(Imagedata);
  //    const modal = this.modalCtrl.create('ImageviewerPage', Imagedata);
  //   modal.present();
  // }

  imageView(Imagedata:any,type:string,sliderid:number,title:string) {
     console.log(Imagedata);
     let photos = [];
     if(type == 'multiple-image'){
      Imagedata.forEach((element: { [x: string]: string; }) => {
        photos.push({ url: this.imageUrl + element['main_image'] , type: 'jpg', title:title });
      });
     }else if( type == 'single-image'){
      photos.push({url:Imagedata,type:'jpg', title:title})
     }
      let modal = this.modalCtrl.create(GalleryModal, {
         photos: photos,
         initialSlide: sliderid
      });
      modal.present();
  }

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
          console.log(this.languageheader);
          
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
  doInfinite(infiniteScroll) {
    if(this.relatedPostList.length <= this.category_count){
      this.category_count = this.relatedPostList.length;
      this.showEndPage = true;
      infiniteScroll.enable(false);
    }else{
      setTimeout(() => {
      this.category_count = this.category_count + 6;
      this.showEndPage = false;
      infiniteScroll.complete();
      this.reActiveInfinite = infiniteScroll;
    }, 1000);
    }

  }
  // =======================================================================================================================================================
  // PULL TO REFRESH
  // ============================
  doRefresh(refresher) {
    this.category_count = 6;
    if(this.reActiveInfinite){
      this.reActiveInfinite.enable(true);

    }
    this.events.publish('refresher:enabled', true);
    this.getList();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  //  



}

class Post {
  area?: number;
  area_name?: string;
  category?: string;
  category_id?: number;
  cost?: number;
  created_at?: string;
  created_by?: number;
  cus_id?: string
  customer?: any;
  customer_id?: 1
  customer_name?: string;
  declined_reason?: string;
  deleted_at?: string;
  description?: string;
  discount?: number;
  discount_details?: any
  due_amount?: any
  duration?: 10
  duration_type?: any;
  effective_date?: any;
  expire_date?: any;
  id: number;
  mobile_number?: any;
  payment_date?: any
  payment_status?: any;
  post_code?: any;
  post_from?: any;
  post_primary_image?: any;
  post_status?: any;
  post_sub_images?: any;
  post_type?: any;
  primary_image?: number
  primary_thumb_img?: any;
  status: number;
  tax: any;
  tax_details?: any;
  title?: any;
  total?: number;
  updated_at?: string;
  updated_by?: number
}