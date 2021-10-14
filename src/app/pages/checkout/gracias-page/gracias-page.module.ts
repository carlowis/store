import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraciasPageRoutingModule } from './gracias-page-routing.module';
import { GraciasPageComponent } from './gracias-page.component';


@NgModule({
  declarations: [
    GraciasPageComponent
  ],
  imports: [
    CommonModule,
    GraciasPageRoutingModule
  ]
})
export class GraciasPageModule { }
