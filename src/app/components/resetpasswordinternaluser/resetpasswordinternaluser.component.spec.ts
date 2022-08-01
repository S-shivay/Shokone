import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordinternaluserComponent } from './resetpasswordinternaluser.component';

describe('ResetpasswordinternaluserComponent', () => {
  let component: ResetpasswordinternaluserComponent;
  let fixture: ComponentFixture<ResetpasswordinternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordinternaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordinternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
