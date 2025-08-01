import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../models/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalItems: number = 0;
  isCartOpen: boolean = false;
  showAddSuccess: boolean = false;
  removingItems: Set<number> = new Set();
  updatingQuantities: Set<number> = new Set();
  updatingPrices: Set<number> = new Set();
  updatingTotal: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
      this.totalItems = this.cartService.getTotalItems();
      
      // Trigger badge bounce animation when items change
      if (this.totalItems > 0) {
        this.triggerBadgeBounce();
      }
    });
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  removeFromCart(productId: number): void {
    // Add removing animation class
    this.removingItems.add(productId);
    
    // Wait for animation to complete before removing
    setTimeout(() => {
      this.cartService.removeFromCart(productId);
      this.removingItems.delete(productId);
    }, 300);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      // Add updating animation classes
      this.updatingQuantities.add(productId);
      this.updatingPrices.add(productId);
      this.updatingTotal = true;
      
      this.cartService.updateQuantity(productId, quantity);
      
      // Remove animation classes after animation completes
      setTimeout(() => {
        this.updatingQuantities.delete(productId);
        this.updatingPrices.delete(productId);
        this.updatingTotal = false;
      }, 400);
    }
  }

  clearCart(): void {
    // Add removing animation for all items
    this.cartItems.forEach(item => {
      this.removingItems.add(item.product.id);
    });
    
    setTimeout(() => {
      this.cartService.clearCart();
      this.removingItems.clear();
    }, 300);
  }

  getItemTotal(item: CartItem): number {
    return item.product.price * item.quantity;
  }

  triggerBadgeBounce(): void {
    // This will be handled by CSS animation when the badge appears
  }

  showAddToCartSuccess(): void {
    this.showAddSuccess = true;
    setTimeout(() => {
      this.showAddSuccess = false;
    }, 2000);
  }

  // Helper methods for CSS classes
  isRemoving(productId: number): boolean {
    return this.removingItems.has(productId);
  }

  isUpdatingQuantity(productId: number): boolean {
    return this.updatingQuantities.has(productId);
  }

  isUpdatingPrice(productId: number): boolean {
    return this.updatingPrices.has(productId);
  }

  isUpdatingTotal(): boolean {
    return this.updatingTotal;
  }
} 