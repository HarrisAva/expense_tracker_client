import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost3000/categories')
  }

  // getCategory(id:string | number){
  //   return this.http.get(`http://localhost3000/categories/${id}`)
  // }
}
