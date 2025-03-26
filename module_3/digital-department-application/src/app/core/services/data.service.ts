import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) { }

  readData(): Observable<Product[]>{
    return this.http.get<Product[]>(this.dataUrl)
  }
}