import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseComponent } from '../../components/expense/expense.component';
import { Router, ActivatedRoute, RouterModule, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FilterByMonthPipe } from '../../pipes/month-filter.pipe';


@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [ExpenseComponent, RouterModule, FormsModule, DatePipe, FilterByMonthPipe, ],
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
  // @Input({required:true}) expense:Expense = new Expense({});
  // @Input() category:Category;
  // @Input() index: number;

  expenses: Expense[] = [];
  id: number;
  totalExpenses: number;
  selectedMonth: number; // variable to store the selected month value
  // selectedCategory: number; // variable to store the selected category value

  months = [
    {
      name: "January", value: 1
    },
    {
      name: "February", value: 2
    },
    {
      name: "March", value: 3
    },
    {
      name: "April", value: 4
    },
    {
      name: "May", value: 5
    },
    {
      name: "June", value: 6
    },
    {
      name: "July", value: 7
    },
    {
      name: "August", value: 8
    },
    {
      name: "September", value: 9
    },
    {
      name: "October", value: 10
    },
    {
      name: "November", value: 11
    },
    {
      name: "December", value: 12
    }
  ]

  constructor(private expenseService: ExpenseService, private router:Router, private route:ActivatedRoute) {

  this.selectedMonth = 3; // set default month

  }

  ngOnInit(): void {
     const totalExpenses = 0;

      this.expenseService.getMyExpenses().subscribe({
        next: (expenses: Expense[]) => {
          this.expenses = expenses;
          this.totalExpenses = this.expenseService.calculateTotalExpenses(this.expenses)
        },
        error: (error:any) => {
          console.error('Error fetching expenses', error);
        },
      });
  }

  // filterExpenses() {

  //   this.filteredExpenses = this.expenses.filter(expense => {
  //     const expenseMonth = new Date(expense.date).getMonth() + 1;
  //     return expenseMonth === this.selectedMonth;
  //   });
  // }

  onEditExpense(id: number){
    this.router.navigate(['/expense-edit/', id])
  }

  onDeleteExpense(id: number){
    this.expenseService.deleteExpense(id).subscribe({
      next: () => this.expenses = this.expenses.filter(expense => expense.id !== id),
      error: (err) => console.error(err)
    });
  }


}