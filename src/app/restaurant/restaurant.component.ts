import { Component, OnInit } from '@angular/core';

import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [OfertasService]
})
export class RestaurantComponent implements OnInit {

  public myRestaurants: OfertaModel[];

  constructor(private servRestaurant: OfertasService) { }

  ngOnInit() {
    this.loadOffersRestaurant();
  }

  public loadOffersRestaurant(): void {
    this.servRestaurant.getOffersByCategory('restaurante')
    .then((returnPromise: OfertaModel[]) => {
      this.myRestaurants = returnPromise;
      console.log(this.myRestaurants);
    })
    .catch((returnPromise: OfertaModel[]) => alert('Problemas com a base de dados'));
  }

}
