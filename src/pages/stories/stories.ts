import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  imagens: any = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalControl: ModalController) {
  }

 
  openStory(i){

    let modal = this.modalControl.create('StoriesHomePage', {id:i});
    modal.present();
    
  }


}
