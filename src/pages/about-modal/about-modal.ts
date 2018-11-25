import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-modal',
  templateUrl: 'about-modal.html',
})
export class AboutModalPage { 
  public lottieConfig_About : Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams  ,public viewCtrl: ViewController, private app: App) {
   
    this.lottieConfig_About = {
      path: 'assets/lottie/world.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

  }

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.setSpeed(2);
  }


  Go_next(){
  this.viewCtrl.dismiss();
  this.app.getRootNav().getActiveChildNav().select(2); 
  } 

 

}
