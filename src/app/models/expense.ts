import { Category } from "./category";
import { User } from "./user";

export class Expense {
  id: number
  date: string;
  title: string;
  description: string;
  amount: number;
  user: User;
  category_id: number;
  category: Category;

  constructor(expense:any) {
    this.id = expense.id || 0;
    this.date = expense.date;
    this.title = expense.title;
    this.description = expense.description || '';
    this.amount = expense.amount;
    this.user = expense.user;
    this.category_id = expense.category_id;


  }
}
