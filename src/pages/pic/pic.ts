import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { CategoryPage } from '../category/category';



/**
 * Generated class for the PicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pic',
  templateUrl: 'pic.html'
  
})
export class PicPage {
images: any = [];
myphoto:any;

constructor(public navCtrl: NavController, public navParams: NavParams, public imagePicker: ImagePicker, private camera: Camera) {
  console.log(navParams);
}
 /* 
getPictures(){ 
    this.imagePicker.getPictures({
    }).then( results =>{
      console.log(results);
      for(let i=0; i < results.length;i++){
        this.images.push(results[i]);
      };
    });
  }

  takePhoto(){
  const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.myphoto = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
} */

  loadCategory(){
    this.navCtrl.push(CategoryPage);
  }

  

  

}
