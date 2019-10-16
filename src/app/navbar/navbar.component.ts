import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { OfertaModel } from './../shared/oferta.model';

import { OfertasService } from './../ofertas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [OfertasService]
})
export class NavbarComponent implements OnInit, OnDestroy {

  public ofertas: Observable<OfertaModel[]>;
  public ofertasSearch: OfertaModel[];
  public inscricao: Subscription;
  private subject: Subject<string>;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.subject = new Subject<string>();
    this.setOfertas();
    this.inscricao = this.ofertas.subscribe(
      (ofertas: OfertaModel[]) => this.ofertasSearch = ofertas
    );
  }

  ngOnDestroy() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

  mySearchOffer(search: string): void {
    console.log('pesquisando...');
    if (search.trim() === '') {
      console.error('String vazia!');
    } else {
      this.subject.next(search);
    }
  }

  private setOfertas() {
    this.ofertas = this.subject.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((busca: string) => {
        console.log('requisição http');
        return this.ofertaService.getSearchOffers(busca);
      })
    );
  }

}

/*
this.ofertas = this.ofertaService.getSearchOffers(search);
      this.inscricao = this.ofertas.subscribe(
        (success: OfertaModel[]) => console.log(success),
        (err: any) => console.log(err)
      );
*/
