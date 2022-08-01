import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclientaccountComponent } from './viewclientaccount.component';

describe('ViewclientaccountComponent', () => {
  let component: ViewclientaccountComponent;
  let fixture: ComponentFixture<ViewclientaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewclientaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewclientaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
