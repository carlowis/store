import { Component } from "@angular/core";
import { ShoppingCartService } from "../header/services/shopping-cart.service";

@Component({
  selector:'app-cart',
  template:`
   <ng-container *ngIf="{ total:total$|async,quantity:quantity$|async} as dataCart">
     <ng-container *ngIf="dataCart.total">
     {{dataCart.total|currency}}
     ({{dataCart.quantity}})
     <mat-icon>shopping_cart</mat-icon>
   </ng-container>\
   </ng-container>
  `,
  }
)

export class cartComponent {
  quantity$ = this.shoppingcartService.quantityAction$;
  total$ = this.shoppingcartService.totalAction$;
  cart$ = this.shoppingcartService.cartAction$;
  constructor( private shoppingcartService:ShoppingCartService){  }


}
