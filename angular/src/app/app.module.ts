import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromotionDropdownComponent } from './promotion-dropdown/promotion-dropdown.component';
import { ProductsToBuyComponent } from './products-to-buy/products-to-buy.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import locale from '@angular/common/locales/en-IE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductListComponent,
    PromotionDropdownComponent,
    ProductsToBuyComponent,
    CheckoutComponent,
    CheckoutItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'products-list', component: ProductListComponent },
      { path: 'checkout', component: CheckoutComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-IE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
