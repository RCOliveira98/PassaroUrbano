import { Injectable } from '@angular/core';

import { OfertaModel } from '../shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  public offers: Array<OfertaModel>; // minhas ofertas

  constructor() {
    this.insert();
   }

   // retorna todas as ofertas
   public getOffersAll(): Array<OfertaModel> { return this.offers; }

   // retorna a oferta solicitada, caso ela não exista, retornará o valor de null
   public getOffersById(id: number): OfertaModel {
     return this.offers[id] != null ? this.offers[id] : null;
   }

   // povoamento
   private insert(): void {
    this.offers = [
      {
        id: 1,
        category: 'restaurante',
        title: 'Super Burger',
        description: 'Rodízio de Mini-hambúrger com opção de entrada.',
        advertiser: 'Original Burger',
        price: 29.90,
        spotlightStatus: true,
        images: [
          {url: '/assets/ofertas/1/img1.jpg'},
          {url: '/assets/ofertas/1/img2.jpg'},
          {url: '/assets/ofertas/1/img3.jpg'},
          {url: '/assets/ofertas/1/img4.jpg'}
        ]
      },
      {
        id: 2,
        category: 'restaurante',
        title: 'Cozinha Mexicana',
        description: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
        advertiser: 'Mexicana',
        price: 32.90,
        spotlightStatus: true,
        images: [
          {url: '/assets/ofertas/2/img1.jpg'},
          {url: '/assets/ofertas/2/img2.jpg'},
          {url: '/assets/ofertas/2/img3.jpg'},
          {url: '/assets/ofertas/2/img4.jpg'}
        ]

      },
      {
        id: 4,
        category: 'diversao',
        title: 'Estância das águas',
        description: 'Diversão garantida com piscinas, trilhas e muito mais.',
        advertiser: 'Estância das águas',
        price: 31.90,
        spotlightStatus: true,
        images: [
          {url: '/assets/ofertas/3/img1.jpg'},
          {url: '/assets/ofertas/3/img2.jpg'},
          {url: '/assets/ofertas/3/img3.jpg'},
          {url: '/assets/ofertas/3/img4.jpg'},
          {url: '/assets/ofertas/3/img5.jpg'},
          {url: '/assets/ofertas/3/img6.jpg'}
        ]
      }
    ];
   }

}
