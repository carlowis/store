import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraciasPageComponent } from './gracias-page.component';

const routes: Routes = [{ path: '', component: GraciasPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraciasPageRoutingModule { }
