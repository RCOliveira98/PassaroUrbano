import { OfertaModel } from './shared/oferta.model';
import { CardItem } from './shared/card-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public listItens: CardItem[];

  constructor() {
    this.listItens = [];
   }

  showItens(): CardItem[] {
    return this.listItens;
  }

  insertItem(offer: OfertaModel) {
    const newItem = this.convert(offer);

    const aux = this.listItens.find((item: CardItem) => item.id === newItem.id);

    if (aux) {
      aux.qtd += 1;
    } else {
      this.listItens.push(newItem);
    }
  }

  plusQtd(indice: number) {
    if (indice < this.listItens.length) {
      this.listItens[indice].qtd++;
    }
  }

  minusQtd(indice: number) {
    if (indice < this.listItens.length) {
      this.listItens[indice].qtd--;

      if (this.listItens[indice].qtd === 0) {
        this.listItens.splice(indice, 1);
      }
    }
  }

  clearList() {
    this.listItens = [];
  }

  private convert(offer: OfertaModel): CardItem {
    const item = new CardItem(
      offer.id,
      offer.images[0],
      offer.title,
      offer.description,
      offer.price,
      1
    );
    return item;
  }
}
