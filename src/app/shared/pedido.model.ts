import { CardItem } from './card-item.model';

export class Pedido {
  id: number;
  endereco: string;
  numero: string;
  complemento: string;
  formaPagamento: string;
  valorTotal: number;
  listItens: CardItem[];

  constructor(p?: Pedido) {
    if (p) {
      if (p.id > 0) {
        this.id = p.id;
      }
      this.endereco = p.endereco;
      this.numero = p.numero;
      this.complemento = p.complemento;
      this.formaPagamento = p.formaPagamento;
      this.valorTotal = p.valorTotal;
      this.listItens = p.listItens;
    }
  }
}
