import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = `http://127.0.0.1:8000/v1`;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.url}/category`);
  }
  delete(id: string) {
    return this.httpClient.delete(`${this.url}/category/${id}`);
  }

  addCategory(body: any) {
    return this.httpClient.post(`${this.url}/category`, body)
  }
  getCategorydetail(id: string) {
    return this.httpClient.get(`${this.url}/category/${id}`)
  }
  updateCategory(id: string, body: any) {
    return this.httpClient.put(`${this.url}/category/${id}`, body)
  }
}
