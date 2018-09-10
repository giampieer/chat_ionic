import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAD_6K7hEnZXHn-iNIdsFaCByTQeuVc4Jo",
  authDomain: "mobile-giampieer.firebaseapp.com",
  databaseURL: "https://mobile-giampieer.firebaseio.com",
  projectId: "mobile-giampieer",
  storageBucket: "mobile-giampieer.appspot.com",
  messagingSenderId: "243949067915"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);

  }
}

