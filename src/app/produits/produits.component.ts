import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  products;

  constructor(private catalogueService: CatalogueService, private activatedRoute: ActivatedRoute, private router: Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = atob(activatedRoute.snapshot.params.url);
        this.getProducts(url + "/");
      }
    })
  }

  ngOnInit() {
  }

  getProducts(url) {
    this.catalogueService.getRessource(url).subscribe(value => {
      this.products = value;
    }, error1 => {
      console.log(error1);
    })

  }

}
