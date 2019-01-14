import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataProvider } from '../../services/data';
import { Page } from 'ionic-angular/umd/navigation/nav-util';

@Component({
  selector: 'page-reclamationList',
  templateUrl: 'reclamationList.html'
})
export class ReclamationListPage {

    recList: any;
    pushPage:Page;

  constructor(private data:  DataProvider, public navParams: NavParams) {
      
    this.data.all().subscribe((dataTable: any)=> 
      {
          this.recList = dataTable.hits.hits;
          console.log(dataTable.hits.hits);
        
      });
  }
}
