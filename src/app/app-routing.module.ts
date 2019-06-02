import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
 * english: components to be mapped to the global router.
 * português: componentes a serem mapeados para o roteador global.
 */
import { HomeComponent } from './home/home.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OfferComponent } from './offer/offer.component';
import { WhereToFindComponent } from './offer/where-to-find/where-to-find.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fun', component: FunComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'offer', component: HomeComponent},
  {path: 'offer/:id', component: OfferComponent,
  children: [
    {path: '', component: HowToUseComponent}, // default
    {path: 'how-to-use', component: HowToUseComponent},
    {path: 'where-to-find', component: WhereToFindComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
