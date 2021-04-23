import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Platform } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from '../../app/service';
declare var SMSRetriever: any;
// declare var SMSReceive: any;
/**
 * Generated class for the EmailOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-otp',
  templateUrl: 'email-otp.html',
})
export class EmailOtpPage {
  verifyForm: FormGroup;
  verifyUrl: string = 'user_mail';
  data: any;
  OTP: string = '';
  OTPmessage: string ;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  lang_code: any;
  // VALIDATION MESSAGES
  // ===============================
  validation_messages = {
    'otp': [
      { type: 'max', message: 'Maximium 6 Letters Only Allowed' },
      { type: 'min', message: 'Maximium 6 Letters Only Allowed' }
    ]
  }
  // ==========================================================================================================================
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private api_service: Service, public viewCtrl: ViewController, private platform: Platform ) {
    this.data = this.navParams.data.data;
    this.verifyForm = this.formBuilder.group({
      otp: new FormControl(null, [Validators.required, Validators.max(999999), Validators.min(100000)]),
    });
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.lang_code = value;
    }
  }

// ==============================================================================================================================
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailOtpPage');
    this.language_field();
    if(this.platform.is('android')){
    // this.start();
    }
  }
  start() {
    let otp_message = "OTP Will Be Recieved Within 5 minutes"
    this.api_service.create(otp_message, 'top', 'success');
    SMSRetriever.startWatch((result)=>{
      console.info(result);
      document.addEventListener('onSMSArrive', (args:any)=> {
        // SMS arrived, get its contents
        console.info(args.message);
        if(args){
          var IncomingSMS = args;
          this.processSMS(IncomingSMS);
        }
        // To Do: Extract the received one-time code and verify it on your server
    });
    },(error)=>{
      this.api_service.create(error, 'bottom', 'success');

    });

  }

processSMS(data) {
  // Check SMS for a specific string sequence to identify it is you SMS
  // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
  // In this case, I am keeping the first 6 letters as OTP
    const message = data.message;
    if (message != ''){
    let matches = message.match(/(\d+)/);             
    if (matches) { 
      this.OTP  = matches[0]; 
      this.verifyForm.get('otp').patchValue(this.OTP);
      this.otp_verify();
    } 
    // this.stop();
  }
}
  mobile_verify()
  {
    this.navCtrl.pop();
  }
  // ===============================================================================================================================
  // OTP VERIFICATION
  // =================================
  otp_verify = () => {
    if (this.verifyForm.valid) {
    this.data.otp = this.verifyForm.value.otp;
      this.api_service.post_data(this.verifyUrl, this.data)
        .subscribe((result) => {
          if (result.status == 'Success') {
            this.api_service.stopLoader();
            this.api_service.create(result.message, 'top', 'success');
            this.navCtrl.setRoot('MyAccountPage');
          } else {
            this.api_service.stopLoader();
            this.api_service.create(result.message, 'top', 'error');
          }
        }, (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
  
          console.log(error)
        })
    }
  }
  // ======================================================================================================================================
  language_field() {

    this.api_service.get_list(this.language_field_url + '?api_token=' + this.api_service.api_token + '&lang_code='+this.lang_code).subscribe((result: any) => {
        this.api_service.stopLoader();
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.languagefield = result.field_list;
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

  
}
