import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class CategoryListComponent implements OnInit {
  categories!: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
     this.categoryService.getAll().subscribe(data => {
            this.categories = data as Category[];
            console.log(this.categories);

            
          })
  }
  onDelete(id:string){
    var result = confirm("ban chac chu?");
    if ( result){
      this.categoryService.delete(id).subscribe(data => {
        location.assign('/admin/category-list');
      });
    }
   
  }

}
