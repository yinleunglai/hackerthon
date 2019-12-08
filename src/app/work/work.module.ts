import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkPageRoutingModule } from './work-routing.module';

import { WorkPage } from './work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkPageRoutingModule
  ],
  declarations: [WorkPage]
})
export class WorkPageModule {

  


  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

   ionSlideTap() {
    console.log('do something Tap')
  }
}
