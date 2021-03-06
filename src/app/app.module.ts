import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OfferComponent } from './offer/offer.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';
import { WhereToFindComponent } from './offer/where-to-find/where-to-find.component';

// import { OfertasService } from './ofertas.service';
import { UtilsService } from './utils.service';
import { ShoppingCartService } from './shopping-cart.service';

import { Describer } from './util/describer.pipe';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { MadePurchaseComponent } from './purchase-order/made-purchase/made-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    FunComponent,
    RestaurantComponent,
    OfferComponent,
    HowToUseComponent,
    WhereToFindComponent,
    Describer,
    PurchaseOrderComponent,
    MadePurchaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UtilsService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
