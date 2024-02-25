export class Category {
  id: number;
  name: string;

  connstructor(category:any) {
    this.id = category.id;
    this.name = category.name;
  }

}
