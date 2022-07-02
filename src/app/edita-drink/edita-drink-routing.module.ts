import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaDrinkPage } from './edita-drink.page';

const routes: Routes = [
  {
    path: '',
    component: EditaDrinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaDrinkPageRoutingModule {}
