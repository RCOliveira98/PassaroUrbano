import { Component, OnInit } from '@angular/core';

import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';


@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [OfertasService]
})
export class FunComponent implements OnInit {

  constructor(private servFun: OfertasService) { }

  public myFun: OfertaModel[];

  ngOnInit() {
    this.getFunAll();
  }

  private getFunAll(): void {
    this.servFun.getOffersByCategory('diversao')
    .then((responsePromise: OfertaModel[]) => this.myFun = responsePromise)
    .catch((responsePromise: any) => alert(responsePromise));
  }
}
