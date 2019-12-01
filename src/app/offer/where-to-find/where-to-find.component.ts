import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-where-to-find',
  templateUrl: './where-to-find.component.html',
  styleUrls: ['./where-to-find.component.css']
})
export class WhereToFindComponent implements OnInit {

  public content: string;
  constructor(private myRoteador: ActivatedRoute, private myService: OfertasService) { }

  ngOnInit() {
    this.setContent();
  }

  private setContent(): void {
    this.myRoteador.parent.params.subscribe(
      (parametros: Params) => {
        this.myService.getContentWhereToFind(parametros.id)
                  .then((resp: string) => this.content = resp)
                  .catch((resp: any) => alert('Erro: ' + resp));
      }, erro => {
        console.error(erro);
        alert('Não foi possivel atualizar o campo onde fica.');
      }
    );
  }


}
