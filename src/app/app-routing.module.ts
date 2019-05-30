import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
 * english: components to be mapped to the global router.
 * português: componentes a serem mapeados para o roteador global.
 */
import { HomeComponent } from './home/home.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fun', component: FunComponent},
  {path: 'restaurant', component: RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
