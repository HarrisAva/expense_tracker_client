import { Component, Input } from '@angular/core';
import { Expense } from '../../models/expense';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

  @Input({required:true}) expense:Expense = new Expense({})

}
