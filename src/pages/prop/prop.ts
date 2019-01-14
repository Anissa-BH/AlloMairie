import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { PicPage } from '../pic/pic';
import { DataProvider } from '../../services/data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var google:any;
@IonicPage()
@Component({
  selector: 'page-prop',
  templateUrl: 'prop.html',
})
export class PropPage {

@ViewChild('map') mapRef: ElementRef;

id: any;
lat: any;
lng: any;
adresse: any;
categorie: any;

dataForm:FormGroup;

  constructor( private formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation, private data:DataProvider) {
    this.dataForm=this.formBuilder.group({

      id:["",Validators.required],
      lng:[""],
      lat:[""],
      adresse:[""],
      categorie:["",Validators.required]
      
});
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
   
  loadCategory(){
  this.navCtrl.push(CategoryPage)
  }

  recupereLongLat(){
    console.log('ionViewDidLoad PropPage');
    this.data.add(this.dataForm.value).subscribe((result: any) => {

    });
  }

  loadHomePage(){
    this.navCtrl.push(HomePage);
  }

}
