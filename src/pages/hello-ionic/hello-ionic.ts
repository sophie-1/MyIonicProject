import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { NewPage } from '../new/new';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ToNew(){
    this.navCtrl.push(NewPage);
  }
}
