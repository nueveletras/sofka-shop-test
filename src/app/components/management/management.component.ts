import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ProductModel } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  @ViewChild("dt") public _dt!: Table

  productDialog!: boolean;

  products!: ProductModel[];

  product!: ProductModel;

  selectedProducts!: ProductModel[];

  submitted!: boolean;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);

  }

  editProduct(product: ProductModel) {

  }

  deleteProduct(product: ProductModel) {

  }

  saveProduct() {
    this.submitted = true;
  }

  search($event: any){
    this._dt.filterGlobal($event.target.value, 'contains')
  }

}
