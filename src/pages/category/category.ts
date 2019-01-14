import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

	alertMessage:string;

  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {

  }

  loadHomePage(){
    this.navCtrl.push(HomePage);
  }


}
