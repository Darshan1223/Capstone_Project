import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  product: any = { name: '', price: 0,manufacturer:'',quantity:0,descroption:'' };
  successMessage = '';
  errorMessage = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe(
        (data) => (this.product = data),
        (error) => (this.errorMessage = 'Error fetching product details.')
      );
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(
      () => {
        this.successMessage = 'Product updated successfully!';
        setTimeout(() => this.router.navigate(['/products']), 2000);
      },
      (error) => (this.errorMessage = 'Error updating product.')
    );
  }
}
