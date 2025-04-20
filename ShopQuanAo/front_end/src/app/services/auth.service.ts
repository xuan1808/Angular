import { HttpClient } from "@angular/common/http";
import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = `http://127.0.0.1:8000/v1`;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID)); // Kiểm tra môi trường

  constructor(private httpClient: HttpClient) { }

  checkAdmin() {
    if (this.isBrowser) {
      const jsonData = localStorage.getItem('login');
      if (jsonData) {
        const data = JSON.parse(jsonData);
        return data.admin === true ? data : false;
      }
    }
    return false;
  }

  checklogin() {
    if (this.isBrowser) {
      const jsonData = localStorage.getItem('login');
      if (jsonData) {
        return JSON.parse(jsonData);
      }
    }
    return false;
  }

  isAdmin(): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.isBrowser) {
        resolve(false);
        return;
      }

      const jsonData = localStorage.getItem('login');
      if (jsonData) {
        const data = JSON.parse(jsonData);
        resolve(data.admin === true);
      } else {
        resolve(false);
      }
    });
  }

  login(body: any) {
    return this.httpClient.post(`${this.url}/account/login`, body);
  }

  register(body: any) {
    return this.httpClient.post(`${this.url}/account/add`, body);
  }
}
