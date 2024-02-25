import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseComponent } from '../../components/expense/expense.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [ExpenseComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
      this.expenseService.getExpenses().subscribe({
        next: (expenses: Expense[]) => {
          this.expenses = expenses;
        },
        error: (error:any) => {
          console.error('Errorfetching expenses', error);
        },
      });
  }

}
