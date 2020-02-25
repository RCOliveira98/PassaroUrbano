import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  unsubscribe(subscription: Subscription) {
    try {
      if (subscription) {
        subscription.unsubscribe();
      }
    } catch (error) {
      alert('Problemas ao evitar memory leak!');
      console.log(error);
    }
  }
}
