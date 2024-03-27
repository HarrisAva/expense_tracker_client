import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from '../models/expense';

@Pipe({
  name: 'filterByMonth',
  standalone: true
})

 export class FilterByMonthPipe implements PipeTransform {
   transform(expenses: any[], selectedMonth: number): any[] {
     if (!expenses || !selectedMonth) {
       return expenses;
     }

     return expenses.filter(expense => new Date(expense.date).getMonth() + 1 === selectedMonth);
   }
 }
 