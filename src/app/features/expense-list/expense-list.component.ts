import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseComponent } from '../../components/expense/expense.component';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [ExpenseComponent, RouterModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[] = [];
  // index: number;

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

  // editExpense(expense: Expense){
  //   this.expenseService.updateExpense(expense).subscribe(updatedExpense => {
  //     const index = this.expenses.findIndex(e => e.id === updatedExpense.id);
  //     this.expenses[index] = updatedExpense;
  //   });
  // }

  editExpense(){
    this.router.navigate(['/expense-edit'])
  }


  deleteExpense(id: number){
    this.expenseService.deleteExpense(id).subscribe({
      next: () => this.expenses = this.expenses.filter(expense => expense.id !== id),
      error: (err) => console.error(err)
    });
  }

}
