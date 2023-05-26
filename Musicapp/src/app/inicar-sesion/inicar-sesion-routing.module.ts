import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicarSesionPage } from './inicar-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: InicarSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicarSesionPageRoutingModule {}
