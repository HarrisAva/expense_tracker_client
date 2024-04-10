import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  expensesByCategory: any[];
  expensesByCategoryAndMonth: any[];
  selectedMonth: string = 'April';
  totalAmount: number;
  sortProperty: any = '';
  isAscending: boolean = true;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getExpensesByCategory().subscribe((data) => {
      this.expensesByCategory = data;
      console.log(data);
    });

    this.getTotalAmount();
    this.displayPieChart();
  }

  getTotalAmount() {
    this.expenseService.getTotalAmount().subscribe((data: any) => {
      this.totalAmount = data.total_amount;
    });
  }

  displayPieChart() {
    this.expenseService.getExpensesByCategory().subscribe((data: any) => {
      const labels = data.map((item: any) => item.category);
      const amounts = data.map((item: any) => item.total_amount);
      const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
      const pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              data: amounts,
              backgroundColor: this.getRandomColors(amounts.length),
            },
          ],
        },
      });
    });
  }

  getRandomColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
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
      return this.isAscending
        ? a[property] > b[property]
          ? 1
          : -1
        : b[property] > a[property]
        ? 1
        : -1;
    });
  }
}
