import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expense-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense-edit.component.html',
  styleUrl: './expense-edit.component.scss'
})
export class ExpenseEditComponent{
  id: number;
  expenseEditForm: FormGroup;
  expense: Expense;
  errors: string[] = []

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private router: Router,
    private fb: FormBuilder // **
  ){}

  ngOnInit() {

    this.expenseEditForm = this.fb.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      amount: ['', Validators.required],
      description: [''],
      category_id: ['', Validators.required],
    })

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.expenseService.getExpense(this.id).subscribe((expense)=> {
          this.expense = expense;
          this.expenseEditForm.patchValue({
            date: this.expense.date,
            title: this.expense.title,
            amount: this.expense.amount,
            description: this.expense.description,
            category_id: this.expense.category_id

          });
        });

      }
    );
  }

  onSubmit() {
    const updatedExpenseData = this.expenseEditForm.value;

    this.expenseService.updateExpense(this.id, updatedExpenseData).subscribe((res) =>{
      console.log('Expense update successfully', res)
      this.router.navigate(['/expense-list'])
    });

  }

  onCancel(){
    this.router.navigate(['/expense-list'], {relativeTo: this.route});
  }

  }
