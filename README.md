# 🛒 Shopping Cart Application

A modern, responsive shopping cart application built with Angular 17, featuring smooth animations, filtering capabilities, and an intuitive user interface.

## ✨ Features

### 🎯 Core Functionality
- **Product Catalog** - Browse products with images, titles, categories, and prices
- **Shopping Cart** - Add, remove, and update item quantities
- **Real-time Updates** - Cart updates instantly with smooth animations
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### 🔍 Advanced Filtering & Search
- **Search by Title/Category** - Find products quickly with real-time search
- **Category Filtering** - Filter products by specific categories
- **Price Range Slider** - Set minimum and maximum price ranges
- **Sorting Options** - Sort by price (low to high, high to low)
- **Clear Filters** - Reset all filters with one click

### 🎨 Smooth Animations
- **Cart Badge Animations** - Bounce and pulse effects when items are added
- **Item Transitions** - Slide-in/out animations for cart items
- **Button Interactions** - Hover effects, scaling, and ripple animations
- **Success Notifications** - Visual feedback for user actions
- **Loading States** - Smooth loading spinners and transitions

### 📱 User Experience
- **Sidebar Cart** - Slide-out cart panel with overlay
- **Quantity Controls** - Easy +/- buttons for item quantities
- **Total Calculations** - Real-time price and item count updates
- **Empty State Handling** - Friendly messages when cart is empty

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🏗️ Project Structure

```
shopping-cart/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/          # Product catalog with filters
│   │   │   └── shopping-cart/         # Cart sidebar and functionality
│   │   ├── models/
│   │   │   └── product.interface.ts   # TypeScript interfaces
│   │   ├── services/
│   │   │   ├── cart.service.ts        # Cart state management
│   │   │   └── product.service.ts     # Product data handling
│   │   └── app.*                      # Main app files
│   ├── assets/
│   │   └── mock-products.json         # Sample product data
│   └── styles.less                    # Global styles
├── package.json
└── README.md
```

## 🎨 Styling & Animations

### CSS Animations
- **Pure CSS animations** - No additional animation libraries required
- **Smooth transitions** - 300ms cubic-bezier easing for natural feel
- **Performance optimized** - Hardware-accelerated transforms
- **Responsive animations** - Scale appropriately on all devices

### Key Animation Features
- Cart badge bounce on item addition
- Item slide-in/out animations
- Button hover and active states
- Success notification popups
- Loading spinner animations

## 🔧 Customization

### Adding New Products
Edit `src/assets/mock-products.json`:
```json
{
  "id": 11,
  "title": "New Product",
  "category": "Electronics",
  "price": 29.99,
  "image": "https://placehold.co/150x150?text=Product"
}
```

### Modifying Animations
Update animation durations in component `.less` files:
```less
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Styling Changes
- Global styles: `src/styles.less`
- Component styles: `src/app/components/*/component.less`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run lint` - Run linting

### Code Style
- TypeScript strict mode enabled
- ESLint configuration included
- Consistent code formatting

## 🎯 Bonus Notes

### Performance Optimizations
- **Lazy loading** for product images
- **CSS transforms** for smooth animations
- **Efficient filtering** with debounced search
- **Minimal re-renders** with optimized change detection

### Accessibility Features
- **Keyboard navigation** support
- **Screen reader** friendly markup
- **Focus management** for cart interactions
- **ARIA labels** for interactive elements

### Future Enhancements
- **User authentication** and profiles
- **Wishlist functionality**
- **Product reviews** and ratings
- **Checkout process** integration
- **Payment gateway** integration
- **Order history** tracking
- **Email notifications** for orders
- **Inventory management** system

### Technical Highlights
- **Angular 17** with standalone components
- **TypeScript** for type safety
- **LESS** for advanced CSS features
- **Responsive grid** layout system
- **Service-based** state management
- **Reactive programming** with RxJS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- Styled with [LESS](http://lesscss.org/)
- Icons from [Emoji](https://emojipedia.org/)
- Placeholder images from [Placehold.co](https://placehold.co/)

---

**Happy Shopping! 🛒✨**
