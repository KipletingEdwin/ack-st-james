import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { NavbarComponentModule } from '../components/navbar/navbar.module';
import { HomeComponentModule } from '../components/home/home.module';
import { AboutComponentModule } from '../components/about/about.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    NavbarComponentModule,
    HomeComponentModule,
    AboutComponentModule,
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
