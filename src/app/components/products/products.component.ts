import { Component, OnInit, ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { ProductModel } from 'src/app/core/models/product.model';
import { SelectItemModel } from 'src/app/core/models/selectItem.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  @ViewChild("dv") public _dv!: DataView

  products: ProductModel[] = [];

  sortOptions: SelectItemModel[] = [];

  sortOrder: number = 1;

  sortField: string = "";

  sortKey: string = "label"

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data);

    this.sortOptions = [
      { label: 'Mayor a menor precio', value: '!price' },
      { label: 'Menor a mayor precio', value: 'price' }
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  filter($event: any){
    this._dv.filter($event.currentTarget.value)
  }

}
