import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-stories-home',
  templateUrl: 'stories-home.html',
})
export class StoriesHomePage {

  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.id = this.navParams.get("id");
  }

  openHome(){

    this.navCtrl.setRoot('StoriesPage');
  }

}
