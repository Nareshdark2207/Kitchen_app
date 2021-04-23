import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Service } from '../../app/service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

// import { IonicSelectableComponent } from 'ionic-selectable';

@IonicPage()

@Component({
  selector: 'page-post-with-us',
  templateUrl: 'post-with-us.html',
})



export class PostWithUsPage {
  // @ViewChild('myselect') selectComponent: IonicSelectableComponent;
  public photos: any;
  type: any;
 
  constructor(private transfer: FileTransfer, public navCtrl: NavController, public navParams: NavParams, public Fb: FormBuilder,
    public Toastr: ToastController, private camera: Camera, private service: Service, public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
    this.data = JSON.parse(localStorage.getItem('eastern_deals'))
 
   
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
    this.getBasicData()
    this.FormInit();

  
  }
 
  PostForm: FormGroup;
  LinkUrl: string = 'submit_post';
  data: Data = new Data();
  imageUrl: string = this.service.API_URL_IMG;
  Images: any = [];
  minDate = new Date().toISOString();
  // CATEGORY LIST
  categoryUrl: string;
  categoryList: any = [];
  // AREA LIST
  areaUrl: string;
  areaList: any = [];
  imgUrl: string = 'img_upload';
  subImg: any = [];
  subImgPath: any = []
  costUrl: string;
  cost: any = {};
  tax_ammt: any = [];
  sales_price: any;
  discount_ammt: any = [];
  imgDeleteUrl: string;
  diff: any = [];
  api_token: any;
  data_1: any;
  terms_condition_url: string = 'terms_conditions_data';
  term_condition: any = {};
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  code: any;
  // api_token: any;
  data_2: any;
  // =======================================================================================
  // VALIDATION MESSAGES
  // ==============================
  validation_messages = {
    'category_id': [
      { type: 'required', message: 'Category Is Required' }
    ],
    'area': [
      { type: 'required', message: 'Area Is Required' }
    ],
    'title': [
      { type: 'required', message: 'Title Is Required' }
    ],
    'description': [
      { type: 'required', message: 'Description Is Required' }
    ],
    'selling_price': [
      { type: 'required', message: 'Selling Price Is Required' }
    ],
    'main_image': [
      { type: 'required', message: 'Image Is Required' },
    ],
    'effective_date': [
      { type: 'required', message: 'Effective Date Is Required' }
    ]
  };
  // ================================================================================================================
  // FORM INITIATE
  // ======================
  FormInit = () => {
    this.PostForm = this.Fb.group({
      category_id: new FormControl(null, Validators.required),
      area: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      selling_price: new FormControl(null, Validators.required),
      main_image: new FormControl(null, Validators.required),
      sub_imgs: new FormControl(null),
      effective_date: new FormControl(null, Validators.required)
    });
  }
  // =====================================================================================================================
  ionViewDidLoad() {
  }
  ionViewWillLeave() {
    if (this.subImgPath.length != 0) {
      this.subImgPath.forEach((element: any, i: any) => {
        let back = true;
        this.delete(element, i, back);
      })
    }
  }
  ngOnInit() {
    this.get_terms();
    this.language_header();
    this.language_field();
  }
  language_header() {
    this.data_2 = {};
    this.api_token = this.service.api_token;
    this.data_2.api_token = this.api_token;
    this.data_2.lang_code = this.code;
    // this.data.user_id = this.customer_id;
    this.service.post_data(this.languageheader_url, this.data_2)
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
  language_field() {
    this.service.get_list(this.language_field_url + '?api_token=' + this.service.api_token + '&lang_code='+this.code).subscribe((result: any) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          this.languagefield = result.field_list;
        }
        else {
          this.service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.service.create(error, 'top', 'error');
        });
  }
  // ======================================================================================================================
  // GET BASIC DATA
  // ==========================
  getBasicData = () => {
    // CATEGORY LIST
    // ================
    this.categoryUrl = 'master_category_list';
    console.log(this.code);
    
    this.service.get_list(this.categoryUrl + '?api_token=' + this.service.api_token + '&lang_code=' + this.code)
      .subscribe((result: any) => {
        this.service.stopLoader();
        this.categoryList = result.categories;
      }, (error: any) => {
        this.service.stopLoader();
        this.service.create(error, 'top', 'error');
      })
    // AREA LIST
    // ===============
    this.areaUrl = 'area_list';
    this.service.get_list(this.areaUrl + '?api_token=' + this.service.api_token + '&lang_code=' + this.code)
      .subscribe((result: any) => {
        this.service.stopLoader();
        this.areaList = result.data;
      }, (error: any) => {
        this.service.create(error, 'top', 'error');
        this.service.stopLoader();
      })
    // GET COST
    // ====================
    this.costUrl = 'post_form'
    const obj = {
      'api_token': this.service.api_token,
      'company_id': this.data.current_branch,
      'user_id': this.data.id,
    }
    this.service.post_data(this.costUrl, obj)
      .subscribe((result) => {
        this.service.stopLoader();
        this.cost = result.data;
        this.tax_ammt = result.data.tax_details;
        this.discount_ammt = result.data.discount_details;
        if (this.discount_ammt != 0 && this.discount_ammt != null) {
        this.sales_price = (this.cost.cost) - (this.cost.discount);
        }
        else{
          this.sales_price ='null';
        }
        console.log(this.cost);
        console.log(this.cost.total);
        console.log(this.tax_ammt);
        console.log(this.sales_price);


      }, (error) => {
        this.service.stopLoader();
        this.service.create(error, 'top', 'error');
      })
  }
  // ===================================================================================================================
  // UPLOAD IMAGE
  // ========================
  uploadImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: 'camera',
          handler: () => {
            this.captureImage('camera');
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: 'images',
          handler: () => {
            this.captureImage('gallery');
          }
        },
      ]
    });
    actionSheet.present();
  }
  // ==============================================================================================
  // CAPTURE IMAGE
  // ==========================
  captureImage(data: any) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 500,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }
    if (data == 'camera') {
      options.sourceType = this.camera.PictureSourceType.CAMERA;
      this.camera.getPicture(options).then((imageData) => {
        if (this.Images.length < 5 || this.Images[0] == 0) {
          this.Images.push(imageData);
          this.uploadFile(imageData);
        } else {
          this.service.create('5 Images Only Acceptable', 'top', 'error');
        }
      }, (err) => {
        this.service.create(err, 'top', 'error');
        // Handle error
      });
    } else {
      if (data == 'gallery') {
        options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        this.camera.getPicture(options).then((imageData) => {
          if (this.Images.length < 5 || this.Images[0] == 0) {
            this.Images.push(imageData);
            this.uploadFile(imageData);
          } else {
            this.service.create('5 Images Only Acceptable', 'top', 'error');
          }
        }, (err) => {
          // Handle error
          this.service.create(err, 'top', 'error');
        });
      }
    }
  }
  // ==========================================================================================================
  // UPLOAD IMAGE
  // ====================
  uploadFile(data: any) {
    this.PostForm.get('main_image').patchValue(data);
    this.LinkUrl = 'submit_post';
    this.service.startLoader();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'image',
      fileName: 'image',
      chunkedMode: false,
      mimeType: 'image/jpeg'
    }
    let params = {
      'api_token': this.service.api_token,
      'image': data,
      'path': 'post',
      'table_name': 'posts',
    }
    options.httpMethod = 'POST';
    options.params = params;
    fileTransfer.upload(data,
      this.service.API_URL_IMG + 'api/' + this.imgUrl, options)
      .then((data: any) => {
        this.service.stopLoader();
        const val: any = JSON.parse(data.response);
        if (this.subImg[0] == 0) {
          this.subImgPath.splice(0, 1);
          this.subImg.splice(0, 1);
          this.subImg.unshift(val.avatar_id);
          this.subImgPath.unshift(val);
          this.Images.splice(0, 1)
          this.Images.unshift(val.image_path);
        } else {
          this.subImg.push(val.avatar_id);
          this.subImgPath.push(val);
        }
      }, (err) => {
        this.service.stopLoader();
        this.service.create(err, 'top', 'error');
      });
    // });
  }
  // ===================================================================================================
  // IMAGE DELETE
  delete = (id: any, i: any, back: boolean) => {
    const obj = {
      'image_id': id.avatar_id,
      'api_token': this.service.api_token
    };
    this.imgDeleteUrl = 'img_delete'
    this.service.post_data(this.imgDeleteUrl, obj)
      .subscribe((result) => {
        this.service.stopLoader();
        if (result.status == 'success') {
          if (back != true) {
            this.service.create(result.message, 'top', 'success');
          } else {
          }
          if (i == 0) {
            this.subImgPath.splice(i, 1, 0)
            this.subImg.splice(i, 1, 0)
            this.Images.splice(i, 1, 0)
          } else {
            this.subImgPath.splice(i, 1)
            this.subImg.splice(i, 1)
            this.Images.splice(i, 1)
          }
        }
      }, (error) => {
        this.service.stopLoader();
        this.service.create(error, 'top', 'error');
      })
  }
  // ==================================================================================================================
  // CHANGE MAIN IMAGE
  // =============================
  changeMainImage = (val: any, i: any) => {
    this.diff = [];
    this.subImgPath.splice(i, 1);
    this.subImg.splice(i, 1);
    this.subImg.unshift(val.avatar_id);
    this.subImgPath.unshift(val);
    // this.diff[i] = true;
  }
  // ===================================================================================================================
  // terms and conditions
  // ===================
  get_terms() {
    this.data_1 = {};
    this.api_token = this.service.api_token;
    this.data_1.api_token = this.api_token;
    this.data_1.tc_type = 'post';
    
    this.service.get_list(this.terms_condition_url + '?api_token=' + this.service.api_token+'&tc_type=post')
      .subscribe((result: any) => {
        let res = result.status
        this.service.stopLoader();
        if (res == 'success') {
          // if (result.data != null) {
            this.term_condition = result.data;
          // }
        }
        else {
        }
      },
        (error) => {
          this.service.create(error, 'top', 'error');

          this.service.stopLoader();
        });
  }
  // ===================================================================================================================
  // SUBMIT
  // ===================
  submit_1()
  {
    // console.log(this.PostForm.value.area.id);
    this.PostForm.value.main_image = this.subImg[0];
    const params = {
      'api_token': this.service.api_token,
      'main_image': this.subImg[0],
      'company_id': this.data.current_branch,
      'user_id': this.data.id,
      'post_type': 'paid',
      'area': this.PostForm.value.area.id,
      'category_id': this.PostForm.value.category_id,
      'title': this.PostForm.value.title,
      'description': this.PostForm.value.description,
      'effective_date': this.PostForm.value.effective_date,
      'post_price': this.PostForm.value.selling_price,
      'sub_imgs': [this.subImg[1], this.subImg[2]],
      'cost': this.cost.cost,
      'discount': this.cost.discount,
      'tax': this.cost.tax,
      'duration': this.cost.duration,
      'duration_type': this.cost.duration_type,
      'total': this.cost.total
    }
    console.log(params);
    if (this.PostForm.valid) {
      this.service.post_data(this.LinkUrl, params)
        .subscribe((result) => {
          if (result.status == 'success') {
            this.service.stopLoader();
            this.PostForm.reset();
            this.subImgPath = [];
            this.subImg = [];
            this.Images = [];
            this.service.create(result.message, 'top', 'success');
          } else {
            this.service.create(result.message, 'top', 'error');
            this.service.stopLoader();
          }
        }, (error) => {
          this.service.stopLoader();
          this.service.create(error, 'top', 'error');
        })
    } else {
      this.validateAllFormFields(this.PostForm)
    }

  }
  submit() {
    const confirm = this.alertCtrl.create({
      title: ' Terms and Conditions',
      message: this.term_condition.content,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.PostForm.value.main_image = this.subImg[0];
            const params = {
              'api_token': this.service.api_token,
              'main_image': this.subImg[0],
              'company_id': this.data.current_branch,
              'user_id': this.data.id,
              'post_type': 'paid',
              'area': this.PostForm.value.area,
              'category_id': this.PostForm.value.category_id,
              'title': this.PostForm.value.title,
              'description': this.PostForm.value.description,
              'effective_date': this.PostForm.value.effective_date,
              'sub_imgs': [this.subImg[1], this.subImg[2]],
              'cost': this.cost.cost,
              'discount': this.cost.discount,
              'tax': this.cost.tax,
              'duration': this.cost.duration,
              'duration_type': this.cost.duration_type,
              'total': this.cost.total
            }
            if (this.PostForm.valid) {
              this.service.post_data(this.LinkUrl, params)
                .subscribe((result) => {
                  if (result.status == 'success') {
                    this.service.stopLoader();
                    this.PostForm.reset();
                    this.subImgPath = [];
                    this.subImg = [];
                    this.Images = [];
                    this.service.create(result.message, 'top', 'success');
                  } else {
                    this.service.create(result.message, 'top', 'error');
                    this.service.stopLoader();
                  }
                }, (error) => {
                  this.service.stopLoader();
                  this.service.create(error, 'top', 'error');
                })
            } else {
              this.validateAllFormFields(this.PostForm)
            }
          }
        }
      ]
    });
    confirm.present();
  }
  // ====================================================================================
  // VALIDATION FUNCTION
  // ===============================
  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  
}
class Data {
  alternate_number: number;
  avatar_id: number;
  branch: number;
  created_at: string;
  created_by: string;
  current_branch: any;
  customer_id: number;
  deleted_at: any;
  device_token: any;
  email: string;
  first_name: string
  id: number;
  image_path: string;
  last_name: string;
  mobile_number: number;
  mobile_number_verified_at: string;
  nbt_number: string;
  password_reset_otp: any
  role_id: number;
  status: number;
  unique_id: string;
  updated_at: string;
  updated_by: string;
  verification_otp: string;
}
