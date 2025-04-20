import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  standalone: true,
  styleUrls: ['./category-add.component.css'],
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
})
export class CategoryAddComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor( private categoryService: CategoryService) {
    this.categoryForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.categoryForm.invalid){
      alert('dữ liệu ko hợp lệ')
    }else {
      this.categoryService.addCategory(this.categoryForm.value).subscribe(data => {
        location.assign('/admin/category-list');
      })
    }
  }
}
