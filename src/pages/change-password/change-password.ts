import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Service } from '../../app/service';
@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  change_password_form: FormGroup;
  customer_id: any;
  input_password: any = 'password';
  change_password_url = 'change_password';
  err_messg:any;
  languageheader_url: string = 'language_settings_header';
  languageheader: any = {};
  code: any;
  api_token: any;
  data: any;
  language_field_url: string = 'language_settings_field';
  languagefield: any = {};
  // ==============================================================================================================================================
  // VALIDATION MESSAGES
  // ==============================
  validation_messages = {
    'old_password': [
      { type: 'required', message: 'Old Password is required.' },
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
  // ================================================================================================================================================
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_service: Service, private formBuilder: FormBuilder) {
    let customer_data = JSON.parse(localStorage.getItem('eastern_deals'));
    this.customer_id = customer_data.id;
    if (localStorage.getItem('lang_code')) {
      let value = localStorage.getItem('lang_code');
      this.code = value;
      console.log(this.code);
    }
  }
  ionViewDidLoad() {
  }
  ngOnInit() {
    this.change_password_init();
    this.language_header();
    this.language_field();

  }
  // ==================================================================================================================================================
  // CHANGE PASSWORD INITIATE
  // ===================================
  change_password_init() {
    this.change_password_form = this.formBuilder.group({
      old_password: new FormControl('', Validators.required),
      new_password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required,
      ])),
      confirm_password: new FormControl('', [Validators.required, this.passwordMatcher.bind(this)]),
    });
  }
    // confirm new password validator
private passwordMatcher(control: FormControl): { [s: string]: boolean } {
  if (
      this.change_password_form &&
      (control.value !== this.change_password_form.controls.new_password.value)
  ) {
      return { passwordNotMatch: true };
  }
  return null;
}
  // =====================================================================================================================================================
  // SHOW PASSWORD
  // ====================
  showpassword() {
    this.input_password = 'text';
  }
  // HIDE PASSWORD
  // =====================
  hidepassword(event) {
    console.log(event.checked);
    if(event.checked == true){
    this.input_password = 'text';

    }else{
      this.input_password = 'password';

    }
  }
  // =====================================================================================================================================================
  // SUBMIT CHANGE PASSWORD 
  // ===============================
  sub_form() {
    if (this.change_password_form.valid) {
      let updated_password: any = {};
      updated_password.api_token = this.api_service.api_token;
      updated_password.user_id = this.customer_id;
      updated_password.old_password = this.change_password_form.value.old_password;
      updated_password.password = this.change_password_form.value.new_password;
      updated_password.confirm_password = this.change_password_form.value.confirm_password;
      this.api_service.post_data(this.change_password_url, updated_password).subscribe((result: any) => {
        if (result.status == 'success') {
          this.api_service.stopLoader();
          this.api_service.create(result.message, 'top', 'success');
          this.reset_form();
        } else {
          this.api_service.create(result.message, 'top', 'error');
          this.api_service.stopLoader();
          this.err_messg = result.errors.confirm_password[0];
          console.log(this.err_messg);
          
        }
      }, (error) => {
        this.api_service.stopLoader();
        this.api_service.create(error, 'top', 'error');
      })
    } else {
      this.validateAllFormFields(this.change_password_form);
    }
  }
  // ==========================================================================================================================================
  // RESET FORM
  // =====================
  reset_form() {
    this.change_password_form.reset();
  }
  // =============================================================================================================================================
  // VALIDATION METHOD
  // ================================
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
  // ================================================================================================================================================

}
