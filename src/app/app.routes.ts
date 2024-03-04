import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';

export const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/home/home.component").then ((c) => c.HomeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'expense-list',
    loadComponent: () => import("./features/expense-list/expense-list.component").then ((c) => c.ExpenseListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'expense-new',
    loadComponent: () => import("./features/expense-new/expense-new.component").then ((c) => c.ExpenseNewComponent),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import("./features/login/login.component").then ((c) => c.LoginComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: 'signup',
    loadComponent: () => import("./features/signup/signup.component").then ((c) => c.SignupComponent),
    canActivate: [noAuthGuard]
  }
];
