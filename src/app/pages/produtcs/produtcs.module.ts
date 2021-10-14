import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutcsRoutingModule } from './produtcs-routing.module';
import { ProdutcsComponent } from './produtcs.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProdutcsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProdutcsRoutingModule,
    MaterialModule
  ]
})
export class ProdutcsModule { }
