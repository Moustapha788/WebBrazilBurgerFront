import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShowProductComponent } from './catalogue/show-product/show-product.component';
import { ClientsComponent } from './clients/clients.component';
import { DetailClientComponent } from './clients/detail-client/detail-client.component';
// import { CommandesComponent } from './commandes/commandes.component';
import { CommandesComponent } from './admin/commandes/commandes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanierComponent } from './panier/panier.component';
import { TestFormComponent } from './test-form/test-form.component';

export const ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "",
    component: CatalogueComponent,
    title: "accueil",
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: "home",
    redirectTo: ""
  },
  {
    path: "catalogue",
    redirectTo: ""
  },
  {
    path: "panier",
    component: PanierComponent,
    title: "votre panier"
  },
  {
    path: "produit/:id",
    component: ShowProductComponent,
    pathMatch: "full"
  },
  {
    path: "test",
    component: TestFormComponent,
    title: "test"
  },
  {
    path: "clients",
    component: ClientsComponent,
    title: "les clients de notre application"
  },
  {
    path: "clients/:id",
    component: DetailClientComponent,
    title: "les détails  d'un client de notre application"
  },
  // {
  //   path: "commandes",
  //   component: CommandesComponent,
  //   title: "commandes"
  // },
  {
    path: "commandes/:id",
    component: ShowProductComponent,
    title: "un commande"
  },
  {
    path: "404",
    component: NotFoundComponent,
    title: "page not found"
  },
  {
    path: "**",
    redirectTo: ("/404"),
  },

];





@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



  // {
  //   path: "burger",
  //   component: BurgerComponent,
  //   title:"burger",
  //   children:[

  //       {
  //         path: "burger/:id",
  //         component: ShowBurgerComponent,
  //         title:"un burger",


  //       }

  //   ]

  // },