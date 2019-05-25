import { Component, OnInit } from '@angular/core';

import { OfertasService } from './ofertas.service';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myOffers: Array<OfertaModel>;

  constructor(private offersService: OfertasService) { }

  ngOnInit() {
    // this.myOffers = this.offersService.getOffersAll();
    this.offersService.getOffersAllPromisse().then(
      (params_ofertas: OfertaModel[]) => {this.myOffers = params_ofertas}
    ).catch(
      (params_erro_ofertas: any) => {alert(params_erro_ofertas)}
    );
  }

}
