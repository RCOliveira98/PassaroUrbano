import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute

import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OfertasService]
})
export class OfferComponent implements OnInit {

  public currentOffer: OfertaModel;
  constructor(private roteador: ActivatedRoute,
              private servOffer: OfertasService) { }


              private getParams(): number {
                const date = 'id';
                return this.roteador.snapshot.params[date];
              }
  ngOnInit() {
    const id = this.getParams();
    return this.servOffer.getOffersById(id).then((response: OfertaModel) => {this.currentOffer = response})
    .catch((response: any) => console.log(response));
  }

}
