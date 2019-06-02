import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OfertaModel } from './shared/oferta.model';
import { urlApi } from './shared/app.api';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  public offers: Array<OfertaModel>; // minhas ofertas

  constructor(private httpService: HttpClient) {}

   // consume a nossa api fake e retorna a oferta requisitada
   public getOffersById(id: number): Promise<OfertaModel> {
     return this.httpService.get(`${urlApi}/ofertas/${id}`).toPromise()
     .then((response: OfertaModel) => response)
     .catch((respose: any) => respose);
   }

   // consume a nossa API fake para retornar todas as ofertas
   public getOffersAll(): Promise<OfertaModel[]> {
     return this.httpService.get(`${urlApi}/ofertas`)
     .toPromise()
     .then((response: any) => response)
     .catch((response: any) => response);
   }

   // consume a nossa api fake e retorna todas as ofertas em destaque
   public getOffersSpotlight(): Promise<OfertaModel[]> {
     return this.httpService.get(`${urlApi}/ofertas?spotlightStatus=true`)
     .toPromise()
     .then((response: any) => response)
     .catch((response: any) => response);
   }

   // consume a nossa api fake e retorna todas as ofertas da categoria solicitada
   public getOffersByCategory(searchCategory: string): Promise<OfertaModel[]> {
     return this.httpService.get(`${urlApi}/ofertas?category=${searchCategory}`).toPromise()
     .then((response: any) => response)
     .catch((response: any) => response);
   }

   // consume a nossa api fake e retorna o conteúdo da tab de ofertas selecionada.
   public getContent(id: number): Promise<string> {
     return this.httpService.get(`${urlApi}/como-usar?id=${id}`).toPromise()
     .then((response: any) => response[0].description)
     .catch((response: any) => response);
   }
}
