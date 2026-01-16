import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainComponent } from './main.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [MainComponent ],
  exports: [MainComponent ]
})
export class MainComponent Module {}
