import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/interfaces/brand';
import { Product } from 'src/app/interfaces/product';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-brand-gestion',
  templateUrl: './brand-gestion.component.html',
  styleUrls: ['./brand-gestion.component.css'],
})
export class BrandGestionComponent {
  makeSearch: boolean = false;
  addBrand: boolean = false;
  listBrand: Brand[] = [];
  addBrandForm: FormGroup;
  constructor(private brandService: BrandService) {
    this.addBrandForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      imageurl: new FormControl(''),
      link: new FormControl(''),
    });
  }

  searchBrand() {
    var search = (<HTMLInputElement>document.getElementById("search")).value;
    console.log(search);

    this.brandService.searchBrand(search).subscribe((data: Brand[]) => {
      this.listBrand = data;
      this.makeSearch = true;
    });
  }

  submitForm() {
    console.log(this.addBrandForm.value.imageURL)
    this.brandService.addBrand(new Brand(-1, this.addBrandForm.value.title, this.addBrandForm.value.link, this.addBrandForm.value.imageurl, this.addBrandForm.value.description)).subscribe((data: Brand) => {
      this.listBrand.push(data);
      this.addBrand = false;
      this.makeSearch = false;
      alert("Marque ajoutée avec succès");
    });
  }


  deleteBrand(id: number) {
    console.log(id);
    this.brandService.deleteBrand(id).subscribe(
      (data: Brand) => {
        this.listBrand = this.listBrand.filter((brand) => brand.id != id);
      },
      (error) => {
        alert("Impossible de supprimer cette marque. Elle est certainement utilisée par un produit.");
      }
    );
  }
}
