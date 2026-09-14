import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { OrderStatus } from './order-status';

describe('OrderStatus', () => {
  let component: OrderStatus;
  let fixture: ComponentFixture<OrderStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStatus],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
