import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import { ContactModalPage } from '../contact-modal/contact-modal';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  ionViewDidEnter(){
    const contact = this.modalCtrl.create(ContactModalPage);
    contact.present(); 
  }
  
}
