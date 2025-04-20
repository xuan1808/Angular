import { ProductService } from './../../../services/product.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  isLoading = true;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data as Product[];
    })
  }
  onDelete(id:string){
    var result = confirm("ban chac chu?");
    if ( result){
      this.productService.delete(id).subscribe(data => {
        location.assign('/admin/product-list');
      });
    }
   
  }

}
