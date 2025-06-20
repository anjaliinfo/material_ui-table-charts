import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AppComponent } from './app/app';
import { DashboardComponent } from './app/dashboard';
import { GraphComponent } from './app/graph';

const routes: Routes = [
 // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'graph', component: GraphComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideCharts(withDefaultRegisterables()) // ✅ just this — no wrapping
  ]
});
