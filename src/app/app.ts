import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend-pedidos');

  isCollapsed = false;
  isPedidosOpen = true;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  togglePedidosMenu(): void {
    this.isPedidosOpen = !this.isPedidosOpen;
  }
}
