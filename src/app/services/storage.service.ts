import { Injectable } from '@angular/core';

import { DatePipe } from '@angular/common';

import { Storage } from '@ionic/storage-angular';

@Injectable({

  providedIn: 'root'

})

export class StorageService {

  constructor(private storage: Storage, private datepipe: DatePipe) {
    this.createDB();
   }

async createDB() {
  const storage = await this.storage.create();

  this.storage = storage;
}

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {
    const drinks: DrinkLista[] = [];
    return this.storage.forEach((value: Drink, key: string, iterationNumber: number) => {
      const drink = new DrinkLista();
      drink.key = key;
      drink.drink = value;
      drinks.push(drink);
    })
      .then(() => (Promise.resolve(drinks)))
      .catch((error) => (Promise.reject(error)));
  }

  public insert(drink: Drink) {
    const key = this.datepipe.transform(new Date(), 'ddMMyyyyHHmmss');
    return this.save(key, drink);
  }

  public update(key: string, drink: Drink) {
    return this.save(key, drink);
  }

  private save(key: string, drink: Drink) {
    return this.storage.set(key, drink);
  }
}

export class Drink {
  nome: string;
  local: string;
  data: Date;
  status: boolean;
}

export class DrinkLista {
  key: string;
  drink: Drink;
}
