import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ FruitsPage } from '../fruits/fruits'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToFruitsPage() {
    this.navCtrl.setRoot(FruitsPage);
  }

}
