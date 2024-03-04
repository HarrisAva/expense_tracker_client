import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
// import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http:HttpClient) { }

  getExpenses(): Observable<Expense[]>{
    // return this.http.get<Expense[]>(`${environment.apiUrl}/expenses`)
    return this.http.get<Expense[]>('http://localhost:3000/expenses')

  }

  createExpense(expense:Expense): Observable<Expense> {
    return this.http.post<Expense>('http://localhost:3000/expenses', expense);

  }
}
