import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OfertaModel } from './shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  public offers: Array<OfertaModel>; // minhas ofertas

  constructor(private httpService: HttpClient) {}

   // retorna a oferta solicitada, caso ela não exista, retornará o valor de null
   public getOffersById(id: number): Promise<OfertaModel> {
     return this.httpService.get(`http://localhost:3000/ofertas/${id}`).toPromise()
     .then((response: OfertaModel) => response)
     .catch((respose: any) => respose);
   }

   // consume a nossa API fake para retornar todas as ofertas
   public getOffersAll(): Promise<OfertaModel[]> {
     return this.httpService.get('http://localhost:3000/ofertas')
     .toPromise()
     .then((response: any) => response)
     .catch((response: any) => response);
   }

   // consume a nossa api fake e retorna todas as ofertas em destaque
   public getOffersSpotlight(): Promise<OfertaModel[]> {
     return this.httpService.get('http://localhost:3000/ofertas?spotlightStatus=true')
     .toPromise()
     .then((response: any) => response)
     .catch((response: any) => response);
   }

   public getOffersByCategory(searchCategory: string): Promise<OfertaModel[]> {
     return this.httpService.get(`http://localhost:3000/ofertas?category=${searchCategory}`).toPromise()
     .then((response: any) => response)
     .catch((response: any) => response);
   }

}
