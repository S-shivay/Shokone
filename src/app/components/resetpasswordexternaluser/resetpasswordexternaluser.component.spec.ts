import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordexternaluserComponent } from './resetpasswordexternaluser.component';

describe('ResetpasswordexternaluserComponent', () => {
  let component: ResetpasswordexternaluserComponent;
  let fixture: ComponentFixture<ResetpasswordexternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordexternaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordexternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
