import { LOCALE_ID, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule, ROUTES } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TestFormComponent } from './test-form/test-form.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { PanierComponent } from './panier/panier.component';
import { ProductCardComponent } from './catalogue/product-card/product-card.component';
import { ShowProductComponent } from './catalogue/show-product/show-product.component';
import { SubProductComponent } from './catalogue/show-product/sub-product/sub-product.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LignePanierComponent } from './panier/ligne-panier/ligne-panier.component';
import { FriteComponent } from './catalogue/show-product/frite/frite.component';
import { BurgerComponent } from './catalogue/show-product/burger/burger.component';
import { BoissonComponent } from './catalogue/show-product/boisson/boisson.component';
import { ChoosingDrinkComponent } from './catalogue/show-product/boisson/choosing-drink/choosing-drink.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import { TrClientComponent } from './clients/tr-client/tr-client.component';
import { DetailClientComponent } from './clients/detail-client/detail-client.component';
import { StatutCmdLeftComponent } from './clients/detail-client/statut-cmd-left/statut-cmd-left.component';
import { StatutCmdRightComponent } from './clients/detail-client/statut-cmd-right/statut-cmd-right.component';
import { SimilarProductCardComponent } from './catalogue/show-product/similar-product-card/similar-product-card.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { ComplementComponent } from './complement/complement.component';
import { DateFilterPipe } from './pipes/date-filter.pipe';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    TestFormComponent,
    MainHeaderComponent,
    MainFooterComponent,
    PanierComponent,
    CatalogueComponent,
    ProductCardComponent,
    ShowProductComponent,
    SubProductComponent,
    LandingPageComponent,
    LignePanierComponent,
    FriteComponent,
    BurgerComponent,
    BoissonComponent,
    ChoosingDrinkComponent,
    ClientsComponent,
    TrClientComponent,
    DetailClientComponent,
    StatutCmdLeftComponent,
    StatutCmdRightComponent,
    SimilarProductCardComponent,
    ComplementComponent,
    DateFilterPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    RouterModule.forRoot(ROUTES
      /* { useHash: false } */, 
      /* {
        preloadingStrategy: PreloadAllModules
      } */
      ),

  ],
  exports: [
    StatutCmdLeftComponent,
    StatutCmdRightComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
