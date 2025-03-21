import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product = { name: '', price: 0 ,description:'',manufacturer:'',quantity:''};
  successMessage = '';
  errorMessage = '';

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    this.productService.addProduct(this.product).subscribe(
      () => {
        this.successMessage = 'Product added successfully!';
        setTimeout(() => this.router.navigate(['/products']), 2000);
      },
      error => this.errorMessage = 'Error adding product.'
    );
  }
}

