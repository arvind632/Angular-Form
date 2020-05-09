import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://jsonplaceholder.typicode.com';
  apiURL2: string = 'http://localhost/php-test/angular/laravel-seat-reservation-api/api/public/api';
  

  constructor(private httpClient: HttpClient) {}

  public getCustomers(){
    return this.httpClient.get<Customer[]>(`${this.apiURL}/users`);
  }

  public getSeat(){
    return this.httpClient.get<[]>(`${this.apiURL2}/getSeat`);
  }

  public register(Seat) {
  
    return this.httpClient.post(`${this.apiURL2}/reservation`, Seat); 
   }


}