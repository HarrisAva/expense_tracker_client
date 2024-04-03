import { HttpClient, HttpParams } from '@angular/common/http';
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

  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>(`http://localhost:3000/expenses/${id}`)
  }

  getMyExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>('http://localhost:3000/my_expenses');

  }

  getExpensesByCategory(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/expenses_by_category');
  }

  getExpensesByCategoryAndMonth(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/expenses_by_category_by_month');
  }


  // getFilteredExpenses(month: string, category: string){

    // const month = selectedMonth;
    // const category = selectedCategory;

    // this.http.get('http://localhost:3000/my_expenses', {month, category}).subscribe(
    //   res => {
    //     console.log(res)
    //   }
    // )

  // }

  createExpense(expense:Expense): Observable<Expense> {
    return this.http.post<Expense>('http://localhost:3000/expenses', expense);

  }

  updateExpense(id:number, expense:Expense): Observable<Expense> {
    return this.http.put<Expense>(`http://localhost:3000/expenses/${id}`, expense);
  }

  deleteExpense(id: number): Observable<Expense> {
    return this.http.delete<Expense>(`http://localhost:3000/expenses/${id}`);
  }

  getTotalAmount() {
    return this.http.get<number>('http://localhost:3000/total_amount')
  }

  calculateTotalExpenses(expenses:any[]) {
    let totalExpenses = 0;
    for (let expense of expenses) {
      totalExpenses += expense.amount;
    }
    return totalExpenses;

  }


}


