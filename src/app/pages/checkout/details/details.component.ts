import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  total$ = this.shoppingcartservice.totalAction$;
  cart$ =  this.shoppingcartservice.cartAction$;
  constructor(private shoppingcartservice:ShoppingCartService) { }

  ngOnInit(): void {
  }

}
