import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BananaPage } from '../banana/banana'
import { OrangePage } from '../orange/orange'
import { VegetablesPage } from '../vegetables/vegetables'

@Component({
  selector: 'page-fruits',
  templateUrl: 'fruits.html'
})
export class FruitsPage {

  tab1Root: any = BananaPage;
  tab2Root: any = OrangePage;

  constructor(public navCtrl: NavController) {

  }

  goToVegetablesPage(){
    this.navCtrl.push(VegetablesPage);
  }
}