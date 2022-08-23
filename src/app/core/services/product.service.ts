import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  private REST_API_SERVER = 'http://localhost:3000/products';

  getProducts(): Observable<any> {
    return this.http.get(this.REST_API_SERVER);
  }


}
