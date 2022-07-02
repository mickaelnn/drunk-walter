import { Component, OnInit } from '@angular/core';
import { StorageService, Drink } from '../services/storage.service';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita-drink',
  templateUrl: './edita-drink.page.html',
  styleUrls: ['./edita-drink.page.scss'],
})

export class EditaDrinkPage implements OnInit {

  model: Drink;
  key: string;
  parametros: any;

  constructor(
    public navCtrl: NavController,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.key = getNav.extras.state.valorParaEnviar.key;
        this.model = getNav.extras.state.valorParaEnviar.drink;
      } else {
        this.model = new Drink();
      }
    });
  }

  save() {
    this.salvaDrink()
      .then(async () => {
        (await this.toast.create({
          message: 'Drink salvo com sucesso!',
          duration: 2000,
          position: 'bottom'
        })).present();
        this.navCtrl.pop();
      }).catch(async () => {
        (await this.toast.create({
          message: 'Erro ao salvar drink!',
          duration: 2000,
          position: 'bottom'
        })).present();
      });
  }

  private salvaDrink() {
    console.log(this.model);
    if (this.key) {
      return this.storageService.update(this.key, this.model);
    } else {
      return this.storageService.insert(this.model);
    }
  }
}
