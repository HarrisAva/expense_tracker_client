import { Category } from "./category";
import { User } from "./user";

export class Expense {
  id: number
  date: string;
  title: string;
  description: string;
  amount: number;
  user_id: number;
  user: User;
  category_id: number;
  category_name: string;
  category: Category;

  constructor(expense:any) {
    this.id = expense.id || 0;
    this.date = expense.date;
    this.title = expense.title;
    this.description = expense.description;
    this.amount = expense.amount;
    this.user_id = expense.user_id;
    this.user = expense.user;
    this.category_id = expense.category_id;
    this.category_name = expense.category_name
    this.category = expense.category;
  }
}
