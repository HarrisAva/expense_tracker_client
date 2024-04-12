import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${environment.apiUrl}/expenses`);
  }

  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${environment.apiUrl}/expenses/${id}`);
  }

  getMyExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${environment.apiUrl}/my_expenses`);
  }

  getExpensesByCategory(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/expenses_by_category`);
  }

  getExpensesByCategoryAndMonth(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/expenses_by_category_by_month`
    );
  }

  createExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${environment.apiUrl}/expenses`, expense);
  }

  updateExpense(id: number, expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(
      `${environment.apiUrl}/expenses/${id}`,
      expense
    );
  }

  deleteExpense(id: number): Observable<Expense> {
    return this.http.delete<Expense>(`${environment.apiUrl}/expenses/${id}`);
  }

  getTotalAmount() {
    return this.http.get<number>(`${environment.apiUrl}/total_amount`);
  }
}
