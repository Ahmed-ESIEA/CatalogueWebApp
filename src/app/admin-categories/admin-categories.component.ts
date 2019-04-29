import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories;

  constructor(private catalogueService:CatalogueService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  private getAllCategories() {
    this.catalogueService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, error1 => {
      console.log(error1)
    })
  }

  onDeleteCat(c) {
    let message=confirm("Etes-vous sure de supprimer ?");
    if(!message) return;
    this.catalogueService.deleteResource(c._links.self.href).subscribe(() => {
      this.getAllCategories();
    },error1 => {
      console.log(error1);
    });
  }
}
