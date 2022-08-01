import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclientaccountComponent } from './addclientaccount.component';

describe('AddclientaccountComponent', () => {
  let component: AddclientaccountComponent;
  let fixture: ComponentFixture<AddclientaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddclientaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclientaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
