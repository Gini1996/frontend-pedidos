import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRegistration } from './order-registration';

describe('OrderRegistration', () => {
  let component: OrderRegistration;
  let fixture: ComponentFixture<OrderRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRegistration],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
