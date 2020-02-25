import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute

import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OfertasService]
})
export class OfferComponent implements OnInit {

  public currentOffer: OfertaModel;

  constructor(
    private roteador: ActivatedRoute,
    private servOffer: OfertasService,
    private servShoppingCart: ShoppingCartService
    ) { }

  ngOnInit() {
    this.init();
  }

  addItemCart() {
    this.servShoppingCart.insertItem(this.currentOffer);
  }

  private init() {
    this.roteador.params.subscribe(params => {
      this.servOffer.getOffersById(params.id).then((response: OfertaModel) => {
        this.currentOffer = response;
      })
      .catch((response: any) => console.log(response));
    });
  }
}
