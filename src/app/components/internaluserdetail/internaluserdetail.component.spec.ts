import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaluserdetailComponent } from './internaluserdetail.component';

describe('InternaluserdetailComponent', () => {
  let component: InternaluserdetailComponent;
  let fixture: ComponentFixture<InternaluserdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaluserdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaluserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
