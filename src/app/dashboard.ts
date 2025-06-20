import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  template: `
    <div class="dashboard-content">
      <mat-card *ngFor="let card of cards">
        <mat-card-title>{{ card.title }}</mat-card-title>
        <mat-card-content>{{ card.content }}</mat-card-content>
      </mat-card>
    </div>

    <div class="table-section">
      <mat-form-field appearance="outline">
        <mat-label>Filter</mat-label>
        <input matInput [(ngModel)]="filterText" placeholder="Search by name or role" />
      </mat-form-field>

      <table mat-table [dataSource]="filteredData()" class="mat-elevation-z2 full-width-table">

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let row">{{ row.name }}</td>
        </ng-container>

        <!-- Role Column -->
        <ng-container matColumnDef="role">
          <th mat-header-cell *matHeaderCellDef>Role</th>
          <td mat-cell *matCellDef="let row">{{ row.role }}</td>
        </ng-container>

        <!-- Status Column -->
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let row">{{ row.status }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="columns"></tr>
        <tr mat-row *matRowDef="let row; columns: columns"></tr>
      </table>
    </div>
  `,
  styles: [`
    .dashboard-content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
      padding: 16px;
    }

    .table-section {
      padding: 24px;
    }

    .full-width-table {
      width: 100%;
      margin-top: 16px;
    }

    mat-form-field {
      width: 300px;
    }
  `]
})
export class DashboardComponent {
  cards = [
    { title: 'Users', content: '25 active users' },
    { title: 'Revenue', content: '$5,000 this month' },
    { title: 'Tasks', content: '12 pending tasks' },
    { title: 'Alerts', content: '2 new alerts' },
  ];

  filterText = '';

  columns = ['name', 'role', 'status'];
  data = [
    { name: 'Alice', role: 'Admin', status: 'Active' },
    { name: 'Bob', role: 'User', status: 'Inactive' },
    { name: 'Charlie', role: 'Moderator', status: 'Active' },
    { name: 'Dana', role: 'User', status: 'Pending' },
  ];

  filteredData() {
    const filter = this.filterText.toLowerCase();
    return this.data.filter(user =>
      user.name.toLowerCase().includes(filter) ||
      user.role.toLowerCase().includes(filter)
    );
  }
}
