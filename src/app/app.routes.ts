import { Routes } from '@angular/router';
import { OrderRegistration } from './components/order-registration/order-registration';
import { OrderReport } from './components/order-report/order-report';
import { OrderStatus } from './components/order-status/order-status';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/order-registration',
    pathMatch: 'full'
  },
  {
    path: 'order-registration',
    component: OrderRegistration
  },
  {
    path: 'order-report',
    component: OrderReport
  },
  {
    path: 'order-status',
    component: OrderStatus
  }
];
