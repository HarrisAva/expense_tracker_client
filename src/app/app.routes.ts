import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'expenses-list',
    loadComponent: () =>
      import('./features/expenses-list/expenses-list.component').then(
        (c) => c.ExpensesListComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'expense-edit/:id',
    loadComponent: () =>
      import('./features/expense-edit/expense-edit.component').then(
        (c) => c.ExpenseEditComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'expenses/new',
    loadComponent: () =>
      import('./features/expense-new/expense-new.component').then(
        (c) => c.ExpenseNewComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((c) => c.LoginComponent),
    canActivate: [noAuthGuard],
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
    canActivate: [noAuthGuard],
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./components/category/category.component').then(
        (c) => c.CategoryComponent
      ),
    canActivate: [authGuard],
  },
];
