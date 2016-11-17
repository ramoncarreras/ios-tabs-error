import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FruitsPage } from '../pages/fruits/fruits';
import { BananaPage } from '../pages/banana/banana';
import { OrangePage } from '../pages/orange/orange';
import { VegetablesPage } from '../pages/vegetables/vegetables';
import { PotatoPage } from '../pages/potato/potato';
import { BeanPage } from '../pages/bean/bean';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FruitsPage,
    BananaPage,
    OrangePage,
    VegetablesPage,
    PotatoPage,
    BeanPage
  ],
  imports: [
      IonicModule.forRoot(MyApp, {
        mode: 'ios',
        backButtonText: '',
        tabsLayout: 'icon-left',
        tabsPlacement: 'top',
        tabsHighlight: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FruitsPage,
    BananaPage,
    OrangePage,
    VegetablesPage,
    PotatoPage,
    BeanPage
  ],
  providers: []
})
export class AppModule {}
