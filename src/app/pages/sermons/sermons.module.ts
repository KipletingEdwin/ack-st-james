import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SermonsComponent } from './sermons.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [SermonsComponent ],
  exports: [SermonsComponent ]
})
export class SermonsComponent Module {}
