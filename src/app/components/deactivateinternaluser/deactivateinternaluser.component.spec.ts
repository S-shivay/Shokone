import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateinternaluserComponent } from './deactivateinternaluser.component';

describe('DeactivateinternaluserComponent', () => {
  let component: DeactivateinternaluserComponent;
  let fixture: ComponentFixture<DeactivateinternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateinternaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateinternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
