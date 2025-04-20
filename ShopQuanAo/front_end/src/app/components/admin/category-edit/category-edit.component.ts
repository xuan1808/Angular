import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class CategoryEditComponent implements OnInit {
  id!: string;
  category!: Category;
  categoryForm!: FormGroup;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.categoryService.getCategorydetail(this.id).subscribe(data => {
      this.category = data as Category;
      this.categoryForm = new FormGroup({
        'name': new FormControl(this.category.name, [Validators.required, Validators.minLength(6)]),
      });
    });


  }

  ngOnInit() {

  }
  onSubmit() {
    if (this.categoryForm.invalid) {
      alert('dữ liệu ko hợp lệ')
    } else {
      this.categoryService.updateCategory(this.id, this.categoryForm.value).subscribe(data => {
        location.assign('/admin/category-list');
      })
    }
  }

}
