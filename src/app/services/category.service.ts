import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get('http://localhost3000/categories')
  }

  // getCategory(id:string | number){
  //   return this.http.get(`http://localhost3000/categories/${id}`)
  // }
}
