import { ProductService } from './../../../services/product.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
@Component({
  selector: 'app-product-edit',
  standalone:true,
 
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
   imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class ProductEditComponent {
  id!: string;
    product!: Product;
    productForm!: FormGroup;

    constructor(private productService: ProductService, private route: ActivatedRoute) {
        this.id = route.snapshot.params['id'];
        this.productService.getproductdetail(this.id).subscribe(data => {
          this.product = data as Product;
            this.productForm = new FormGroup({
              'name': new FormControl(this.product.name, [Validators.required, Validators.minLength(6)]),
              'desc': new FormControl(this.product.desc, [Validators.required]),
              'image': new FormControl(this.product.image, [Validators.required]),
              'price': new FormControl(this.product.price, [Validators.required]),
            });
          });
        
      }
      onSubmit() {
        if (this.productForm.invalid) {
          alert('dữ liệu ko hợp lệ')
        } else {
          this.productService.updateProduct(this.id, this.productForm.value).subscribe(data => {
            location.assign('/admin/product-list');
          })
        }
      }
    }
   