import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
product!: Product;
id! : string;
constructor (private productService: ProductService, private route: ActivatedRoute) {
  this.id = route.snapshot.params['id'];
}
ngOnInit() {
  this.productService.getproductdetail(this.id).subscribe(data => {
    this.product = data as Product;
    console.log(this.product);
    
  })
}
}
