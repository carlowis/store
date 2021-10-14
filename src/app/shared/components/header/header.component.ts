import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <a [routerLink]="['/']"><span>NowiStore</span></a>
       <span class="spacer"></span>
       <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  quantity$ = this.shoppingcartService.quantityAction$;
  total$ = this.shoppingcartService.totalAction$;
  cart$ = this.shoppingcartService.cartAction$;
  constructor( private shoppingcartService:ShoppingCartService, private router: Router){  }
  goToCheckout():void{
    this.router.navigate(['/checkout'])
  }

}
