import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-new',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './expense-new.component.html',
  styleUrl: './expense-new.component.scss'
})
export class ExpenseNewComponent implements OnInit{

  // expenseNewForm:FormGroup = new FormGroup({
  //   date: new FormControl (''),
  //   title: new FormControl (''),
  //   description: new FormControl (''),
  //   amount: new FormControl (''),
  //   category_id: new FormControl (''),
  // })
  expenseNewForm: FormGroup;

  errors: string[] = []

  constructor(private authService:AuthenticationService, private router:Router, private route: ActivatedRoute ,private expenseService:ExpenseService, private categoryService:CategoryService, private formBuilder: FormBuilder) {

    this.expenseNewForm = this.formBuilder.group ({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      category_id: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    // this.categoryService.getCategories().subscribe({
    //   next:(categories:any) => {
    //     this.categories = categories;
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // });
  }

  ngOnDestroy() {
    this.expenseNewForm.reset();
  }

  onSubmit(){
    const formValue = this.expenseNewForm.value

    this.expenseService.createExpense(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/expenses-list'])
      },
      error: (error:any) => {
        console.log(error.error)
        this.errors = error.error
      }
    })
  }

  onCancel(){
    this.router.navigate(['/expenses-list'], {relativeTo: this.route});
  }

}
