import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateexternaluserComponent } from './deactivateexternaluser.component';

describe('DeactivateexternaluserComponent', () => {
  let component: DeactivateexternaluserComponent;
  let fixture: ComponentFixture<DeactivateexternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateexternaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateexternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
