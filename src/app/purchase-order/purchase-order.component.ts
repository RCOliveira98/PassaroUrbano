import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './purchase.service';
import { Pedido } from '../shared/pedido.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  endereco: string;
  numero: string;
  complemento: string;
  formaPagamento: string;
  pedido: Pedido;
  // var validades
  endIsValid: boolean;
  numIsValid: boolean;
  cplIsValid: boolean;
  fPagIsValid: boolean;
  // inscricao
  subscription: Subscription;

  constructor(private servPurchase: PurchaseService) { }

  ngOnInit() {
    this.pedido = new Pedido();
  }

  confirmarCompra() {
    this.setPedido();
    this.subscription = this.servPurchase.efetivarCompra(this.pedido).subscribe(
      success => this.pedido = success,
      erro => console.error(`Erro ao confirmar compra: ${erro}`)
    );
  }

  validarEndereco() {
    this.endIsValid = this.endereco && this.endereco.length >= 3;
  }

  validarNumero() {
    this.numIsValid = this.numero && this.numero.length >= 1;
  }

  validarComplemento() {
    this.cplIsValid = this.complemento && this.complemento.length >= 3;
  }

  validarFormaPagamento() {
    this.fPagIsValid = this.formaPagamento && this.formaPagamento.length >= 1;
  }

  private setPedido() {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;
  }

}
