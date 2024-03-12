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

  getExpense(index: number) {
    return this.http.get<Expense>(`http://localhost:3000/expenses/${index}`)
  }

  getMyExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>('http://localhost:3000/my_expenses');

  }

  createExpense(expense:Expense): Observable<Expense> {
    return this.http.post<Expense>('http://localhost:3000/expenses', expense);

  }

  updateExpense(expense:Expense): Observable<Expense> {
    return this.http.put<Expense>(`http://localhost:3000/expenses/${expense.id}`, expense);
  }

  deleteExpense(id: number): Observable<Expense> {
    return this.http.delete<Expense>(`http://localhost:3000/expenses/${id}`);
  }
}


