import { Component, OnInit, Input } from '@angular/core';

import { Pedido } from './../../shared/pedido.model';

@Component({
  selector: 'app-made-purchase',
  templateUrl: './made-purchase.component.html',
  styleUrls: ['./made-purchase.component.css']
})
export class MadePurchaseComponent implements OnInit {

  @Input() order: Pedido;
  constructor() { }

  ngOnInit() {
  }

}
