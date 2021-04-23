import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
// import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {
  Toast,
  ToastController,
  LoadingController,
  Loading,
  Events
} from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";

// import { Vibration } from '@ionic-native/vibration';
import "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
@Injectable()
export class Service {
  id: number;
  // public static API_URL = "https://easterndeals.lk/api/";
  // public API_URL_IMG = "https://easterndeals.lk/";

  // public static API_URL = "http://edeals.lk/api/";
  // public API_URL_IMG = "http://edeals.lk/";

  // public static API_URL = "https://edeals.mylaporetoday.in/api/";
  // public API_URL_IMG = "https://edeals.mylaporetoday.in/";

  public static API_URL = "https://easterndeals.lk/api/";
  public API_URL_IMG = "https://easterndeals.lk/";

  public static API_URL2 = "https://push.mylaporetoday.in/device_register";
  public api_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJodHRwczovL2VkZWFscy5teWxhcG9yZXRvZGF5LmluIiwibmFtZSI6IkVhc3Rlcm4gRGVhbHMiLCJpYXQiOjE1MTYyMzkwMjJ9.b5IdVItcKeKUovImwQjlrrKx5IZUZatSsutFXsQ5p00";
  list = [];
  // public api_token = "123456";
  edit_data: object = {};

  exist = false;
  toast: Toast;
  public headers: Headers;
  loading: Loading;
  refresher: boolean = false;
  constructor(
    private http: Http,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private _sanitizer: DomSanitizer,
    private events: Events
  ) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.events.subscribe("refresher:enabled", data => {
      console.log(data);
      this.refresher = data;
    });


  }
  create(message: string, position: string, custom_class: string) {
    if (this.toast) {
      this.toast.dismiss();
    }
    this.toast = this.toastCtrl.create({
      message,
      duration: false ? null : 5000,
      position: position,
      showCloseButton: false,
      closeButtonText: "OK",
      cssClass: custom_class
    });
    if (custom_class == "error") {
      // this.vibration.vibrate(1000);
    }
    this.toast.present();
  }

  //loader start
  startLoader() {
    if (this.refresher != true) {
      console.log(this.refresher);
      this.loader();
      this.loading.present();
    } else {
      this.refresher = false;
    }
  }
  stopLoader() {
    if (this.loading) {
      setTimeout(() => {
        this.loading.dismiss().then(() => console.log('dismissed'));
      }, 3000);
    }
  }
  // ============================================================
  private loader() {
    // if(!this.loading){
    const componentDefinition = "customclass";
    const html: string = `<div class="${componentDefinition}__container">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-square"><g transform="translate(20 20)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(0.543883 0.543883)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.4s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(50 20)"><rect x="-15" y="-15" width="30" height="30" fill="#f7721c" transform="scale(0.822633 0.822633)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.3s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(80 20)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(20 50)"><rect x="-15" y="-15" width="30" height="30" fill="#f7721c" transform="scale(0.822633 0.822633)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.3s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-15" y="-15" width="30" height="30" fill="#F7721C" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.1s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(20 80)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.2s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(50 80)"><rect x="-15" y="-15" width="30" height="30" fill="#F7721C" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="-0.1s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(80 80)"><rect x="-15" y="-15" width="30" height="30" fill="#ffb900" transform="scale(1 1)"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1;1;0.2;1;1" keyTimes="0;0.2;0.5;0.8;1" dur="1s" keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5" begin="0s" repeatCount="indefinite"></animateTransform></rect></g></svg>
        </div>`;
    const safeHtml: any = this._sanitizer.bypassSecurityTrustHtml(html);

    if (this.loading && this.loading.instance) {
      this.stopLoader();
    }
    this.loading = this.loadingCtrl.create({
      spinner: "hide",
      dismissOnPageChange: true, duration: 5000,
      cssClass: componentDefinition,
      content: safeHtml
    });
    // }
  }

  // =======================================================
  //loader stop

  // =================================================================
  post_data(particle_url: any, obj: any): Observable<any> {
    try {
      this.startLoader();
      return this.http
        .post(Service.API_URL + particle_url, obj)
        .map(this.extract_post_result)
        .catch(this.handle_post_error);
    } catch (error) {
      console.log(error);
    }
  }
  
  // ======================================================================
  notification(obj): Observable<any> {
    try {
      return this.http
        .post(Service.API_URL2, obj)
        .map(this.extract_post_result2)
        .catch(this.handle_post_error2);
    } catch (error) {
      console.log(error);
    }
  }
  extract_post_result(res: any) {
    const body = res.json();
    console.log(body);
    return body || {};
  }
  handle_post_error(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
        ? `${error.status} - ${error.statusText}`
        : "cannot connect to server, please check the internet connectivity";
    return Observable.throw(errMsg);
  }

  extract_post_result2(res: any) {
    const body = res.json();
    console.log(body);
    return body || {};
  }
  handle_post_error2(error: any) {
    return Observable.throw(error);
  }

  get_list(particle_url): Observable<any> {
    console.log(particle_url);
    try {
      // this.startLoader();

      return this.http
        .get(Service.API_URL + particle_url)
        .map(this.extract_get_list)
        .catch(this.handle_get_list_error);
    } catch (error) {
      console.log(error);
    }
  }
  extract_get_list(res: any) {
    const body = res.json();
    console.log(body);
    return body || {};
  }
  handle_get_list_error(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
        ? `${error.status} - ${error.statusText}`
        : "cannot connect to server, please check the internet connectivity";
    return Observable.throw(errMsg);
  }
}