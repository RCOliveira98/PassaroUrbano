import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { OfertaModel } from './../shared/oferta.model';

import { OfertasService } from './../ofertas.service';

// import { Describer } from './../util/describer.pipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [OfertasService]
})
export class NavbarComponent implements OnInit, OnDestroy {

  public ofertas: Observable<OfertaModel[]>;
  public inscricao: Subscription;
  private subject: Subject<string>;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.subject = new Subject<string>();
    this.setOfertas();
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
