import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  status:boolean = false;

  produtos: any=[
    
   {

   nome: "Camisa",
   qtd: "34",
   valor:"500",
   foto:"m1.jpg",
   status:false

  },

  {

    nome: "Camisa",
    qtd: "34",
    valor:"500",
    foto:"m2.jpg",
    status:false
 
   },

  {

    nome: "Camisa",
    qtd: "34",
    valor:"500",
    foto:"m3.jpg",
    status:false
 
   },

   {
 
     nome: "Camisa",
     qtd: "34",
     valor:"500",
     foto:"m4.jpg",
     status:false
  
    },

    {
  
      nome: "Camisa",
      qtd: "34",
      valor:"500",
      foto:"m5.jpg",
      status:false
   
     },

     {
   
       nome: "Camisa",
       qtd: "34",
       valor:"500",
       foto:"m7.jpg",
       status:false
    
      }



];

  imagens: any = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalControl: ModalController) {
  }

 
  openStory(i){

    let modal = this.modalControl.create('StoriesHomePage', {id:i});
    modal.present();
    
  }


  check(i){
    if(i == false){
      this.status = true;
    }
  }


}
