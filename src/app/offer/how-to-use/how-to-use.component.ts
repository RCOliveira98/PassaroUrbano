import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [OfertasService]
})
export class HowToUseComponent implements OnInit {

  public content: string;
  public promess: Promise<object>;

  constructor(private roteador: ActivatedRoute, private myService: OfertasService) {}

  ngOnInit() {
    this.roteador.parent.params.subscribe(
      (parametros: Params) => {
        this.myService.getContentHowToUse(parametros.id)
                  .then((response: string) => this.content = response)
                  .catch((response: any) => alert('Erro: ' + response));
      }, erro => {
        console.error(erro);
        alert('Não foi possível atualizar dados do como usar!');
      }
    );
  }

}
