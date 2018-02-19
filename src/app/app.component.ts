import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlfVGPDl5rdAxEq3RaPVkvCSqNNz_6BW4",
  authDomain: "chat-104f0.firebaseapp.com",
  databaseURL: "https://chat-104f0.firebaseio.com",
  projectId: "chat-104f0",
  storageBucket: "chat-104f0.appspot.com",
  messagingSenderId: "1006971483915"
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

