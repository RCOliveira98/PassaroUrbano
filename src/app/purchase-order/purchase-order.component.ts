import { Pedido } from './../shared/pedido.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { PurchaseService } from './purchase.service';
import { min } from 'rxjs/operators';


@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  // inscricao
  subscription: Subscription;
  formComponent: FormGroup;
  newPedido: Pedido;
  saleMade: boolean;

  constructor(private servPurchase: PurchaseService) { }

  ngOnInit() {
    this.saleMade = false;
    this.resetForm();
  }

  confirmarCompra() {
    if (this.formComponent.valid) {
      this.setPedido();
      this.subscription = this.servPurchase.efetivarCompra(this.newPedido).subscribe(
        success => {
          this.newPedido = success;
          this.saleMade = true;
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

  disabledBtn(): boolean {
    return this.formComponent.invalid;
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
  }

}
