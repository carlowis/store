import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetailsOrder, Order } from "../../interfaces/order.interfaces";
import { Tiendas } from "../../interfaces/tiendas.interface";

@Injectable ({
  providedIn:'root'
})

export class DataService{
  private apiURL='http://localhost:3000';
  constructor(private http: HttpClient){  }

  getStores(): Observable<Tiendas[]>{
    return this.http.get<Tiendas[]>(`${this.apiURL}/stores`)
  }

  saveOrders(order: Order): Observable<Order>{
    return this.http.post<Order>(`${this.apiURL}/orders`,order)
  }

  saveDetailsOrder(details:DetailsOrder):Observable<DetailsOrder>{
    return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`,details)
  }


}
