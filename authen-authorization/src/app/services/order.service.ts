import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getOrders() {
    let token = localStorage.getItem("token");
    let options = { headers: { Authorization: 'Bearer ' + token } }
    return this.http.get(this.baseUrl + '/api/orders', options)
  }
}
