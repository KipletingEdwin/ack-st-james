import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from './layout.component';
import { NavbarComponentModule } from '../navbar/navbar.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,NavbarComponentModule],
  declarations: [LayoutComponent ],
  exports: [LayoutComponent ]
})
export class LayoutComponentModule {}
