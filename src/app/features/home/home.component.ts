import { Component, NgModule, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
// import { ExpenseComponent } from '../../components/expense/expense.component';
// import { FilterByMonthPipe } from '../../pipes/month-filter.pipe';
// import { FormsModule } from '@angular/forms';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  expensesByCategory: any[];
  expensesByCategoryAndMonth: any [];
  selectedMonth: string = 'April';
  // filteredExpenses: any[];
  totalAmount: number;
  sortProperty: any = '';
  isAscending: boolean = true;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {

      this.expenseService.getExpensesByCategory().subscribe(data => {
        this.expensesByCategory = data;
        console.log(data)
      });

      this.getTotalAmount();

      this.expenseService.getExpensesByCategory().subscribe((data: any) => {
        const labels = data.map((item: any) => item.category)
        const amounts = data.map((item: any) => item.total_amount)
        const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
        const pieChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: amounts,
              backgroundColor: this.getRandomColors(amounts.length),
            }],
          },
        });
      });

      // this.expenseService.getExpensesByCategoryAndMonth().subscribe(data => {
      //   this.expensesByCategoryAndMonth = data;
      //   console.log(data)

      //   this.filteredExpenses = this.expensesByCategoryAndMonth.filter(expense => expense.month === this.selectedMonth);

      // });
    }
    getTotalAmount() {
      this.expenseService.getTotalAmount().subscribe((data:any) => {
        this.totalAmount = data.total_amount;
      });
    }

    getRandomColors (count: number): string[] {
      const colors = [];
      for (let i = 0; i < count; i++) {
        colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
      }
      return colors;
    }

    sortData(property: any) {
      if (this.sortProperty === property) {
        this.isAscending = !this.isAscending;
      } else {
        this.sortProperty = property;
        this.isAscending = true;
      }
      this.expensesByCategory.sort((a, b) => {
        return this.isAscending ? (a[property] > b[property] ? 1: -1) : (b[property] > a[property] ? 1 : -1);
        });
    }
    }

  // fetchExpensesByCategory() {
  //   this.expenseService.getExpensesByCategory().subscribe(data => {
  //     this.expensesByCategory = data;
  //     console.log(data)
  //   });
  // }




  // filterExpenses() {

  //   const totalExpenses = 0;

  //   this.expenseService.getMyExpenses().subscribe({
  //     next: (expenses: Expense[]) => {
  //       this.expenses = expenses;
  //       this.filteredExpenses = this.expenses.filter(expense => expense.date === this.selectedMonth && expense.category_id === this.selectedCategory);

  //       this.totalExpenses = this.expenseService.calculateTotalExpenses(this.filteredExpenses)
  //     },
  //     error: (error:any) => {
  //       console.error('Error fetching expenses', error);
  //     },
  //   })

  // }

  // this.expenses = expenses.filter(e => e.category_id === this.selectedCategory);
  // this.expenses = expenses.filter(e => e.category.id === this.selectedCategory || e.date === this.selectedMonth);

  // const totalExpenses = 0;
  // calculateTotalExpenses(this.expenses)

// }
