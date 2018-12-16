import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PropPage } from '../prop/prop';

/**
 * Generated class for the SPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-s',
  templateUrl: 's.html',
})
export class SPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  console.log(navParams.get('val'));
  console.log(navParams);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SPage');
  }

loadp(){
  this.navCtrl.push(PropPage);
  }


}
