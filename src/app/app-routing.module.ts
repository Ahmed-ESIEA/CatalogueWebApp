import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [{
  path: "products/:url", component: ProduitsComponent
},
  {
    path: "login", component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
