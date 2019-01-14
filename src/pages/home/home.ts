import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropPage } from '../prop/prop';

import { ReclamationListPage } from '../reclamationList/reclamationList';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

  loadPropPage(){
  this.navCtrl.push(PropPage);
  }
  
  loadReclamationListPage(){
    this.navCtrl.push(ReclamationListPage)
    }
}


