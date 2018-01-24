import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';

const APP_ROUTES: Routes = [
  { path: 'dashboard', component : DashboardComponent },
  { path: 'news', component : NewsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
