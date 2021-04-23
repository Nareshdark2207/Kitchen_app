import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController,Content, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  @ViewChild(Content) content: Content; 
  mobile_detail: any;
  OTP_detail: any;
  password_detail: any;
  forgotForm: FormGroup;
  verifyForm: FormGroup;
  passwordForm: FormGroup;
  verify_user_url: any = 'verify_user';
  otp_verfication: any = 'otp_verification';
  reset_password_url = 'reset_password';
  show_password: any;
  input_password: any = 'password';
  user_id: any;
  api_token: any;
  data: any;
  code: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
    // ==========================================================================================================================================
  // VALIDATION MESSAGES
  // ===============================
  validation_messages = {
    'email_id': [
      { type: 'required', message: 'Mobile Number | Email ID Is Required ' },
      { type: 'pattern', message: 'Email ID Is Invalid' }
    ],
    'password': [
      { type: 'required', message: 'Password Is Required.' },
      { type: 'minlength', message: 'Password Must Be At Least 6 Characters Long.' },
      // { type: 'pattern', message: 'Password Must Be At Least 6 Characters Long & Should Contains Atleast One Lowercase, Uppercase and Numeric' }
    ],
    'confirm_password': [
      { type: 'passwordNotMatch', message: 'Confirm Password Not Matching.' }
    ],
    'otp': [
      { type: 'required', message: 'OTP Is Required ' },
      { type: 'minlength', message: 'Enter The 6 Digit Number' },
      { type: 'maxlength', message: 'Enter The 6 Digit Number Only' },
    ]
  };
  // ==================================================================================================================================================
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,private keyboard: Keyboard,
    private formBuilder: FormBuilder, private api_service: Service,private platform: Platform) {
    this.menuCtrl.swipeEnable(false);
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  updatesowpass(data: any) {
    if (data.value == true) {
      this.input_password = 'text';
      this.show_password = true;
    } else if (data.value == false) {
      this.input_password = 'password';
      this.show_password = false;
    }
  }
  ngOnInit() {
    this.show_password = false;
    this.login_form_init();
    this.language_field();
  }
  ionViewDidLoad() {
    this.mobile_detail = true;
  }
  keyboardCheck() {

    setTimeout(() => {
      this.content.resize();
  }, 80);
  if(this.platform.is('cordova')) {
    return !this.keyboard.isVisible;
  }else{
    return true;
  }
 }
  // ====================================================================================================================================
  // FORM INITIATE
  // =========================
  login_form_init() {
    this.forgotForm = this.formBuilder.group({
      email_id: new FormControl(null, Validators.required),
    });
    this.verifyForm = this.formBuilder.group({
      otp: new FormControl(null, Validators.required),
    });
    this.passwordForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required,
      ])),
      confirm_password: new FormControl('', [Validators.required, this.passwordMatcher.bind(this)]),
      show_password: new FormControl('', Validators.required)
    });
  }
    // confirm new password validator
private passwordMatcher(control: FormControl): { [s: string]: boolean } {
  if (
      this.passwordForm &&
      (control.value !== this.passwordForm.controls.password.value)
  ) {
      return { passwordNotMatch: true };
  }
  return null;
}
  // =====================================================================================================================================
  // GET OTP
  // =================
  mobile_verify() {
    if (this.forgotForm.valid) {
      let data: any = {};
      data.api_token = this.api_service.api_token;
      data.email = this.forgotForm.value.email_id;
      this.api_service.post_data(this.verify_user_url, data)
        .subscribe((result: any) => {
          let res = result.status
          this.api_service.stopLoader();
          if (res == 'success' || res == 'Success') {
            this.mobile_detail = false;
            this.OTP_detail = true;
          } else {
            this.api_service.create(result.message, 'top', 'error');
          }
        }, (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
        });
    } else {
      this.validateAllFormFields(this.forgotForm);
    }
  }
  // =============================================================================================================================================
  // VERIFY OTP
  // ===================
  otp_verify() {
    if (this.verifyForm.valid) {
      let data: any = {};
      data.api_token = this.api_service.api_token;
      data.email = this.forgotForm.value.email_id;
      data.otp = this.verifyForm.value.otp;
      this.api_service.post_data(this.otp_verfication, data)
        .subscribe((result: any) => {
          if (result.status == 'success' || result.status == 'Success') {
            this.api_service.stopLoader();
            this.OTP_detail = false;
            this.password_detail = true;
            this.user_id = result.user_id;
          } else {
            this.api_service.stopLoader();
            this.api_service.create(result.message, 'top', 'error');
          }
        }, (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
        });
    } else {
      this.validateAllFormFields(this.verifyForm);
    }
  }
  // ==============================================================================================================================================
  // RESET THE PASSWORD
  // ===============================
  password_verify() {
    if (this.passwordForm.value.password == this.passwordForm.value.confirm_password) {
      if (this.passwordForm.valid) {
        let data: any = {};
        data.api_token = this.api_service.api_token;
        data.password = this.passwordForm.value.password;
        data.password_confirmation = this.passwordForm.value.confirm_password;
        data.user_id = this.user_id;
        this.api_service.post_data(this.reset_password_url, data)
          .subscribe((result: any) => {
            let res = result.status
            if (res == 'success' || res == 'Success') {
              this.api_service.stopLoader();
              this.navCtrl.setRoot('LoginPage');
            } else {
              this.api_service.create(result.message, 'top', 'error');
              this.api_service.stopLoader();
            }
          }, (error) => {
            this.api_service.stopLoader();
            this.api_service.create(error, 'top', 'error');
          });
      } else {
        this.validateAllFormFields(this.passwordForm);
      }
    } else {
      this.api_service.create('Confirm Password Is Not Matched', 'top', 'error');
    }
  }
  // ===========================================================================================================================================
  // NAVIGATE TO LOGIN PAGE
  // ===================================
  toLogin() {
    this.navCtrl.pop();
  }
  // =============================================================================================================================================
  // VALIDATION METHODS
  // =============================
  validateAllFormFields(forgotForm: FormGroup) {
    Object.keys(forgotForm.controls).forEach(field => {
      const control = forgotForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  // ================================================================================================================================================
  language_field() {
    this.data = {};
    this.api_token = this.api_service.api_token;
    this.data.api_token = this.api_token;
    this.data.lang_code = this.code;

    this.api_service.post_data(this.language_field_url, this.data)
      .subscribe((result: any) => {
        this.api_service.stopLoader();
        if (result.status == 'success') {
          this.languagefield = result.field_list;
        }
        else {
          this.api_service.create(result.message, 'top', 'error');
        }
      },
        (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
        });
  }
}
