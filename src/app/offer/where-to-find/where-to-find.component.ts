import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  private getParams(): number {
    const date = 'id';
    return this.myRoteador.parent.snapshot.params[date];
  }

  private setContent(): void {
    this.myService.getContentWhereToFind(this.getParams())
                  .then((resp: string) => this.content = resp)
                  .catch((resp: any) => alert('Erro: ' + resp));
  }


}
