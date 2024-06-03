import { Component, OnInit } from '@angular/core';
import {  NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private router:Router, 
    private toastController: ToastController, 
    private alertController: AlertController) {}

  async iraLogin(message: string){
    const alert = await this.alertController.create({
        header: "Acceso a Login",
        message: message,
        buttons: [
          {
            text: "Ingreso",
            handler: () => {
              this.router.navigate(["/login"])
            }
          }
        ]
      }
    )
    await alert.present();
  }

  async irACatalogo(message: string){
    const alarm = await this.alertController.create({
      header:"Ingreso a Catalogo",
      message:message,
      buttons: [
        {
          text: "Ingreso",
          handler: () => {
            this.router.navigate(["/access"])
          }
        }
      ]
     
    })
    await alarm.present();
  }

}
