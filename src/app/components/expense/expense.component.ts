import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { CategoryComponent } from '../category/category.component';
import { Category } from '../../models/category';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { CategoryService } from '../../services/category.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CategoryComponent, RouterLink, RouterModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent{


  // @Input({required:true}) expense:Expense;
   @Input({required:true}) expense:Expense = new Expense({});
   @Input() category:Category;
   @Input() index: number;



  //  categories: Category;
  //  errors: string[] = []


  //  constructor(
  //   private categoryService: CategoryService,
  //      ) {}

    // ngOnInit(){

  //   this.categoryService.getCategories().subscribe({
  //     next:(categories:Category) => {
  //       this.categories = categories;
  //       console.log(categories)
  //     },
  //     error: (error) => {
  //       console.log('Error fetching categories',error)
  //     }
  //   })

  //  }

  }

