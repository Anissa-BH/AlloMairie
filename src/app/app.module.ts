import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { Geolocation } from '@ionic-native/geolocation';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SPage } from '../pages/s/s';
import { PropPage } from '../pages/prop/prop';
import { PicPage } from '../pages/pic/pic';
import { LoginPage } from '../pages/login/login';
import { CategoryPage } from '../pages/category/category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SPage,
    PropPage,
    PicPage,
    LoginPage,
    CategoryPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SPage,
    PropPage,
    PicPage,
    LoginPage,
    CategoryPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ImagePicker,
    Camera,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
