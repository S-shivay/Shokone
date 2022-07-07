import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexternaluserComponent } from './updateexternaluser.component';

describe('UpdateexternaluserComponent', () => {
  let component: UpdateexternaluserComponent;
  let fixture: ComponentFixture<UpdateexternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateexternaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateexternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
