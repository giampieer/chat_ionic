import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = "";
  message: string = "";
  messages  = [];
  @ViewChild("content") content : any;
  constructor(public navCtrl: NavController) {
    this.getMessages();
  }
  getMessages(){
    //hacemos referencia al branch de la db de firebase llamado mensajes
    var messageRef=firebase.database().ref().child("mensajes");
    messageRef.on("value",(snap) => {
      var data =snap.val();
      this.messages = [];
      for ( var key in data) {
        this.messages.push(data[key]);
      }
      this.scrollToBotton();
    })
  }
  scrollToBotton() {
    //baja automaticamente el scroll de los mensajes
    var contentend= document.getElementById("content-end").offsetTop;
    this.content.scrollTo(0, contentend, 300)
  }
  sendMessages() {
    //creamos un hijo del branch mensajes
    var messageRef=firebase.database().ref().child("mensajes");
    //envia dato al campo mensaje y nombre del db de firebase // siempres sin espacios
    messageRef.push({mensaje: this.message, nombre: this.username});
    this.message = "";
  }
}
