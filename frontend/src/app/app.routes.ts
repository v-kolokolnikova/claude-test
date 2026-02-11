import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'histoire', loadComponent: () => import('./pages/history/history.component').then(m => m.HistoryComponent) },
  { path: 'metiers', loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent) },
  { path: 'inscription', loadComponent: () => import('./pages/workshop/workshop.component').then(m => m.WorkshopComponent) },
  { path: 'actualites', loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent) },
  { path: 'formations', loadComponent: () => import('./pages/training/training.component').then(m => m.TrainingComponent) },
  { path: '**', redirectTo: '' }
];
