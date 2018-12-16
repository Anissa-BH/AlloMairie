import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { SPage } from '../s/s';
import { PicPage } from '../pic/pic';
/**
 * Generated class for the PropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-prop',
  templateUrl: 'prop.html',
})
export class PropPage {

@ViewChild('map') mapRef: ElementRef;

lat: any;
lng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {
    console.log(navParams);
  }

  ionViewDidLoad() { 

    this.showMap();
    console.log('ionViewDidLoad PropPage');
    this.geo.getCurrentPosition().then(pos => { 
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;

    }).catch( err => console.log(err));
  }

   showMap(){
   // Location - lat long
   const location = new google.maps.LatLng(35.824503, 10.634584);

   // Map options
   const options = {
   center: location,
   zoom: 15,
   streetViewControl: false,
   mapTypeId: 'roadmap'

   }

   const map = new google.maps.Map(this.mapRef.nativeElement, options);

   this.addMarker(location, map);
   }

   addMarker(position, map){
   return new google.maps.Marker({
   position,
   map
   });
   }



  returnS(){
  this.navCtrl.push(SPage)
  }
 
  loadPic(){
  this.navCtrl.push(PicPage)
  }

}
