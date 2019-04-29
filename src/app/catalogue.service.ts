import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthentificationService} from "./authentification.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host: String = "http://localhost:8087";

  constructor(private  http: HttpClient,private authentificationService:AuthentificationService) {
  }

  getAllCategories() {
    return this.http.get(this.host + "/categories/");
  }

  getRessource(url) {
    return this.http.get(url);
  }

  deleteResource(url) {

    let authorizationvar = 'Bearer ' + this.authentificationService.jwt;
    console.log(authorizationvar);
    let headers = new HttpHeaders({
      'Authorization': authorizationvar
    });
    return this.http.delete(url,{headers:headers});
  }
}
