import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOptions;
  
  constructor(private http : HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'
    })
    };

  }
  getProducts(): any{
    return this.http.get("https://jsonplaceholder.typicode.com/photos",this.httpOptions).pipe();
  }

}
