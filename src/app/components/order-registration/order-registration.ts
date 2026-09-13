import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-registration',
  templateUrl: './order-registration.html',
  styleUrl: './order-registration.scss',
  imports: [ReactiveFormsModule],
})
export class OrderRegistration {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  private toastTimeoutId: number | null = null;

  toastMessage = signal<string | null>(null);
  toastType = signal<'success' | 'error'>('success');

  orderForm = this.formBuilder.group({
    pedido: [null, Validators.required],
    item: ['', Validators.required],
    quantidade: [null, Validators.required],
  });

  private showToast(message: string, type: 'success' | 'error' = 'success'): void {
    if (this.toastTimeoutId !== null) {
      window.clearTimeout(this.toastTimeoutId);
    }

    this.toastMessage.set(message);
    this.toastType.set(type);

    this.toastTimeoutId = window.setTimeout(() => {
      this.toastMessage.set(null);
      this.toastTimeoutId = null;
    }, 1000);
  }

  cadastrarPedido(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const pedidoData = this.orderForm.getRawValue();

    this.http
      .post('http://localhost:8080/pedidos/cadastro', pedidoData, { responseType: 'text' })
      .subscribe({
        next: (data) => {
          console.log('Resposta da API:', data);

          this.showToast('Pedido cadastrado com sucesso!', 'success');

          this.orderForm.reset();
        },

        error: (error) => {
          console.error('Erro ao cadastrar pedido:', error);

          this.showToast('Erro ao cadastrar pedido.', 'error');
        },
      });
  }
}
