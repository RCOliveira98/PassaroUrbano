import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  // retorna o parâmetro'id' da url
  private retrievesParameters(): number {
    const info = 'id';
    return this.roteador.parent.snapshot.params[info];
  }

  ngOnInit() {
    return this.myService.getContent(this.retrievesParameters())
                  .then((response: string) => this.content = response)
                  .catch((response: any) => alert(response));
  }

}
