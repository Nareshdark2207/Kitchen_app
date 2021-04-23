import { Component ,ViewChild} from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, MenuController, Events, ToastController,Content , Platform} from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Service } from '../../app/service';
// declare var SMSRetriever: any;
// import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
declare var SMSRetriever: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild(Content) content: Content; 
  loginpage: any;
  SignUpForm: FormGroup;
  Otpfrom: FormGroup;
  LoginForm: FormGroup;
  link_url: string = 'login';
  otp_url: string = 'verify_otp';
  sign_link_url: string = 'customer_creation';
  api_token: any;
  data: any = {};
  error_mesg: any;
  basic_detail: any;
  login_form: any;
  password_detail: any;
  otp_details: any;
  otp_details_1: any;
  apphash:any;
  id: any;
  device_token: any;
  type:any;
  input_password: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  code: any;
  OTP: string = '';
  OTPmessage: string ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public Fb: FormBuilder,private keyboard: Keyboard, private api_service: Service,
    public Toastr: ToastController, public menuCtrl: MenuController, public events: Events, private platform: Platform) {
    this.menuCtrl.swipeEnable(false);
    if (localStorage.getItem('appPushToken')) {
      this.device_token = JSON.parse(localStorage.getItem('appPushToken'));
    }
    this.type = navParams.get('type');
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  ionViewDidLoad() {
    this.loginpage = 'login';
    this.login_form = true;
    this.basic_detail = true;
  }
  ngOnInit() {
    this.FormInit();
    this.input_password = 'password';
    this.language_field();
  }
  // ===========================================================================================================
  // FORM INITIATE
  // ========================
  FormInit = () => {
    this.LoginForm = this.Fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    this.SignUpForm = this.Fb.group({
      first_name: new FormControl(null, Validators.required),
      mobile_number: new FormControl(null, Validators.required),
      // email: new FormControl(null, Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
      new_password: new FormControl('',  Validators.compose([
        Validators.minLength(6),
        Validators.required,
      ])),
      confirm_password: new FormControl('',[Validators.required, this.passwordMatcher.bind(this)]),
 
    });
    this.Otpfrom = this.Fb.group({
      otp: new FormControl(null, Validators.required)
    });
  }
  // confirm new password validator
private passwordMatcher(control: FormControl): { [s: string]: boolean } {
  if (
      this.SignUpForm &&
      (control.value !== this.SignUpForm.controls.new_password.value)
  ) {
      return { passwordNotMatch: true };
  }
  return null;
}
  // =========================================================================================================
  // LOGIN
  // ======================
  login() {
   if (this.LoginForm.valid) {
      this.data = {};
      this.data = this.LoginForm.value
      this.data.api_token = this.api_service.api_token;
      this.data.device_token = this.device_token;
      this.api_service.post_data(this.link_url, this.data)
        .subscribe((result: any) => {
          if (result.status == 'success') {
            this.api_service.stopLoader();
            if (this.type == 'addpost') {
              this.navCtrl.setRoot('AdvertisePostPage');
              } else {
              this.navCtrl.setRoot('HomepagePage');
              }
              localStorage.setItem('eastern_deals', JSON.stringify(result.data));
              this.events.publish('menu:created', result);
            console.log(result);
              
          } else {
            this.api_service.stopLoader();
            // this.api_service.create(result.message, 'top', 'error');
            // console.log(result.errors['username']);
            if (result.errors){
              if (result.errors['username']) {
                this.api_service.create(result.errors['username'], 'top', 'error');
              } else {
                this.api_service.create(result.message, 'top', 'error');
              }
            } else {
              this.api_service.create(result.message, 'top', 'error');

            }
                
          }
        }, (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
  
          console.log(error)
        });
    } else {
      this.validateAllFormFields(this.LoginForm);
    }
  }
  details() {

    this.basic_detail = false;
    this.password_detail = true;

  }
    back1() {
    this.basic_detail = true;
    this.password_detail = false;
    this.input_password = 'password';
  }
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


  start() {
    let otp_message = "OTP Will Be Recieved Within 5 minutes"
    this.api_service.create(otp_message, 'top', 'success');
    SMSRetriever.startWatch((result)=>{
      console.log(result);
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
      this.Otpfrom.get('otp').patchValue(this.OTP);
      this.otp_verify();
    } 

    // this.stop();
  }
  }
  showpassword() {
    console.log(this.input_password);
    this.input_password = 'text';
  }
  hidepassword() {
    this.input_password = 'password';
  }
    // HIDE PASSWORD
  // =====================
  hidepassword2(event) {
    console.log(event.checked);
    if(event.checked == true){
    this.input_password = 'text';

    }else{
      this.input_password = 'password';

    }
  }
  reset_login() {
    this.SignUpForm.reset();
  }
  reset_signup() {
    this.LoginForm.reset();
  }
  keyboardCheck() {

      setTimeout(() => {
        this.content.resize();
    }, 80);
    if(this.platform.is('cordova')) {
      return !this.keyboard.isVisible;
    } else{
      return true;
    }
   }
  // =================================================================================================================================================
  // SIGNUP
  // =======================
  verify() {
    if (this.SignUpForm.get('first_name').valid || this.SignUpForm.get('mobile_number').valid || this.SignUpForm.get('email').valid || this.SignUpForm.get('new_password').valid || this.SignUpForm.get('confirm_password').valid) {
      this.api_token = this.api_service.api_token;
      this.data = this.SignUpForm.value
      this.data.api_token = this.api_token;
      this.api_service.post_data(this.sign_link_url, this.data)
        .subscribe((result: any) => {
          if (result.status == 'success') {
            this.api_service.stopLoader();
            this.basic_detail = false;
            this.otp_details = true;
            this.password_detail = false;
            if(this.platform.is('android')){
              this.start();
            }
            this.id = result.data.id
          } else {
            console.log(result.errors['mobile_number']);
            this.api_service.stopLoader();
            if (result.errors['mobile_number']){
              this.api_service.create(result.errors['mobile_number'], 'top', 'error');
            } else if (result.errors['email']){
              this.api_service.create(result.errors['email'], 'top', 'error');
            }   else if(result.errors['confirm_password']){
              this.api_service.create(result.errors['confirm_password'], 'top', 'error');
            } else{
              this.api_service.create(result.message, 'top', 'error');
            }  
          }
        }, (error) => {
            this.api_service.stopLoader();
            this.api_service.create(error, 'top', 'error');
          });
    } else {
      this.validateAllFormFields(this.SignUpForm);
    }
  }
  // ===========================================================================================================================
  // OTP VERIFY
  // ======================
  otp_verify() {
    if (this.Otpfrom.valid) {
      this.api_token = this.api_service.api_token;
      this.data = this.Otpfrom.value
      this.data.api_token = this.api_token;
      this.data.user_id = this.id;
      this.api_service.post_data(this.otp_url, this.data)
        .subscribe((result: any) => {
          if ( result.status == 'success') {
            this.api_service.stopLoader();
            if (result.verified_from == 'signup') {
              this.otp_details = false;
              this.navCtrl.push('LoginPage');
            }  else {
              this.otp_details_1 = false;
              this.navCtrl.setRoot('LoginPage');
              this.api_service.create('Your registration process has been completed and you will get login credentials to your register Email ID', 'top', 'success');
              localStorage.setItem('eastern_deals', JSON.stringify(result.data));
              this.events.publish('menu:created', result);
            }
          }  else {
            this.api_service.stopLoader();
            this.api_service.create(result.message, 'top', 'error');
          }
        }, (error) => {
          this.api_service.stopLoader();
          this.api_service.create(error, 'top', 'error');
  
          console.log(error)
        });
    } else {
      this.validateAllFormFields(this.Otpfrom);
    }
  }
  // =============================================================================================================================
  validateAllFormFields(SignUpForm: FormGroup) {
    Object.keys(SignUpForm.controls).forEach(field => {
      const control = SignUpForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  // =========================================================================================================================
  // VALIDATION MESSAGES
  // ===========================
  validation_messages = {
    'username': [
      { type: 'required', message: 'Mobile Number Is Required' }
    ],
    'password': [
      { type: 'required', message: 'Password Is Required' }
    ],
    'first_name': [
      { type: 'required', message: 'Name Is Required' }
    ],
    'mobilenumber': [
      { type: 'required', message: 'Mobile Number Is Required' },
      { type: 'pattern', message: 'Mobile Number is Invalid' }
    ],
    'email': [
      { type: 'required', message: 'Email Is Required' },
      { type: 'pattern', message: 'Invalid Email' }
    ],
    'otp': [
      { type: 'required', message: 'OTP Is Required ' },
      { type: 'minlength', message: 'Enter The 6 Digit Number' },
      { type: 'maxlength', message: 'Enter The 6 Digit Number Only' },
    ],
    'new_password': [
      { type: 'required', message: 'New Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' },
      // { type: 'pattern', message: 'Password must be at least 6 characters long and should contain atleast one lowercase, uppercase & numeric' }
    ],
    'confirm_password': [
      { type: 'passwordNotMatch', message: 'Confirm Password Not Matching.' },
    ],
  };
  // ==========================================================================================================================
  // FORGET PASSWORD PAGE
  // ==========================
  Forgot = () => {
    this.navCtrl.push('ForgetPage');
  }
  // ==================================================================================================================================== 


  login_verify(){
    this.navCtrl.push('EmailOtpPage');
  }


}
