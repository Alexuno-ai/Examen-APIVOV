import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicarSesionPageRoutingModule } from './inicar-sesion-routing.module';

import { InicarSesionPage } from './inicar-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicarSesionPageRoutingModule
  ],
  declarations: [InicarSesionPage]
})
export class InicarSesionPageModule {}
