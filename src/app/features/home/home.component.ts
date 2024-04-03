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
  expensesByCategoryAndMonth: any [];
  selectedMonth: string = 'April';
  filteredExpenses: any[];
  totalAmount: number;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {

      this.expenseService.getExpensesByCategory().subscribe(data => {
        this.expensesByCategory = data;
      });

      this.getTotalAmount();

      // this.expenseService.getExpensesByCategoryAndMonth().subscribe(data => {
      //   this.expensesByCategoryAndMonth = data;
      //   console.log(data)

      //   this.filteredExpenses = this.expensesByCategoryAndMonth.filter(expense => expense.month === this.selectedMonth);

      // });
    }
    getTotalAmount() {
      this.expenseService.getTotalAmount().subscribe((data:any) => {
        this.totalAmount = data.total_amount;
      });
    }

    // getTotalExpenseForCategory(category: string): number {
    //   return this.expensesByCategory.filter(expense => expense.category === category).reduce((acc, curr) => acc + curr.amount, 0);
    // }
    }

  // fetchExpensesByCategory() {
  //   this.expenseService.getExpensesByCategory().subscribe(data => {
  //     this.expensesByCategory = data;
  //     console.log(data)
  //   });
  // }




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
