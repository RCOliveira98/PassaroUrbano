import { OfertaModel } from './../shared/oferta.model';
import { Observable } from 'rxjs';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [OfertasService]
})
export class NavbarComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  public ofertas: Observable<OfertaModel[]>;
  ngOnInit() {
  }

  mySearchOffer(search: string): void {
    this.ofertas = this.ofertaService.getSearchOffers(search);
    this.ofertas.subscribe(
      (success: OfertaModel[]) => console.log(success),
      (err: any) => console.log(err)
    );
  }

}
