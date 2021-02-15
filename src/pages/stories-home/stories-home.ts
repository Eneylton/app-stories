import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-stories-home',
  templateUrl: 'stories-home.html',
})
export class StoriesHomePage {

  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalControl: ModalController) {
  }

  ionViewDidLoad() {

    this.id = this.navParams.get("id");
  }

  openHome(){

    let modal = this.modalControl.create('StoriesPage');
    modal.present();

  
  }

}
