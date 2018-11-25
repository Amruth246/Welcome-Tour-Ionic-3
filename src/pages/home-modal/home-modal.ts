import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { ContactPage } from '../contact/contact';


@IonicPage()
@Component({
  selector: 'page-home-modal',
  templateUrl: 'home-modal.html',
})
export class HomeModalPage {

  public lottieConfig_Home : Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtrl: ViewController, private app: App) {
   
    this.lottieConfig_Home = {
      path: 'assets/lottie/image_icon_tadah!.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

  }


  handleAnimation(anim: any) {
    this.anim = anim;
  }


 Go_next(){
  this.viewCtrl.dismiss();
  this.app.getRootNav().getActiveChildNav().select(1); 
  } 

 

  
}

