import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { ExpenseComponent } from '../../components/expense/expense.component';
import {
  Router,
  ActivatedRoute,
  RouterModule,
  RouterLink,
} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FilterByMonthPipe } from '../../pipes/month-filter.pipe';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [
    ExpenseComponent,
    RouterModule,
    FormsModule,
    DatePipe,
    FilterByMonthPipe,
    RouterLink,
  ],
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss'],
})
export class ExpensesListComponent implements OnInit {
  expenses: Expense[] = [];
  id: number;
  totalAmount: number = 0;
  sortProperty: any = '';
  isAscending: boolean = true;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const totalExpenses = 0;

    this.expenseService.getMyExpenses().subscribe({
      next: (expenses: Expense[]) => {
        this.expenses = expenses;
      },
      error: (error: any) => {
        console.error('Error fetching expenses', error);
      },
    });
    this.getTotalAmount();
  }

  getTotalAmount() {
    this.expenseService.getTotalAmount().subscribe((data: any) => {
      this.totalAmount = data.total_amount;
    });
  }

  onEditExpense(id: number) {
    this.router.navigate(['/expense-edit/', id]);
  }

  onDeleteExpense(id: number) {
    this.expenseService.deleteExpense(id).subscribe({
      next: () =>
        (this.expenses = this.expenses.filter((expense) => expense.id !== id)),
      error: (err) => console.error(err),
    });
  }

  sortData(property: any) {
    if (this.sortProperty === property) {
      this.isAscending = !this.isAscending;
    } else {
      this.sortProperty = property;
      this.isAscending = true;
    }
    this.expenses.sort((a, b) => {
      return this.isAscending
        ? a[property] > b[property]
          ? 1
          : -1
        : b[property] > a[property]
        ? 1
        : -1;
    });
    console.log(this.expenses);
  }
}
