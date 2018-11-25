import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-modal',
  templateUrl: 'contact-modal.html',
})
export class ContactModalPage {
  public lottieConfig_Contact: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(public viewCtrl: ViewController) {
   
    this.lottieConfig_Contact = {
      path: 'assets/lottie/data.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

  }


  handleAnimation(anim: any) {
    this.anim = anim;
  }

 dissmis(){
  this.viewCtrl.dismiss();
  } 

}
