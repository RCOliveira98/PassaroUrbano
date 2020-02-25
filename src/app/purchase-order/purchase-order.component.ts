import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { PurchaseService } from './purchase.service';
import { ShoppingCartService } from '../shopping-cart.service';

import { CardItem } from './../shared/card-item.model';
import { Pedido } from './../shared/pedido.model';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  // inscricao
  subscription: Subscription;
  formComponent: FormGroup;
  listItens: CardItem[];
  newPedido: Pedido;
  saleMade: boolean;

  constructor(
    private servPurchase: PurchaseService,
    private servShoppingCart: ShoppingCartService
    ) { }

  ngOnInit() {
    this.saleMade = false;
    this.resetForm();
    this.getItens();
  }

  confirmarCompra() {
    if (this.formComponent.valid) {
      this.setPedido();
      this.subscription = this.servPurchase.efetivarCompra(this.newPedido).subscribe(
        success => {
          this.newPedido = success;
          this.saleMade = true;
          this.servShoppingCart.clearList();
        },
        erro => console.error(`Erro ao confirmar compra: ${erro}`)
      );
    }
    /*
    */
  }

  showMsgEnderecoValid(): boolean {
    return this.formComponent.get('endereco').valid && this.formComponent.get('endereco').touched;
  }

  showMsgEnderecoInvalid(): boolean {
    return this.formComponent.get('endereco').invalid && this.formComponent.get('endereco').touched;
  }

  showMsgNumeroValid(): boolean {
    return this.formComponent.get('numero').valid && this.formComponent.get('numero').touched;
  }

  showMsgNumeroInvalid(): boolean {
    return this.formComponent.get('numero').invalid && this.formComponent.get('numero').touched;
  }

  showMsgFormPagValid(): boolean {
    return this.formComponent.get('formaPagamento').valid && this.formComponent.get('formaPagamento').touched;
  }

  showMsgFormPagInvalid(): boolean {
    return this.formComponent.get('formaPagamento').invalid && this.formComponent.get('formaPagamento').touched;
  }

  showTotalSales(): number {
    return this.listItens ? this.calculateTotalSales() : 0;
  }

  private calculateTotalSales(): number {
    let total = 0;
    this.listItens.forEach(i => {
      total += (i.value * i.qtd);
    })
    return total;
  }

  disabledBtn(): boolean {
    return this.formComponent.invalid;
  }

  showCart(): boolean {
    return this.listItens.length > 0;
  }

  plus(id: number) {
    this.servShoppingCart.plusQtd(id);
    // this.getItens();
  }

  minus(id: number) {
    this.servShoppingCart.minusQtd(id);
  }

  private resetForm() {
    this.formComponent = new FormGroup(
      {
        endereco: new FormControl(
          null,
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100)
          ]),
        numero: new FormControl(
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(10)
          ]
          ),
        complemento: new FormControl(null),
        formaPagamento: new FormControl(
          null,
          [
            Validators.required
          ]
          )
      }
    );
  }

  private setPedido() {
    this.newPedido = new Pedido();
    this.newPedido.endereco = this.formComponent.value.endereco;
    this.newPedido.numero = this.formComponent.value.numero;
    this.newPedido.complemento = this.formComponent.value.complemento;
    this.newPedido.formaPagamento = this.formComponent.value.formaPagamento;
    this.newPedido.listItens = this.listItens;
  }

  private getItens() {
    this.listItens = this.servShoppingCart.showItens();
  }

}
