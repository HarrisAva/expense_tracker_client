import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-expense-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense-new.component.html',
  styleUrl: './expense-new.component.scss'
})
export class ExpenseNewComponent implements OnInit{

  expenseNewForm:FormGroup = new FormGroup({
    date: new FormControl (''),
    title: new FormControl (''),
    description: new FormControl (''),
    amount: new FormControl (''),
    category_id: new FormControl (''),
  })

  categories:Category[]= []
  errors: string[] = []

  constructor(private authService:AuthenticationService, private router:Router, private expenseService:ExpenseService, private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next:(categories:any) => {
        this.categories = categories;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  onSubmit(){
    const formValue = this.expenseNewForm.value
    this.expenseService.createExpense(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/expense-list'])
      },
      error: (error:any) => {
        console.log(error.error)
        this.errors = error.error
      }
    })
  }

}
