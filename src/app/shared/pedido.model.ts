export class Pedido {
  id: number;
  endereco: string;
  numero: string;
  complemento: string;
  formaPagamento: string;
  valorTotal: number;

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
    }
  }
}
