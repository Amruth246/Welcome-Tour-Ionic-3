import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AboutModalPage } from '../about-modal/about-modal';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidEnter(){
    const home = this.modalCtrl.create(AboutModalPage);
    home.present(); 

  }
  
}
