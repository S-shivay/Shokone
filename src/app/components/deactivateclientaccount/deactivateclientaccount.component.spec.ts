import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateclientaccountComponent } from './deactivateclientaccount.component';

describe('DeactivateclientaccountComponent', () => {
  let component: DeactivateclientaccountComponent;
  let fixture: ComponentFixture<DeactivateclientaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateclientaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateclientaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
