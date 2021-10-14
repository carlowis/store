import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/components/header/services/data.service';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';
import {
  Details,
  Order,
} from 'src/app/shared/components/interfaces/order.interfaces';
import { Tiendas } from 'src/app/shared/components/interfaces/tiendas.interface';
import { Product } from '../produtcs/product/interface/product.interface';
import { ProductsService } from '../produtcs/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  model = {
    name: '',
    store: '',
    ShippingAdress: '',
    city: '',
  };
  isDelivery: boolean = true;
  cart: Product[] = [];
  tiendas: Tiendas[] = [];
  constructor(
    private dataService: DataService,
    private shoppingCartservice: ShoppingCartService,
    private router:Router,
    private productService:ProductsService
  ) {}

  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
    this.prepareDetails();
  }

  onPickupOrDelivery(value: boolean): void {
    this.isDelivery = value;
  }
  onSubmit({ value: formData }: NgForm): void {
    console.log('guardar', formData);
    const data: Order = {
      ...formData,
      date: this.getCurrentDay(),
      pickup: this.isDelivery,
    };
    this.dataService
      .saveOrders(data)
      .pipe(
        tap((res) => console.log('Order ->', res)),
        switchMap(({id:orderId}) => {
          const details = this.prepareDetails();
          return this.dataService.saveDetailsOrder({ details, orderId });
        }),
        tap(() => this.router.navigate(['/checkout/gracias-page'])),
        delay(2000),
        tap(() => this.shoppingCartservice.resetCart())
      )
      .subscribe();
  }

  private getStores(): void {
    this.dataService
      .getStores()
      .pipe(tap((tiendas: Tiendas[]) => (this.tiendas = tiendas)))
      .subscribe();
  }

  private getCurrentDay(): string {
    return new Date().toLocaleDateString();
  }

  private prepareDetails(): Details[] {
    const details: Details[] = [];
    this.cart.forEach((product:Product) => {
      const {id:productId, name:productName,quantity,stock}= product;
      const updatestock= (stock-quantity);

      this.productService.updatestock(productId, updatestock)
      .pipe(
        tap(() => details.push({ productId, productName, quantity}))
      ).subscribe();


    });
    return details;
  }

  private getDataCart(): void {
    this.shoppingCartservice.cartAction$
    .pipe(
      tap((products: Product[]) => this.cart = products)
    ).subscribe();
  }
}
