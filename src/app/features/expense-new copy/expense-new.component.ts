// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { AuthenticationService } from '../../services/authentication.service';
// import { Router } from '@angular/router';
// import { ExpenseService } from '../../services/expense.service';
// import { Category } from '../../models/category';
// import { CategoryService } from '../../services/category.service';

// @Component({
//   selector: 'app-expense-new',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './expense-new.component.html',
//   styleUrl: './expense-new.component.scss'
// })
// export class ExpenseNewComponent implements OnInit{

//   expenseNewForm:FormGroup = new FormGroup({
//     date: new FormControl (''),
//     title: new FormControl (''),
//     description: new FormControl (''),
//     amount: new FormControl (''),
//     categoryIds: new FormArray([]), // array of categories
//   })

//   categories: Category[] = []
//   errors: string[] = []

//   constructor(private authService:AuthenticationService, private router:Router, private expenseService:ExpenseService, private categoryService:CategoryService) {}

//   ngOnInit(): void {
//     this.loadCategoryIds();
//   }

//   addCategoryToForm(){
//     (this.expenseNewForm.get("category.id") as FormArray).push(new FormControl(false))
//   }

//   loadCategoryIds(){
//     this.categoryService.getCategories().subscribe({
//       next:(categories:any) => {
//         this.categories = categories;
//         categories.forEach((category:Category)=>{
//           this.addCategoryToForm()
//         })
//       },
//       error: (error) => {
//         console.log(error)
//       },
//     });
//   }

//   get categoryIds(): FormArray{
//     return this.expenseNewForm.get("catetoryIds") as FormArray
//   }

//   extractCategoryIds(){
//     const categoryIdsFormValue = this.expenseNewForm.value.categoryIds;
//     const categoryIds = categoryIdsFormValue.map ((checked:boolean, i:number) => {
//       return checked ? this.categories[i].id : null
//     }).filter((id:any) => {
//       return id !== null
//     });
//     return categoryIds;
//   }

//   onCreateExpense(){

//     const categoryIds = this.extractCategoryIds();
//     const formData:any = new FormData();

//     formData.append('date', this.expenseNewForm.get('date')!.value)
//     formData.append('title', this.expenseNewForm.get('title')!.value)
//     formData.append('amount', this.expenseNewForm.get('amount')!.value)

//     categoryIds.forEach((categoryId:any)=>{
//       formData.append('category_ids[]', categoryId)
//     })

//     this.expenseService.createExpense(formData).subscribe({
//       next: () => {
//         this.router.navigate(['/expense-list'])
//       },
//       error: (error) => {
//         console.log(error);
//       }
//     })


//     // const categoryIds = this.extractCategoryIds();
//     // const formValue = this.expenseNewForm.value

//     // categoryIds.forEach((categoryName:any)=>{
//     //   formValue.append('categoryNames[]', categoryName)
//     // })
//     // this.expenseService.createExpense(formValue).subscribe({
//     //   next: (res:any) => {
//     //     this.router.navigate(['/expense-list'])
//     //   },
//     //   error: (error:any) => {
//     //     console.log(error.error)
//     //     this.errors = error.error
//     //   }
//     // })
//   }

// }
