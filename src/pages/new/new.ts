import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  private _list = [];
  public get list() {
    return this._list;
  }
  public set list(value) {
    this._list = value;
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i = 1; i < 11; i++) {
      this.list.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
      });
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
