import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Service } from '../../app/service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile_url = 'user_profile';
  update_profile_url = 'update_user_profile';
  change_profile_image = 'change_profile_image';
  customer_id: any;
  profile_data: any = {};
  img_path: any;
  disabled: any = true;
  view_image: any;
  customer_profile_form: FormGroup;
  // show: boolean;
  cus_id: any;
  code: any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  api_token: any;
  data: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  // ================================================================================================================================
  // VALIDATION MESSAGES
  // ==============================
  validation_messages = {
    'customer_first_name': [
      { type: 'required', message: 'Name is required' }
    ],
    'customer_email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Email is not valid' }
    ],
    'customer_mobile_number': [
      { type: 'required', message: 'Mobile number is required.' }
    ],
    'customer_alternate_mobile_number': [
      { type: 'required', message: 'Alternate Mobile number is required.' }
    ]
  };
  // ======================================================================================================================================================
  constructor(private transfer: FileTransfer, public navCtrl: NavController, public navParams: NavParams, private api_service: Service,
    private formBuilder: FormBuilder, private actionsheetCtrl: ActionSheetController, private camera: Camera, private events: Events,
    ) {
    let customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
    // this.customer_id = customer_data.id;
    // this.cus_id = customer_data.customer_id;
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  ionViewDidLoad() {
  }
  ionViewDidLeave() {
    this.events.publish('backpage');
  }
  ngOnInit() {
    this.customer_profile();
    this.get_profile();
    this.language_header();
    this.language_field();
  }
  // =================================================================================================================================
  // CUSTOMER PROFILE FORMINITIATE
  // =======================================
  customer_profile() {
    this.customer_profile_form = this.formBuilder.group({
      customer_first_name: new FormControl(null, [Validators.required]),
      // customer_email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}]*')]),
      customer_mobile_number: new FormControl(null, [Validators.required]),
      customer_alternate_mobile_number: new FormControl(null),
    });
  }
  language_header() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;
    this.data.user_id = this.customer_id;
    this.api_service.post_data(this.languageheader_url, this.data)
      .subscribe((result: any) => {
        this.api_service.stopLoader();
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.languageheader = result.header_list;
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
  }
  language_field() {
    this.api_service.get_list(this.language_field_url + '?api_token=' + this.api_service.api_token + '&lang_code='+this.code).subscribe((result: any) => {
        this.api_service.stopLoader();
        if (result.status == 'success') {
          this.languagefield = result.field_list;
        }
        else {
          this.api_service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.api_service.create(error, 'top', 'error');
        });
  }
  // ==================================================================================================================================
  // GET PROFILE DETAILS
  // ============================
  get_profile() {
    let user_id = this.customer_id;
    let api_token = this.api_service.api_token;
    const url = this.profile_url + '?api_token=' + api_token + '&user_id=' + user_id;
    this.api_service.get_list(url)
      .subscribe((result: any) => {
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.profile_data = result.data;
          this.img_path = this.api_service.API_URL_IMG;
          this.customer_profile_form.patchValue({
            customer_first_name: this.profile_data.first_name,
            // customer_email: this.profile_data.email,
            customer_mobile_number: this.profile_data.mobile_number,
            customer_alternate_mobile_number: this.profile_data.alternate_number
          });
          this.customer_profile_form.valueChanges
            .subscribe(selectedValue => {
              console.log(selectedValue);
              if (selectedValue.customer_first_name == this.profile_data.first_name && selectedValue.customer_mobile_number == this.profile_data.mobile_number) {
                this.disabled = true;
              
              } else {
                if(selectedValue.customer_alternate_mobile_number != '' && selectedValue.customer_alternate_mobile_number == this.profile_data.customer_alternate_mobile_number){
                  this.disabled = true;

                }else{
                  this.disabled = false;
                  
                }
              }
            });
        }
      }, (error) => {
        this.api_service.stopLoader();
        console.log(error)
      });
  }
  // ==========================================================================================================================================================
  // UPDATE PROFILE
  // ==========================
  updated_profile() {
    if (this.customer_profile_form.valid) {
      let updated_data: any = {};
      updated_data.api_token = this.api_service.api_token;
      updated_data.user_id = this.customer_id;
      updated_data.first_name = this.customer_profile_form.value.customer_first_name;
      // updated_data.email = this.customer_profile_form.value.customer_email;
      updated_data.mobile_number = this.customer_profile_form.value.customer_mobile_number;
      updated_data.alternate_number = this.customer_profile_form.value.customer_alternate_mobile_number;
      this.api_service.post_data(this.update_profile_url, updated_data).subscribe((result: any) => {
        this.api_service.stopLoader();
        if (result.status == 'Success') {
          this.api_service.create(result.message, 'top', 'success');
        } else if (result.status == 'Error') {
          this.api_service.create(result.errors.email[0], 'top', 'error');
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');

        console.log(error)
      });
    } else {
      this.validateAllFormFields(this.customer_profile_form);
    }
  }
  // =========================================================================================================================================
  // UPDATE IMAGE
  // ======================
  upload_image() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '',
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
  captureImage(data) {
    const options: CameraOptions = {
      quality: 60,
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
        this.uploadFile(imageData);
      }, (err) => {
        // Handle error
      });
    } else {
      if (data == 'gallery') {
        options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        this.camera.getPicture(options).then((imageData) => {
          this.uploadFile(imageData);
        }, (err) => {
          // Handle error
        });
      }
    }
  }
  uploadFile(image_uri: any) {
    this.api_service.startLoader();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'profile_image',
      fileName: 'profile_image',
      chunkedMode: false,
      mimeType: 'image/jpeg'
    }
    var params = {
      'api_token': this.api_service.api_token,
      'user_id': this.customer_id,
      'profile_image': image_uri
    }
    options.httpMethod = 'POST';
    options.params = params;
    fileTransfer.upload(image_uri, this.api_service.API_URL_IMG + 'api/' + this.change_profile_image, options).then((data: any) => {
      this.api_service.stopLoader();
      this.api_service.create('Profile Photo Updated Successfully', 'top', 'success');
      this.get_profile();
    }, (err) => {
      this.api_service.create(err, 'top', 'error');
      this.api_service.stopLoader();
    });
  }
  // ===================================================================================================================================
  // VALIDATION METHODS
  // =========================
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
  // ==============================================================================================================================================

}
