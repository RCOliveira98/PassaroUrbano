import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { urlApi } from '../shared/app.api';

import { Pedido } from '../shared/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  efetivarCompra(p: Pedido): Observable<any> {

    return this.http.post(`${urlApi}/pedidos`, p);
  }
}
