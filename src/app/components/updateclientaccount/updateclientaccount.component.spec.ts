import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclientaccountComponent } from './updateclientaccount.component';

describe('UpdateclientaccountComponent', () => {
  let component: UpdateclientaccountComponent;
  let fixture: ComponentFixture<UpdateclientaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateclientaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateclientaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
