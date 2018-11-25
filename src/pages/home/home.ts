import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController, Tabs, App } from 'ionic-angular';

import { HomeModalPage } from '../home-modal/home-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
 
  ionViewDidEnter(){
    const home = this.modalCtrl.create(HomeModalPage);
    home.present(); 

  }
  
}
