import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AppRoutingModule],
  declarations: [NavbarComponent ],
  exports: [NavbarComponent ]
})
export class NavbarComponentModule {}
