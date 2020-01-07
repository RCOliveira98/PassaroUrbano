import { Component, OnInit } from '@angular/core';

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
  // var validades
  endIsValid: boolean;
  numIsValid: boolean;
  cplIsValid: boolean;
  fPagIsValid: boolean;

  constructor() { }

  ngOnInit() {
  }

  validarEndereco() {
    this.endIsValid = this.endereco.length >= 3;
  }

  validarNumero() {
    this.numIsValid = this.numero.length >= 1;
  }

  validarComplemento() {
    this.cplIsValid = this.complemento.length >= 3;
  }

  validarFormaPagamento() {
    this.fPagIsValid = this.formaPagamento.length >= 1;
  }

}
