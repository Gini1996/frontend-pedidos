import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface PedidoResumo {
  pedido: number;
  item: string;
  quantidade: number;
}

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.html',
  styleUrl: './order-status.scss',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderStatus {
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly consultaForm = this.formBuilder.group({
    numeroPedido: ['', Validators.pattern('^[0-9]*$')],
  });

  readonly resultados = signal<PedidoResumo[]>([]);
  readonly pageSize = signal<number>(10);
  readonly currentPage = signal<number>(1);

  readonly totalPaginas = computed(() => {
    const total = this.resultados().length;
    const size = this.pageSize();
    return total === 0 ? 1 : Math.max(1, Math.ceil(total / size));
  });

  readonly pedidosPaginados = computed(() => {
    const items = this.resultados();
    const size = this.pageSize();
    const page = this.currentPage();
    const start = (page - 1) * size;
    return items.slice(start, start + size);
  });

  consultarPedidos(): void {
    this.currentPage.set(1);

    const numeroPedido = this.consultaForm.get('numeroPedido')?.value;
    const pedidoParam = String(numeroPedido ?? '').trim();

    const request$ =
      pedidoParam === ''
        ? this.http.get<PedidoResumo[]>('http://localhost:8080/pedidos')
        : this.http.get<PedidoResumo[]>(`http://localhost:8080/pedidos/${pedidoParam}`);

    request$.subscribe({
      next: (pedidos) => {
        const listaOrdenada = this.ordenarPedidos(pedidos ?? []);
        this.resultados.set(listaOrdenada);
        this.currentPage.set(Math.min(this.currentPage(), this.totalPaginas()));
      },
      error: () => {
        this.resultados.set([]);
        this.currentPage.set(1);
      },
    });
  }

  alterarTamanhoPagina(valor: string): void {
    const tamanho = Number(valor);
    const pageSize = Number.isFinite(tamanho) && tamanho > 0 ? Math.trunc(tamanho) : 10;

    this.pageSize.set(pageSize);
    this.currentPage.set(1);
  }

  paginaAnterior(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((pagina) => pagina - 1);
    }
  }

  proximaPagina(): void {
    const totalPaginas = this.totalPaginas();
    if (this.currentPage() < totalPaginas) {
      this.currentPage.update((pagina) => pagina + 1);
    }
  }

  private ordenarPedidos(pedidos: PedidoResumo[]): PedidoResumo[] {
    return [...pedidos].sort((a, b) => {
      if (a.pedido !== b.pedido) {
        return a.pedido - b.pedido;
      }

      if (a.item.localeCompare(b.item) !== 0) {
        return a.item.localeCompare(b.item);
      }

      return a.quantidade - b.quantidade;
    });
  }
}
