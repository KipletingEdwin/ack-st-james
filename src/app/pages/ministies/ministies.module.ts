import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistiesComponent } from './ministies.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [MinistiesComponent ],
  exports: [MinistiesComponent ]
})
export class MinistiesComponent Module {}
