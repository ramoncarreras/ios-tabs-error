import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PotatoPage } from '../potato/potato'
import { BeanPage } from '../bean/bean'

@Component({
  selector: 'page-vegetables',
  templateUrl: 'vegetables.html'
})
export class VegetablesPage {

  tab1Root: any = PotatoPage;
  tab2Root: any = BeanPage;

  constructor(public navCtrl: NavController) {

  }

  goBack() {
    this.navCtrl.pop();
  }

}