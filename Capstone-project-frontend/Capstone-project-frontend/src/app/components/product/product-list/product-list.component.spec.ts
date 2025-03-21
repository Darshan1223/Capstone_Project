import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../../services/product.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let mockService: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('ProductService', ['getProducts']);

    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [{ provide: ProductService, useValue: mockService }]
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('should fetch and display products', () => {
    const mockProducts = [{ id: 1, name: 'Laptop', price: 1200 }];
    mockService.getProducts.and.returnValue(of(mockProducts));

    fixture.detectChanges();

    expect(component.products.length).toBe(1);
    expect(component.products[0].name).toBe('Laptop');
  });
});
