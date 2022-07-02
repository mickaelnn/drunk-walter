import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaDrinkPageRoutingModule } from './edita-drink-routing.module';

import { EditaDrinkPage } from './edita-drink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaDrinkPageRoutingModule
  ],
  declarations: [EditaDrinkPage]
})
export class EditaDrinkPageModule {}
