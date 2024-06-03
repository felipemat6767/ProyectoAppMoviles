import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PerfilPage } from './perfil.page';
import { MatSliderModule } from '@angular/material/slider';
import { HomePageRoutingModule } from './perfil-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule, 
  ],
  declarations: [PerfilPage]
})
export class HomePageModule {}
