import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { StatutCommande, Commande, FormatCommande, PostCommande, UpdateCommande } from 'src/models/Commande';
import { ICatalogue } from 'src/models/ICatalogue';
import { IComplement } from 'src/models/IComplement';
import { PostLivraison } from 'src/models/Livraison';
import { Menu } from 'src/models/Menu';
import { Livreur } from 'src/models/User';
import { Zone } from 'src/models/Zone';


export const API_URL_ROOT="http://localhost:8001/api/";



@Injectable({
  providedIn: 'root'
})

export class DataService {
  // burgers!: Burger[];
  // menus!: Menu[];
  private readonly catalogue_url = API_URL_ROOT+"catalogues"
  private readonly produit_url = API_URL_ROOT+"produits"
  private readonly commande_url = API_URL_ROOT+"commandes"
  private readonly zone_url = API_URL_ROOT+"zones";
  private readonly client_url = API_URL_ROOT+"clients";
  private readonly complement_url = API_URL_ROOT+"complements";
  private readonly livreur_url = API_URL_ROOT+"livreurs";
  private readonly livraison_url = API_URL_ROOT+"livraisons";


  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

  }
  getProduits(): Observable<ICatalogue> {

    return this.http.get<ICatalogue>(this.catalogue_url);

  }

  getAllComplements(): Observable<IComplement> {

    return this.http.get<IComplement>(this.complement_url);
  }

  getOneProduit(id: number)/* : Observable<Menu | Burger>  */ {

    return this.http.get<any>(this.produit_url + '/' + id);

  }

  postCommande(commande: PostCommande | { Produits: FormatCommande[] }) {
    /* 
const headers = { 'Authorization': 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk2MjAzMDEsImV4cCI6NTI1OTYyMDMwMSwicm9sZXMiOlsiUk9MRV9DTElFTlQiLCJST0xFX1ZJU0lURVVSIl0sInVzZXJuYW1lIjoic2FsbEBnbWFpbC5jb20ifQ.zvflvyKzZkB-YDhCvRE6lPGgFGczIB22rrhhZVowG1pEksHaXxK-n_Oqm-g82g29TedJjNEfcx8RVQybefCtPXzAg490I87_9-Ca8IefElLsyYsFJwS20ydO8T_iK_xN4ez2otmmVStxFHM86VTCilQ-kG-SyhrC-pHxK_1Yd3dSyCOxmp-RTtm60YbOYPXpHqn1X8B_lRGc6Wy6VDdE3QQLYZLCjfZ2Ep_Huk2Wj5mRle-Y9Lk5Hvd7ZYAQjq1cYIrAKWbIbRV4w02_jFcZP4gfhAZMydKqctHwG904N1GUIZhyF2dxheG46k1U1JOD-l_iRcojxU4lujkVxvwqjJ3YrPWwiXcjF4f_7Ev4k4j7G5vyLp3teyPkpY3rdce7n30GdRYWDwmYGsAQMf0iuNMt91DH8RajYAnvFixB2J25kAMxEOFeVUw8XNprUtvfNS9ho0p4GRmVV3n00MhJ89Kgwl-90wbTNQNtdz0QS-pml7ghWk0Qh6EVmtcsVCnB5msFSrsj160l5h8md1gZAUykf-VqVFZPj7AXawmqM2uK1nvomQ5FXypbzVN4A_WiO3X9yCPoFl46nMDC0EQxr5tC6nTRQkK7Rz-kKALqnp-BwJNoEW_UVIeOGXU4-GbcL1SrAWtHQAtH7Apx_LhLYSZOiVyMb9nsJnk9KDFYJSg', 'My-Custom-Header': 'foobar' }; 
     */

    // this.http.post(this.commande_url, commande,{headers}).subscribe()
    this.http.post(this.commande_url, commande).subscribe()
  }


  getAllcommandes(): Observable<Commande> {
    return this.http.get<Commande>(this.commande_url);
  }

  getOneCommande(id: number) {
    return this.http.get<Commande>(this.commande_url + "/" + id);
  }

  getAllClients() {
    return this.http.get<Commande>(this.client_url);
  }
  getOneClient(id: number) {
    return this.http.get<Commande>(this.client_url + "/" + id);
  }
  getZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.zone_url);
  }

  getAllLivreurs(): Observable<Livreur[]> {
    return this.http.get<Livreur[]>(this.livreur_url);
  }

  postLivraison(livraison: PostLivraison) {
    this.http.post(this.livraison_url, livraison).subscribe()
  }
  updateCommande(id: number, action: StatutCommande, commandePut?: UpdateCommande | { statut: string }) {

    let body!: UpdateCommande | { statut: string };
    if (action == StatutCommande.modifie) {
      if (commandePut) {
        body = commandePut;
      } else {
        return;
      }
    } else {
      body = { statut: action.toString() }
    }

    this.http.put<{ statut: string }>(this.commande_url + "/" + id, body).subscribe();
  }


  isMenu(product: any) {

    return product.burgers ? true : false;

    // if (product.nom.substr(0, 1) === ('B' || 'b')) {
    //   return true;
    // } else {
    //   return false;

    // }
  }

}




