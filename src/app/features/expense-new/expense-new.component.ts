import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense-new.component.html',
  styleUrl: './expense-new.component.scss'
})
export class ExpenseNewComponent {

  expenseNewForm:FormGroup = new FormGroup({
    date: new FormControl (''),
    title: new FormControl (''),
    description: new FormControl (''),
    amount: new FormControl (''),
    category_id: new FormControl (''),
  })

  errors: string[] = []

  constructor(private authService:AuthenticationService, private router:Router, private expenseService:ExpenseService) {}

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
