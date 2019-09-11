import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  productsItem = [];
  viewProducts = false;
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      result => {
        //debugger;
        this.productsItem = result.slice(0,100);
        this.viewProducts = true;
      }
    );
  }

}
