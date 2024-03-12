import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';

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

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private router: Router
  ){}

  // ngOnInit() {
  //   this.route.params.subscribe(
  //     (params: Params) => {
  //       this.id = +params['id'];
  //       // this.initForm();
  //     }
  //   );
  // }

  onSubmit() {
    this.expenseService.updateExpense(this.expenseEditForm.value);
    this.router.navigate(['/expense-list'])
  }

  onCancel(){
    this.router.navigate(['/expense-list'], {relativeTo: this.route});
  }

  // private initForm(){
  //   let date = '';
  //   let title = '';
  //   let amount = '';
  //   let description = '';
  //   let category_id = '';


      // const expense = this.expenseService.getExpense(this.id);
      // this.date = expense.date;
      // title = expense.title;
      // amount = expense.amount;
      // description = expense.description;
      // category_id = expense.category_id;
    }




