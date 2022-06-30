import { Component, OnInit } from '@angular/core';
import { StorageService, DrinkLista } from '../services/storage.service';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit {
  drinks: DrinkLista[];
  constructor(
    private router: Router,
    private storageService: StorageService,
    private toast: ToastController
  ) {}

ngOnInit() {
}

ionViewDidEnter() {
  this.storageService.getAll()
    .then((result) => {
      this.drinks = result;
    });
}

editaDrink(item: DrinkLista) {
  const navExtras = {
    state: {
      valorParaEnviar: {
        key: item.key,
        drink: item.drink,
      }
    }
  };
  this.router.navigate(['edita-tarefa'], navExtras);
}

removeDrink(item: DrinkLista) {
  this.storageService.remove(item.key)
    .then(async () => {
      const index = this.drinks.indexOf(item);
      this.drinks.splice(index, 1);
      (await this.toast.create({
        message: 'Tarefa removida.',
        duration: 3000,
        position: 'bottom',
      })).present();
    });
}

}
