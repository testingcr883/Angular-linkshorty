import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { HeaderSecondComponent } from './header-footer/header-second/header-second.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HeaderSecondComponent,
    FooterComponent,
    ShopComponent,
    ViewCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
