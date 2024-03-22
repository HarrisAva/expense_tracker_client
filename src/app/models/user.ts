import { Category } from "./category";
import { Expense } from "./expense";

export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  expense: Expense;
  category: Category;
  expense_id: number;
  category_id: number;
  category_name: string;



  constructor(user:any) {
    this.id = user.id || 0;
    this.first_name = user.first_name || "";
    this.last_name = user.last_name || "";
    this.email = user.email || "";
    this.username = user.username || "";
    // this.expense_id = Expense.id;
    // this.category_id = Expense.category.id;
    // this.category_name = Expense.category.name;
  }
}


