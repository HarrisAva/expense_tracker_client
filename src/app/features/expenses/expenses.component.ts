import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseComponent } from '../../components/expense/expense.component';
import { Router, ActivatedRoute, RouterModule, Params } from '@angular/router';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpenseComponent, RouterModule],
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[] = [];
  id: number;

  constructor(private expenseService: ExpenseService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
      this.expenseService.getMyExpenses().subscribe({
        next: (expenses: Expense[]) => {
          this.expenses = expenses;
        },
        error: (error:any) => {
          console.error('Error fetching expenses', error);
        },
      });
  }

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
