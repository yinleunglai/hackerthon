import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkPageRoutingModule } from './work-routing.module';

import { WorkPage } from './work.page';
import { WorkPopupComponent } from '../work-popup/work-popup.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkPageRoutingModule
  ],
  declarations: [WorkPage, WorkPopupComponent ],

  entryComponents: [WorkPopupComponent]
})
export class WorkPageModule {}
