import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product, CartItem } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  minPrice: number = 0;
  maxPrice: number = 1000;
  searchKeyword: string = '';
  sortOrder: 'asc' | 'desc' | 'none' = 'none';
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.isLoading = false;
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      const categoryMatch = !this.selectedCategory || product.category === this.selectedCategory;
      const priceMatch = product.price >= this.minPrice && product.price <= this.maxPrice;
      const keywordMatch = !this.searchKeyword || 
        product.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchKeyword.toLowerCase());
      return categoryMatch && priceMatch && keywordMatch;
    });

    this.sortProducts();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onPriceRangeChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  sortProducts(): void {
    if (this.sortOrder === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    
    // Add visual feedback for successful addition
    const button = event?.target as HTMLElement;
    if (button) {
      button.classList.add('success');
      setTimeout(() => {
        button.classList.remove('success');
      }, 600);
    }
  }

  clearFilters(): void {
    this.selectedCategory = '';
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.searchKeyword = '';
    this.sortOrder = 'none';
    this.applyFilters();
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
} 