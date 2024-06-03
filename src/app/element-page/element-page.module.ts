import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementPagePageRoutingModule } from './element-page-routing.module';

import { ElementPagePage } from './element-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementPagePageRoutingModule
  ],
  declarations: [ElementPagePage]
})
export class ElementPagePageModule {}
