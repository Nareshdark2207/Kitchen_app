import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Service } from '../app/service';
import { Device } from '@ionic-native/device';
import { Camera } from '@ionic-native/camera';
import { FileTransfer  } from '@ionic-native/file-transfer';
import { Push } from '@ionic-native/push';
import { AppVersion } from '@ionic-native/app-version';
import { DatePipe } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { Keyboard } from '@ionic-native/keyboard';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { IonicSelectableModule } from 'ionic-selectable';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp
    ],
  imports: [
    BrowserModule, HttpModule, ionicGalleryModal.GalleryModalModule,
    IonicModule.forRoot(MyApp,{ scrollAssist: false, autoFocusAssist: false, preloadModules: true}),
    PipesModule,IonicSelectableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Service,
    Camera, DatePipe,
    FileTransfer,Device,AppVersion,Keyboard,
    Push,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {provide: HAMMER_GESTURE_CONFIG,
    useClass: ionicGalleryModal.GalleryModalHammerConfig},
  ]
})
export class AppModule {}
