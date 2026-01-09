import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from './layout.component';
import { NavbarComponentModule } from '../navbar/navbar.module';
import { HomeComponentModule } from '../home/home.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,NavbarComponentModule, HomeComponentModule],
  declarations: [LayoutComponent ],
  exports: [LayoutComponent ]
})
export class LayoutComponentModule {}
