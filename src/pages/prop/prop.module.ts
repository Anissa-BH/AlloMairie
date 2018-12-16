import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropPage } from './prop';

@NgModule({
  declarations: [
    PropPage,
  ],
  imports: [
    IonicPageModule.forChild(PropPage),
  ],
})
export class PropPageModule {}
