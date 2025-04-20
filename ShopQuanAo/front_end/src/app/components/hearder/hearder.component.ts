import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css'],
  imports: [RouterModule, FormsModule, CommonModule] // Đúng vị trí
})
export class HearderComponent implements OnInit {
  keyword: string = "Tìm kiếm sản phẩm !";
  categories!: Category[];
  isADM: any
  isLogin: any

   constructor(private authService: AuthService,private categoryService: CategoryService, private router: Router) {
          this.isADM = authService.checkAdmin()
          this.isLogin = authService.checklogin()
   }
  
    ngOnInit() {
      this.categoryService.getAll().subscribe(data => {
        this.categories = data as Category[];
      });
    }
    // Tim kiem san pham
    onSearch() {
      if(this.keyword.trim().length > 3 ) {
      this.router.navigate( ['products'], { queryParams: { 'keyword': this.keyword }} )
      }else {
        this.keyword = '' ;
        alert("Hayx nhap its nhat 3 ki tu");
      }
    }
    onLogout(){
      localStorage.clear()
      location.assign('/');
    }
}

