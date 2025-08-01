import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (isPlatformBrowser(this.platformId)) {
      return this.http.get<Product[]>('/assets/mock-products.json');
    } else {
      return of([]);
    }
  }

  getCategories(): Observable<string[]> {
    if (isPlatformBrowser(this.platformId)) {
      return new Observable(observer => {
        this.getProducts().subscribe(products => {
          const categories = [...new Set(products.map(product => product.category))];
          observer.next(categories);
          observer.complete();
        });
      });
    } else {
      return of([]);
    }
  }
} 