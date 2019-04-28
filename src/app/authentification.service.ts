import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public host: String = "http://localhost:8080";
  jwt: string;
  userName: String;
  roles: Array<string>;

  constructor(private http: HttpClient) {

  }

  login(data) {
    return this.http.post(this.host + "/login", data.value, {observe: 'response'})
  }

  saveToken(jwt: string | null) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parsejwt();
  }

  private parsejwt() {
    let jwtHelper = new JwtHelperService();
    let jwtObject = jwtHelper.decodeToken(this.jwt);
    this.userName = jwtObject.sub;
    this.roles = jwtObject.roles;
  }

  isAdmin() {
    return this.roles.indexOf("ADMIN") >= 0;
  }

  isUser() {
    return this.roles.indexOf("USER") >= 0;
  }

  isAuthenticated() {
    return this.roles;
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parsejwt();
  }

  logOut() {
    localStorage.removeItem('token');
    this.initParams();
  }

  initParams() {
    this.jwt = undefined;
    this.userName = undefined;
    this.roles = undefined;
  }
}
