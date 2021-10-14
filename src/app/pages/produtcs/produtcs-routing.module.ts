import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutcsComponent } from './produtcs.component';

const routes: Routes = [{ path: '', component: ProdutcsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutcsRoutingModule { }
