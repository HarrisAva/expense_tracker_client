import { Component, NgModule, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
// import { ExpenseComponent } from '../../components/expense/expense.component';
// import { FilterByMonthPipe } from '../../pipes/month-filter.pipe';
// import { FormsModule } from '@angular/forms';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  expensesByCategory: any[];
  // categorySummary: any[];
  // expenses: Expense[] = [];
  // id: number;
  // totalExpenses: number;
  // selectedMonth: string;
  // selectedCategory: number;
  // filteredExpenses: Expense [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
//    this.expenseService.getCategorySummary().subscribe((data: any[]) => {
//   this.categorySummary = data;
//   console.log(data);
// });
      this.expenseService.getExpensesByCategory().subscribe(data => {
        this.expensesByCategory = data;
        console.log(data)
      });

  }

  // fetchExpensesByCategory() {
  //   this.expenseService.getExpensesByCategory().subscribe(data => {
  //     this.expensesByCategory = data;
  //     console.log(data)
  //   });
  // }
}



  // filterExpenses() {

  //   const totalExpenses = 0;

  //   this.expenseService.getMyExpenses().subscribe({
  //     next: (expenses: Expense[]) => {
  //       this.expenses = expenses;
  //       this.filteredExpenses = this.expenses.filter(expense => expense.date === this.selectedMonth && expense.category_id === this.selectedCategory);

  //       this.totalExpenses = this.expenseService.calculateTotalExpenses(this.filteredExpenses)
  //     },
  //     error: (error:any) => {
  //       console.error('Error fetching expenses', error);
  //     },
  //   })

  // }

  // this.expenses = expenses.filter(e => e.category_id === this.selectedCategory);
  // this.expenses = expenses.filter(e => e.category.id === this.selectedCategory || e.date === this.selectedMonth);

  // const totalExpenses = 0;
  // calculateTotalExpenses(this.expenses)

// }
