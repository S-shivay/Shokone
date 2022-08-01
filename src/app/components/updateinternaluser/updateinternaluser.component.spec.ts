import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinternaluserComponent } from './updateinternaluser.component';

describe('UpdateinternaluserComponent', () => {
  let component: UpdateinternaluserComponent;
  let fixture: ComponentFixture<UpdateinternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateinternaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
