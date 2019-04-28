import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  authentificationService:AuthentificationService, private router:Router) { }

  ngOnInit() {

  }

  OnLogin(data) {
    this.authentificationService.login(data).subscribe(response => {
      console.log(response.headers.get('Authorization'));
      let jwt=response.headers.get('Authorization');
      this.authentificationService.saveToken(jwt);
      this.router.navigateByUrl("/");
    },error1 => {
      console.log(error1);
    });
  }

  isAdmin(){
    return this.authentificationService.isAdmin();
  }

  isUser(){
    return this.authentificationService.isUser();
  }

}
