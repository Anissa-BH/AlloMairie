import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SPage } from '../s/s';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

  loads(){
  this.navCtrl.push(SPage);
  }

  loadLoginPage(){
  this.navCtrl.push(LoginPage)
}

}
