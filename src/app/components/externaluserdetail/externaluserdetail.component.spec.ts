import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternaluserdetailComponent } from './externaluserdetail.component';

describe('ExternaluserdetailComponent', () => {
  let component: ExternaluserdetailComponent;
  let fixture: ComponentFixture<ExternaluserdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternaluserdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternaluserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
