export class Category {
  id: number;
  name: string;
  user_id: number;
  expense_id: number;

  connstructor(category:any) {
    this.id = category.id;
    this.name = category.name;
    this.user_id = category.user_id;
    this.expense_id = category.expense_id;
  }

}
