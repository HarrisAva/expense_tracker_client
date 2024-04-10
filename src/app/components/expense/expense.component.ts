import { Component, Input } from '@angular/core';
import { Expense } from '../../models/expense';
import { CategoryComponent } from '../category/category.component';
import { Category } from '../../models/category';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CategoryComponent, RouterLink, RouterModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
})
export class ExpenseComponent {
  @Input({ required: true }) expense: Expense = new Expense({});
  @Input() category: Category;
  @Input() index: number;
}
