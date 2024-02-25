import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/home/home.component").then ((c) => c.HomeComponent)
  },
  {
    path: 'expenses',
    loadComponent: () => import("./features/expense-list/expense-list.component").then ((c) => c.ExpenseListComponent)
  }
];
