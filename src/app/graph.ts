import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import type { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  template: `
    <canvas
      baseChart
      [data]="barChartData"
      [type]="barChartType"
      [options]="barChartOptions">
    </canvas>
  `,
})
export class GraphComponent {
  barChartType: ChartType = 'bar';
  barChartOptions: ChartConfiguration['options'] = { responsive: true };
  barChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ data: [65, 59, 80], label: 'Sales' }]
  };
}
